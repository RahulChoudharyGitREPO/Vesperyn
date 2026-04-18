"use client";
import { useState } from "react";
import { SiInstagram, SiFacebook, SiYoutube, SiDiscord } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const links = {
  "Explore Vesperyn": ["What is Vesperyn?", "AI Agents", "AI Workflows", "Tools & Integrations", "Marketplace", "Pricing"],
  "Solutions":        ["By Function", "By Industry", "Enterprise Solutions", "Implementation Partners"],
  "Legal":            ["Privacy Policy", "Security Policy", "Terms of Service", "Data Processing Addendum", "OpenAI DPA", "Anthropic DPA"],
  "Recently Viewed":  ["Vesperyn Vs. N8N", "Vesperyn Vs. Activepieces", "Vesperyn Vs. Zapier", "Vesperyn Vs. Gumloop", "Vesperyn Vs. Relevanceai"],
  "Learn & Build":    ["Documentation", "Vesperyn Academy", "Blog", "Community Forum", "Developer Access / MCP", "Raise a Ticket"],
};

const socials = [
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { Icon: SiInstagram,  href: "#", label: "Instagram" },
  { Icon: SiFacebook,   href: "#", label: "Facebook" },
  { Icon: SiYoutube,    href: "#", label: "YouTube" },
  { Icon: SiDiscord,    href: "#", label: "Discord" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-violet-100/60 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5L5 1L9 5L5 9L1 5Z" fill="white"/></svg>
              </div>
              <span className="text-base font-black text-[#0f0e1a]">vesperyn<span className="text-violet-600">.ai</span></span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-5 max-w-50">
              Vesperyn powers intelligent workflows and AI agents that reason, act, and automate work for modern teams.
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-full transition-colors mb-6">
              Partner with us ↗
            </a>

            {/* Newsletter */}
            <p className="text-[#0f0e1a] text-xs font-bold mb-1">Be the first to know</p>
            <p className="text-gray-400 text-xs mb-3">Get Vesperyn updates, workflow ideas, and pro tips straight to your inbox.</p>
            {done ? (
              <p className="text-green-600 text-xs font-semibold">Subscribed! ✓</p>
            ) : (
              <div className="flex gap-2">
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 text-xs border border-gray-200 rounded-full px-3 py-2 focus:outline-none focus:border-violet-400 min-w-0"
                />
                <button
                  onClick={() => email && setDone(true)}
                  className="shrink-0 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-full transition-colors"
                >
                  Subscribe
                </button>
              </div>
            )}

            {/* Socials */}
            <div className="flex gap-2.5 mt-5">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-violet-100 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors"
                >
                  <s.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-violet-600 text-[11px] font-bold uppercase tracking-wider mb-3">{section}</p>
              <ul className="flex flex-col gap-2">
                {items.map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-violet-600 text-xs transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © 2025 <a href="#" className="text-violet-600 hover:underline">Vesperyn.ai</a> — All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Security"].map(l => (
              <a key={l} href="#" className="text-gray-400 hover:text-violet-600 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
