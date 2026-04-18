"use client";
import { SiWhatsapp, SiZapier, SiShopify, SiMailchimp, SiStripe, SiOpenai, SiGooglecalendar, SiGoogledrive, SiHubspot, SiGooglesheets, SiGmail, SiGooglegemini, SiZendesk, SiFigma, SiZoom, SiClickup, SiSlack, SiAnthropic, SiNotion, SiCalendly } from "react-icons/si";
import { IconType } from "react-icons";

interface Integration {
  name: string;
  Icon: IconType;
  color: string;
  iconColor: string;
}

const integrations: Integration[] = [
  { name: "WhatsApp",        Icon: SiWhatsapp,       color: "bg-green-500",   iconColor: "text-white" },
  { name: "Zapier",          Icon: SiZapier,         color: "bg-orange-500",  iconColor: "text-white" },
  { name: "Shopify",         Icon: SiShopify,        color: "bg-emerald-600", iconColor: "text-white" },
  { name: "Mailchimp",       Icon: SiMailchimp,      color: "bg-yellow-400",  iconColor: "text-black" },
  { name: "Stripe",          Icon: SiStripe,         color: "bg-violet-600",  iconColor: "text-white" },
  { name: "OpenAI",          Icon: SiOpenai,         color: "bg-slate-700",   iconColor: "text-white" },
  { name: "Google Calendar", Icon: SiGooglecalendar, color: "bg-blue-500",    iconColor: "text-white" },
  { name: "Google Drive",    Icon: SiGoogledrive,    color: "bg-blue-600",    iconColor: "text-white" },
  { name: "HubSpot",         Icon: SiHubspot,        color: "bg-orange-600",  iconColor: "text-white" },
  { name: "Google Sheets",   Icon: SiGooglesheets,   color: "bg-green-600",   iconColor: "text-white" },
  { name: "Gmail",           Icon: SiGmail,          color: "bg-red-500",     iconColor: "text-white" },
  { name: "Gemini",          Icon: SiGooglegemini,   color: "bg-blue-400",    iconColor: "text-white" },
  { name: "Zendesk",         Icon: SiZendesk,        color: "bg-green-700",   iconColor: "text-white" },
  { name: "Figma",           Icon: SiFigma,          color: "bg-pink-600",    iconColor: "text-white" },
  { name: "Zoom",            Icon: SiZoom,           color: "bg-blue-700",    iconColor: "text-white" },
  { name: "ClickUp",         Icon: SiClickup,        color: "bg-violet-500",  iconColor: "text-white" },
  { name: "Slack",           Icon: SiSlack,          color: "bg-purple-600",  iconColor: "text-white" },
  { name: "Anthropic",       Icon: SiAnthropic,      color: "bg-amber-700",   iconColor: "text-white" },
  { name: "Notion",          Icon: SiNotion,         color: "bg-gray-700",    iconColor: "text-white" },
  { name: "Calendly",        Icon: SiCalendly,       color: "bg-teal-500",    iconColor: "text-white" },
];

const doubled = [...integrations, ...integrations];

function Pill({ item, id }: { item: Integration; id: string }) {
  return (
    <div
      key={id}
      className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-full shrink-0 hover:border-violet-200 hover:bg-violet-50 transition-colors cursor-default"
    >
      <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center shrink-0`}>
        <item.Icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
      </div>
      <span className="text-gray-700 text-sm font-medium">{item.name}</span>
    </div>
  );
}

export default function IntegrationStrip() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
          Works where your business already does
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3">
        <div className="flex gap-3 animate-scroll-left whitespace-nowrap">
          {doubled.map((item, i) => <Pill key={`a-${i}`} item={item} id={`a-${i}`} />)}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex gap-3 animate-scroll-right whitespace-nowrap">
          {[...doubled].reverse().map((item, i) => <Pill key={`b-${i}`} item={item} id={`b-${i}`} />)}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <div className="text-center mt-10">
        <a href="#" className="text-sm text-violet-600 hover:text-violet-700 font-semibold transition-colors">
          View all 400+ integrations →
        </a>
      </div>
    </section>
  );
}
