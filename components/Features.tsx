"use client";
import { motion } from "framer-motion";
import { SiGooglesheets, SiSlack, SiHubspot, SiZapier, SiNotion, SiGmail } from "react-icons/si";
import { BarChart2, GitMerge, Zap, CheckCircle2, FileText, BookOpen, Calendar, User, Smartphone, DollarSign, Lock } from "lucide-react";

/* ── Binary rows (static, no hydration mismatch) ─────────────────── */
const BIN_ROWS = [
  "1 0 1 1 0 0 1 0 1 1 1 0 0 1 0 1 0 1 1 0 0 1 1 0 1 0 1 1 0 1",
  "0 1 0 0 1 1 0 1 0 0 1 1 0 1 1 0 1 0 0 1 1 0 0 1 0 1 0 0 1 0",
  "1 1 0 1 0 1 1 0 0 1 0 1 1 0 0 1 1 0 1 1 0 1 0 0 1 1 0 1 0 1",
  "0 0 1 0 1 0 0 1 1 0 1 0 0 1 1 0 0 1 0 0 1 0 1 1 0 0 1 0 1 0",
  "1 0 0 1 1 0 1 1 0 0 1 1 0 1 0 1 0 0 1 1 0 1 1 0 0 1 0 1 1 0",
  "0 1 1 0 0 1 0 0 1 1 0 0 1 0 1 0 1 1 0 0 1 0 0 1 1 0 1 0 0 1",
  "1 1 0 0 1 0 1 0 1 0 1 1 0 0 1 1 0 1 0 1 0 1 1 0 1 0 0 1 1 0",
  "0 0 1 1 0 1 0 1 0 1 0 0 1 1 0 0 1 0 1 0 1 0 0 1 0 1 1 0 0 1",
  "1 0 1 0 0 1 1 0 1 0 1 0 1 0 0 1 0 1 1 0 1 0 1 0 1 1 0 0 1 0",
  "0 1 0 1 1 0 0 1 0 1 0 1 0 1 1 0 1 0 0 1 0 1 0 1 0 0 1 1 0 1",
  "1 0 0 1 0 1 1 0 1 1 0 1 0 0 1 0 1 1 0 1 1 0 0 1 1 0 1 0 1 0",
  "0 1 1 0 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 0 0 1 1 0 0 1 0 1 0 1",
  "1 0 1 1 0 0 1 0 1 1 1 0 0 1 0 1 0 1 1 0 0 1 1 0 1 0 1 1 0 1",
  "0 1 0 0 1 1 0 1 0 0 1 1 0 1 1 0 1 0 0 1 1 0 0 1 0 1 0 0 1 0",
  "1 1 0 1 0 1 1 0 0 1 0 1 1 0 0 1 1 0 1 1 0 1 0 0 1 1 0 1 0 1",
  "0 0 1 0 1 0 0 1 1 0 1 0 0 1 1 0 0 1 0 0 1 0 1 1 0 0 1 0 1 0",
  "1 0 0 1 1 0 1 1 0 0 1 1 0 1 0 1 0 0 1 1 0 1 1 0 0 1 0 1 1 0",
  "0 1 1 0 0 1 0 0 1 1 0 0 1 0 1 0 1 1 0 0 1 0 0 1 1 0 1 0 0 1",
  "1 1 0 0 1 0 1 0 1 0 1 1 0 0 1 1 0 1 0 1 0 1 1 0 1 0 0 1 1 0",
  "0 0 1 1 0 1 0 1 0 1 0 0 1 1 0 0 1 0 1 0 1 0 0 1 0 1 1 0 0 1",
  "1 0 1 0 0 1 1 0 1 0 1 0 1 0 0 1 0 1 1 0 1 0 1 0 1 1 0 0 1 0",
  "0 1 0 1 1 0 0 1 0 1 0 1 0 1 1 0 1 0 0 1 0 1 0 1 0 0 1 1 0 1",
  "1 0 0 1 0 1 1 0 1 1 0 1 0 0 1 0 1 1 0 1 1 0 0 1 1 0 1 0 1 0",
  "0 1 1 0 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 0 0 1 1 0 0 1 0 1 0 1",
];

