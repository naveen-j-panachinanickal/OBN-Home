import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-48">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-white leading-[1.1]">
              Ready to build <br />
              the future together?
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
              Whether you're a developer, designer, or thinker—there's a place for you in our community. Let's create something meaningful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-16 px-10 rounded-full bg-black text-white hover:bg-black/80 font-bold transition-all group">
                Join the Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" className="h-16 px-10 rounded-full border border-white/20 text-white hover:bg-white/10 font-bold">
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
