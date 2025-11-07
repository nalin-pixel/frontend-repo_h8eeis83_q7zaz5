import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  useEffect(() => {
    // Smooth scroll restoration for better parallax feel
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <section ref={ref} className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Frosted gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/80 backdrop-blur-[2px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
        >
          Futuristic Video Editing Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-4 max-w-2xl text-slate-600"
        >
          Cinematic storytelling, refined color science, and premium motion design—crafted with a minimalist Apple-inspired aesthetic.
        </motion.p>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-8 flex items-center gap-3"
        >
          <button className="rounded-xl bg-slate-900 px-5 py-3 text-white shadow-[0_8px_30px_rgba(2,6,23,0.25)] hover:shadow-[0_10px_36px_rgba(2,6,23,0.32)] transition-shadow">View Work</button>
          <button className="rounded-xl border border-slate-900/10 bg-white/70 px-5 py-3 text-slate-900 backdrop-blur-xl hover:bg-white/90 transition-colors">Get in Touch</button>
        </motion.div>

        {/* Floating glass chips */}
        <div className="pointer-events-none absolute left-6 top-28 hidden md:block">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/40 bg-white/50 px-4 py-2 text-xs text-slate-700 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          >
            Depth & micro-interactions
          </motion.div>
        </div>
        <div className="pointer-events-none absolute right-6 bottom-24 hidden md:block">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/40 bg-white/50 px-4 py-2 text-xs text-slate-700 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          >
            Glassmorphism aesthetic
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
