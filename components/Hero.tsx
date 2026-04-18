"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiZapier, SiOpenai, SiGmail, SiFigma, SiSlack, SiShopify,
  SiGooglesheets, SiGoogledrive, SiNotion, SiStripe, SiHubspot,
  SiGooglecalendar, SiZoom, SiClickup, SiAirtable, SiMailchimp,
  SiWhatsapp, SiLinear, SiAsana, SiTrello,
} from "react-icons/si";

const avatars = [
  { seed: "Lena",   bg: "bg-yellow-400", pos: "left-[8%]  top-[22%]", anim: "animate-float",  size: "w-14 h-14" },
  { seed: "Maya",   bg: "bg-teal-400",   pos: "left-[4%]  top-[60%]", anim: "animate-float2", size: "w-16 h-16" },
  { seed: "Carlos", bg: "bg-red-400",    pos: "left-[28%] top-[72%]", anim: "animate-float3", size: "w-14 h-14" },
  { seed: "Priya",  bg: "bg-cyan-400",   pos: "right-[6%] top-[18%]", anim: "animate-float2", size: "w-16 h-16" },
  { seed: "Jordan", bg: "bg-orange-400", pos: "right-[3%] top-[55%]", anim: "animate-float",  size: "w-14 h-14" },
];

const brandLogos = [
  { Icon: SiZapier,         color: "#FF4A00", name: "Zapier"          },
  { Icon: SiOpenai,         color: "#000000", name: "OpenAI"          },
  { Icon: SiGmail,          color: "#EA4335", name: "Gmail"           },
  { Icon: SiFigma,          color: "#F24E1E", name: "Figma"           },
  { Icon: SiSlack,          color: "#4A154B", name: "Slack"           },
  { Icon: SiShopify,        color: "#96BF48", name: "Shopify"         },
  { Icon: SiGooglesheets,   color: "#34A853", name: "Google Sheets"   },
  { Icon: SiGoogledrive,    color: "#4285F4", name: "Google Drive"    },
  { Icon: SiNotion,         color: "#000000", name: "Notion"          },
  { Icon: SiStripe,         color: "#635BFF", name: "Stripe"          },
  { Icon: SiHubspot,        color: "#FF7A59", name: "HubSpot"         },
  { Icon: SiGooglecalendar, color: "#4285F4", name: "Google Calendar" },
  { Icon: SiZoom,           color: "#2D8CFF", name: "Zoom"            },
  { Icon: SiClickup,        color: "#7B68EE", name: "ClickUp"         },
  { Icon: SiAirtable,       color: "#18BFFF", name: "Airtable"        },
  { Icon: SiMailchimp,      color: "#FFE01B", name: "Mailchimp"       },
  { Icon: SiWhatsapp,       color: "#25D366", name: "WhatsApp"        },
  { Icon: SiLinear,         color: "#5E6AD2", name: "Linear"          },
  { Icon: SiAsana,          color: "#FC636B", name: "Asana"           },
  { Icon: SiTrello,         color: "#0052CC", name: "Trello"          },
];

const slotOffsets = [0, 5, 10, 15];

const cursors = [
  { pos: "left-[20%] top-[16%]",  color: "text-violet-500", anim: "animate-float3" },
  { pos: "right-[18%] top-[38%]", color: "text-violet-500", anim: "animate-float"  },
  { pos: "left-[32%] top-[62%]",  color: "text-violet-400", anim: "animate-float2" },
];

export default function Hero() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 dot-grid">

      {/* Purple hero gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />

      {/* Floating avatars */}
      {avatars.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          className={`absolute ${a.pos} ${a.anim} z-10`}
        >
          <div className={`${a.size} ${a.bg} rounded-2xl overflow-hidden shadow-lg border-2 border-white`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${a.seed}&backgroundColor=transparent`}
              alt={a.seed}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </motion.div>
      ))}

      {/* Cursor decorations */}
      {cursors.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 + i * 0.2 }}
          className={`absolute ${c.pos} ${c.anim} ${c.color} z-10`}
        >
          <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor">
            <path d="M0 0L0 16L4.5 12L7 18L9 17L6.5 11L12 11Z"/>
          </svg>
        </motion.div>
      ))}

      {/* Background node lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="500" height="400" viewBox="0 0 500 400" className="opacity-10">
          <line x1="250" y1="200" x2="80"  y2="80"  stroke="#7c3aed" strokeWidth="1" strokeDasharray="5 5"/>
          <line x1="250" y1="200" x2="420" y2="80"  stroke="#7c3aed" strokeWidth="1" strokeDasharray="5 5"/>
          <line x1="250" y1="200" x2="80"  y2="320" stroke="#7c3aed" strokeWidth="1" strokeDasharray="5 5"/>
          <line x1="250" y1="200" x2="420" y2="320" stroke="#7c3aed" strokeWidth="1" strokeDasharray="5 5"/>
          <circle cx="250" cy="200" r="4" fill="#7c3aed"/>
          <circle cx="80"  cy="80"  r="3" fill="#7c3aed" opacity="0.5"/>
          <circle cx="420" cy="80"  r="3" fill="#7c3aed" opacity="0.5"/>
          <circle cx="80"  cy="320" r="3" fill="#7c3aed" opacity="0.5"/>
          <circle cx="420" cy="320" r="3" fill="#7c3aed" opacity="0.5"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">

        {/* Vertical cycling tool icon slots */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
            Automates with your favourite tools
          </p>
          <div className="flex gap-2 justify-center">
            {slotOffsets.map((offset, si) => {
              const brand = brandLogos[(tick + offset) % brandLogos.length];
              return (
                <div
                  key={si}
                  className="relative overflow-hidden h-9 w-9 rounded-xl bg-white/80 border border-gray-100 shadow-sm"
                >
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={tick}
                      initial={{ y: 36, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -36, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <brand.Icon size={20} style={{ color: brand.color }} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        <h1 className="text-[72px] sm:text-[90px] lg:text-[110px] font-black text-[#0f0e1a] leading-none tracking-tight mb-6">
          {[
            { text: "build.", gradient: false },
            { text: "automate.", gradient: true },
            { text: "scale", gradient: false },
          ].map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.18, ease: [0.33, 1, 0.68, 1] }}
                className={`inline-block${word.gradient ? " bg-linear-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent" : ""}`}
              >
                {word.text}
              </motion.span>
              {i < 2 && "\u00a0"}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-500 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed"
        >
          Your all-in-one workspace to build agents, connect tools, and automate workflows that adapt to your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#" className="shimmer-btn inline-flex items-center justify-center gap-1.5 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full text-sm transition-colors shadow-md shadow-violet-200">
            Automate now ↗
          </a>
          <a href="#book-demo" className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full text-sm transition-colors border border-gray-200 shadow-sm">
            Book a demo ↗
          </a>
        </motion.div>
      </div>


      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" fillOpacity="0.9"/>
        </svg>
      </div>

    </section>
  );
}
