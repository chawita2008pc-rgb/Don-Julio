import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="font-serif text-2xl font-bold tracking-tighter text-white">DON JULIO</Link>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
            {isHome ? (
              <>
                <a href="#origen" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">Origen</a>
                <a href="#filosofia" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">Filosofía</a>
                <a href="#ritual" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">Ritual</a>
                <a href="#cava" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">La Cava</a>
              </>
            ) : (
              <Link to="/" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">Inicio</Link>
            )}
            <Link to="/menu" className={`transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 ${location.pathname === '/menu' ? 'text-primary' : 'hover:text-primary'}`}>La Carta</Link>
            {isHome ? (
              <a href="#reservar" className="text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">Reservar</a>
            ) : (
              <Link to="/#reservar" className="text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">Reservar</Link>
            )}
          </div>
          <button
            className="md:hidden text-white focus-visible:outline-2 focus-visible:outline-primary"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 font-serif text-3xl"
          >
            {isHome ? (
              <>
                <a href="#origen" onClick={() => setIsNavOpen(false)} className="hover:text-primary transition-colors">Origen</a>
                <a href="#filosofia" onClick={() => setIsNavOpen(false)} className="hover:text-primary transition-colors">Filosofía</a>
                <a href="#ritual" onClick={() => setIsNavOpen(false)} className="hover:text-primary transition-colors">Ritual</a>
                <a href="#cava" onClick={() => setIsNavOpen(false)} className="hover:text-primary transition-colors">La Cava</a>
              </>
            ) : (
              <Link to="/" onClick={() => setIsNavOpen(false)} className="hover:text-primary transition-colors">Inicio</Link>
            )}
            <Link to="/menu" onClick={() => setIsNavOpen(false)} className={location.pathname === '/menu' ? 'text-primary' : 'hover:text-primary transition-colors'}>La Carta</Link>
            {isHome ? (
              <a href="#reservar" onClick={() => setIsNavOpen(false)} className="text-primary">Reservar</a>
            ) : (
              <Link to="/#reservar" onClick={() => setIsNavOpen(false)} className="text-primary">Reservar</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
