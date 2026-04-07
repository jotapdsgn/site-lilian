import { motion } from "framer-motion";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Lilian%20Monteiro.";

// 🎬 animações
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hero-bg pt-4 pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center min-h-[calc(100vh-1rem)]">
        
        {/* Foto */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 pt-2 lg:pt-0">
          <div className="relative">
            
            <img
              src="/images/lilian.jpg"
              alt="Dra. Lilian Monteiro"
              width={500}
              height={640}
              className="relative z-10 w-72 md:w-96 lg:w-[420px] h-auto object-cover rounded-2xl"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 z-20 rounded-2xl pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom, transparent 50%, hsl(36 33% 95%) 100%),
                  linear-gradient(to right, hsl(36 33% 95% / 0.3) 0%, transparent 30%),
                  linear-gradient(to left, hsl(36 33% 95% / 0.3) 0%, transparent 30%)
                `,
              }}
            />

            {/* LOGO ANIMADA (MAIOR) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 z-30 rounded-xl shadow-lg p-3 w-16 h-16 flex items-center justify-center"
              style={{
                backgroundColor: "#E9DFD1"
              }}
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

          </div>
        </div>

        {/* TEXTO ANIMADO */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left pb-4 lg:pb-0 mt-2 lg:mt-0"
        >
          
          {/* TÍTULO */}
          <motion.h1
            variants={item}
            className="font-display font-light text-3xl md:text-4xl lg:text-[3.15rem] xl:text-[3.5rem] leading-[1.12] tracking-tight text-foreground mb-3"
          >
            Realce sua beleza <br className="hidden lg:block" />
            <span className="block mt-1 font-normal italic text-gold tracking-tight">
              com naturalidade
            </span>
          </motion.h1>

          {/* TEXTO */}
          <motion.p
            variants={item}
            className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Dra. Lilian Monteiro, especialista em harmonização facial e tratamentos
            avançados, oferecendo uma abordagem personalizada que une ciência, estética e
            olhar clínico para valorizar sua beleza única com elegância e naturalidade.
          </motion.p>

          {/* BOTÃO */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-5"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-sm hover:opacity-90 transition"
            >
              Agendar consulta
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}