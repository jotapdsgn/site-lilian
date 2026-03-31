import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Lilian%20Monteiro.";

const testimonials = [
{
  text: "Ei Lilian!! Queria só te agradecer pelo atendimento impecável. Estou encantada com meu botox e meus lábios, estão maravilhosos. Em breve estarei de volta."
},
{
  text: "Nossa Lili, eu estou completamente apaixonada pelo resultado da minha boca e nariz! Ficou super natural, da forma que eu queria!! Quero eles assim pra sempre, não tem jeito rsrs"
},
{
  text: "Ei Dra. Bom dia! Tudo bem? Passando pra te falar que amei meu botox, como sempre... Só você mesmo para conseguir parar essa testa. Já estou sentindo diferença com os fios de colágeno."
}];


export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Depoimentos</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Histórias que falam por si</h2>
        </motion.div>

        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) =>
                <Star key={i} size={16} className="fill-primary text-primary" />
                )}
              </div>

              <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed italic max-w-2xl mx-auto">
                "{testimonials[current].text}"
              </p>

              <div className="mt-8">
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Paciente</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        <p className="mt-10 font-body text-sm text-muted-foreground">
          Resultados que vão além da estética e refletem em autoconfiança e autoestima.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-body text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
          Agendar minha consulta
        </a>
      </div>
    </section>
  );
}