import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Lilian%20Monteiro.";

const benefits = [
"Realce da beleza natural com equilíbrio e sofisticação",
"Planos personalizados, respeitando sua individualidade",
"Resultados progressivos e harmônicos",
"Procedimentos seguros e minimamente invasivos",
"Retorno rápido à rotina, com conforto e discrição"];


export default function RejuvenationSection({ treatmentImage }) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Resultados naturais

          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light leading-tight text-foreground">
            Resultados naturais, pensados para você.
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground font-light leading-relaxed">
            Aqui, cada procedimento é planejado de forma personalizada, respeitando sua anatomia, proporções e identidade, para realçar sua beleza com leveza e precisão.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((b, i) =>
            <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" />
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            )}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 font-body text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity block text-center mx-auto w-fit lg:mx-0">
            
            Quero agendar minha consulta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative">
          
          <div className="rounded-[2rem] overflow-hidden shadow-xl relative w-44 mx-auto lg:w-full">
            <img src="https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f99d1c92d_Screenshot_1.jpg"

            alt="Tratamento de rejuvenescimento facial" className="w-full h-64 md:h-[500px] object-cover" />
            
            
            <div className="absolute inset-0" style={{ backgroundImage: 'url(https://media.base44.com/images/public/69c6fc2447dd489dd576db88/5b32a3dae_white-abstract-texture-background.jpg)', backgroundSize: '150px', opacity: 0.08 }} />
          </div>
        </motion.div>
      </div>
    </section>);

}