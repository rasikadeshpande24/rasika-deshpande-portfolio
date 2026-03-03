"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter } from "./hooks/useTypewriter";

interface Props {
  message: {
    text: string;
    x: number;
    y: number;
  } | null;
}

export function BubbleMessage({ message }: Props) {
  const { displayed } = useTypewriter(message?.text ?? "", 35);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -30 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            left: message.x,
            top: message.y,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
          className="
            max-w-[70vw]
            px-5 py-2
            rounded-xl
            text-sm md:text-base
            text-indigo-900
            bg-white/95
            backdrop-blur-lg
            border border-indigo-200
            shadow-xl
            pointer-events-none
            font-medium
            break-words
            "
        >
          {displayed}
        </motion.div>
      )}
    </AnimatePresence>
  );
}