"use client";
import { motion, type Easing } from "framer-motion";

const waveKeyframes = {
  rotate: [0, 20, -8, 20, -4, 12, 0],
  transition: { duration: 1.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" as Easing },
};

const demoAvatars = [
  { seed: "Sam",  bg: "bg-violet-400", label: "Sam",  delay: 0    },
  { seed: "Mia",  bg: "bg-pink-400",   label: "Mia",  delay: 0.4  },
];

export default function BookDemo() {
  return (
    <section id="book-demo" className="relative py-24 bg-white overflow-hidden">

      {/* Top-left avatar — Sam */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
        className="absolute top-8 left-6 sm:left-12 flex flex-col items-center gap-1.5 z-10 animate-float"
      >
        <motion.span
          animate={waveKeyframes}
          style={{ display: "inline-block", transformOrigin: "70% 80%" }}
          className="text-2xl mb-0.5"
        >
          👋
        </motion.span>
        <div className="w-14 h-14 bg-violet-400 rounded-2xl overflow-hidden shadow-lg border-2 border-violet-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Sam&backgroundColor=transparent" alt="Sam" width={56} height={56} className="w-full h-full object-cover scale-110" />
        </div>
        <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 shadow-sm">
          <svg width="8" height="10" viewBox="0 0 10 12" fill="none" className="text-violet-500 shrink-0">
            <path d="M0 0L0 9L2.5 7L4 10.5L5 10L3.5 6.5L6.5 6.5Z" fill="currentColor"/>
          </svg>
          <span className="text-[10px] font-bold text-gray-600">Sam</span>
        </div>
      </motion.div>

      {/* Bottom-right avatar — Mia */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, type: "spring", bounce: 0.4 }}
        className="absolute bottom-8 right-6 sm:right-12 flex flex-col items-center gap-1.5 z-10 animate-float2"
      >
        <motion.span
          animate={{ ...waveKeyframes, transition: { ...waveKeyframes.transition, repeatDelay: 3.2 } }}
          style={{ display: "inline-block", transformOrigin: "70% 80%" }}
          className="text-2xl mb-0.5"
        >
          👋
        </motion.span>
        <div className="w-14 h-14 bg-pink-400 rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Mia&backgroundColor=transparent" alt="Mia" width={56} height={56} className="w-full h-full object-cover scale-110" />
        </div>
        <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 shadow-sm">
          <svg width="8" height="10" viewBox="0 0 10 12" fill="none" className="text-violet-500 shrink-0">
            <path d="M0 0L0 9L2.5 7L4 10.5L5 10L3.5 6.5L6.5 6.5Z" fill="currentColor"/>
          </svg>
          <span className="text-[10px] font-bold text-gray-600">Mia</span>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-violet-500 font-semibold mb-3">
            Get started today
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f0e1a] leading-tight">
            Book a free demo.
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">
            See Vesperyn in action — we&apos;ll walk you through automating your first workflow live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
        >
          <iframe
            src="https://calendly.com/rahulrajwwe2/30min"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a demo with Vesperyn"
          />
        </motion.div>
      </div>

    </section>
  );
}
