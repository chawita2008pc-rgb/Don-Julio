import { Flame, Wine, Award, ArrowRight, Star, UtensilsCrossed } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Section } from '@/components/Section';

export function Home() {
  return (
    <>
      {/* Beat 1: El Origen (Hero) */}
      <div className="relative" id="origen">
        <ContainerScroll
          titleComponent={
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-serif italic font-light text-white mb-4 leading-tight">
                El Latido de la Pampa
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans mt-8">
                Fundada por Pablo Rivero. Elevada por el fuego.
                <br />
                Un legado construido sobre la familia, la tradición y la búsqueda del asado perfecto.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
              alt="Interior de Parrilla Don Julio"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/15 rounded-2xl" />
          </div>
        </ContainerScroll>
      </div>

      {/* Beat 2: La Filosofía */}
      <Section id="filosofia" className="relative">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">01. La Filosofía</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ganadería Regenerativa</h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            Nuestro compromiso comienza en el suelo. Trabajamos exclusivamente con ganado Angus y Hereford,
            criado a campo abierto. Cada corte cuenta una historia de paciencia y respeto por la naturaleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="font-mono text-4xl text-primary mb-4">21+</div>
            <h3 className="font-serif text-2xl mb-2">Días de Maduración</h3>
            <p className="text-text-secondary text-sm">Proceso de maduración húmeda para garantizar terneza e intensificar los sabores naturalmente.</p>
          </div>

          <div className="bg-surface border border-border rounded-2xl hover:border-primary/50 transition-colors group md:col-span-2 overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="font-mono text-5xl text-primary mb-4">100%</div>
              <h3 className="font-serif text-2xl mb-3">Angus & Hereford a Pasto</h3>
              <p className="text-text-secondary text-sm max-w-md">Ganado libre en las ricas tierras de la Pampa. Sin feedlots, sin estrés. Solo naturaleza.</p>
            </div>
            <div className="w-full md:w-1/2 p-6 flex items-center">
              <div className="w-full aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2070&auto=format&fit=crop"
                  alt="Ganado en la Pampa"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group md:col-span-3 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="font-mono text-primary mb-2">La Comarca</div>
              <h3 className="font-serif text-3xl mb-4">Nuestra Huerta Orgánica</h3>
              <p className="text-text-secondary">
                Cada vegetal que se sirve en Don Julio proviene de nuestro propio proyecto orgánico, "La Comarca".
                Cultivamos productos de estación para acompañar nuestras carnes, respetando el ciclo de la naturaleza en cada plato.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1969&auto=format&fit=crop"
                alt="Huerta orgánica La Comarca"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Beat 3: El Ritual (La Parrilla) */}
      <Section id="ritual" fullWidth className="bg-surface py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop"
              alt="La parrilla con fuego"
              loading="lazy"
              className="relative rounded-2xl shadow-2xl border border-border rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 text-primary">
              <Flame className="w-6 h-6" />
              <span className="font-mono uppercase tracking-widest">El Ritual</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-none">
              Maestros del <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Fuego</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Pepe Sotelo, nuestro maestro parrillero, orquesta las llamas. Usamos exclusivamente carbón de "Quebracho Blanco",
              conocido por su calor constante y ausencia de chispas, permitiendo que la carne exprese su verdadero carácter sin interferencias.
            </p>
            <div className="grid grid-cols-2 gap-8 font-mono text-sm">
              <div className="border-l border-primary pl-4">
                <div className="text-white font-bold">Quebracho Blanco</div>
                <div className="text-text-secondary">Madera densa y dura</div>
              </div>
              <div className="border-l border-primary pl-4">
                <div className="text-white font-bold">Parrilla en V</div>
                <div className="text-text-secondary">Técnica tradicional</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Beat 4: La Cava */}
      <Section id="cava">
        <div className="text-center mb-16">
          <Wine className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">El Santuario</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Una catedral del vino argentino. 60.000 botellas descansando en silencio.
          </p>
        </div>

        <div className="relative h-[60vh] rounded-3xl overflow-hidden group">
          <img
            src="/vinoteca-don-julio.jpg"
            alt="Cava de vinos de Don Julio"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-serif italic mb-4">"Verticales"</h3>
              <p className="text-gray-300 mb-6">
                Nuestra cava alberga colecciones verticales de las etiquetas más prestigiosas de Argentina.
                Probá la evolución de un viñedo a través de los años.
              </p>
              <div className="flex flex-wrap gap-4">
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
            <div className="font-mono text-xs text-primary uppercase tracking-widest">Cosecha más antigua</div>
          </div>
          <div className="p-6 border-x border-border">
            <div className="font-serif text-4xl mb-2 italic">60k</div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest">Botellas</div>
          </div>
          <div className="p-6">
            <div className="font-serif text-4xl mb-2 italic">Firmadas</div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest">Botellas vacías por comensales</div>
          </div>
        </div>
      </Section>

      {/* Beat 5: Reconocimientos */}
      <Section id="reconocimientos" className="bg-[#080808]">
        <div className="flex flex-col items-center text-center">
          <Award className="w-12 h-12 text-primary mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif mb-12">Reconocimiento Global</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <h3 className="font-serif text-xl">Estrella Michelin</h3>
              <p className="text-text-secondary text-sm">Excelencia en cocina, vale la pena la visita.</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-green-500 transition-colors">
                <div className="relative">
                  <Star className="w-8 h-8 text-green-500" fill="currentColor" />
                </div>
              </div>
              <h3 className="font-serif text-xl">Estrella Verde Michelin</h3>
              <p className="text-text-secondary text-sm">Gastronomía y sustentabilidad.</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="font-serif text-3xl font-bold">#10</span>
              </div>
              <h3 className="font-serif text-xl">World's 50 Best</h3>
              <p className="text-text-secondary text-sm">Entre los mejores restaurantes del mundo.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Beat 6: Reservar */}
      <Section id="reservar" className="py-40">
        <div className="max-w-4xl mx-auto text-center bg-surface border border-border p-12 md:p-24 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <UtensilsCrossed className="w-12 h-12 mx-auto mb-8 text-primary opacity-50" />

          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">Viví Don Julio</h2>
          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
            Te recibimos con una copa de espumante y una empanada mientras esperás.
            Las reservas son altamente recomendadas.
          </p>

          <a
            href="https://wa.me/5491153115668?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20Don%20Julio"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 font-mono uppercase tracking-widest text-sm">Reservar Mesa</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-text-secondary font-mono text-xs uppercase tracking-widest">
            <span>Guatemala 4699 (esq. Gurruchaga), Palermo Viejo</span>
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </Section>
    </>
  );
}