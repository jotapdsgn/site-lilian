import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const placeholderPhotos = [
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/46865cb01_harmonizacao-facial.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f55b89c49_Preenchimento-facial.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/eae5d44dc_botox-tratamentos-faciais.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/7267af99b_bioestimulador-de-colageno-radiesse-bio-renew-clinica-de-estetica.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/aaa83258d_rinomodelacao-em-Belo-Horizonte.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f99d1c92d_Screenshot_1.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/47e5485c0_Screenshot_11.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/46865cb01_harmonizacao-facial.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/f55b89c49_Preenchimento-facial.jpg",
  "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/eae5d44dc_botox-tratamentos-faciais.jpg",
];

export default function GallerySection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="py-20 bg-brand-gradient" aria-label="Galeria de fotos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-foreground/95 text-primary rounded-full p-2 shadow-lg hover:bg-primary-foreground transition-colors -ml-3"
              aria-label="Ver fotos anteriores"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-foreground/95 text-primary rounded-full p-2 shadow-lg hover:bg-primary-foreground transition-colors -mr-3"
              aria-label="Ver próximas fotos"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {placeholderPhotos.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden snap-start border border-primary-foreground/25 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-primary-foreground/10"
              >
                <img
                  src={src}
                  alt={`Resultado ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
