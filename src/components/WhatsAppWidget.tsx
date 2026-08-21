import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { toast } from "sonner";

export function WhatsAppWidget() {
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

      {/* Direct WhatsApp Redirect Floating Link Button */}
      <a 
        href="https://wa.me/918886368886?text=Hi%20Mani%20Kumar,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire%20about%20visa%20options."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => toast.success("Redirecting to WhatsApp chat...")}
        className="group flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.45)] cursor-pointer"
        style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.074-4.513 10.077-10.067.001-2.69-1.04-5.218-2.929-7.11A9.97 9.97 0 0 0 12.008 1.54c-5.561 0-10.08 4.515-10.084 10.07a10.024 10.024 0 0 0 1.536 5.25l-.995 3.638 3.738-.98c1.554.849 3.037 1.282 4.444 1.282zm9.99-6.313c-.274-.137-1.62-.8-1.874-.892-.254-.092-.44-.137-.625.137-.184.274-.71.892-.87 1.077-.16.184-.32.208-.593.07-.273-.137-1.155-.425-2.2-1.358-.813-.726-1.362-1.623-1.522-1.897-.16-.273-.017-.42.12-.556.123-.122.274-.32.41-.48.137-.16.183-.273.273-.456.09-.184.046-.346-.023-.483-.069-.137-.625-1.506-.856-2.062-.225-.54-.472-.466-.647-.476-.168-.008-.361-.01-.555-.01-.194 0-.51.073-.777.366-.267.293-1.02 1.002-1.02 2.443s1.045 2.825 1.19 3.018c.146.193 2.056 3.14 4.978 4.4 1.127.487 2.008.777 2.687.992.684.218 1.307.187 1.8.114.55-.082 1.62-.662 1.848-1.27.228-.609.228-1.13.16-1.24-.07-.11-.255-.2-.53-.337z"/>
        </svg>
      </a>

    </div>
  );
}
