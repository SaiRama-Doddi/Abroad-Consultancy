import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Toaster } from "../components/ui/sonner";
import { Preloader } from "../components/Preloader";
import { BackgroundFlight } from "../components/BackgroundFlight";
import { SeoStructuredData } from "../components/SeoStructuredData";

import "../styles.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
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
      { name: "author", content: "McCoy Global Consultancy" },
      { name: "publisher", content: "McCoy Global Consultancy" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "bingbot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      
      /* Open Graph / Facebook */
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
      { property: "og:image:secure_url", content: "https://mccoyglobal.in/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "McCoy Global Consultancy - Study, Work & Migrate Overseas" },
      { property: "og:locale", content: "en_US" },

      /* Twitter Cards */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "McCoy Global Consultancy | Study, Work & Migrate Overseas" },
      {
        name: "twitter:description",
        content:
          "Boutique overseas education and migration advisory in Hyderabad. 98% visa success rate for USA, UK, Germany Opportunity Card, Canada, Australia & Europe.",
      },
      { name: "twitter:image", content: "https://mccoyglobal.in/og-image.png" },
      { name: "twitter:image:alt", content: "McCoy Global Consultancy Logo Banner" },

      /* Geo Location Meta Tags */
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Hyderabad" },
      { name: "geo.position", content: "17.385044;78.486671" },
      { name: "ICBM", content: "17.385044, 78.486671" },

      /* Mobile App / Theme configuration */
      { name: "theme-color", content: "#0b1224" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "McCoy Global" },
      { name: "application-name", content: "McCoy Global Consultancy" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "canonical", href: "https://mccoyglobal.in/" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png", sizes: "180x180" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <SeoStructuredData />
      </head>
      <body>
        <Preloader />
        <BackgroundFlight />
        {children}
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
