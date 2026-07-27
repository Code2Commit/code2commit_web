import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '📂',
    title: 'Smart File Structure',
    description: 'Solutions are organized by language, topic, and problem number — automatically.',
  },
  {
    icon: '🌐',
    title: '20+ Languages',
    description: 'C++, Python, Java, JavaScript, Go, Rust, and more. We detect the language from your submission.',
  },
  {
    icon: '⚡',
    title: 'One-Click Push',
    description: 'No terminal. No git commands. Just click the push button and your code is on GitHub.',
  },
  {
    icon: '🔒',
    title: 'Secure OAuth',
    description: 'We use GitHub OAuth for authentication. Your credentials never touch our servers.',
  },
  {
    icon: '📝',
    title: 'Clean Commits',
    description: 'Every push creates a meaningful commit message like "Solved 0001 - Two Sum".',
  },
  {
    icon: '🆓',
    title: 'Completely Free',
    description: 'No premium tiers. No hidden limits. Code2Commit is free and open source.',
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="relative px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Features</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
          Everything you need
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
          Built by competitive programmers, for competitive programmers.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl p-8 bg-[#0d0d0d] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl mb-6 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