/* ── WorkflowCard ─────────────────────────────────────────────────── */
function WorkflowCard() {
  const appIcons = [
    { Icon: SiGooglesheets, bg: "bg-white", iconColor: "text-green-600",  top: "top-4  left-4"  },
    { Icon: SiSlack,        bg: "bg-white", iconColor: "text-purple-600", top: "top-4  right-4" },
    { Icon: SiZapier,       bg: "bg-white", iconColor: "text-orange-500", top: "bottom-10 right-4" },
  ];
  return (
    <div className="bg-[#ece9f8] rounded-2xl p-5 h-64 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 210" fill="none">
        {/* Sheets → Slack */}
        <path d="M 60 40 C 130 40 130 40 200 40" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash"/>
        <polygon points="197,35 205,40 197,45" fill="#10b981"/>
        {/* Sheets → Zapier */}
        <path d="M 60 40 C 60 130 130 140 200 160" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash-rev"/>
        <polygon points="198,155 206,160 198,165" fill="#f97316"/>
        {/* Slack → HubSpot */}
        <path d="M 200 40 C 200 100 130 120 60 160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash"/>
      </svg>

      {appIcons.map(({ Icon, bg, iconColor, top }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -6, 0], rotate: [0, i % 2 === 0 ? 3 : -3, 0] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, repeatType: "reverse", delay: i * 0.5 }}
          className={`absolute ${top} w-14 h-14 ${bg} rounded-2xl flex items-center justify-center shadow-lg border border-gray-100`}
        >
          <Icon size={24} className={iconColor} />
        </motion.div>
      ))}

      {/* Animated arrow cursor */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute left-[40%] top-[40%] z-10"
      >
        <svg width="20" height="22" viewBox="0 0 20 22" fill="#7c3aed">
          <path d="M0 0L0 18L5 13L8 20L10 19L7 12L14 12Z"/>
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-4 left-4 bg-violet-600 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md"
      >
        Connects to all your apps
      </motion.div>
    </div>
  );
}

