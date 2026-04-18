"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col items-center gap-5"
          >
            {/* Logo mark */}
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-violet-300"
            >
              <svg width="32" height="32" viewBox="0 0 14 14" fill="none">
                <path d="M2 7L7 2L12 7L7 12L2 7Z" fill="white"/>
              </svg>
            </motion.div>

            {/* Wordmark */}
            <span className="text-2xl font-black text-[#0f0e1a] tracking-tight">
              vesperyn<span className="text-violet-600">.ai</span>
            </span>

            {/* Progress bar */}
            <div className="w-36 h-[3px] bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-violet-600 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
