import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = {
  // Layer 1: Outer edges (6 images)
  layer1: [
    'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=60', // asado parrilla
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60', // costillas BBQ
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=60', // fuego parrilla
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60', // plato gourmet
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop&q=60', // restaurante
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60', // carne asada
  ],
  // Layer 2: Inner columns (6 images)
  layer2: [
    'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&auto=format&fit=crop&q=60', // parrillada
    'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop&q=60', // vino tinto
    'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=800&auto=format&fit=crop&q=60', // corte de carne
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60', // plato restaurante
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=60', // empanadas
    'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&auto=format&fit=crop&q=60', // parrilla fuego
  ],
  // Layer 3: Center top and bottom (2 images)
  layer3: [
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60', // BBQ skewers
    'https://images.unsplash.com/photo-1558030137-a56c4b0c4606?w=800&auto=format&fit=crop&q=60', // steak
  ],
  // Center scaler
  center: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1200&auto=format&fit=crop&q=80', // asado argentino
};

function Layer({
  children,
  scrollYProgress,
  index,
}: {
  children: React.ReactNode;
  scrollYProgress: any;
  index: number;
}) {
  const endProgress = 1 - index * 0.05;

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.55 * endProgress, endProgress],
    [0, 0, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3 * endProgress, endProgress],
    [0, 0, 1]
  );

  return (
    <motion.div className="scroll-grid-layer" style={{ opacity, scale }}>
      {children}
    </motion.div>
  );
}

export function ScrollGridAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', '80% end'],
  });

  // Scaler: image shrinks from viewport size to natural size
  const scalerScale = useTransform(scrollYProgress, [0, 0.8], [isMobile ? 3 : 4, 1]);
  const scalerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <section ref={sectionRef} className="scroll-grid-section">
      <div className="scroll-grid-content">
        <div className="scroll-grid">
          {/* Layer 1: Outer edges */}
          {!isMobile && (
            <Layer scrollYProgress={scrollYProgress} index={0}>
              {images.layer1.map((src, i) => (
                <div key={i}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </Layer>
          )}

          {/* Layer 2: Inner columns */}
          <Layer scrollYProgress={scrollYProgress} index={1}>
            {images.layer2.map((src, i) => (
              <div key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </Layer>

          {/* Layer 3: Center column top and bottom */}
          <Layer scrollYProgress={scrollYProgress} index={2}>
            {images.layer3.map((src, i) => (
              <div key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </Layer>

          {/* Center scaler image */}
          <div className="scroll-grid-scaler">
            <motion.img
              src={images.center}
              alt="Asado argentino"
              style={{ scale: scalerScale, opacity: scalerOpacity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
