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
      { title: "McCoy Global Consultancy | Best Abroad & Visa Consultancy in Hyderabad" },
      {
        name: "description",
        content:
          "McCoy Global Consultancy is Hyderabad's premier overseas education and visa consultancy. 98% visa success rate for USA, UK, Canada, Australia, Germany Opportunity Card (Chancenkarte), UK Youth Mobility, Europe Schengen, Tourist Visas, Flight Tickets & Education Loans.",
      },
      {
        name: "keywords",
        content:
          "McCoy Global Consultancy, McCoy Global, Abroad Consultancy Hyderabad, Overseas Education Consultants Hyderabad, Best Visa Consultancy Hyderabad, Germany Opportunity Card Chancenkarte, UK Youth Mobility Visa, USA Student Visa F1, Canada Study Permit, Australia Student Visa Subclass 500, Europe Schengen Student Visa, Cyprus Study Visa, Mauritius Study Work Visa, Maldives Resort Internship, Singapore Diploma Visa, Study Abroad Loans Hyderabad, Flight Ticket Booking",
      },
      { property: "og:site_name", content: "McCoy Global Consultancy" },
      { property: "og:title", content: "McCoy Global Consultancy | Study, Work & Migrate Overseas" },
      {
        property: "og:description",
        content:
          "Boutique overseas education and migration advisory in Hyderabad. 98% visa success rate for USA, UK, Germany Opportunity Card, Canada, Australia, Europe Schengen & 30+ countries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mccoyglobal.in/" },
      { property: "og:image", content: "https://mccoyglobal.in/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "McCoy Global Consultancy Logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "McCoy Global Consultancy | Study, Work & Migrate Overseas" },
      {
        name: "twitter:description",
        content:
          "Boutique overseas education and migration advisory in Hyderabad. 98% visa success rate for USA, UK, Germany Opportunity Card, Canada, Australia & Europe.",
      },
      { name: "twitter:image", content: "https://mccoyglobal.in/og-image.png" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
    links: [
      { rel: "canonical", href: "https://mccoyglobal.in/" },
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
