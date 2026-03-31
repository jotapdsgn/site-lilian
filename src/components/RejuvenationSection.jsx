import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Atendimento personalizado desde a primeira consulta",
  "Planejamento individualizado",
  "Resultados naturais e elegantes",
  "Técnicas atualizadas e seguras",
  "Experiência pensada em cada detalhe"
];

export default function RejuvenationSection({ treatmentImage }) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* TEXTO (agora só lista) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4 md:space-y-5"
        >
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-primary" />
              </div>

              <p className="font-body text-base md:text-lg text-foreground font-light leading-relaxed">
                {b}
              </p>
            </div>
          ))}
        </motion.div>

        {/* IMAGEM (mantida) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-xl relative w-full max-w-sm mx-auto lg:max-w-none">
            <img
              src="https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f99d1c92d_Screenshot_1.jpg"
              alt="Tratamento de rejuvenescimento facial"
              className="w-full h-72 sm:h-80 md:h-[500px] object-cover"
            />

            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://media.base44.com/images/public/69c6fc2447dd489dd576db88/5b32a3dae_white-abstract-texture-background.jpg)",
                backgroundSize: "150px",
                opacity: 0.08
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}