/* ── AgentsCard ───────────────────────────────────────────────────── */
function AgentsCard() {
  const pills = [
    { label: "Analyzing",       color: "bg-violet-100 text-violet-700", Icon: BarChart2,   dot: "bg-violet-400" },
    { label: "Deciding",        color: "bg-orange-100 text-orange-700", Icon: GitMerge,    dot: "bg-orange-400" },
    { label: "Acting",          color: "bg-blue-100 text-blue-700",     Icon: Zap,         dot: "bg-blue-400" },
    { label: "Task completion", color: "bg-green-100 text-green-700",   Icon: CheckCircle2,dot: "bg-green-400" },
  ];
  return (
    <div className="bg-[#fce8f3] rounded-2xl p-5 h-44 flex flex-col justify-center gap-2 overflow-hidden">
      {pills.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          animate={{ x: [0, 8, 0] }}
          transition={{
            x: { duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.45 },
            opacity: { duration: 0.4, delay: i * 0.1 },
          }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold w-fit ${p.color}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${p.dot} inline-block`} />
          <p.Icon size={11} />
          {p.label}
          {p.label !== "Task completion" && (
            <svg className="ml-1" width="24" height="4" viewBox="0 0 24 4">
              <line x1="0" y1="2" x2="24" y2="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" className="animate-dash"/>
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ── KnowledgeCard ────────────────────────────────────────────────── */
function KnowledgeCard() {
  const nodes = [
    { Icon: FileText,  label: "invoice", color: "bg-blue-100",   iconColor: "text-blue-600",   pos: { x: 20, y: 28 }  },
    { Icon: BookOpen,  label: "PDF",     color: "bg-red-100",    iconColor: "text-red-500",    pos: { x: 20, y: 112 } },
    { Icon: SiNotion,  label: "Notion",  color: "bg-gray-100",   iconColor: "text-gray-700",   pos: { x: 190, y: 28 } },
    { Icon: SiGooglesheets, label: "SOP", color: "bg-green-100", iconColor: "text-green-600",  pos: { x: 190, y: 112 }},
  ];
  const cx = 115, cy = 70;
  return (
    <div className="bg-[#ece9f8] rounded-2xl p-4 h-44 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 150">
        {nodes.map((n, i) => (
          <line key={i}
            x1={n.pos.x + 16} y1={n.pos.y + 16}
            x2={cx} y2={cy}
            stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.5"
            className={i % 2 === 0 ? "animate-dash" : "animate-dash-rev"}
          />
        ))}
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.2 + i * 0.3, repeat: Infinity, repeatType: "reverse", delay: i * 0.4 }}
          className="absolute flex flex-col items-center gap-0.5"
          style={{ left: n.pos.x, top: n.pos.y }}
        >
          <div className={`w-8 h-8 ${n.color} rounded-xl flex items-center justify-center shadow-sm`}>
            <n.Icon size={14} className={n.iconColor} />
          </div>
          <span className="text-[9px] text-gray-500 font-semibold">{n.label}</span>
        </motion.div>
      ))}

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute"
        style={{ left: cx - 24, top: cy - 24 }}
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-xl z-10 relative">🧠</div>
        <div className="absolute inset-0 rounded-full bg-violet-200/40 animate-ping-slow" />
      </motion.div>
    </div>
  );
}

/* ── IntegrationsCard ─────────────────────────────────────────────── */
function IntegrationsCard() {
  const orbitIcons = [
    { Icon: SiSlack,   bg: "bg-purple-600", angle: 0   },
    { Icon: SiNotion,  bg: "bg-gray-800",   angle: 120 },
    { Icon: SiGmail,   bg: "bg-red-500",    angle: 240 },
  ];
  return (
    <div className="bg-[#e0f0fb] rounded-2xl p-5 h-44 flex items-center justify-center relative overflow-hidden">
      <div className="relative w-32 h-32">
        {/* Pulsing rings */}
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 }}
            className="absolute inset-0 rounded-full border border-blue-300"
            style={{ margin: `${(i - 1) * 9}px` }}
          />
        ))}

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5L5 1L9 5L5 9L1 5Z" fill="white"/></svg>
            </div>
          </div>
        </div>

        {/* Orbiting icons */}
        {orbitIcons.map(({ Icon, bg, angle }, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="absolute"
              style={{
                top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 48}px - 14px)`,
                left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 48}px - 14px)`,
              }}
            >
              <div className={`w-7 h-7 ${bg} rounded-lg flex items-center justify-center shadow-md`}>
                <Icon size={14} className="text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── AgentPromptCard (the big purple binary card) ─────────────────── */
function AgentPromptCard() {
  return (
    <div className="bg-violet-700 rounded-2xl p-5 h-44 relative overflow-hidden">
      {/* Scrolling binary text — doubled for seamless loop */}
      <div className="absolute inset-x-0 bottom-0 top-[70px] overflow-hidden">
        <div className="animate-scroll-up text-[8px] text-violet-300/50 font-mono leading-[14px] px-3 select-none">
          {[...BIN_ROWS, ...BIN_ROWS].map((row, i) => <div key={i}>{row}</div>)}
        </div>
      </div>

      {/* Top content */}
      <div className="relative z-10">
        <div className="flex flex-col gap-1.5 mb-3">
          {[
            { w: "75%", delay: 0 },
            { w: "90%", delay: 0.1 },
            { w: "65%", delay: 0.2 },
            { w: "80%", delay: 0.3 },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: b.w }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: b.delay, ease: "easeOut" }}
              className="h-2 bg-violet-500/70 rounded-full"
            />
          ))}
        </div>

        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20"
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"
          />
          + AI agent
        </motion.div>
      </div>

      {/* Spinning loader */}
      <div className="absolute bottom-4 right-4 w-10 h-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border-2 border-white/20 flex items-center justify-center"
        >
          <div className="w-5 h-5 rounded-full border-2 border-white/70 border-t-transparent" />
        </motion.div>
      </div>
    </div>
  );
}

/* ── TemplatesCard ────────────────────────────────────────────────── */
function TemplatesCard() {
  const cards = [
    { Icon: Calendar,   color: "bg-yellow-100", iconColor: "text-yellow-600", label: "Month Tracker" },
    { Icon: User,       color: "bg-pink-100",   iconColor: "text-pink-600",   label: "CV Scan Agent" },
    { Icon: Smartphone, color: "bg-green-100",  iconColor: "text-green-600",  label: "Social Media Agent" },
    { Icon: DollarSign, color: "bg-blue-100",   iconColor: "text-blue-600",   label: "Expense Agent" },
  ];
  return (
    <div className="bg-[#d4f5ec] rounded-2xl p-4 h-44 relative overflow-hidden flex items-end">
      <div className="flex gap-2 items-end">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.2 + i * 0.4, repeat: Infinity, repeatType: "reverse", delay: i * 0.35 }}
            className={`${c.color} rounded-xl p-2 shadow-sm border border-white/60`}
            style={{ height: `${88 + i * 10}px`, width: "56px" }}
          >
            <c.Icon size={16} className={`${c.iconColor} mb-1`} />
            <div className="h-1 bg-gray-300/50 rounded-full mb-1 w-full" />
            <div className="h-1 bg-gray-300/50 rounded-full w-3/4 mb-2" />
            <div className="text-[7px] text-gray-400 font-medium leading-tight">{c.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-3 right-3 bg-violet-600 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full"
      >
        Plug, play & personalize.
      </motion.div>
    </div>
  );
}

/* ── SecurityCard ─────────────────────────────────────────────────── */
function SecurityCard() {
  const bars = [
    { w: "80%", delay: 0 },
    { w: "95%", delay: 0.12 },
    { w: "60%", delay: 0.24 },
    { w: "75%", delay: 0.36 },
  ];
  return (
    <div className="bg-[#e8faf0] rounded-2xl p-5 h-44 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        {bars.map((b, i) => (
          <div key={i} className="h-2.5 bg-green-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: b.w }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: b.delay, ease: "easeOut" }}
              className="h-full bg-green-400/80 rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-green-100"
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-2 h-2 bg-green-500 rounded-full inline-block"
          />
          <span className="text-xs font-semibold text-green-700">Secured</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -4, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-md"
        >
          <Lock size={20} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Main export ──────────────────────────────────────────────────── */
export default function Features() {
  return (
    <section className="py-24 bg-[#f8f8fa] dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-[#0f0e1a] text-center mb-14"
        >
          Everything you need to<br /><span className="bg-linear-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">build workflows that think.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">

          {/* Large left — spans 2 rows */}
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="md:row-span-2 animated-border-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-0.5 transition-all duration-300">
            <WorkflowCard />
            <div className="mt-5">
              <h3 className="text-base font-bold text-[#0f0e1a] mb-1">Visual workflow builder</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Design and connect automations visually — drag, drop & deploy intelligent workflows in minutes.</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="animated-border-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-0.5 transition-all duration-300">
            <AgentsCard />
            <div className="mt-4">
              <h3 className="text-base font-bold text-[#0f0e1a] mb-1">AI agents that think</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Agents that reason, plan & act like teammates — they don&apos;t just follow steps.</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}}
            className="animated-border-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-0.5 transition-all duration-300">
            <IntegrationsCard />
            <div className="mt-4">
              <h3 className="text-base font-bold text-[#0f0e1a] mb-1">Unified integrations layer</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Connect 400+ tools — from Gmail and Tally to ClickUp and Slack.</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
            className="animated-border-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-0.5 transition-all duration-300">
            <KnowledgeCard />
            <div className="mt-4">
              <h3 className="text-base font-bold text-[#0f0e1a] mb-1">Knowledge engine</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Upload docs, policies, or data and let Vesperyn use that knowledge to power decisions.</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.05}}
            className="animated-border-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-0.5 transition-all duration-300">
            <TemplatesCard />
            <div className="mt-4">
              <h3 className="text-base font-bold text-[#0f0e1a] mb-1">Templates library</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Start fast with ready-to-use agents and workflow templates for any function.</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="animated-border-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-0.5 transition-all duration-300">
            <SecurityCard />
            <div className="mt-4">
              <h3 className="text-base font-bold text-[#0f0e1a] mb-1">Enterprise security</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Role-based access, encryption, and detailed audit logs keep every action secure.</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}}
            className="animated-border-card-dark rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-400/30 hover:-translate-y-0.5 transition-all duration-300">
            <AgentPromptCard />
            <div className="mt-4">
              <h3 className="text-base font-bold text-white mb-1">Prompt to create an agent</h3>
              <p className="text-violet-200 text-sm leading-relaxed">Build a custom AI agent in minutes — define goals, assign data & let it handle tasks autonomously.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
