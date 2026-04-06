import { motion } from "framer-motion";

const PHOTO = "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/47e5485c0_Screenshot_11.jpg";

const stats = [
  { number: "5+", label: "anos de experiência" },
  { number: "1 mil+", label: "pacientes atendidos" },
  { number: "3 mil+", label: "procedimentos realizados" }
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl max-w-xs md:max-w-md mx-auto lg:mx-0">
            <img
              src={PHOTO}
              alt="Dra. Lilian Monteiro"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Sobre
          </p>

          {/* CURSIVA AJUSTADA */}
          <h2
            className="text-primary text-5xl md:text-7xl leading-[0.9] pb-1"
            style={{
              fontFamily: "var(--font-script)",
              display: "inline-block"
            }}
          >
            Dra. Lilian Monteiro
          </h2>

          <p className="mt-6 font-body text-lg text-muted-foreground font-light leading-relaxed">
            Sou biomédica esteta, especialista em harmonização facial, com mais de 30 especializações na área.
          </p>

          <p className="mt-4 font-body text-lg text-muted-foreground font-light leading-relaxed">
            Meu trabalho é focado em realçar a sua beleza de forma sutil e sofisticada, respeitando a individualidade de cada rosto.
          </p>

          <p className="mt-4 font-body text-lg text-muted-foreground font-light leading-relaxed">
            Acredito que estética de alto padrão não é sobre transformar, mas sobre valorizar o que você já tem de mais bonito, com técnica, precisão e olhar clínico.
          </p>

          <p className="mt-6 font-body text-base text-primary font-medium tracking-wide">
            Biomédica Esteta — CRBM 16928
          </p>

          <div className="mt-10 grid grid-cols-3 lg:flex lg:flex-wrap gap-6 lg:gap-10">
            {stats.map((s, i) => (
              <div key={i}>
                <p
                  className="text-2xl md:text-4xl font-bold text-primary"
                  style={{
                    fontFamily: "'Ysabeau Infant', sans-serif",
                    fontWeight: 700
                  }}
                >
                  {s.number}
                </p>
                <p className="font-body text-sm tracking-wider uppercase text-muted-foreground mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}