import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-4 w-[92%] rounded-2xl border border-white/30 bg-white/40 p-3 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
        style={{
          WebkitMaskImage:
            'radial-gradient(1200px 1200px at 50% 0%, black 60%, transparent 100%)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-slate-200 to-slate-50 shadow-inner" />
            <span className="font-semibold tracking-tight text-slate-800">Cinematic Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          <button className="rounded-xl bg-slate-900/90 px-4 py-2 text-white shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition-shadow">Hire Me</button>
        </div>
      </motion.nav>
    </div>
  );
}
