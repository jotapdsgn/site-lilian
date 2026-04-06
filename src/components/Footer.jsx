import { Phone } from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-4.74-4.74 4 4 0 0 1 4.74 4.74z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LOGO_LIGHT =
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/dbbf97335_Prancheta6-8.png";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20tratamentos%20da%20Dra.%20Lilian%20Monteiro.";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Logo + SSL image abaixo da logo (SSL maior que a logo) */}
          <div>
            <img
              src={LOGO_LIGHT}
              alt="Dra. Lilian Monteiro"
              className="h-10 object-contain mb-3"
            />
            {/* imagem ssl.png na pasta public/images, maior que a logo */}
            <img
              src="/images/ssl.png"
              alt="Certificado SSL"
              className="h-14 md:h-14 object-contain"
            />
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
              Contato
            </h4>

            <div className="space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm hover:text-primary-foreground transition-colors"
              >
                <Phone size={14} />
                (31) 99410-5755
              </a>

              <a
                href="https://www.instagram.com/dralilianmonteiros/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm hover:text-primary-foreground transition-colors"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
              Navegação
            </h4>

            <div className="space-y-3">
              <a
                href="#tratamentos"
                className="block font-body text-sm hover:text-primary-foreground transition-colors"
              >
                Procedimentos
              </a>

              <a
                href="#sobre"
                className="block font-body text-sm hover:text-primary-foreground transition-colors"
              >
                Sobre mim
              </a>

              <a
                href="#depoimentos"
                className="block font-body text-sm hover:text-primary-foreground transition-colors"
              >
                Depoimentos
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            Copyright © 2025 Dra. Lilian Monteiro — Biomédica Esteta | CRBM 16928
          </p>
        </div>
      </div>
    </footer>
  );
}