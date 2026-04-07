import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  "Atendimento personalizado desde a primeira consulta",
  "Planejamento individualizado",
  "Resultados naturais e elegantes",
  "Técnicas atualizadas e seguras",
  "Experiência pensada em cada detalhe",
];

// animação container (controla o delay em cascata)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// animação dos itens
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TopicsSection() {
  return (
    <section className="py-20 bg-brand-gradient" aria-label="Diferenciais">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {topics.map((topic, i) => (
            <motion.div
              key={topic}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 rounded-xl p-5 border border-primary-foreground/20 bg-primary-foreground/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-transform"
            >
              <CheckCircle
                className="text-primary-foreground flex-shrink-0 mt-0.5 opacity-90"
                size={22}
              />

              <p className="font-body text-sm md:text-base text-primary-foreground leading-relaxed">
                {topic}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}