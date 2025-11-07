import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <section ref={ref} className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradients and glows (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_20%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
        >
          Premium Video Editing Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-4 max-w-2xl text-slate-300"
        >
          Apple-inspired minimalism, cinematic pacing, and refined motion—built with modern, glassy UI and smooth transitions.
        </motion.p>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-8 flex items-center gap-3"
        >
          <a href="#work" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_48px_rgba(255,255,255,0.2)] transition-shadow">View Work</a>
          <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur-xl hover:bg-white/10 transition-colors">Get in Touch</a>
        </motion.div>

        {/* Floating glass chips */}
        <div className="pointer-events-none absolute left-6 top-28 hidden md:block">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            Depth & micro-interactions
          </motion.div>
        </div>
        <div className="pointer-events-none absolute right-6 bottom-24 hidden md:block">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            Glassmorphism aesthetic
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
