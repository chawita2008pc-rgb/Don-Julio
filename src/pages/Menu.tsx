import { motion } from 'framer-motion';
import { Flame, Wine, Leaf } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' }
  })
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Entradas',
    icon: <Flame className="w-5 h-5" />,
    items: [
      { name: 'Empanadas de Carne (x3)', description: 'Masa casera, carne cortada a cuchillo, especias criollas', price: '$4.500' },
      { name: 'Provoleta Don Julio', description: 'Provolone fundido a la parrilla con orégano y aceite de oliva', price: '$5.800' },
      { name: 'Chorizo Criollo', description: 'Embutido artesanal a las brasas, servido con chimichurri casero', price: '$4.200' },
      { name: 'Morcilla Vasca', description: 'Morcilla a la parrilla con un toque de pimentón ahumado', price: '$4.000' },
      { name: 'Tabla de Fiambres', description: 'Selección de bondiola, jamón crudo, quesos y aceitunas', price: '$8.500' },
      { name: 'Mollejas Grilladas', description: 'Crocantes por fuera, cremosas por dentro, con limón', price: '$7.200' },
    ]
  },
  {
    title: 'La Parrilla — Cortes',
    icon: <Flame className="w-5 h-5" />,
    items: [
      { name: 'Bife de Chorizo (400g)', description: 'El clásico argentino. Madurado 21 días, jugoso y con carácter', price: '$18.500' },
      { name: 'Ojo de Bife (450g)', description: 'Corte premium con veteado perfecto, intenso sabor a carne', price: '$22.000' },
      { name: 'Entraña', description: 'Tierna y sabrosa, sellada al fuego vivo de quebracho', price: '$16.800' },
      { name: 'Vacío', description: 'Cocción lenta sobre las brasas, crujiente por fuera, rosado por dentro', price: '$15.500' },
      { name: 'Tira de Asado', description: 'El alma del asado argentino. Corte grueso a la cruz', price: '$14.000' },
      { name: 'Bife de Lomo (350g)', description: 'El corte más tierno, madurado y grillado a punto', price: '$24.000' },
      { name: 'Colita de Cuadril', description: 'Magro y sabroso, ideal para quienes buscan un corte más suave', price: '$13.500' },
      { name: 'Parrillada Don Julio (2 personas)', description: 'Chorizo, morcilla, entraña, bife de chorizo, mollejas y provoleta', price: '$38.000' },
    ]
  },
  {
    title: 'Acompañamientos',
    icon: <Leaf className="w-5 h-5" />,
    items: [
      { name: 'Ensalada de la Huerta', description: 'Mix de hojas de La Comarca, tomate, cebolla morada y vinagreta', price: '$4.500' },
      { name: 'Papas Provenzal', description: 'Papas doradas al horno con ajo, perejil y aceite de oliva', price: '$4.000' },
      { name: 'Verduras Grilladas', description: 'Calabaza, berenjena, morrón y cebolla a la parrilla', price: '$5.200' },
      { name: 'Ensalada Rusa', description: 'Receta clásica con papa, zanahoria, arvejas y mayonesa casera', price: '$4.200' },
      { name: 'Puré de Papas', description: 'Cremoso, con manteca y un toque de nuez moscada', price: '$3.800' },
    ]
  },
  {
    title: 'Postres',
    icon: <Flame className="w-5 h-5" />,
    items: [
      { name: 'Flan Casero', description: 'Con dulce de leche y crema, receta de la abuela', price: '$5.500' },
      { name: 'Panqueques con Dulce de Leche', description: 'Crepas finas rellenas de dulce de leche, flameadas', price: '$5.800' },
      { name: 'Vigilante', description: 'Queso fresco y dulce de batata, el clásico argentino', price: '$4.800' },
      { name: 'Helado Artesanal', description: 'Tres bochas: dulce de leche, sambayón y chocolate amargo', price: '$5.200' },
      { name: 'Volcán de Chocolate', description: 'Bizcocho tibio de chocolate negro con centro líquido', price: '$6.500' },
    ]
  },
  {
    title: 'Vinos Destacados',
    icon: <Wine className="w-5 h-5" />,
    items: [
      { name: 'Catena Zapata Malbec', description: 'Mendoza. Aromas a frutos negros, especias y un final largo', price: '$12.000' },
      { name: 'Zuccardi Valle de Uco', description: 'Blend de altura. Elegante, con taninos sedosos', price: '$14.500' },
      { name: 'Rutini Cabernet-Malbec', description: 'Bi-varietal clásico. Cuerpo medio, ideal para carnes rojas', price: '$10.800' },
      { name: 'Luigi Bosca DOC', description: 'Luján de Cuyo. Intenso, con notas de vainilla y roble', price: '$11.500' },
      { name: 'Achaval Ferrer Finca Altamira', description: 'Single vineyard. Profundo, mineral y de gran complejidad', price: '$18.000' },
      { name: 'Copa de Espumante', description: 'Extra Brut argentino, ideal para recibir la velada', price: '$3.500' },
    ]
  }
];

export function Menu() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">Parrilla Don Julio</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">La Carta</h1>
          <div className="w-24 h-px bg-primary mx-auto mb-6" />
          <p className="text-text-secondary max-w-lg mx-auto text-lg">
            Cada plato es un homenaje al fuego, la tierra y la tradición argentina.
          </p>
        </motion.div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {menuData.map((category, catIndex) => (
          <motion.section
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            {/* Category Header */}
            <motion.div
              custom={0}
              variants={fadeIn}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{category.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            {/* Items */}
            <div className="space-y-1">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  custom={itemIndex + 1}
                  variants={fadeIn}
                  className="group flex items-baseline gap-4 py-4 px-4 -mx-4 rounded-xl hover:bg-surface/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-lg text-white group-hover:text-primary transition-colors">{item.name}</h3>
                      <div className="flex-1 border-b border-dotted border-border/50 min-w-[2rem] translate-y-[-4px]" />
                      <span className="font-mono text-primary text-sm shrink-0">{item.price}</span>
                    </div>
                    <p className="text-text-secondary text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="border-t border-border pt-8 text-center">
          <p className="text-text-secondary text-sm font-mono">
            Precios expresados en pesos argentinos. Servicio de mesa no incluido.
          </p>
          <p className="text-text-secondary text-xs font-mono mt-2 opacity-60">
            Los productos de nuestra huerta orgánica "La Comarca" están sujetos a disponibilidad estacional.
          </p>
        </div>
      </div>
    </div>
  );
}
