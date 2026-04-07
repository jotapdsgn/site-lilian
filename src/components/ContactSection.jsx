import { Phone, CalendarDays, MapPin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const mapsUrl = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <>
      <section className="py-16 bg-brand-gradient">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-center text-primary-foreground mb-10 font-medium tracking-tight">
            Agende uma consulta
          </h2>

          {/* Grid dos cards: limitado em largura e centralizado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            <div className="flex flex-col items-center text-center rounded-xl p-6 border border-primary-foreground/20 bg-primary-foreground/10 w-full">
              <Phone className="text-primary-foreground mb-3 opacity-95" size={32} />
              <p className="font-body text-base md:text-lg text-primary-foreground/75 mb-1">Telefone</p>
              <a
                href="tel:+5531994105755"
                className="font-body text-base md:text-lg text-primary-foreground hover:opacity-90 transition-opacity"
              >
                (31) 99410-5755
              </a>
            </div>

            <div className="flex flex-col items-center text-center rounded-xl p-6 border border-primary-foreground/20 bg-primary-foreground/10 w-full">
              <CalendarDays className="text-primary-foreground mb-3 opacity-95" size={32} />
              <p className="font-body text-base md:text-lg text-primary-foreground/75 mb-1">Agendamento</p>
              <p className="font-body text-base md:text-lg text-primary-foreground">10h às 19h30</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-hero-bg">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-center text-foreground mb-12 font-medium tracking-tight">
            Local de atendimentos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Itaúna */}
            <div className="rounded-xl p-6 border border-border bg-card/80 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-gold flex-shrink-0" size={22} />
                <h3 className="font-display text-lg md:text-xl text-foreground">Itaúna</h3>
              </div>

              <div className="mt-1 flex flex-col items-start">
                <a
                  href={mapsUrl("Av. Jove Soares, 768, Sala 02, Itaúna MG, 35680-352, Brasil")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Avenida Jove Soares, 768 no Google Maps"
                  className="font-body text-sm md:text-base text-muted-foreground leading-tight line-clamp-3 max-h-[4.5rem] overflow-hidden hover:underline underline-offset-2 text-left"
                >
                  Av. Jove Soares, 768, Sala 02
                  <br />
                  Itaúna, MG 35680-352
                </a>

                <div className="mt-4">
                  <a
                    href={mapsUrl("Av. Jove Soares, 768, Sala 02, Itaúna MG, 35680-352, Brasil")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base text-primary bg-primary-foreground/6 px-4 py-2 rounded-md hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Abrir Avenida Jove Soares, 768 no Google Maps"
                  >
                    <ExternalLink size={18} />
                    Abrir no Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Belo Horizonte (agora em segundo) */}
            <div className="rounded-xl p-6 border border-border bg-card/80 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-gold flex-shrink-0" size={22} />
                <h3 className="font-display text-lg md:text-xl text-foreground">Belo Horizonte</h3>
              </div>

              <div className="mt-1 flex flex-col items-start">
                <a
                  href={mapsUrl("R. Gonçalves Dias, 82, Funcionários, Belo Horizonte, MG, 30140-090, Brasil")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir R. Gonçalves Dias, 82 no Google Maps"
                  className="font-body text-sm md:text-base text-muted-foreground leading-tight line-clamp-3 max-h-[4.5rem] overflow-hidden hover:underline underline-offset-2 text-left"
                >
                  R. Gonçalves Dias, 82
                  <br />
                  Funcionários — Belo Horizonte 30140-090
                </a>

                <div className="mt-4">
                  <a
                    href={mapsUrl("R. Gonçalves Dias, 82, Funcionários, Belo Horizonte, MG, 30140-090, Brasil")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base text-primary bg-primary-foreground/6 px-4 py-2 rounded-md hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Abrir R. Gonçalves Dias, 82 no Google Maps"
                  >
                    <ExternalLink size={18} />
                    Abrir no Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Igarapé (agora em terceiro) */}
            <div className="rounded-xl p-6 border border-border bg-card/80 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-gold flex-shrink-0" size={22} />
                <h3 className="font-display text-lg md:text-xl text-foreground">Igarapé</h3>
              </div>

              <div className="mt-1 flex flex-col items-start">
                <a
                  href={mapsUrl("Av. Professor Clóvis Salgado, 746, Sala 01, Padre Eustáquio, Igarapé, MG, 32515-196, Brasil")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Av. Professor Clóvis Salgado, 746 no Google Maps"
                  className="font-body text-sm md:text-base text-muted-foreground leading-tight line-clamp-3 max-h-[4.5rem] overflow-hidden hover:underline underline-offset-2 text-left"
                >
                  Av. Prof. Clóvis Salgado, 746, Sala 01
                  <br />
                  Padre Eustáquio — Igarapé 32515-196
                </a>

                <div className="mt-4">
                  <a
                    href={mapsUrl("Av. Professor Clóvis Salgado, 746, Sala 01, Padre Eustáquio, Igarapé, MG, 32515-196, Brasil")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base text-primary bg-primary-foreground/6 px-4 py-2 rounded-md hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Abrir Av. Professor Clóvis Salgado, 746 no Google Maps"
                  >
                    <ExternalLink size={18} />
                    Abrir no Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}