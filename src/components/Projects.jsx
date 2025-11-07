import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon City — Short Film Edit',
    tag: 'Color Grading · Sound Design · VFX',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Minimal Tech Commercial',
    tag: 'Product Film · Motion Design',
    cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cinematic Travel Montage',
    tag: 'Editing · Transitions · LUTs',
    cover: 'https://images.unsplash.com/photo-1522771930-78848d9293e7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Luxury Fashion Teaser',
    tag: 'Editorial · Slow Motion',
    cover: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProjectCard({ item, i }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="absolute inset-0 flex items-end p-6">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {item.title}
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="pointer-events-none rounded-full bg-white/80 px-3 py-1 text-xs text-slate-900 backdrop-blur-xl"
            >
              View
            </motion.div>
          </div>
          <p className="mt-2 text-sm text-white/80">{item.tag}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Selected Work</h2>
        <p className="mt-3 text-slate-600">A curated collection of edits blending narrative pacing, tasteful motion, and contemporary color palettes.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} item={p} i={idx} />)
        )}
      </div>
    </section>
  );
}
