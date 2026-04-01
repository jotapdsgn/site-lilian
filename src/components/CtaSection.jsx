import { motion } from "framer-motion";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Lilian%20Monteiro.";

export default function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/clinica.jpeg"
          alt="Clínica"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/60 mb-2">
          Agende já
        </p>

        {/* TITULO AJUSTADO */}
<h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-medium leading-snug tracking-tight font-heading">
  Dê o primeiro passo em direção à sua melhor versão
</h2>

        <p className="mt-3 font-body text-base text-white/80 font-light leading-relaxed">
          Agende sua consulta e descubra o tratamento ideal para você.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-body text-sm tracking-wider bg-white text-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Agendar consulta agora
        </a>
      </motion.div>
    </section>
  );
}