"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const productLinks = [
  { label: "Overview", desc: "Unified AI Platform for Agents + Workflows" },
  { label: "AI Agents", desc: "Create autonomous agents that execute tasks" },
  { label: "AI Workflows", desc: "Build automated workflows with agents + tools" },
  { label: "Tools & Integrations", desc: "1,000+ apps, APIs, and webhooks" },
];
const resourceLinks = ["Documentation", "Vesperyn Academy", "Blog", "Careers", "Community", "Changelog", "Become a Partner", "Templates", "Support"];
const industryLinks = ["Manufacturing Enterprises", "Service Enterprises", "Trade & Retail", "Agro-Based & Food Processing", "Textiles & Handicrafts", "Construction & Infrastructure", "Emerging Tech MSMEs"];
const functionLinks = ["Sales", "Marketing", "Research", "Operations", "Customer Support", "Human Resources"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-violet-100/50 shadow-sm shadow-violet-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L7 2L12 7L7 12L2 7Z" fill="white"/></svg>
            </div>
            <span className="text-lg font-bold text-[#0f0e1a] tracking-tight">
              vesperyn<span className="text-violet-600">.ai</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {[
              { key: "product", label: "Product" },
              { key: "resources", label: "Resources" },
              { key: "usecases", label: "Use Cases" },
            ].map(({ key, label }) => (
              <div key={key} className="relative" onMouseEnter={() => setActiveDropdown(key)} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 font-medium">
                  {label} <ChevronDown size={13} className={`transition-transform ${activeDropdown === key ? "rotate-180" : ""}`} />
                </button>

                {activeDropdown === key && key === "product" && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-100 rounded-2xl p-2.5 shadow-xl shadow-gray-200/60">
                    {productLinks.map(l => (
                      <a key={l.label} href="#" className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
                        <span className="text-sm font-semibold text-gray-900">{l.label}</span>
                        <span className="text-xs text-gray-400 mt-0.5">{l.desc}</span>
                      </a>
                    ))}
                  </div>
                )}
                {activeDropdown === key && key === "resources" && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-2xl p-2.5 shadow-xl shadow-gray-200/60">
                    {resourceLinks.map(l => (
                      <a key={l} href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">{l}</a>
                    ))}
                  </div>
                )}
                {activeDropdown === key && key === "usecases" && (
                  <div className="absolute top-full left-0 mt-1 w-68 bg-white border border-gray-100 rounded-2xl p-3 shadow-xl shadow-gray-200/60">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">By Industry</p>
                    {industryLinks.map(l => (
                      <a key={l} href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">{l}</a>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">By Function</p>
                      {functionLinks.map(l => (
                        <a key={l} href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">{l}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="#pricing" className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 font-medium">Pricing</a>
            <a href="#" className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 font-medium">Enterprise</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium flex items-center gap-1">
              Claim your spot (beta) <span className="text-xs">↗</span>
            </a>
            <a href="#" className="flex items-center gap-1 px-5 py-2.5 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors shadow-sm">
              Login <span className="text-xs">↗</span>
            </a>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-2">
          {["Product", "Resources", "Use Cases", "Pricing", "Enterprise"].map(item => (
            <a key={item} href="#" className="text-gray-600 text-sm py-2 border-b border-gray-50 font-medium">{item}</a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <a href="#" className="text-center text-sm text-gray-600 border border-gray-200 rounded-full py-2.5 font-medium">Claim your spot (beta)</a>
            <a href="#" className="text-center text-sm font-semibold bg-violet-600 text-white rounded-full py-2.5">Login ↗</a>
          </div>
        </div>
      )}
    </nav>
  );
}
