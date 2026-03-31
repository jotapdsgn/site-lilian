import { motion } from "framer-motion";
import TreatmentCard from "./TreatmentCard";
import { Link } from "react-router-dom";

const WHATSAPP_BASE = "https://api.whatsapp.com/send/?phone=5531994105755&text=";

export default function TreatmentsSection({ images }) {
  const treatments = [
  {
    title: "Harmonização Facial",
    desc: "Conjunto de técnicas que equilibram os traços do rosto, valorizando sua beleza natural com resultados sutis e sofisticados.",
    image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/46865cb01_harmonizacao-facial.jpg",
    msg: "Olá! Gostaria de saber mais sobre Harmonização Facial."
  },
  {
    title: "Toxina Botulínica",
    desc: "Suaviza rugas e linhas de expressão, prevenindo o envelhecimento com aspecto leve e natural, sem perder a identidade.",
    image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/eae5d44dc_botox-tratamentos-faciais.jpg",
    msg: "Olá! Gostaria de saber mais sobre Toxina Botulínica (Botox)."
  },
  {
    title: "Preenchimentos",
    desc: "Restaura volume, contorno e sustentação da face, corrigindo sulcos e realçando pontos estratégicos com precisão.",
    image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f55b89c49_Preenchimento-facial.jpg",
    msg: "Olá! Gostaria de saber mais sobre Preenchimentos."
  },
  {
    title: "Bioestimuladores de Colágeno",
    desc: "Estimula a produção natural de colágeno, melhorando firmeza, qualidade e densidade da pele ao longo do tempo.",
    image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/7267af99b_bioestimulador-de-colageno-radiesse-bio-renew-clinica-de-estetica.jpg",
    msg: "Olá! Gostaria de saber mais sobre Bioestimuladores de Colágeno."
  },
  {
    title: "Rinomodelação",
    desc: "Corrige imperfeições do nariz sem cirurgia, proporcionando harmonia facial com resultados imediatos e refinados.",
    image: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/aaa83258d_rinomodelacao-em-Belo-Horizonte.jpg",
    msg: "Olá! Gostaria de saber mais sobre Rinomodelação."
  }];


  return (
    <section id="tratamentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Tratamentos

          </p>
          <h2 className="font-heading text-2xl md:text-5xl font-light leading-tight text-foreground">Tratamentos modernos com abordagem personalizada

          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground font-light max-w-2xl mx-auto">
            Nossos procedimentos são personalizados para cada paciente, com técnicas eficazes
            que trazem naturalidade e resultados que transformam.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {treatments.map((t, i) =>
          <TreatmentCard
            key={i}
            title={t.title}
            description={t.desc}
            image={t.image}
            whatsappLink={WHATSAPP_BASE + encodeURIComponent(t.msg)}
            delay={i * 0.1} />

          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12">
          
          <Link
            to="/tratamentos"
            className="inline-block font-body text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            
            Ver todos os tratamentos
          </Link>
        </motion.div>
      </div>
    </section>);

}