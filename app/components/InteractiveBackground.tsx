"use client";

import React, { useEffect, useRef, useState } from "react";
import { BubbleMessage } from "./BubbleMessage";
import { bubbleMessages } from "../utils/BubbleMessagesText";

interface Bubble {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  phase: number;
  popping: boolean;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number }>>([]);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const messageTimerRef = useRef<number | null>(null);
  const [hoverBubble, setHoverBubble] = useState<{ x: number; y: number } | null>(null);
  const [activeMessage, setActiveMessage] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = rect.width || window.innerWidth;
      const h = rect.height || window.innerHeight;
      sizeRef.current = { width: w, height: h, dpr };
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const createBubbles = (count: number) => {
    const w = sizeRef.current.width || canvas.getBoundingClientRect().width;
    const h = sizeRef.current.height || canvas.getBoundingClientRect().height;

    const centerX = w / 2;
    const centerY = h / 2;

    const exclusionRadius = Math.min(w, h) * 0.55;

    const bubbles: Bubble[] = [];

      const MAX_ATTEMPTS = 5000;
      let attempts = 0;

      while (bubbles.length < count && attempts < MAX_ATTEMPTS) {
        attempts++;

        const radius = Math.random() * 22 + 10;
        const x = Math.random() * w;
        const y = Math.random() * h;

        const dx = x - centerX;
        const dy = y - centerY;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

        // Skip if inside center exclusion zone
        if (distanceFromCenter < exclusionRadius) continue;

        // Check overlap with existing bubbles
        let overlaps = false;

        for (const b of bubbles) {
          const distX = x - b.x;
          const distY = y - b.y;
          const dist = Math.sqrt(distX * distX + distY * distY);

          if (dist < radius + b.radius + 8) {
            overlaps = true;
            break;
          }
        }

        if (overlaps) continue;

        bubbles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius,
          phase: Math.random() * Math.PI * 2,
          popping: false,
        });
      }

      bubblesRef.current = bubbles;
    };
    createBubbles(window.innerWidth < 1024 ? 15 : 25);
    // Debug: log initial sizing and bubble count
    console.log('InteractiveBackground mounted. size:', sizeRef.current, 'bubbles:', bubblesRef.current.length);

    const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
    const audioCtx = AudioCtx ? new AudioCtx() : null;
    const playPop = () => {
      if (!audioCtx) return;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(800 + Math.random() * 300, audioCtx.currentTime);
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.001);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      o.stop(audioCtx.currentTime + 0.35);
    };

    const triggerPop = (bubble: Bubble) => {
      if (isLocked) return;

      setIsLocked(true);

      // mark bubble as popping
      bubble.popping = true;

      // play pop sound
      playPop();

      // pick random message
      const random =
        bubbleMessages[Math.floor(Math.random() * bubbleMessages.length)];

      const w = sizeRef.current.width;
      const h = sizeRef.current.height;

      // clamp position so message never goes off-screen
      const safeX = Math.max(140, Math.min(bubble.x, w - 140));
      const safeY = Math.max(80, Math.min(bubble.y, h - 80));

      // clear previous timer if exists
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }

      // show message
      setActiveMessage({
        text: random,
        x: safeX,
        y: safeY,
      });

      // hide after exactly 2.5 seconds
      messageTimerRef.current = window.setTimeout(() => {
        setActiveMessage(null);
        messageTimerRef.current = null;
      }, 2500);

      // unlock popping after short delay
      setTimeout(() => {
        setIsLocked(false);
      }, 800);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (const b of bubblesRef.current) {
        const dx = mouseX - b.x;
        const dy = mouseY - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= b.radius) {
          triggerPop(b);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let hovering: Bubble | null = null;

      for (const b of bubblesRef.current) {
        const dx = mouseX - b.x;
        const dy = mouseY - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= b.radius) {
          hovering = b;
          break;
        }
      }

      if (hovering) {
        document.body.style.cursor = "pointer";
        setHoverBubble({ x: hovering.x, y: hovering.y - hovering.radius - 12 });
      } else {
        document.body.style.cursor = "default";
        setHoverBubble(null);
      }
    };

    canvas.style.pointerEvents = "auto";
    canvas.addEventListener("click", handleClick);
    // Fallback: listen on pointerdown at window level so clicks register even when
    // other elements sit above canvas or pointer events are intercepted.
    window.addEventListener("pointerdown", handleClick as EventListener);
    window.addEventListener("mousemove", handleMouseMove);

    let raf = 0;
    const animate = () => {
      const w = Math.max(1, sizeRef.current.width || canvas.getBoundingClientRect().width || window.innerWidth);
      const h = Math.max(1, sizeRef.current.height || canvas.getBoundingClientRect().height || window.innerHeight);
      ctx.clearRect(0, 0, w, h);

      for (let i = bubblesRef.current.length - 1; i >= 0; i--) {
        const b = bubblesRef.current[i];

        // Floating motion (no travel)
        b.phase += 0.01;
        b.x = b.baseX + Math.cos(b.phase) * 6;
        b.y = b.baseY + Math.sin(b.phase) * 8;

        // Handle popping
        if (b.popping) {
          b.radius *= 0.88;

          if (b.radius < 2) {
            bubblesRef.current.splice(i, 1);
            continue;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = "rgba(79,70,229,0.18)";
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(79,70,229,0.08)";
        ctx.lineWidth = Math.max(1, Math.min(2, b.radius * 0.03));
        ctx.stroke();

        const g = ctx.createRadialGradient(
          b.x - b.radius * 0.3,
          b.y - b.radius * 0.3,
          0,
          b.x,
          b.y,
          b.radius
        );
        g.addColorStop(0, "rgba(79,70,229,0.36)");
        g.addColorStop(1, "rgba(79,70,229,0)");
        ctx.fillStyle = g;
        ctx.fill();
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.life -= 1;
        const alpha = Math.max(0, Math.min(1, p.life / 80));
        // make the main burst particles brighter
        ctx.fillStyle = `rgba(99,102,241,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 + (1 - alpha) * 2, 0, Math.PI * 2);
        ctx.fill();
        if (p.life <= 0) particlesRef.current.splice(i, 1);
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("pointerdown", handleClick as EventListener);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "default";
      cancelAnimationFrame(raf);
      if (audioCtx && audioCtx.close) audioCtx.close();
    };
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 15 }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "auto", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 20 }}>
        <BubbleMessage message={activeMessage} />
      </div>
      {hoverBubble && (
        <div
          style={{
            position: "absolute",
            left: hoverBubble.x,
            top: hoverBubble.y,
            transform: "translate(-50%, -100%)",
            pointerEvents: "none",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(6px)",
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 500,
            color: "#8982ea",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
          }}
        >
          Pop me!
        </div>
      )}
    </div>
  );
}

