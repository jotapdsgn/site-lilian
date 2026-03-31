import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const PDF_URL = "https://media.base44.com/files/public/69c6fc2447dd489dd576db88/ccb5f0d8a_Botox_Club_-_Dra_Lilian_260330_143931.pdf";

export default function BotoxClubSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="font-heading text-4xl md:text-5xl font-light leading-tight mb-4">
            Conheça o Botox <span className="font-script text-4xl md:text-5xl" style={{fontWeight: '400'}}>Club</span>
          </h2>

          <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Um programa anual de harmonização facial com aplicações estratégicas e resultados constantes.
          </p>

          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider bg-primary-foreground text-primary px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            
            <FileText size={18} />
            Saiba mais sobre o programa
          </a>
        </motion.div>
      </div>
    </section>
  );
}