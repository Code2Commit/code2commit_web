import { useEffect, useState, useRef } from 'react';
import { Play, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

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

/* ─── Typing animation hook ─── */
function useTypingEffect(text: string, speed = 60, delay = 1500) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, started, text, speed]);

  return { displayed, done: displayed.length >= text.length };
}

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

  const codeText = `class Solution {
  public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> mp;
        for (int i = 0; i < nums.size(); i++) {
            if (mp.count(target - nums[i]))
                return {mp[target-nums[i]], i};
            mp[nums[i]] = i;
        }
        return {};
    }
};`;

  const { displayed, done } = useTypingEffect(codeText, 25, 1800);

  return (
    <section className="relative flex flex-col items-center text-center px-6 md:px-10 pt-32 pb-20 min-h-screen">
      {/* Background effects */}
      <div className="glow-effect" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
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
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl mx-auto"
        >
          Push your LeetCode grind to{' '}
          <span className="relative inline-block">
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
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
        >
          Solve a problem. Click push. Your solution commits directly to your
          GitHub repo — proper file structure, zero copy-paste.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,193,7,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 btn-shimmer text-dark font-bold rounded-xl transition-all shadow-lg shadow-primary/20 text-base"
          >
            <ChromeIcon size={20} />
            Add to Chrome — It's free
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
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16"
        >
          {[
            { value: 500, suffix: '+', label: 'Active Users' },
            { value: 10000, suffix: '+', label: 'Solutions Pushed' },
            { value: 20, suffix: '+', label: 'Languages' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ─── Mockup ─── */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row gap-6 items-stretch justify-center w-full max-w-3xl mx-auto"
      >
        {/* Glow behind mockups */}
        <div className="absolute inset-0 bg-primary/15 blur-[120px] rounded-full z-0 mockup-glow" />

        {/* Window 1: Typing animation */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full md:w-1/2 glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/40 text-left"
        >
          <div className="h-9 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="mx-auto text-xs text-gray-500 font-medium font-mono">leetcode.com</span>
          </div>
          <div className="p-3 border-b border-white/5 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/5"><Play size={10}/> Run</div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-green-500/10 text-green-400 text-xs rounded-lg border border-green-500/20 font-medium">✓ Submit</div>
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20 font-medium cursor-pointer"
            >
              ↑ Push
            </motion.div>
          </div>
          <div className="p-5 h-56 font-mono text-xs text-gray-300 overflow-hidden bg-[#0d0d0d]/50">
            <pre className="whitespace-pre-wrap leading-relaxed">
              <code>
                {displayed.split('\n').map((line, i) => (
                  <div key={i}>
                    <span className="inline-block w-5 text-right text-gray-600 select-none mr-3">{String(i + 1)}</span>
                    {colorize(line)}
                  </div>
                ))}
                {!done && <span className="cursor-blink" />}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Window 2: Success state */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full md:w-1/2 glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/40 text-left"
        >
          <div className="h-9 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="mx-auto text-xs text-gray-500 font-medium font-mono">github.com</span>
          </div>

          {/* Success notification */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
            className="absolute top-14 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/30 rounded-xl shadow-lg shadow-green-500/10 backdrop-blur-md">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm text-green-300 font-medium whitespace-nowrap">Solution pushed to GitHub!</span>
            </div>
          </motion.div>

          <div className="p-5 opacity-60">
            {/* Fake GitHub file tree */}
            <div className="font-mono text-xs space-y-2.5 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-primary">📁</span>
                <span className="text-white font-medium">leetcode_solutions</span>
              </div>
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📁</span> <span>C++</span>
                </div>
                <div className="pl-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>📁</span> <span>Array</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.5 }}
                    className="pl-6 flex items-center gap-2 text-green-400"
                  >
                    <span>📄</span> <span>0001-two-sum.cpp</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">new</span>
                  </motion.div>
                  <div className="pl-6 flex items-center gap-2">
                    <span>📄</span> <span>0053-maximum-subarray.cpp</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>📁</span> <span>Python3</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📁</span> <span>Java</span>
                </div>
              </div>
            </div>
          </div>

          {/* Commit message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="mx-5 mb-5 p-3 bg-white/5 rounded-lg border border-white/5"
          >
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-orange-400" />
              <span className="text-white font-medium">You</span>
              <span>committed just now</span>
            </div>
            <div className="mt-1.5 text-xs text-gray-300 font-mono">
              Solved 0001 - Two Sum
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Minimal syntax highlighter ─── */
function colorize(line: string): React.ReactNode {
  const keywords = ['class', 'public', 'int', 'for', 'if', 'return'];
  const types = ['vector', 'map', 'string'];

  return line.split(/(\s+|[{}()<>;,:]|\/\/.*)/).map((token, i) => {
    if (token.startsWith('//')) return <span key={i} className="text-gray-600 italic">{token}</span>;
    if (keywords.includes(token)) return <span key={i} className="text-purple-400">{token}</span>;
    if (types.includes(token)) return <span key={i} className="text-emerald-400">{token}</span>;
    if (token === 'Solution' || token === 'twoSum') return <span key={i} className="text-yellow-300">{token}</span>;
    if (/^\d+$/.test(token)) return <span key={i} className="text-orange-300">{token}</span>;
    return <span key={i}>{token}</span>;
  });
}
