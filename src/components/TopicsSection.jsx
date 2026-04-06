import { CheckCircle } from "lucide-react";

const topics = [
  "Atendimento personalizado desde a primeira consulta",
  "Planejamento individualizado",
  "Resultados naturais e elegantes",
  "Técnicas atualizadas e seguras",
  "Experiência pensada em cada detalhe",
];

export default function TopicsSection() {
  return (
    <section className="py-20 bg-brand-gradient" aria-label="Diferenciais">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <div
              key={topic}
              className="flex items-start gap-4 rounded-xl p-5 border border-primary-foreground/20 bg-primary-foreground/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            >
              <CheckCircle
                className="text-primary-foreground flex-shrink-0 mt-0.5 opacity-90"
                size={22}
              />
              <p className="font-body text-sm md:text-base text-primary-foreground leading-relaxed">
                {topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}