"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const stats = [
  { value: 10000, suffix: "+", label: "Workflows automated", decimals: 0 },
  { value: 400,   suffix: "+", label: "Integrations",        decimals: 0 },
  { value: 99.9,  suffix: "%", label: "Uptime SLA",          decimals: 1 },
  { value: 5000,  suffix: "+", label: "Teams onboarded",     decimals: 0 },
];

function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-black bg-linear-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent mb-1">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="text-gray-400 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
