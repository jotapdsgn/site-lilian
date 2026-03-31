import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import TreatmentCard from "../components/TreatmentCard";

const WHATSAPP_BASE =
  "https://api.whatsapp.com/send/?phone=5531994105755&text=";

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
      {
        title: "Harmonização Facial",
        desc: "Conjunto de técnicas que equilibram os traços do rosto.",
        image: IMAGES.treatment,
        msg: "Olá! Gostaria de saber mais sobre Harmonização Facial.",
      },
      {
        title: "Toxina Botulínica (Botox)",
        desc: "Suaviza rugas e linhas de expressão.",
        image: IMAGES.botox,
        msg: "Olá! Gostaria de saber mais sobre Botox.",
      },
    ],
  },
];

export default function Treatments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-light">
            Tratamentos
          </h1>
        </motion.div>
      </section>

      {categories.map((cat, ci) => (
        <section key={ci} className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl mb-6">{cat.title}</h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.treatments.map((t, i) => (
                <TreatmentCard
                  key={i}
                  title={t.title}
                  description={t.desc}
                  image={t.image}
                  whatsappLink={WHATSAPP_BASE + encodeURIComponent(t.msg)}
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