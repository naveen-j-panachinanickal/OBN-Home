import { Github, Twitter, MessageCircle } from "lucide-react";
import logo from "../assets/logowhite.png";
const Footer = () => {
  return (
    <footer className="relative py-24 border-t border-white/5 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-xl font-bold tracking-tight text-white group">
              <img src={logo} alt="OBN" className="w-12 object-contain" />
            </a>
            <small>Open Build Network</small>
            <p className="text-white/40 max-w-sm leading-relaxed font-light mt-5">
              Building an open, transparent, and privacy-first ecosystem where anyone can contribute to creating useful, real-world applications.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Github, Twitter, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-widest text-white/30">
          <p>© 2026 Open Build Network. All rights reserved.</p>
          <p>Built for the future of open collaboration.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
