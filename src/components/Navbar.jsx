import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-4 w-[92%] rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
        style={{
          WebkitMaskImage:
            'radial-gradient(1200px 1200px at 50% 0%, black 60%, transparent 100%)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-slate-200/70 to-white/10 shadow-inner" />
            <span className="font-semibold tracking-tight text-slate-100">Cinematic Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="rounded-xl bg-white/10 px-4 py-2 text-white border border-white/10 hover:bg-white/15 transition-colors">Hire Me</button>
        </div>
      </motion.nav>
    </div>
  );
}
