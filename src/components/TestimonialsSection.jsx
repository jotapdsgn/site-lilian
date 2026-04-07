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
    <section id="depoimentos" className="py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[1.75rem] border border-border/80 bg-card p-6 md:p-10 text-center shadow-[0_24px_70px_-20px_rgba(40,30,22,0.18),inset_0_1px_0_0_rgba(255,255,255,0.65)] ring-1 ring-black/[0.04]"
        >

          {/* Título */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Depoimentos
            </p>

            <h2 className="font-heading text-2xl md:text-4xl font-light text-foreground tracking-tight leading-tight">
              Histórias que falam por si
            </h2>
          </div>

          {/* Card */}
          <div className="mt-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-border/60 bg-secondary/25 px-6 py-6 md:px-8 md:py-8 shadow-inner"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed italic max-w-xl mx-auto">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="mt-6">
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">
                    Paciente
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegação */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                type="button"
                onClick={prev}
                className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center hover:scale-110 transition"
              >
                <ChevronLeft size={18} className="text-muted-foreground" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-primary scale-125" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center hover:scale-110 transition"
              >
                <ChevronRight size={18} className="text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Texto final */}
          <p className="mt-6 font-body text-sm text-muted-foreground max-w-md mx-auto">
            Resultados que vão além da estética e refletem em autoconfiança e autoestima.
          </p>

          {/* Botão */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-5 font-body text-sm tracking-wider bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Falar com a Dra. Lilian
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}