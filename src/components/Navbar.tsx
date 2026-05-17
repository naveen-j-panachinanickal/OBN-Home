import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logowhite.png";
import { supabase } from "@/lib/supabase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check for Supabase session & database membership status
    const checkUserJoined = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user?.id) {
          const { data, error } = await supabase
            .from("alliance_members")
            .select("id")
            .eq("id", session.user.id)
            .maybeSingle();
          setIsJoined(Boolean(data && !error));
        } else {
          setIsJoined(false);
        }
      } catch (err) {
        console.error("Error reading initial membership state in Navbar:", err);
      }
    };
    
    checkUserJoined();

    // Listen to real-time auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user?.id) {
        const { data, error } = await supabase
          .from("alliance_members")
          .select("id")
          .eq("id", session.user.id)
          .maybeSingle();
        setIsJoined(Boolean(data && !error));
      } else {
        setIsJoined(false);
      }
    });

    // Custom window events to trigger real-time hiding/showing without delays
    const handleAllianceJoined = () => setIsJoined(true);
    const handleAllianceLeft = () => setIsJoined(false);

    window.addEventListener("obn_alliance_joined", handleAllianceJoined);
    window.addEventListener("obn_alliance_left", handleAllianceLeft);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
      window.removeEventListener("obn_alliance_joined", handleAllianceJoined);
      window.removeEventListener("obn_alliance_left", handleAllianceLeft);
    };
  }, []);

  const navItems = [
    { label: "Our Mission", href: isHomePage ? "#mission" : "/#mission", isHash: true },
    { label: "Projects", href: "/projects", isHash: false },
    { label: "About Us", href: "/about", isHash: false }
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${scrolled ? "top-4" : "top-8"}`}>
      <div className={`flex items-center justify-between px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] transition-all duration-300 ${scrolled ? "bg-black/40 border-primary/20" : ""}`}>
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white group">
          <img src={logo} alt="OBN" className="w-12 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-all duration-300"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
                  location.pathname === item.href ? "text-primary font-extrabold" : "text-white/40 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
          {/* Join Alliance Button */}
          {!isJoined && (
            <a
              href={isHomePage ? "#alliance-register" : "/#alliance-register"}
              className="ml-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/25 hover:border-primary text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
            >
              Join Alliance
            </a>
          )}
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
            {navItems.map((item) => (
              item.isHash ? (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-xs font-bold uppercase tracking-[0.3em] text-white/60 hover:text-primary py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label} 
                  to={item.href} 
                  className={`text-xs font-bold uppercase tracking-[0.3em] py-2 transition-colors ${
                    location.pathname === item.href ? "text-primary font-extrabold" : "text-white/60 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            {/* Join Alliance Mobile Button */}
            {!isJoined && (
              <a
                href={isHomePage ? "#alliance-register" : "/#alliance-register"}
                className="mt-2 text-center px-5 py-3 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/25 hover:border-primary text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                onClick={() => setIsOpen(false)}
              >
                Join Alliance
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
