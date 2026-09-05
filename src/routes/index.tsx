import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "McCoy Global Consultancy | Study, Work & Migrate Overseas" },
      {
        name: "description",
        content:
          "McCoy Global Consultancy guides you from first enquiry to airport check-in — student visas, work visas, PR and migration handled end to end.",
      },
      { property: "og:title", content: "McCoy Global Consultancy | Study, Work & Migrate Overseas" },
      {
        property: "og:description",
        content:
          "Boutique overseas education and migration advisory. Honest advice, transparent fees, a 98% approval rate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      // Clear hash if opening into testimonials or anchor
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <SiteHeader />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <DestinationsSection />
        <WhyChooseUs />
        <ExpertiseSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactFormSection />
      </main>
      <SiteFooter />
      <WhatsAppWidget />
    </div>
  );
}
