import { motion } from "framer-motion";

export default function TreatmentCard({ title, description, image, whatsappLink, delay = 0, hideImage = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col"
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
              backgroundImage:
                "url(https://media.base44.com/images/public/69c6fc2447dd489dd576db88/5b32a3dae_white-abstract-texture-background.jpg)",
              backgroundSize: "150px",
              opacity: 0.08,
            }}
          />
        </div>
      )}
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl md:text-3xl font-light italic text-foreground">{title}</h3>
        <p className="mt-2 font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed flex-1">
          {description}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 font-body text-sm tracking-wide bg-primary text-primary-foreground px-5 py-3 rounded-full hover:opacity-90 transition-opacity text-center w-full"
        >
          Saber mais
        </a>
      </div>
    </motion.div>
  );
}