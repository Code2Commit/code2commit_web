import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo/code2commit.png';

const GithubIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative px-6 md:px-10 pt-24 pb-10">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to automate?
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
              Join hundreds of developers who are already tracking their progress effortlessly.
            </p>
            <motion.a
              href="https://chromewebstore.google.com/detail/code2commit/ehimeboclpaooohhagjlehnjdjccgpid"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,193,7,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-10 py-4 btn-shimmer text-dark font-bold rounded-xl text-base shadow-lg shadow-primary/20 cursor-pointer"
            >
              Get Code2Commit — It's free
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={logoImage} alt="Code2Commit Logo" className="w-full h-full object-cover" />
          </div>
          <span>Code2Commit © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
          <a href="https://github.com/mohitxcodes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
