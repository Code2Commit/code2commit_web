import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Solve on LeetCode',
    description: 'Write and submit your solution on LeetCode as usual. No changes to your workflow.',
    icon: '🧩',
  },
  {
    number: '02',
    title: 'Click Push',
    description: 'Hit the push button injected right into the LeetCode UI. One click is all it takes.',
    icon: '🚀',
  },
  {
    number: '03',
    title: 'Auto-commit to GitHub',
    description: 'Your solution gets committed with proper folder structure, file naming, and commit messages.',
    icon: '✅',
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="relative px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Three steps. That's it.
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            No complicated setup. No manual copy-pasting. Just solve, push, and let Code2Commit handle the rest.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl p-8 bg-[#0d0d0d] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Step number background */}
              <div className="absolute -top-4 -right-4 text-[100px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl mb-6 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="text-primary/40 text-[10px] font-mono tracking-[0.3em] uppercase mb-3">Step {step.number}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector arrow (only for first 2 cards on desktop) */}
              {index < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#0d0d0d] border border-white/10 items-center justify-center text-gray-500 text-xs">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
