import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mani Abroad Consultancy | Study, Work & Migrate Overseas" },
      {
        name: "description",
        content:
          "Mani Abroad Consultancy guides you from first enquiry to airport check-in — student visas, work visas, PR and migration handled end to end.",
      },
      { property: "og:title", content: "Mani Abroad Consultancy | Study, Work & Migrate Overseas" },
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
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
