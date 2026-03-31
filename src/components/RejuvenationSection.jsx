import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Atendimento personalizado desde a primeira consulta",
  "Planejamento individualizado",
  "Resultados naturais e elegantes",
  "Técnicas atualizadas e seguras",
  "Experiência pensada em cada detalhe"
];

export default function RejuvenationSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
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

      </div>
    </section>
  );
}