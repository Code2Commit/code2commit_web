import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import guideVideo from '../assets/guide-video.mov';

const GithubIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ChromeIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="21.17" y1="8" x2="12" y2="8"/>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
  </svg>
);

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-10 pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="glow-effect" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text and Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Free Chrome Extension
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
          >
            Push your LeetCode grind to{' '}
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-primary via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                GitHub
              </span>
              <motion.span
                className="absolute -inset-x-2 -inset-y-1 bg-primary/10 rounded-lg -z-0"
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
            className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Solve a problem. Click push. Your solution commits directly to your
            GitHub repo — proper file structure, zero copy-paste.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-start mb-14"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,193,7,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 btn-shimmer text-dark font-bold rounded-xl transition-all shadow-lg shadow-primary/20 text-base"
            >
              <ChromeIcon size={20} />
              Add to Chrome
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white font-medium rounded-xl transition-all text-base"
            >
              <GithubIcon size={20} />
              View on GitHub
            </motion.button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-8 md:gap-12"
          >
            {[
              { value: 500, suffix: '+', label: 'Active Users' },
              { value: 10000, suffix: '+', label: 'Pushes' },
              { value: 20, suffix: '+', label: 'Languages' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Video Player */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex-1 w-full max-w-2xl lg:max-w-none relative"
        >
          {/* Decorative background glow for video */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0" />
          
          {/* Video Container */}
          <div className="relative z-10 glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
            
            {/* Mockup Browser Top Bar */}
            <div className="h-10 bg-dark/80 backdrop-blur-md flex items-center px-4 gap-2 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-xs text-gray-400 font-medium font-mono flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Installation Guide
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black/40 flex items-center justify-center">
              {/* Note: Update the src attribute to your actual video file when ready */}
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/video-poster-placeholder.jpg"
              >
                <source src={guideVideo} />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay (Visible on hover as a nice UI touch) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 text-dark backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-primary/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
