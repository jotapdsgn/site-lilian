export default function MarqueeBanner() {
  const text = "HARMONIZAÇÃO FACIAL COM ESTRATÉGIA E NATURALIDADE   •   ";
  const repeated = text.repeat(10);

  return (
    <div className="overflow-hidden bg-primary/5 py-4 my-8">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-heading text-lg tracking-[0.3em] text-primary/40">
          {repeated}
        </span>
      </div>
    </div>
  );
}