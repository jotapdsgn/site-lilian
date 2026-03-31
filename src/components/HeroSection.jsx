import { motion } from "framer-motion";

const content = {
  whatsapp:
    "https://api.whatsapp.com/send/?phone=5531994105755&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Lilian%20Monteiro.",
  title: {
    line1: "Realce sua beleza com",
    highlight: "naturalidade e sofisticação.",
  },
  description: {
    line1:
      "Harmonização facial e tratamentos estéticos personalizados, com foco em resultados",
    highlight: "elegantes, seguros e naturais.",
  },
  button: "Agendar consulta",
};

// 👉 imagens
const PHOTO = "/images/lilian.jpg";
const LOGO_BADGE = "/images/logo.png";
const LOGO_WATERMARK = "/images/textura.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden">
      
      {/* Fundo */}
      <img
        src={LOGO_WATERMARK}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] opacity-[0.05] pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4 sm:px-0"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              
              {/* FRASE TODA EM MARROM + SEMI-BOLD */}
              <span className="block text-3xl md:text-5xl leading-tight font-semibold text-[#6b4a2b]">
                Realce sua{" "}
                <span className="text-[#6b4a2b]">beleza</span>{" "}
                com
              </span>

              <span className="text-primary font-script text-5xl md:text-7xl lg:text-8xl block -mt-1 leading-[0.95]">
                naturalidade e sofisticação.
              </span>

            </h1>

            {/* FOTO MOBILE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mt-12 mb-8 lg:hidden"
            >
              <div className="relative w-64">
                <div className="absolute -inset-5 bg-accent/50 rounded-[2rem] rotate-3" />
                
                <img
                  src={PHOTO}
                  alt="Dra. Lilian Monteiro"
                  className="relative rounded-[2rem] w-full object-cover shadow-2xl"
                />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-2 w-14 h-14 flex items-center justify-center z-10"
                >
                  <img
                    src={LOGO_BADGE}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>

            <p className="mt-6 font-body text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {content.description.line1}{" "}
              <span className="text-primary font-medium">
                {content.description.highlight}
              </span>
            </p>

            <a
              href={content.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 font-body text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity w-full text-center md:w-auto"
            >
              {content.button}
            </a>
          </motion.div>

          {/* FOTO DESKTOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-end"
          >
            <div className="relative w-44 md:w-96 lg:w-[440px]">
              <div className="absolute -inset-4 bg-accent/50 rounded-[2rem] rotate-3" />
              
              <img
                src={PHOTO}
                alt="Dra. Lilian Monteiro"
                className="relative rounded-[2rem] w-full object-cover shadow-2xl"
              />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-2 w-16 h-16 flex items-center justify-center z-10"
              >
                <img
                  src={LOGO_BADGE}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  backgroundImage: "url(/images/textura.jpg)",
                  backgroundSize: "150px",
                  opacity: 0.08,
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}