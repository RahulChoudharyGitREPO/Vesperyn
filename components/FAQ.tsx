"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "Do I need coding skills?",                   a: "Nope. It's 100% no-code. Vesperyn is built for everyone with a drag-and-drop visual builder that requires zero technical knowledge." },
  { q: "Do I need an API key?",                      a: "No. Everything is built-in. Just log in and go. We handle all the underlying AI infrastructure." },
  { q: "Is it secure?",                              a: "Absolutely. Enterprise-grade encryption, role-based access controls, and detailed audit logs ensure every action is tracked and secure." },
  { q: "Does Vesperyn support multiple languages?",  a: "Yes, including English, Hindi, and Gujarati — with more languages coming soon." },
  { q: "Can I start free?",                          a: "Yes, get trial credits to explore workflows and agents. No credit card required." },
  { q: "How many tools can I connect?",              a: "Over 400+ integrations across CRM, communication, data platforms, and more." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:sticky md:top-24"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#0f0e1a] leading-tight">
              Frequently asked<br />questions.
            </h2>
            <p className="text-gray-400 mt-4 text-sm">
              Can&apos;t find your answer? <a href="#" className="text-violet-600 font-semibold hover:underline">Contact us →</a>
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl overflow-hidden transition-all duration-200 ${open === i ? "bg-[#f0eeff]" : "bg-[#f5f5f8] hover:bg-[#f0eeff]/50"}`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                >
                  <span className="text-sm font-semibold text-[#0f0e1a]">{faq.q}</span>
                  <div className={`shrink-0 transition-colors ${open === i ? "text-violet-600" : "text-gray-400"}`}>
                    {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
