import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WHATSAPP_BASE = "https://api.whatsapp.com/send/?phone=5531994105755&text=";

// 🎬 animações
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TreatmentsSection({ images }) {
  const treatments = [
    {
      title: "Harmonização Facial",
      desc: "Equilíbrio e proporção para um rosto mais harmônico, sem perder a naturalidade.",
      image: "/images/harmonizacao-facial.jpg",
      msg: "Olá! Gostaria de saber mais sobre Harmonização Facial.",
    },
    {
      title: "Preenchimento Labial",
      desc: "Lábios mais definidos, hidratados e proporcionais ao seu rosto.",
      image: "/images/preenchimentolabial.jpg",
      msg: "Olá! Gostaria de saber mais sobre Preenchimento Labial.",
    },
    {
      title: "Toxina Botulínica (Botox)",
      desc: "Suavização de linhas de expressão com leveza e naturalidade.",
      image: "/images/toxinabutolinica.jpg",
      msg: "Olá! Gostaria de saber mais sobre Toxina Botulínica (Botox).",
    },
    {
      title: "Bioestimuladores de colágeno",
      desc: "Mais firmeza e qualidade de pele de forma progressiva.",
      image: "/images/bioestimuladoresdecolageno.jpg",
      msg: "Olá! Gostaria de saber mais sobre Bioestimuladores de Colágeno.",
    },
    {
      title: "Rinomodelação",
      desc: "Refinamento do perfil nasal com harmonia e naturalidade.",
      image: "/images/rinomodelacao.jpg",
      msg: "Olá! Gostaria de saber mais sobre Rinomodelação.",
    },
  ];

  return (
    <section id="tratamentos" className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🎬 TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Procedimentos
          </p>

          <h2 className="text-foreground">
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-light block leading-[1.1] tracking-tight">
              Tratamentos e Protocolos
            </span>

            <span className="font-script text-primary text-4xl md:text-6xl lg:text-7xl block leading-[1.0] -mt-1">
              com abordagem personalizada
            </span>
          </h2>

          <p className="mt-4 font-body text-sm md:text-base lg:text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Soluções modernas e seguras para realçar sua beleza com equilíbrio e
            sofisticação.
          </p>
        </motion.div>

        {/* GRID COM ANIMAÇÃO */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {treatments.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-heading text-lg md:text-lg lg:text-2xl text-foreground mb-2 leading-snug">
                  {t.title}
                </h3>

                <p className="text-muted-foreground font-body text-sm md:text-base lg:text-lg mb-4">
                  {t.desc}
                </p>

                <div className="mt-auto text-left">
                  <a
                    href={WHATSAPP_BASE + encodeURIComponent(t.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm md:text-base lg:text-lg font-body hover:underline"
                  >
                    Saber mais →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Link
            to="/tratamentos"
            className="inline-block font-body text-sm md:text-base lg:text-lg tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            Ver todos os procedimentos
          </Link>
        </motion.div>

      </div>
    </section>
  );
}