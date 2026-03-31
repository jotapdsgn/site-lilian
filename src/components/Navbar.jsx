import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531994105755&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Lilian%20Monteiro.";
const LOGO_DARK = "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/9b811e8c5_Prancheta3-8.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navTo = (anchor) => {
    if (isHome) {
      document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" }), 300);
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={LOGO_DARK} alt="Dra. Lilian Monteiro" className="h-8 md:h-10 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => { navigate("/tratamentos"); window.scrollTo(0,0); }} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Procedimentos
          </button>
          <button onClick={() => navTo("#sobre")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Sobre mim
          </button>
          <button onClick={() => navTo("#depoimentos")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Agendar consulta
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-5">
          <button onClick={() => { navigate("/tratamentos"); window.scrollTo(0,0); setOpen(false); }} className="block font-body text-sm tracking-widest uppercase text-muted-foreground">
            Procedimentos
          </button>
          <button onClick={() => navTo("#sobre")} className="block font-body text-sm tracking-widest uppercase text-muted-foreground">
            Sobre mim
          </button>
          <button onClick={() => navTo("#depoimentos")} className="block font-body text-sm tracking-widest uppercase text-muted-foreground">
            Depoimentos
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-body text-sm tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Agendar consulta
          </a>
        </div>
      )}
    </nav>
  );
}