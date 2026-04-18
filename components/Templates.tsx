"use client";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { SiSlack, SiGooglesheets, SiNotion, SiGmail, SiHubspot, SiClickup, SiGoogledrive, SiAirtable } from "react-icons/si";

const templates = [
  {
    seed: "Zara",    avatarBg: "bg-blue-400",    title: "CV Scanning Agent",              desc: "Scans resumes and extracts key details to instantly shortlist the right candidates.",             tools: [SiClickup, SiSlack, SiGoogledrive], toolCount: "8+ Tools", bg: "bg-[#cdeef9]" },
  { seed: "Marco",   avatarBg: "bg-orange-400",  title: "Demo Scheduling & Prep Agent",   desc: "Automatically schedules demos, sends reminders, and prepares pre-meeting notes.",               tools: [SiNotion, SiSlack, SiGoogledrive],  toolCount: "2+ Tools", bg: "bg-[#e5dcf7]" },
  { seed: "Sofia",   avatarBg: "bg-teal-400",    title: "Content Writing Agent",          desc: "Writes clear, high-quality content such as blogs, captions, and emails based on your brief.",   tools: [SiNotion, SiSlack, SiGoogledrive],  toolCount: "4+ Tools", bg: "bg-[#c8f0e2]" },
  { seed: "Arjun",   avatarBg: "bg-red-400",     title: "Expense Tracker Agent",          desc: "Captures and logs expenses from receipts or entries and organizes them for easy tracking.",      tools: [SiSlack, SiGooglesheets, SiAirtable], toolCount: "2+ Tools", bg: "bg-[#fde0dc]" },
  { seed: "Leila",   avatarBg: "bg-violet-400",  title: "Weekly Industry Update Agent",   desc: "Collects, summarizes, and delivers weekly updates on trends in your industry.",                  tools: [SiNotion, SiSlack, SiGooglesheets], toolCount: "2+ Tools", bg: "bg-[#ede0f8]" },
  { seed: "Ethan",   avatarBg: "bg-cyan-500",    title: "Lead Form to CRM Agent",         desc: "Takes form submissions and instantly updates your CRM with clean, structured data.",             tools: [SiHubspot, SiSlack, SiGooglesheets],toolCount: "2+ Tools", bg: "bg-[#d0f0fb]" },
  { seed: "Amara",   avatarBg: "bg-pink-400",    title: "Social Media Support Agent",     desc: "Responds to comments and queries and assists in managing daily social interactions.",             tools: [SiSlack, SiNotion, SiGmail],        toolCount: "3+ Tools", bg: "bg-[#fce4f3]" },
  { seed: "Kenji",   avatarBg: "bg-emerald-500", title: "Email Categorization Agent",     desc: "Sorts incoming emails into smart categories and highlights priority messages.",                   tools: [SiGmail, SiSlack, SiNotion],        toolCount: "5+ Tools", bg: "bg-[#d4f5e8]" },
];

const doubled = [...templates, ...templates];

function TemplateCard({ t }: { t: typeof templates[0] }) {
  return (
    <div
      className={`${t.bg} rounded-3xl p-6 inline-flex flex-col justify-between shrink-0 whitespace-normal`}
      style={{ width: "300px", minHeight: "220px" }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-11 h-11 ${t.avatarBg} rounded-full overflow-hidden shadow-sm border-2 border-white/60 shrink-0`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${t.seed}&backgroundColor=transparent`}
              alt={t.seed}
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <h3 className="text-sm font-bold text-[#0f0e1a] leading-snug">{t.title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-1.5">
          {t.tools.map((Icon, j) => (
            <div key={j} className="w-6 h-6 bg-white/70 rounded-md flex items-center justify-center shadow-sm">
              <Icon size={13} className="text-gray-600" />
            </div>
          ))}
          <span className="text-xs text-gray-500 font-medium ml-1">{t.toolCount}</span>
        </div>
        <button className="flex items-center gap-1.5 bg-white/80 hover:bg-white text-gray-600 hover:text-violet-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm transition-colors border border-white/60">
          <Copy size={11} /> Clone
        </button>
      </div>
    </div>
  );
}

export default function Templates() {
  return (
    <section className="py-24 bg-[#f8f8fa] dot-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-[#0f0e1a]"
          >
            Start faster with pre-built<br />agents and templates.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 mt-4 text-base"
          >
            Pick a template, customize it for your business, and go live in minutes.
          </motion.p>
        </div>
      </div>

      {/* Auto-scrolling strip */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
          {doubled.map((t, i) => (
            <TemplateCard key={i} t={t} />
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#f8f8fa] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#f8f8fa] to-transparent pointer-events-none z-10" />
      </div>

      <div className="text-center mt-10">
        <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-violet-300 text-gray-700 hover:text-violet-600 text-sm font-semibold rounded-full transition-all duration-200 bg-white shadow-sm hover:shadow-md">
          Explore all templates ↗
        </a>
      </div>
    </section>
  );
}
