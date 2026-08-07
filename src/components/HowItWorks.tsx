import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Install the Extension',
    description:
      'Head to the Chrome Web Store and add Code2Commit to your browser. One click install — no configuration needed.',
    icon: '🧩',
    image: null as string | null, // Replace with: '/screenshots/step1.png'
    accent: 'from-violet-500/20 to-indigo-500/20',
  },
  {
    number: '02',
    title: 'Connect Your GitHub',
    description:
      'Authorize Code2Commit with your GitHub account. Choose the repository where you want your solutions stored.',
    icon: '🔗',
    image: null as string | null,
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    number: '03',
    title: 'Solve on LeetCode',
    description:
      'Write and submit your solution on LeetCode as usual. No changes to your existing workflow at all.',
    icon: '🧠',
    image: null as string | null,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    number: '04',
    title: 'Click Push',
    description:
      'Hit the Push button injected right into the LeetCode UI. One click is all it takes to commit your solution.',
    icon: '🚀',
    image: null as string | null,
    accent: 'from-orange-500/20 to-amber-500/20',
  },
  {
    number: '05',
    title: 'See It on GitHub',
    description:
      'Your solution gets committed with proper folder structure, file naming, and meaningful commit messages — automatically.',
    icon: '✅',
    image: null as string | null,
    accent: 'from-primary/20 to-yellow-500/20',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const goNext = useCallback(() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1)), []);
  const goPrev = useCallback(() => setActiveStep((prev) => Math.max(prev - 1, 0)), []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative px-6 md:px-10 py-24 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-10 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            How It Works
          </span>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-6 -ml-4 lg:-ml-10">

          {/* ─── Left Side: Step Info ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-[0.9] w-full order-2 lg:order-1 text-right"
          >
            {/* Step progress dots */}
            <div className="flex items-center justify-end gap-3 mb-10">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="relative group"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      i === activeStep
                        ? 'w-10 bg-primary'
                        : i < activeStep
                          ? 'w-5 bg-primary/30'
                          : 'w-5 bg-white/10 group-hover:bg-white/20'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Animated step content */}
            <div className="relative min-h-[300px]">
              {/* Large background step text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute -top-8 -right-4 select-none pointer-events-none z-0"
                >
                  <span className="text-[120px] md:text-[160px] lg:text-[180px] font-black uppercase leading-none text-white/[0.03] tracking-tight whitespace-nowrap">
                    Step {steps[activeStep].number}
                  </span>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative z-10"
                >
                  {/* Step label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-6 ml-auto">
                    <span className="text-primary/60 text-xs font-mono font-semibold tracking-widest uppercase">
                      Step {steps[activeStep].number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                    {steps[activeStep].title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mb-8 ml-auto">
                    {steps[activeStep].description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {['No setup', 'One click', 'Automatic'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] border border-white/[0.06] text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end gap-3 mt-10">
              <button
                onClick={goPrev}
                disabled={activeStep === 0}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.05] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Prev
              </button>
              <span className="text-sm text-gray-600 font-mono tabular-nums px-2">
                {String(activeStep + 1).padStart(2, '0')}<span className="text-gray-700 mx-1">/</span>{String(steps.length).padStart(2, '0')}
              </span>
              <button
                onClick={goNext}
                disabled={activeStep === steps.length - 1}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/20 bg-primary/[0.06] text-primary hover:bg-primary/10 hover:border-primary/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm text-sm font-medium"
              >
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* ─── Right Side: Fanned Card Stack ─── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-[1.1] w-full order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl h-[400px] sm:h-[440px] md:h-[480px]">
              {/* Ambient glow */}
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(ellipse at 50% 50%, rgba(255,193,7,0.08) 0%, transparent 70%)',
                    'radial-gradient(ellipse at 60% 40%, rgba(255,140,0,0.1) 0%, transparent 70%)',
                    'radial-gradient(ellipse at 50% 50%, rgba(255,193,7,0.08) 0%, transparent 70%)',
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-20%] z-0 blur-3xl"
              />

              {/* Cards */}
              {steps.map((step, i) => {
                const offset = i - activeStep;

                // Fan layout: behind cards peek from the right and up
                const isActive = offset === 0;
                const isBehind = offset > 0;
                const isGone = offset < 0;

                // Position calculations for fan effect
                const x = isBehind ? offset * 28 : isGone ? -60 : 0;
                const y = isBehind ? offset * -12 : isGone ? 20 : 0;
                const rotate = isBehind ? offset * 2 : isGone ? -4 : 0;
                const scale = isBehind ? 1 - offset * 0.035 : isGone ? 0.92 : 1;
                const opacity = isGone ? 0 : Math.abs(offset) > 3 ? 0 : 1;
                const zIndex = isActive ? 50 : isBehind ? 40 - offset : 30;

                return (
                  <motion.div
                    key={step.number}
                    animate={{
                      x,
                      y,
                      rotate,
                      scale,
                      opacity,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 28,
                    }}
                    onClick={() => setActiveStep(i)}
                    className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      zIndex,
                      transformOrigin: 'center bottom',
                      pointerEvents: isActive || (isBehind && offset <= 2) ? 'auto' : 'none',
                    }}
                  >
                    {/* Card container with glassmorphism */}
                    <div
                      className={`w-full h-full relative rounded-2xl overflow-hidden transition-all duration-500 ${
                        isActive
                          ? 'border-2 border-primary/25 bg-[#0a0a0a]'
                          : 'border border-white/[0.06] bg-[#0d0d0d]'
                      }`}
                    >
                      {/* Top bar */}
                      <div className="h-11 bg-black/60 backdrop-blur-md flex items-center px-4 gap-2 border-b border-white/[0.05]">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="px-4 py-1 rounded-lg bg-white/[0.04] text-[11px] text-gray-500 font-mono flex items-center gap-2">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500/60">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span className="text-gray-600">Step {step.number}</span>
                            <span className="text-gray-500">—</span>
                            <span className="text-gray-400">{step.title}</span>
                          </div>
                        </div>
                      </div>

                      {/* Main content area / screenshot */}
                      <div className="h-[calc(100%-44px)] flex items-center justify-center relative overflow-hidden">
                        {/* Gradient background based on step */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-30`} />

                        {step.image ? (
                          <img
                            src={step.image}
                            alt={`Step ${step.number}: ${step.title}`}
                            className="w-full h-full object-cover relative z-10"
                          />
                        ) : (
                          /* Placeholder with visual interest */
                          <div className="relative z-10 flex flex-col items-center justify-center gap-5 w-full h-full">
                            {/* Grid pattern */}
                            <div className="absolute inset-0 opacity-[0.03]"
                              style={{
                                backgroundImage: `
                                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px',
                              }}
                            />

                            <motion.div
                              animate={isActive ? { scale: [1, 1.05, 1], rotate: [0, 3, 0] } : {}}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className="w-24 h-24 rounded-3xl bg-white/[0.03] border border-white/[0.08] border-dashed flex items-center justify-center text-5xl backdrop-blur-sm"
                            >
                              {step.icon}
                            </motion.div>
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-sm text-gray-600 font-medium">{step.title}</span>
                              <span className="text-[10px] text-gray-700 font-mono tracking-wider uppercase">
                                screenshot placeholder
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Active indicator glow at top */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
