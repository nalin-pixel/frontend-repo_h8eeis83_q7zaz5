import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-200/70 bg-gradient-to-b from-white/40 to-white/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-semibold tracking-tight text-slate-900">Let’s craft something cinematic.</h4>
            <p className="mt-2 text-slate-600">Available for commercials, short films, branded content, and music videos.</p>
          </div>
          <div className="flex md:justify-end">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="mailto:hello@cinematic.studio"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-[0_10px_36px_rgba(2,6,23,0.25)] hover:shadow-[0_12px_44px_rgba(2,6,23,0.32)]"
            >
              hello@cinematic.studio
            </motion.a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Cinematic Studio</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Instagram</a>
            <a href="#" className="hover:text-slate-700">Vimeo</a>
            <a href="#" className="hover:text-slate-700">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
