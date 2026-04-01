import { Phone, MessageCircle, CalendarDays, Clock, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      <section className="py-16 bg-brand-gradient">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-xl md:text-2xl text-center text-primary-foreground mb-10 font-medium tracking-tight">
            Agende uma consulta
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center rounded-xl p-6 border border-primary-foreground/20 bg-primary-foreground/10">
              <Phone className="text-primary-foreground mb-3 opacity-95" size={28} />
              <p className="font-body text-sm text-primary-foreground/75 mb-1">Telefone</p>
              <a
                href="tel:+5531994105755"
                className="font-body text-primary-foreground text-sm hover:opacity-90 transition-opacity"
              >
                (31) 99410-5755
              </a>
            </div>
            <div className="flex flex-col items-center text-center rounded-xl p-6 border border-primary-foreground/20 bg-primary-foreground/10">
              <MessageCircle className="text-primary-foreground mb-3 opacity-95" size={28} />
              <p className="font-body text-sm text-primary-foreground/75 mb-1">WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-primary-foreground text-sm hover:opacity-90 transition-opacity"
              >
                (31) 99410-5755
              </a>
            </div>
            <div className="flex flex-col items-center text-center rounded-xl p-6 border border-primary-foreground/20 bg-primary-foreground/10">
              <CalendarDays className="text-primary-foreground mb-3 opacity-95" size={28} />
              <p className="font-body text-sm text-primary-foreground/75 mb-1">Agendamento</p>
              <p className="font-body text-primary-foreground text-sm">10h às 20h30</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-xl p-6 border border-primary-foreground/20 bg-primary-foreground/10">
              <Clock className="text-primary-foreground mb-3 opacity-95" size={28} />
              <p className="font-body text-sm text-primary-foreground/75 mb-1">Funcionamento</p>
              <p className="font-body text-primary-foreground text-sm">10h às 20h30</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-hero-bg">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-xl md:text-2xl text-center text-foreground mb-12 font-medium tracking-tight">
            Local de atendimentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 border border-border bg-card/80 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                <h3 className="font-display text-lg text-foreground">Itaúna</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Avenida Jove Soares, 768, Sala 02
                <br />
                Itaúna MG, 35680-352, Brasil
              </p>
            </div>
            <div className="rounded-xl p-6 border border-border bg-card/80 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                <h3 className="font-display text-lg text-foreground">Igarapé</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Avenida Professor Clóvis Salgado, 746, Sala 01
                <br />
                Padre Eustáquio — Igarapé
              </p>
            </div>
            <div className="rounded-xl p-6 border border-border bg-card/80 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                <h3 className="font-display text-lg text-foreground">Belo Horizonte</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                R. Gonçalves Dias, 82
                <br />
                Funcionários — Belo Horizonte
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
