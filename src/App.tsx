import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Section } from '@/components/Section';
import { Flame, Wine, Award, Calendar, ArrowRight, Menu, X, Star, UtensilsCrossed } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen text-text-primary selection:bg-primary selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-serif text-2xl font-bold tracking-tighter">DON JULIO</div>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
            <a href="#origin" className="hover:text-primary transition-colors">Origin</a>
            <a href="#product" className="hover:text-primary transition-colors">Product</a>
            <a href="#ritual" className="hover:text-primary transition-colors">Ritual</a>
            <a href="#vault" className="hover:text-primary transition-colors">Vault</a>
            <a href="#booking" className="text-primary">Book Table</a>
          </div>
          <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-30 bg-background flex flex-col items-center justify-center gap-8 font-serif text-3xl">
          <a href="#origin" onClick={() => setIsNavOpen(false)}>Origin</a>
          <a href="#product" onClick={() => setIsNavOpen(false)}>Product</a>
          <a href="#ritual" onClick={() => setIsNavOpen(false)}>Ritual</a>
          <a href="#vault" onClick={() => setIsNavOpen(false)}>Vault</a>
          <a href="#booking" onClick={() => setIsNavOpen(false)} className="text-primary">Book Table</a>
        </div>
      )}

      {/* Beat 1: The Origin (Hero) */}
      <div className="relative" id="origin">
        <ContainerScroll
          titleComponent={
            <div className="mb-12">
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-4 leading-tight">
                Don Julio <br />
                <span className="text-4xl md:text-6xl text-text-secondary italic font-light">El Latido de la Pampa</span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-sans mt-8">
                Fundada por Pablo Rivero. Elevada por el fuego.
                <br />
                A legacy built on family, tradition, and the pursuit of the perfect steak.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
              alt="Don Julio Interior"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
          </div>
        </ContainerScroll>
      </div>

      {/* Beat 2: The Product (Philosophy) */}
      <Section id="product" className="relative">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">01. The Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ganadería Regenerativa</h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            Our commitment begins in the soil. We work exclusively with Angus and Hereford cattle, raised on open pastures.
            Every cut tells a story of patience and respect for nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="font-mono text-4xl text-primary mb-4">21+</div>
            <h3 className="font-serif text-2xl mb-2">Days Maturation</h3>
            <p className="text-text-secondary text-sm">Wet aging process to ensure tenderness and intensify flavors naturally.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group md:col-span-2 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2070&auto=format&fit=crop" 
              alt="Cattle" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10">
              <div className="font-mono text-4xl text-primary mb-4">100%</div>
              <h3 className="font-serif text-2xl mb-2">Grass-Fed Angus & Hereford</h3>
              <p className="text-text-secondary text-sm max-w-md">Free-roaming cattle on the rich Pampas soil. No feedlots, no stress. Just nature.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group md:col-span-3 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <div className="font-mono text-primary mb-2">La Comarca</div>
                <h3 className="font-serif text-3xl mb-4">Our Organic Garden</h3>
                <p className="text-text-secondary">
                  Every vegetable served at Don Julio comes from our own organic project, "La Comarca". 
                  We cultivate seasonal produce to accompany our meats, ensuring the cycle of nature is respected on every plate.
                </p>
             </div>
             <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1969&auto=format&fit=crop" 
                  alt="Vegetables" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </Section>

      {/* Beat 3: The Ritual (The Grill) */}
      <Section id="ritual" fullWidth className="bg-surface py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop" 
              alt="The Grill" 
              className="relative rounded-2xl shadow-2xl border border-border rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 text-primary">
              <Flame className="w-6 h-6" />
              <span className="font-mono uppercase tracking-widest">The Ritual</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-none">
              Master of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Fire</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Pepe Sotelo, our master griller, orchestrates the flames. We use exclusively "Quebracho Blanco" charcoal, 
              known for its consistent heat and lack of sparks, allowing the meat to express its true character without interference.
            </p>
            <div className="grid grid-cols-2 gap-8 font-mono text-sm">
              <div className="border-l border-primary pl-4">
                <div className="text-white font-bold">Quebracho Blanco</div>
                <div className="text-text-secondary">Dense, hard wood</div>
              </div>
              <div className="border-l border-primary pl-4">
                <div className="text-white font-bold">Iron V-Groove</div>
                <div className="text-text-secondary">Traditional parrilla</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Beat 4: The Vault (La Cava) */}
      <Section id="vault">
        <div className="text-center mb-16">
          <Wine className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Sanctuary</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A cathedral of Argentine wine. 60,000 bottles resting in silence.
          </p>
        </div>

        <div className="relative h-[60vh] rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1569919774003-92977d59036e?q=80&w=2070&auto=format&fit=crop" 
            alt="Wine Cellar" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-serif italic mb-4">"Verticales"</h3>
              <p className="text-gray-300 mb-6">
                Our cellar houses vertical collections of Argentina's most prestigious labels. 
                Taste the evolution of a vineyard through the years.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-mono text-xs">
                  Catena Zapata
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-mono text-xs">
                  Zuccardi
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-mono text-xs">
                  Rutini
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-6">
              <div className="font-serif text-4xl mb-2 italic">1999</div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">Oldest Vintage</div>
           </div>
           <div className="p-6 border-x border-border">
              <div className="font-serif text-4xl mb-2 italic">60k</div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">Bottles</div>
           </div>
           <div className="p-6">
              <div className="font-serif text-4xl mb-2 italic">Signed</div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">Empty Bottles by Guests</div>
           </div>
        </div>
      </Section>

      {/* Beat 5: The Recognition */}
      <Section id="recognition" className="bg-[#080808]">
        <div className="flex flex-col items-center text-center">
          <Award className="w-12 h-12 text-primary mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif mb-12">Global Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <h3 className="font-serif text-xl">Michelin Star</h3>
              <p className="text-text-secondary text-sm">Excellence in cooking, worth a stop.</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-green-500 transition-colors">
                <div className="relative">
                  <Star className="w-8 h-8 text-green-500" fill="currentColor" />
                </div>
              </div>
              <h3 className="font-serif text-xl">Michelin Green Star</h3>
              <p className="text-text-secondary text-sm">Gastronomy and sustainability.</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="font-serif text-3xl font-bold">#10</span>
              </div>
              <h3 className="font-serif text-xl">World's 50 Best</h3>
              <p className="text-text-secondary text-sm">Among the best restaurants in the world.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Beat 6: The Call (Booking) */}
      <Section id="booking" className="py-40">
        <div className="max-w-4xl mx-auto text-center bg-surface border border-border p-12 md:p-24 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <UtensilsCrossed className="w-12 h-12 mx-auto mb-8 text-primary opacity-50" />
          
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">Experience Don Julio</h2>
          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
            We welcome you with a glass of sparkling wine and an empanada while you wait. 
            Reservations are highly recommended.
          </p>
          
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
             <span className="relative z-10 font-mono uppercase tracking-widest text-sm">Reserve Table</span>
             <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <div className="mt-12 flex justify-center gap-8 text-text-secondary font-mono text-xs uppercase tracking-widest">
            <span>Guatemala 4699, Palermo Viejo</span>
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-border text-center text-text-secondary font-mono text-xs">
        <p>&copy; {new Date().getFullYear()} Parrilla Don Julio. All rights reserved.</p>
      </footer>
    </div>
  );
}
