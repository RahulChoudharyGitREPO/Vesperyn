"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-black text-[#0f0e1a] mb-4"
        >
          automate{" "}
          <span className="text-violet-600">smarter.</span>
          {" "}act{" "}
          <span className="text-violet-600">faster.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-base mb-10 max-w-md mx-auto leading-relaxed"
        >
          Build your first intelligent workflow today and experience automation that truly understands your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#" className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full text-sm transition-colors shadow-md shadow-violet-200">
            Try Vesperyn free ↗
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full text-sm transition-colors border border-gray-200 shadow-sm">
            Book a Demo ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
