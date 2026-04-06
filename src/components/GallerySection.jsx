import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/images/foto1.jpeg",
  "/images/foto2.jpeg",
  "/images/foto3.jpeg",
  "/images/foto4.jpeg",
  "/images/foto5.jpeg",
  "/images/foto6.jpeg",
  "/images/foto7.jpeg",
  "/images/foto8.jpeg",
  "/images/foto9.jpeg",
  "/images/foto10.jpeg",
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
            {photos.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex-shrink-0 w-72 h-96 rounded-xl overflow-hidden snap-start border border-primary-foreground/25 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-primary-foreground/10"
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