import { motion } from 'framer-motion';
import logoImage from '../assets/logo/code2commit.png';

const GithubIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const BrowserIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto w-full"
    >
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-xl border-b border-white/5 -z-10" />

      <div className="flex items-center gap-2.5 cursor-pointer group">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden ">
          <img src={logoImage} alt="Code2Commit Logo" className="w-full h-full object-cover" />
        </div>
        <span className="font-semibold text-lg tracking-tight text-white">
          Code<span className="text-primary">2</span>Commit
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-orange-400 hover:opacity-90 transition-all duration-300 text-sm text-dark font-semibold"
        >
          <BrowserIcon size={15} />
          <span className="hidden sm:inline">Add Extension</span>
        </button>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm text-gray-300 hover:text-white hover:border-white/20"
        >
          <GithubIcon size={15} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </motion.nav>
  );
}
