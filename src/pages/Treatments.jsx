import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import TreatmentCard from "../components/TreatmentCard";

const WHATSAPP_BASE = "https://api.whatsapp.com/send/?phone=5531994105755&text=";

const IMAGES = {
  treatment: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/e90027931_generated_31a96336.png",
  rejuvenation: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/d4583bcdc_generated_3df5d131.png",
  filler: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/945a231a5_generated_dc01f921.png",
  botox: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/408de247d_generated_55350f63.png",
  pdo: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/fdd891351_generated_7cb335ec.png",
  laser: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/92a239970_generated_e0fd8d4e.png",
};

const categories = [
  {
    title: "Harmonização Facial",
    subtitle: "Técnicas que equilibram e valorizam sua beleza natural",
    treatments: [
      { title: "Harmonização Facial", desc: "Conjunto de técnicas que equilibram os traços do rosto, valorizando sua beleza natural com resultados sutis e sofisticados.", image: IMAGES.treatment, msg: "Olá! Gostaria de saber mais sobre Harmonização Facial." },
      { title: "Toxina Botulínica (Botox)", desc: "Suaviza rugas e linhas de expressão, prevenindo o envelhecimento com aspecto leve e natural, sem perder a identidade.", image: IMAGES.botox, msg: "Olá! Gostaria de saber mais sobre Toxina Botulínica (Botox)." },
      { title: "Preenchimentos", desc: "Restaura volume, contorno e sustentação da face, corrigindo sulcos e realçando pontos estratégicos com precisão.", image: IMAGES.filler, msg: "Olá! Gostaria de saber mais sobre Preenchimentos." },
      { title: "Bioestimuladores de Colágeno", desc: "Estimula a produção natural de colágeno, melhorando firmeza, qualidade e densidade da pele ao longo do tempo.", image: IMAGES.rejuvenation, msg: "Olá! Gostaria de saber mais sobre Bioestimuladores de Colágeno." },
      { title: "Rinomodelação", desc: "Corrige imperfeições do nariz sem cirurgia, proporcionando harmonia facial com resultados imediatos e refinados.", image: IMAGES.laser, msg: "Olá! Gostaria de saber mais sobre Rinomodelação." },
    ],
  },
  {
    title: "Qualidade de Pele",
    subtitle: "Tratamentos para uma pele mais saudável, luminosa e jovem",
    treatments: [
      { title: "Limpeza de Pele", desc: "Remove impurezas profundas, desobstrui poros e promove renovação, deixando a pele mais saudável e equilibrada.", image: IMAGES.filler, msg: "Olá! Gostaria de saber mais sobre Limpeza de Pele." },
      { title: "Peeling Químico", desc: "Renova a camada superficial da pele, suavizando manchas, acne e linhas finas, com melhora visível da textura.", image: IMAGES.laser, msg: "Olá! Gostaria de saber mais sobre Peeling Químico." },
      { title: "Microagulhamento (MMP)", desc: "Estimula colágeno através de microperfurações, melhorando textura, poros, cicatrizes e viço da pele.", image: IMAGES.treatment, msg: "Olá! Gostaria de saber mais sobre Microagulhamento (MMP)." },
      { title: "Skinbooster", desc: "Hidratação profunda com ácido hialurônico, devolvendo luminosidade, maciez e aspecto jovem à pele.", image: IMAGES.rejuvenation, msg: "Olá! Gostaria de saber mais sobre Skinbooster." },
      { title: "Ultraformer", desc: "Ultrassom micro e macrofocado que promove lifting sem cirurgia, melhorando firmeza e redefinindo contornos.", image: IMAGES.botox, msg: "Olá! Gostaria de saber mais sobre Ultraformer." },
      { title: "Fios de PDO", desc: "Fios absorvíveis que estimulam colágeno e promovem efeito lifting, melhorando sustentação e firmeza da pele.", image: IMAGES.pdo, msg: "Olá! Gostaria de saber mais sobre Fios de PDO." },
    ],
  },
  {
    title: "Tratamentos Corporais",
    subtitle: "Modelagem, firmeza e bem-estar para o seu corpo",
    treatments: [
      { title: "Bioestimulador de Colágeno", desc: "Estimula a produção natural de colágeno, melhorando a firmeza e a qualidade da pele em áreas com flacidez.", image: IMAGES.rejuvenation, msg: "Olá! Gostaria de saber mais sobre Bioestimulador de Colágeno Corporal." },
      { title: "Lipoenzimática", desc: "Aplicação de enzimas que auxiliam na redução de gordura localizada, promovendo contorno corporal mais definido.", image: IMAGES.treatment, msg: "Olá! Gostaria de saber mais sobre Lipoenzimática." },
      { title: "Intradermoterapia", desc: "Entrega ativos diretamente na pele para tratar gordura localizada, celulite e melhorar o aspecto geral da região.", image: IMAGES.laser, msg: "Olá! Gostaria de saber mais sobre Intradermoterapia Corporal." },
      { title: "Ultraformer", desc: "Tecnologia de ultrassom que promove efeito lifting e melhora a flacidez, redefinindo o contorno corporal sem cirurgia.", image: IMAGES.botox, msg: "Olá! Gostaria de saber mais sobre Ultraformer Corporal." },
      { title: "Harmonização Glútea", desc: "Técnicas para melhorar volume, contorno e firmeza dos glúteos, com resultados naturais e proporcionais.", image: IMAGES.filler, msg: "Olá! Gostaria de saber mais sobre Harmonização Glútea." },
      { title: "Toxina Botulínica (Botox)", desc: "Indicada para tratar excesso de suor (hiperidrose) e suavizar contrações musculares em áreas específicas do corpo.", image: IMAGES.pdo, msg: "Olá! Gostaria de saber mais sobre Toxina Botulínica Corporal." },
    ],
  },
  {
    title: "Tratamentos Capilares",
    subtitle: "Cuidado especializado para cabelos e couro cabeludo",
    treatments: [
      { title: "MMP Capilar", desc: "Microinfusão de ativos diretamente no couro cabeludo para estimular o crescimento, fortalecer os fios e reduzir a queda.", image: IMAGES.treatment, msg: "Olá! Gostaria de saber mais sobre MMP Capilar." },
      { title: "Intradermoterapia Capilar", desc: "Aplicação de nutrientes e ativos no couro cabeludo para nutrir os folículos e estimular o crescimento dos fios.", image: IMAGES.rejuvenation, msg: "Olá! Gostaria de saber mais sobre Intradermoterapia Capilar." },
    ],
  },
];

export default function Treatments() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            _ Todos os tratamentos
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground">
            Tratamentos para cada necessidade
          </h1>
          <p className="mt-4 font-body text-base text-muted-foreground font-light max-w-xl mx-auto">
            Conheça nossa linha completa de procedimentos estéticos, pensados para revelar sua beleza com segurança e naturalidade.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={ci} className={`py-16 md:py-24 ${ci % 2 === 1 ? "bg-secondary/30" : ""}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                _ {cat.title}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                {cat.title}
              </h2>
              <p className="mt-2 font-body text-sm text-muted-foreground font-light">{cat.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {cat.treatments.map((t, i) => (
                <TreatmentCard
                  key={i}
                  title={t.title}
                  description={t.desc}
                  image={t.image}
                  whatsappLink={WHATSAPP_BASE + encodeURIComponent(t.msg)}
                  delay={i * 0.08}
                  hideImage={true}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}