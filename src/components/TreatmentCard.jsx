import { motion } from "framer-motion";

export default function TreatmentCard({
  title,
  description,
  image,
  whatsappLink,
  delay = 0,
  hideImage = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card/95 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col border border-border/60"
    >
      {!hideImage && (
        <div className="h-28 md:h-72 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/textura.jpg')",
              backgroundSize: "150px",
              opacity: 0.12,
            }}
          />
        </div>
      )}

      <div className="p-4 md:p-6 flex flex-col flex-1 bg-background/90">
        <h3
          className="font-heading text-base md:text-lg lg:text-2xl text-foreground mb-2 leading-snug break-normal whitespace-normal hyphens-none min-h-[2.25rem] md:min-h-[2.75rem]"
          title={title}
        >
          {title}
        </h3>

        <p className="mt-2 font-body text-sm md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed flex-1">
          {description}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 font-body text-sm md:text-base lg:text-lg tracking-wide bg-primary text-primary-foreground px-5 py-3 rounded-full hover:opacity-90 transition-opacity text-center w-full"
        >
          Saber mais
        </a>
      </div>
    </motion.div>
  );
}