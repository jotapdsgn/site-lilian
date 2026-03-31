import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20os%20tratamentos%20da%20Dra.%20Lilian%20Monteiro.";

const faqs = [
{
  q: "Os procedimentos são seguros?",
  a: "Sim! Todos os procedimentos são realizados com produtos de alta qualidade e técnicas minimamente invasivas, seguindo rigorosos protocolos de segurança."
},
{
  q: "Quanto tempo dura o resultado?",
  a: "Depende do procedimento. Preenchimentos duram de 12 a 18 meses, toxina botulínica de 4 a 6 meses, e bioestimuladores podem durar até 2 anos."
},
{
  q: "Preciso de repouso após o procedimento?",
  a: "A maioria dos procedimentos permite retorno imediato às atividades. Orientações específicas são passadas em cada consulta."
},
{
  q: "Como funciona a avaliação?",
  a: "Na avaliação, analisamos suas necessidades, expectativas e histórico. A partir disso, criamos um plano personalizado para você."
},
{
  q: "Posso combinar tratamentos?",
  a: "Sim! Muitas vezes a combinação de técnicas oferece resultados ainda mais naturais e harmônicos. Isso é definido na avaliação."
}];


export default function FaqSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Dúvidas

          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Suas dúvidas respondidas de forma simples e clara
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground font-light">
            <strong className="text-foreground">Transparência é essencial:</strong> reunimos
            respostas para as perguntas mais comuns sobre nossos procedimentos.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) =>
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl px-6 border border-border/50">
            
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            
            Tirar minhas dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>);

}