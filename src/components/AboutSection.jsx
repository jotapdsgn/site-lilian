import { motion } from "framer-motion";

const PHOTO = "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/47e5485c0_Screenshot_11.jpg";"https://media.base44.com/images/public/user_69bae0616954e84a3352e178/5a623968a_SaveClipApp_465188571_18020114405550440_8491901429770576039_n-Photoroom.png";

const stats = [
{ number: "5+", label: "anos de experiência" },
{ number: "1 mil+", label: "pacientes atendidos" },
{ number: "3 mil+", label: "procedimentos realizados" }];


export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative">
          
          <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl max-w-xs md:max-w-md mx-auto lg:mx-0">
            <img
              src={PHOTO}
              alt="Dra. Lilian Monteiro"
              className="w-full object-cover" />
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Sobre

          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light leading-tight text-foreground">
            Dra. Lilian Monteiro: cuidado e excelência em cada detalhe
          </h2>

          <p className="mt-6 font-body text-base text-muted-foreground font-light leading-relaxed">
            Minha trajetória na biomedicina estética nasceu de um propósito genuíno: ajudar pessoas
            a descobrirem o melhor de si mesmas. Cada rosto conta uma história, e meu papel é
            valorizá-la com precisão técnica e um toque de arte.
          </p>

          <p className="mt-4 font-body text-base text-muted-foreground font-light leading-relaxed">
            No meu dia a dia, persigo o equilíbrio entre inovação e naturalidade. Cada procedimento
            é pensado individualmente — porque beleza de verdade não segue fórmulas, ela emerge
            quando ciência e cuidado caminham lado a lado.
          </p>

          <p className="mt-4 font-body text-sm text-primary font-medium tracking-wide">
            Biomédica Esteta — CRBM 16928
          </p>

          <div className="mt-10 grid grid-cols-3 lg:flex lg:flex-wrap gap-6 lg:gap-10">
            {stats.map((s, i) =>
            <div key={i}>
                <p className="text-2xl md:text-4xl font-bold text-primary" style={{ fontFamily: "'Ysabeau Infant', sans-serif", fontWeight: 700 }}>{s.number}</p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">
                  {s.label}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}