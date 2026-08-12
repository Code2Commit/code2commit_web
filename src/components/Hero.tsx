import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { StepForward } from 'lucide-react';

// const GithubIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
//   <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
//     <path d="M9 18c-4.51 2-5-2-7-2"/>
//   </svg>
// );

const ChromeIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="21.17" y1="8" x2="12" y2="8"/>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
  </svg>
);


export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };


  return (
    <section className="relative flex flex-col items-center justify-center px-6 md:px-10 pt-32 pb-4 overflow-hidden">
      {/* Background effects */}
      <div className="glow-effect" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ─── Giant Background Text ─── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[100px] sm:text-[140px] md:text-[200px] lg:text-[260px] xl:text-[300px] font-black uppercase leading-none text-white/[0.02] tracking-tighter whitespace-nowrap">
            CODE
          </span>
          <span className="text-[100px] sm:text-[140px] md:text-[200px] lg:text-[260px] xl:text-[300px] font-black uppercase leading-none text-white/[0.02] tracking-tighter whitespace-nowrap -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-20">
            COMMIT
          </span>
        </motion.div>
      </div>

      {/* ─── Floating accent lines ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Horizontal accent line */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
        {/* Vertical accent line */}
        <motion.div
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        />
        {/* Diagonal accent */}
        <motion.div
          animate={{ y: ['-50%', '150%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-1/3 w-px h-1/3 bg-gradient-to-b from-transparent via-orange-400/10 to-transparent rotate-45"
        />
      </motion.div>

      {/* ─── Main Content (centered) ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/15 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Free Chrome Extension — Open Source
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-7 leading-[1.1]"
        >
          Push your LeetCode{' '}
          <br className="hidden sm:block" />
          grind to{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              GitHub
            </span>
            <motion.span
              className="absolute -inset-x-3 -inset-y-1.5 bg-primary/8 rounded-xl -z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
        >
          Solve a problem on LeetCode. Click push. Your solution commits directly
          to your GitHub repo — proper file structure, meaningful commit messages, zero copy-paste.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.a
            href="https://chromewebstore.google.com/detail/code2commit/ehimeboclpaooohhagjlehnjdjccgpid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-9 py-4 btn-shimmer text-dark font-bold rounded-xl transition-all text-base cursor-pointer"
          >
            <ChromeIcon size={20} />
            Add to Chrome
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-9 py-4 glass-card hover:bg-white/10 text-white font-medium rounded-xl transition-all text-base cursor-pointer"
          >
            <StepForward size={20} />
            Get Started
          </motion.a>
        </motion.div>


      </motion.div>

      {/* ─── Bottom gradient fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none z-20" />
    </section>
  );
}
