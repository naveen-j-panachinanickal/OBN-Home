import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logowhite.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${scrolled ? "top-4" : "top-8"}`}>
      <div className={`flex items-center justify-between px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] transition-all duration-300 ${scrolled ? "bg-black/40 border-primary/20" : ""}`}>
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-white group">
          <img src={logo} alt="OBN" className="w-12 object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Our Mission", "Projects", "Community", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white/50 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em]">
            Sign In
          </Button>
          <Button className="rounded-full bg-primary text-white hover:bg-primary/90 text-[10px] font-bold uppercase tracking-[0.2em] px-8 h-10 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[110%] left-0 right-0 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 animate-scale-in shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-6">
            {["Mission", "Projects", "Community", "Docs"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.3em] text-white/60 hover:text-primary py-2 transition-colors">
                {item}
              </a>
            ))}
            <div className="h-px bg-white/10" />
            <Button className="w-full bg-primary text-white rounded-full h-12 font-bold uppercase tracking-widest text-[10px]">Join Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
