import { useState, useEffect } from "react";
import { MessageSquare, X, Send, ShieldAlert, ArrowUp } from "lucide-react";
import { toast } from "sonner";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Check if the chat pop has already occurred in this session
    const alreadyOpened = sessionStorage.getItem("whatsapp_prompt_opened");
    
    if (!alreadyOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasPopped(true);
        sessionStorage.setItem("whatsapp_prompt_opened", "true");
      }, 4000); // Auto-expand after 4 seconds to capture leads

      return () => clearTimeout(timer);
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowBadge(false);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setShowBadge(false);
  };

  const handleWhatsAppRedirect = () => {
    sessionStorage.setItem("whatsapp_prompt_opened", "true");
    setIsOpen(false);
    toast.success("Redirecting to WhatsApp chat...");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Scroll to Top (Up Arrow) Button */}
      <button
        onClick={scrollToTop}
        className={`group flex h-12 w-12 items-center justify-center rounded-full bg-[#0a1122]/90 border border-[var(--gold)]/35 text-white transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-[var(--gold)] hover:text-[#0b1224] hover:border-[var(--gold)] cursor-pointer ${
          showScrollTop 
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto" 
            : "translate-y-4 opacity-0 scale-75 pointer-events-none absolute"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
      
      {/* WhatsApp Chat Box */}
      <div 
        className={`w-[340px] rounded-3xl border border-border bg-card overflow-hidden shadow-2xl transition-all duration-500 transform ${
          isOpen 
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto" 
            : "translate-y-8 opacity-0 scale-90 pointer-events-none"
        }`}
        style={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)" }}
      >
        
        {/* Header Block */}
        <div className="bg-[#0c1224] p-5 border-b border-border/40 relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            aria-label="Close chat assistant"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3.5">
            {/* Avatar with Online Pulse Indicator */}
            <div className="relative h-11 w-11 shrink-0 rounded-full border border-[var(--gold)]/35 p-0.5 bg-slate-800">
              <img 
                src="/founder.png" 
                alt="Mani Kumar" 
                className="h-full w-full rounded-full object-cover" 
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0c1224] animate-pulse" />
            </div>
            
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">Mani Kumar</h4>
              <span className="block text-[0.62rem] font-bold uppercase tracking-widest text-[var(--gold)] mt-0.5">
                Founder & Managing Director
              </span>
            </div>
          </div>
        </div>

        {/* Conversation Area */}
        <div className="p-5 space-y-4 bg-muted/20 max-h-[220px] overflow-y-auto">
          {/* Chat Message 1 */}
          <div className="flex flex-col gap-1 max-w-[85%] bg-card border border-border px-4 py-3 rounded-2xl rounded-tl-none text-xs text-foreground leading-relaxed">
            <span className="text-[0.62rem] font-semibold text-[var(--gold)] uppercase tracking-wider mb-1">mcCoy Global Advisory</span>
            <span>Hello! Thank you for visiting our website. ✈️</span>
          </div>

          {/* Chat Message 2 */}
          <div className="flex flex-col gap-1 max-w-[85%] bg-card border border-border px-4 py-3 rounded-2xl rounded-tl-none text-xs text-foreground leading-relaxed">
            <span>Whether you want to explore the Germany Opportunity Card, UK Youth Mobility, or university admissions, I'm here to assist you directly.</span>
          </div>
        </div>

        {/* Footer Area with redirect button */}
        <div className="p-5 border-t border-border/40 bg-card">
          <a 
            href="https://wa.me/918886368886?text=Hi%20Mani%20Kumar,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire%20about%20visa%20options."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppRedirect}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(166,106,33,0.3)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Send className="h-3.5 w-3.5" />
            Start Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={handleToggle}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgba(166,106,33,0.25)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(166,106,33,0.4)] cursor-pointer"
        style={{ background: "var(--gradient-gold)" }}
        aria-label="Toggle WhatsApp assistant chat"
      >
        {/* Flashing Gold Notification Badge */}
        {showBadge && !isOpen && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex items-center justify-center rounded-full h-4.5 w-4.5 bg-red-500 text-[0.55rem] font-bold text-white leading-none">1</span>
          </span>
        )}
        
        {/* Toggle Icons */}
        {isOpen ? (
          <X className="h-6 w-6 text-white transition-transform duration-300 rotate-90" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-105" />
        )}
      </button>

    </div>
  );
}
