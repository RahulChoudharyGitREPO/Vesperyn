"use client";
import { motion } from "framer-motion";
import { SiHubspot, SiSlack, SiGooglesheets } from "react-icons/si";

/* Card 1 — Describe your task */
function DescribeCard() {
  const suggestions = ["Summarize leads daily", "Auto-reply emails", "Track competitor prices"];
  return (
    <div className="h-48 sm:h-52 bg-[#ece9f8] rounded-2xl flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-violet-600 rounded-lg flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L7 2L12 7L7 12L2 7Z" fill="white"/>
            </svg>
          </div>
          <span className="text-[11px] font-bold text-violet-700">Vesperyn Agent Builder</span>
        </div>

        {/* Suggestion chips */}
        <div className="flex flex-wrap gap-1.5">
          {suggestions.map((s, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.4 }}
              className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border whitespace-nowrap ${
                i === 0
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white/80 text-gray-500 border-white"
              }`}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Prompt input */}
      <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm">
        <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
          <svg width="8" height="10" viewBox="0 0 10 12" fill="none">
            <path d="M5 0a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0V2a2 2 0 0 1 2-2zm-3.5 7h1a3.5 3.5 0 0 0 5 0h1a4.5 4.5 0 0 1-7 0z" fill="white"/>
          </svg>
        </div>
        <span className="text-[11px] text-gray-600 font-medium flex-1 min-w-0 truncate">
          Summarize new leads every morning
        </span>
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-0.5 h-3.5 bg-violet-500 rounded-full shrink-0"
        />
      </div>
    </div>
  );
}

/* Card 2 — Vesperyn builds it */
function BuildsCard() {
  const apps = [
    { Icon: SiHubspot,      bg: "bg-orange-500" },
    { Icon: SiSlack,        bg: "bg-purple-500" },
    { Icon: SiGooglesheets, bg: "bg-green-500"  },
  ];

  return (
    <div className="h-48 sm:h-52 bg-linear-to-br from-violet-500 to-violet-700 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden p-4">
      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4 z-10 relative">
        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
          <div className="w-4 h-4 bg-violet-600 rounded-sm" />
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <svg width="240" height="80" viewBox="0 0 240 80" className="absolute -top-14">
          <line x1="120" y1="20" x2="40"  y2="60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" className="animate-dash" />
          <line x1="120" y1="20" x2="120" y2="60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" className="animate-dash" />
          <line x1="120" y1="20" x2="200" y2="60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" className="animate-dash" />
        </svg>
        <div className="flex gap-6 sm:gap-8 mt-6">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 }}
              className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
            >
              <div className={`w-6 h-6 sm:w-7 sm:h-7 ${app.bg} rounded-lg flex items-center justify-center`}>
                <app.Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Card 3 — Run & refine: live agent execution log */
const agentSteps = [
  { done: true,  label: "Connected HubSpot CRM"  },
  { done: true,  label: "Fetched 24 new leads"    },
  { done: true,  label: "AI summary generated"    },
  { done: false, label: "Sending to Slack..."     },
];

function RefineCard() {
  return (
    <div className="h-48 sm:h-52 bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Agent running</span>
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          />
          <span className="text-[10px] text-green-600 font-semibold">Live</span>
        </div>
      </div>

      {/* Execution steps */}
      <div className="flex flex-col gap-2 flex-1">
        {agentSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${step.done ? "bg-green-500" : "bg-violet-100 border border-violet-300"}`}>
              {step.done ? (
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-violet-500"
                />
              )}
            </div>
            <span className={`text-[11px] font-medium ${step.done ? "text-gray-400 line-through decoration-gray-300" : "text-violet-700 font-semibold"}`}>
              {step.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "75%" }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="h-full bg-linear-to-r from-violet-500 to-blue-500 rounded-full"
        />
      </div>
      <p className="text-[10px] text-gray-400 mt-1 text-right">3 of 4 steps complete</p>
    </div>
  );
}

const steps = [
  { number: 1, title: "Describe your task",  sub: "Just tell Vesperyn what you need — in plain English.",     card: <DescribeCard /> },
  { number: 2, title: "Vesperyn builds it",  sub: "Connects your tools, maps the logic, builds the flow.",    card: <BuildsCard />  },
  { number: 3, title: "Run & refine",        sub: "Watch agents execute live. Adjust anytime — no code.",    card: <RefineCard />  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8fa] dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f0e1a] text-center mb-10 md:mb-14"
        >
          From words to<br />working intelligence.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col gap-4"
            >
              {s.card}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                  {s.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0f0e1a]">{s.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{s.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-violet-300 hover:text-violet-600 transition-all bg-white shadow-sm">
            See how it works ↗
          </a>
        </div>
      </div>
    </section>
  );
}
