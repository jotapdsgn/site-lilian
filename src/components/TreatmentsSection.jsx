import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WHATSAPP_BASE = "https://api.whatsapp.com/send/?phone=5531994105755&text=";

export default function TreatmentsSection({ images }) {
  const treatments = [
    {
      title: "Harmonização Facial",
      desc: "Equilíbrio e proporção para um rosto mais harmônico, sem perder a naturalidade.",
      image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/46865cb01_harmonizacao-facial.jpg",
      msg: "Olá! Gostaria de saber mais sobre Harmonização Facial."
    },
    {
      title: "Preenchimento Labial",
      desc: "Lábios mais definidos, hidratados e proporcionais ao seu rosto.",
      image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f55b89c49_Preenchimento-facial.jpg",
      msg: "Olá! Gostaria de saber mais sobre Preenchimento Labial."
    },
    {
      title: "Toxina Botulínica (Botox)",
      desc: "Suavização de linhas de expressão com leveza e naturalidade.",
      image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/eae5d44dc_botox-tratamentos-faciais.jpg",
      msg: "Olá! Gostaria de saber mais sobre Toxina Botulínica (Botox)."
    },
    {
      title: "Bioestimuladores de colágeno",
      desc: "Mais firmeza e qualidade de pele de forma progressiva.",
      image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/7267af99b_bioestimulador-de-colageno-radiesse-bio-renew-clinica-de-estetica.jpg",
      msg: "Olá! Gostaria de saber mais sobre Bioestimuladores de Colágeno."
    },
    {
      title: "Rinomodelação",
      desc: "Refinamento do perfil nasal com harmonia e naturalidade.",
      image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/aaa83258d_rinomodelacao-em-Belo-Horizonte.jpg",
      msg: "Olá! Gostaria de saber mais sobre Rinomodelação."
    }
  ];

  return (
    <section id="tratamentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Procedimentos
          </p>

          <h2 className="text-foreground">
            <span className="font-heading text-4xl md:text-5xl font-light block leading-[1.1] tracking-tight">
              Tratamentos e Protocolos
            </span>

            <span className="font-script text-6xl md:text-8xl block leading-[1.0] -mt-1 text-primary">
              com abordagem personalizada
            </span>
          </h2>

          <p className="mt-4 font-body text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Soluções modernas e seguras para realçar sua beleza com equilíbrio e sofisticação.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                {/* Título reduzido e com quebra segura */}
                <h3
                  className="font-heading text-lg md:text-xl text-foreground mb-2 leading-snug break-words whitespace-normal min-h-[2.5rem] md:min-h-[3rem]"
                  title={t.title}
                >
                  {t.title}
                </h3>

                <p className="text-muted-foreground font-body text-base mb-4">{t.desc}</p>

                {/* Botão alinhado à esquerda no mobile */}
                <div className="mt-auto text-left">
                  <a
                    href={WHATSAPP_BASE + encodeURIComponent(t.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-base font-body hover:underline"
                  >
                    Saber mais →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/tratamentos"
            className="inline-block font-body text-base tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Ver todos os procedimentos
          </Link>
        </motion.div>

      </div>
    </section>
  );
}