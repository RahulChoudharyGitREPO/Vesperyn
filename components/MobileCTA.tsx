"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-6 pt-3 bg-white/80 backdrop-blur-xl border-t border-gray-100"
        >
          <a
            href="#book-demo"
            className="shimmer-btn flex items-center justify-center gap-2 w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl text-sm shadow-lg shadow-violet-300/40 transition-colors"
          >
            Start free — no credit card
            <span className="text-base">→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
