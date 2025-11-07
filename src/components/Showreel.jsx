import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="relative overflow-hidden rounded-[22px]">
          <motion.div
            initial={{ scale: 1.04, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-video w-full"
          >
            <video
              className="h-full w-full object-cover"
              src="https://cdn.coverr.co/videos/coverr-edit-suite-5980/1080p.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>

          {/* Soft reflection */}
          <div className="pointer-events-none absolute inset-x-0 -top-12 h-20 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-3xl text-center">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Showreel</h3>
        <p className="mt-2 text-slate-300">A rapid montage of commercial, narrative, and experimental projects. Crisp pacing, tasteful transitions, and immersive sound design.</p>
      </div>
    </section>
  );
}
