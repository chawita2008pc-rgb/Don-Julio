import { Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-bold tracking-tighter text-white mb-4">DON JULIO</div>
            <p className="text-text-secondary text-sm">
              La experiencia definitiva del asado argentino en el corazón de Palermo Viejo.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Guatemala 4699 (esq. Gurruchaga), Palermo Viejo, Buenos Aires</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+541148319564" className="hover:text-primary transition-colors">+54 11 4831-9564</a>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Todos los días — 11:30 a 16:00 / 19:00 a 01:00</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@parrilladonjulio.com.ar" className="hover:text-primary transition-colors">info@parrilladonjulio.com.ar</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Seguinos</span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/donjulioparrilla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Don Julio"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-text-secondary font-mono text-xs">
          <p>&copy; {new Date().getFullYear()} Parrilla Don Julio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
