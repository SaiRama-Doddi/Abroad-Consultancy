export function SeoStructuredData() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "ConsultingService", "LocalBusiness"],
        "@id": "https://mccoyglobal.in/#organization",
        "name": "McCoy Global Consultancy",
        "alternateName": [
          "McCoy Global",
          "McCoy Consultancy",
          "McCoy Overseas Consultancy Hyderabad",
          "McCoy Global Study Abroad & Immigration"
        ],
        "url": "https://mccoyglobal.in/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://mccoyglobal.in/#logo",
          "url": "https://mccoyglobal.in/logo.png",
          "caption": "McCoy Global Consultancy Logo",
          "width": 1200,
          "height": 630
        },
        "image": "https://mccoyglobal.in/og-image.png",
        "description": "McCoy Global Consultancy is Hyderabad's premier overseas education, immigration, and visa advisory firm. Specializing in Student Visas for USA, UK, Canada, Australia, Germany Opportunity Card (Chancenkarte), UK Youth Mobility Visa, Europe Schengen, Cyprus, Mauritius, Tourist Visas, Flight Tickets, and Education Loans.",
        "telephone": "+918886368886",
        "priceRange": "Free Consultation / Best Rates",
        "email": "info@mccoyglobal.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hyderabad City Central",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.385044,
          "longitude": 78.486671
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "18:30"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Mr. B. Rohith",
          "jobTitle": "Founder & Managing Director"
        },
        "sameAs": [
          "https://facebook.com",
          "https://instagram.com",
          "https://linkedin.com",
          "https://wa.me/918886368886"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Overseas Visa & Study Abroad Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://mccoyglobal.in/#service-student-visa",
                "name": "Student Visa & Global University Admission Guidance",
                "serviceType": "Overseas Education Consulting",
                "description": "Comprehensive admission counseling, university shortlisting, documentation, SOP writing, and visa filing with 98% approval rate for USA, UK, Canada, Australia, Germany, Poland, France, Italy, Cyprus, Mauritius, and Europe.",
                "url": "https://mccoyglobal.in/#services",
                "provider": {
                  "@id": "https://mccoyglobal.in/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://mccoyglobal.in/#service-opportunity-card",
                "name": "Germany Opportunity Card (Chancenkarte)",
                "serviceType": "Immigration & Job Search Visa",
                "description": "Points-based eligibility evaluation, Anabin degree verification, blocked account advisory, and German Embassy submission support for skilled professionals.",
                "url": "https://mccoyglobal.in/#services",
                "provider": {
                  "@id": "https://mccoyglobal.in/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://mccoyglobal.in/#service-uk-youth-mobility",
                "name": "Youth Mobility Visa UK",
                "serviceType": "Working Holiday & Youth Mobility Visa",
                "description": "2-year unrestricted living and working permit in the United Kingdom for Indian graduates and young professionals aged 18 to 30.",
                "url": "https://mccoyglobal.in/#services",
                "provider": {
                  "@id": "https://mccoyglobal.in/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://mccoyglobal.in/#service-tourist-visa",
                "name": "Tourism & Visitor Visa Facilitation",
                "serviceType": "Tourist & Visitor Visa Consulting",
                "description": "Stress-free travel, family visit, and business visitor visa processing with itinerary planning, travel insurance, and embassy appointments across 30+ countries.",
                "url": "https://mccoyglobal.in/#services",
                "provider": {
                  "@id": "https://mccoyglobal.in/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://mccoyglobal.in/#service-flight-booking",
                "name": "Flight Ticket Booking & Travel Support",
                "serviceType": "Travel Ticketing",
                "description": "Optimal flight schedules, special student discount fares, excess baggage allowances, and transit visa advisory worldwide.",
                "url": "https://mccoyglobal.in/#services",
                "provider": {
                  "@id": "https://mccoyglobal.in/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://mccoyglobal.in/#service-education-loan",
                "name": "Education Loan Assistance",
                "serviceType": "Financial Advisory",
                "description": "Partnered with premier financial institutions for quick pre-visa approval student loans with collateral and collateral-free options at lowest interest rates.",
                "url": "https://mccoyglobal.in/#services",
                "provider": {
                  "@id": "https://mccoyglobal.in/#organization"
                }
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mccoyglobal.in/#website",
        "url": "https://mccoyglobal.in/",
        "name": "McCoy Global Consultancy",
        "alternateName": "McCoy Global Study Abroad & Immigration",
        "description": "Study, Work & Migrate Overseas - Comprehensive Visa and Overseas Admissions Guidance in Hyderabad",
        "publisher": {
          "@id": "https://mccoyglobal.in/#organization"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mccoyglobal.in/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mccoyglobal.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mccoyglobal.in/#home"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Study Destinations",
            "item": "https://mccoyglobal.in/#destinations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Visa Services",
            "item": "https://mccoyglobal.in/#services"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Why Choose Us",
            "item": "https://mccoyglobal.in/#why-us"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Visa Success Gallery",
            "item": "https://mccoyglobal.in/#gallery"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Free Consultation",
            "item": "https://mccoyglobal.in/#free-assessment"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://mccoyglobal.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which countries does McCoy Global Consultancy assist with for study and immigration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide end-to-end guidance for premier destinations worldwide including USA, United Kingdom, Canada, Australia, Germany (Opportunity Card & Student Visas), Poland, France, Italy, Cyprus, Mauritius, Maldives, Singapore, Malaysia, Thailand, Indonesia, Sri Lanka, Vietnam, and 29+ European Schengen nations."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Germany Opportunity Card (Chancenkarte)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Opportunity Card is Germany's points-based job seeker visa allowing qualified professionals to live and search for skilled employment in Germany. We provide comprehensive points calculation, documentation, and embassy appointment filing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge fees for initial profile evaluation and consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! Our initial profile assessment and counseling sessions are 100% free with zero consultation fees. We analyze your academic background, test scores, budget, and career goals to craft your personalized roadmap."
            }
          },
          {
            "@type": "Question",
            "name": "What is your student and work visa approval success rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "McCoy Global Consultancy proudly maintains a 98% visa approval rate through meticulous document verification, custom Statement of Purpose (SOP) guidance, and 1-on-1 mock visa interview preparations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you assist with education loans and accommodation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we partner with top financial institutions for quick collateral and non-collateral student loans. We also arrange pre-departure bookings, airport pickups, and student accommodations."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
