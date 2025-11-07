import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-black/0 to-black/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-semibold tracking-tight text-white">Let’s craft something cinematic.</h4>
            <p className="mt-2 text-slate-300">Available for commercials, short films, branded content, and music videos.</p>
          </div>
          <div className="flex md:justify-end">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="mailto:hello@cinematic.studio"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl hover:bg-white/10"
            >
              hello@cinematic.studio
            </motion.a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Cinematic Studio</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Vimeo</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
