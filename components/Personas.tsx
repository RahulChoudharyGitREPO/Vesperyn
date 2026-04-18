"use client";
import { motion } from "framer-motion";

const tickerItems = [
  "The Problem-Solver who connects dots under pressure",
  "The Knowledge Seeker tired of manual lookups",
  "The Decision-Maker who needs answers, not noise",
  "The Multitasker juggling projects across tools",
  "The Communicator who turns updates into action",
  "The Go-Getter who never misses deadlines",
  "The New Joiner who wants clarity from day one",
];

const floatingUsers = [
  {
    name: "Anya",
    seed: "Anya",
    bg: "bg-orange-400",
    pos: "top-4 left-3 sm:top-6 sm:left-6 lg:top-8 lg:left-12",
    anim: "animate-float",
  },
  {
    name: "Raj",
    seed: "Raj",
    bg: "bg-pink-500",
    pos: "bottom-10 left-3 sm:bottom-14 sm:left-6 lg:bottom-12 lg:left-16",
    anim: "animate-float2",
  },
  {
    name: "Ishita",
    seed: "Ishita",
    bg: "bg-teal-400",
    pos: "top-4 right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-12",
    anim: "animate-float3",
  },
  {
    name: "Nisha",
    seed: "Nisha",
    bg: "bg-yellow-400",
    pos: "bottom-10 right-3 sm:bottom-14 sm:right-6 lg:bottom-12 lg:right-16",
    anim: "animate-float",
  },
];

function AvatarBubble({ user }: { user: typeof floatingUsers[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
      className={`absolute ${user.pos} ${user.anim} z-10 flex flex-col items-center gap-1.5`}
    >
      {/* Avatar */}
      <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${user.bg} rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/30`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.seed}&backgroundColor=transparent`}
          alt={user.name}
          width={80}
          height={80}
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Name label */}
      <div className="flex items-center gap-1 sm:gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-lg border border-white/60">
        <svg width="8" height="10" viewBox="0 0 10 12" fill="none" className="text-violet-500 shrink-0">
          <path d="M0 0L0 9L2.5 7L4 10.5L5 10L3.5 6.5L6.5 6.5Z" fill="currentColor"/>
        </svg>
        <span className="text-[10px] sm:text-[12px] font-bold text-gray-800">{user.name}</span>
      </div>
    </motion.div>
  );
}

export default function Personas() {
  const doubled = [...tickerItems, ...tickerItems];
  const centralUrl = `https://api.dicebear.com/9.x/adventurer/svg?seed=Alex&backgroundColor=transparent`;

  return (
    <section className="relative py-20 md:py-28 purple-dot-grid overflow-hidden min-h-130">
      {/* Radial darkening at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,rgba(45,15,100,0.45)_100%)]" />

      {/* Corner avatars — all screen sizes */}
      {floatingUsers.map(u => <AvatarBubble key={u.name} user={u} />)}

      {/* Heading */}
      <div className="relative z-10 max-w-3xl mx-auto px-16 sm:px-24 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
        >
          Made for every modern team.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-violet-200 text-sm sm:text-base mb-10"
        >
          Whether you lead operations, marketing, or HR — Vesperyn adapts to how your business works.
        </motion.p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative overflow-hidden py-3 mb-10 md:mb-12">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
        <div className="relative flex whitespace-nowrap animate-ticker gap-0">
          {doubled.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2.5 px-6 shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="white" fillOpacity="0.2"/>
                <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-white/90 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Central avatar */}
      <div className="relative z-10 flex justify-center mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.35 }}
          className="relative"
        >
          <div className="absolute -inset-2.5 rounded-[2.5rem] border-2 border-white/15" />
          <div className="absolute -inset-5 rounded-[3rem] border border-white/10" />
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-4xl flex items-center justify-center shadow-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={centralUrl}
              alt="Central avatar"
              width={160}
              height={160}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-center">
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          href="#"
          className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 bg-white text-violet-700 font-bold rounded-full text-sm hover:bg-violet-50 transition-colors shadow-xl"
        >
          See use cases ↗
        </motion.a>
      </div>
    </section>
  );
}
