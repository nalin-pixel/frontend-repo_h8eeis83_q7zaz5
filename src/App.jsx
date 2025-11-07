import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Showreel from './components/Showreel';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Showreel />
      <Footer />
    </div>
  );
}
