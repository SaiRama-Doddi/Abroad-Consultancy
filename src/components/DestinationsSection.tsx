import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Globe, 
  CheckCircle, 
  X, 
  ArrowRight, 
  Briefcase, 
  Clock, 
  Coins, 
  Sparkles, 
  FileText, 
  Mail, 
  ExternalLink,
  MessageCircle,
  Plane
} from "lucide-react";
import { toast } from "sonner";
import { ScrollReveal } from "./ScrollReveal";

interface Destination {
  name: string;
  shortName?: string;
  code: string;
  image: string;
  region?: string;
  courses: string[];
  eligibility: string;
  workRights?: string;
  intakes?: string;
  avgTuition?: string;
  pathway?: string;
  highlights?: string[];
  description?: string;
}

const destinations: Destination[] = [
  {
    name: "United States",
    shortName: "USA",
    code: "us",
    region: "North America",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters & MBA Programs", "STEM Research Degrees"],
    eligibility: "Intermediate / Bachelors Pass with 55%+ (GRE/GMAT & IELTS/Duolingo options)",
    workRights: "1 to 3-Year STEM OPT extension & 20 hrs/week on-campus",
    intakes: "Fall (August/September) & Spring (January/February)",
    avgTuition: "$18,000 – $35,000 / year",
    highlights: [
      "Home to top QS World Ivy League & Tier-1 research universities",
      "Up to 3-Year STEM Extension for tech, data & engineering graduates",
      "Generous university scholarships, tuition waivers & TA/RA assistantships",
      "Direct pathway to H-1B skilled employment opportunities"
    ],
    description: "The United States is the world's leading destination for higher education, renowned for cutting-edge research, Silicon Valley connections, and high-impact career prospects."
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    code: "gb",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    courses: ["1-Year Fast-track Masters", "Bachelors Degrees", "Pre-Masters & Foundation"],
    eligibility: "Intermediate / Bachelors Pass (IELTS waiver based on 12th English 70%+)",
    workRights: "2-Year Graduate Route Post-Study Work Visa (3 Years for PhD)",
    intakes: "September/October & January/February (Selected May intakes)",
    avgTuition: "£11,000 – £22,000 / year",
    highlights: [
      "1-Year fast-track Masters degrees saving both tuition cost & living time",
      "No IELTS required for eligible Indian state & CBSE/ICSE board students",
      "Spouse dependent visa opportunities available for research degree holders",
      "Global reputation of Russell Group and modern innovative UK universities"
    ],
    description: "The UK offers world-renowned academic heritage, accelerated 1-year Masters pathways, and a welcoming 2-year post-study work visa for international graduates."
  },
  {
    name: "Australia",
    shortName: "Australia",
    code: "au",
    region: "Oceania",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters by Coursework", "Professional Diplomas"],
    eligibility: "Intermediate / Bachelors Pass with 60%+ & IELTS / PTE score",
    workRights: "2 to 4 Years Post-Study Work Visa (Subclass 485)",
    intakes: "February & July (Supplementary November intakes)",
    avgTuition: "AUD 20,000 – 36,000 / year",
    highlights: [
      "High PR points pathway for STEM, Healthcare, IT, and Engineering",
      "48 hours per fortnight working rights permitted during academic semesters",
      "Extra 1-2 years stayback for studying in designated regional university campuses",
      "Simplified Student Visa Framework (SSVF) with fast-track processing"
    ],
    description: "Australia combines high-ranking universities with unmatched quality of life, strong post-study work rights, and clear permanent residency pathways."
  },
  {
    name: "Canada",
    shortName: "Canada",
    code: "ca",
    region: "North America",
    image: "https://images.unsplash.com/photo-1507992781348-3102450a5daa?auto=format&fit=crop&w=600&q=80",
    courses: ["PG Diplomas (1-2 yrs)", "Bachelors Degrees", "University Masters"],
    eligibility: "Intermediate / Bachelors Pass (SDS Category supported)",
    workRights: "Up to 3-Year Post-Graduation Work Permit (PGWP)",
    intakes: "September, January & May Intakes",
    avgTuition: "CAD 14,000 – 26,000 / year",
    highlights: [
      "Direct permanent residency pathways via Express Entry & Provincial Nominee (PNP)",
      "Paid Co-op work terms integrated directly into university and college curricula",
      "High quality of life, safe multicultural cities, and world-class public infrastructure",
      "Affordable diploma pathways with high employability across Canadian provinces"
    ],
    description: "Canada remains one of the top choices for Indian students due to its transparent work permit policies, PR pathways, and welcoming multicultural society."
  },
  {
    name: "Germany",
    shortName: "Germany",
    code: "de",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation (Studienkolleg)", "Bachelors in English", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅ (12th + Foundation or Bachelors)",
    workRights: "18-Month Job Seeker Visa post-graduation",
    intakes: "Winter (October) & Summer (April)",
    avgTuition: "Zero / Ultra-low tuition fees at Public Universities (€150–€350/sem)",
    highlights: [
      "Zero or minimal tuition fees at public universities for international students",
      "Europe's strongest economy with severe shortage of IT and engineering talent",
      "EU Blue Card & Permanent Residency pathway after 21-33 months of skilled work",
      "Free travel across 27+ European Schengen countries"
    ],
    description: "Germany is Europe's industrial powerhouse, offering virtually tuition-free education at public universities and premier employment prospects in engineering, IT, and business."
  },
  {
    name: "Poland",
    shortName: "Poland",
    code: "pl",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅ (Minimum 50% marks)",
    workRights: "Part-time work permitted during studies & 1-Year Job Search Visa",
    intakes: "October (Fall) & February (Spring)",
    avgTuition: "€2,500 – €4,500 / year",
    highlights: [
      "Extremely affordable European tuition and low cost of living",
      "EU Schengen degree recognized across all European Union member states",
      "No complex financial blocked accounts required compared to other EU nations",
      "Fast visa processing with McCoy Global's high-success documentation support"
    ],
    description: "Poland provides a cost-effective gateway to European education and career opportunities, with English-taught programs and Schengen mobility."
  },
  {
    name: "Netherlands",
    shortName: "Netherlands",
    code: "nl",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters Programs", "Applied Sciences Diplomas"],
    eligibility: "Intermediate / Bachelors Pass with good academic record",
    workRights: "1-Year Orientation Year (Zoekjaar) Job Search Visa",
    intakes: "September & February",
    avgTuition: "€7,500 – €16,000 / year",
    highlights: [
      "Over 2,100 programs taught 100% in English language",
      "European innovation headquarters (ASML, Booking.com, Philips, Shell)",
      "High starting graduate salaries and progressive international work culture",
      "Schengen visa freedom and top-tier world university rankings"
    ],
    description: "The Netherlands is a European hub of tech, logistics, and innovation, boasting the highest percentage of English-taught programs in continental Europe."
  },
  {
    name: "Italy",
    shortName: "Italy",
    code: "it",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors in English", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅ (12 Years of Schooling)",
    workRights: "1-Year Post-Study Stayback & 20 hrs/week part-time work",
    intakes: "September / October (Annual Major Intake)",
    avgTuition: "€1,000 – €4,000 / year (Government Subsidized)",
    highlights: [
      "DSU Regional Scholarships covering 100% tuition + up to €7,000 annual stipend",
      "World-renowned programs in Engineering, Architecture, Fashion, and Design",
      "Europe's oldest and most historic prestigious public universities",
      "Schengen travel access throughout 27+ European nations"
    ],
    description: "Italy offers world-class academic heritage, low subsidized tuition fees, and generous government DSU scholarships that cover tuition and living expenses."
  },
  {
    name: "France",
    shortName: "France",
    code: "fr",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors in Management", "MSc & Masters Programs", "Culinary & Fashion Arts"],
    eligibility: "Intermediate / Bachelors Pass with minimum 55%",
    workRights: "2-Year Post-Study Visa (APS) & 5-Year Schengen Circulation Visa",
    intakes: "September & February (Spring/Fall)",
    avgTuition: "€3,000 – €12,000 / year",
    highlights: [
      "CAF French government student housing subsidies (up to 40% monthly rent rebate)",
      "Special 5-Year multi-entry Schengen tourist visa for Indian Masters alumni",
      "Top global Grande École business schools (HEC, INSEAD, ESSEC) and Tech hubs",
      "Extensive English-taught curriculum with no French language requirement at entry"
    ],
    description: "France is a global capital of business, luxury, gastronomy, and technology, offering rich government subsidies, English-taught programs, and extended Schengen visas."
  },
  {
    name: "Cyprus",
    shortName: "Cyprus",
    code: "cy",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Hospitality & MBA"],
    eligibility: "Intermediate Pass students can apply ✅ (12th Pass with 45%+)",
    workRights: "20 hours per week part-time work permitted during semesters",
    intakes: "February, June & October",
    avgTuition: "€3,000 – €5,500 / year",
    highlights: [
      "Extremely high visa success rate with hassle-free documentation",
      "No IELTS mandatory for qualifying students; direct institutional assessment",
      "Safe, English-speaking Mediterranean island community with pleasant climate",
      "Credit transfer pathways to UK and EU partner universities"
    ],
    description: "Cyprus provides an accessible European higher education option with smooth admission criteria, warm Mediterranean living, and affordable tuition fees."
  },
  {
    name: "United Arab Emirates",
    shortName: "Dubai",
    code: "ae",
    region: "Middle East",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    courses: ["Diploma Courses", "Hotel Management", "Bachelors & MBA Programs"],
    eligibility: "Intermediate / Graduate / Age 18+ (No IELTS required)",
    workRights: "Full-time / Part-time work permits allowed with UAE Green Visa options",
    intakes: "January, May & September (Year-round rolling admissions)",
    avgTuition: "AED 28,000 – 60,000 / year",
    highlights: [
      "100% visa success rate with 1-2 week fast-track visa issuance",
      "Zero income tax on earnings with world-class international business hub",
      "Branch campuses of top UK & Australian universities (Heriot-Watt, Wollongong, Middlesex)",
      "Seamless transition from student visa status to full employment residence visa"
    ],
    description: "Dubai is the world's fastest-growing cosmopolitan hub, offering top UK/Australian accredited degrees, tax-free earnings, and immediate corporate employment."
  },
  {
    name: "Singapore",
    shortName: "Singapore",
    code: "sg",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
    courses: ["Diploma Courses", "Hotel Management Specializations", "Business Diplomas"],
    eligibility: "10th Class pass students can apply ✅ (Age 17+)",
    workRights: "6 Months Study + 6 Months Paid Industry Internship (Guaranteed Placement)",
    intakes: "Monthly & Bi-Monthly Rolling Intakes",
    avgTuition: "SGD 6,500 – 14,000 / total program",
    highlights: [
      "Exclusive 6+6 Hospitality & Business Diploma packages with paid stipends",
      "10th Class pass students eligible for direct diploma enrollment",
      "Fast-track 1-2 week Student Pass visa grant with high approval rate",
      "Global financial capital with world-leading safety, clean infrastructure, and MNCs"
    ],
    description: "Singapore's 6+6 package offers 6 months classroom learning followed by 6 months guaranteed paid internship at premier hotels and enterprises in Asia's financial powerhouse."
  },
  {
    name: "Malaysia",
    shortName: "Malaysia",
    code: "my",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
    courses: ["Hotel Management Courses", "Hospitality Diplomas", "Twinning Degrees"],
    eligibility: "10th / 12th Pass (Minimum 45% marks)",
    workRights: "Part-time work permitted during semester breaks & holidays",
    intakes: "January, May & September",
    avgTuition: "$3,500 – $7,500 / year",
    highlights: [
      "Twinning (3+0 / 2+1) degrees from UK & Australian universities at 1/3rd the cost",
      "Affordable living expenses with high-quality English-taught curricula",
      "No IELTS required for select foundation and diploma streams",
      "Safe, multicultural Asian education hub with global campus facilities"
    ],
    description: "Malaysia enables students to earn prestigious British and Australian degrees at a fraction of the cost in a vibrant, multicultural, and modern Asian destination."
  },
  {
    name: "Mauritius",
    shortName: "Mauritius",
    code: "mu",
    region: "Africa / Indian Ocean",
    image: "https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=600&q=80",
    courses: [
      "Diploma in Business Management", 
      "Hospitality & Tourism Management",
      "Pathway to UK, Australia & Canada"
    ],
    eligibility: "10th Class pass students can apply ✅ (Age 18+)",
    workRights: "20 hrs/week part-time work & Pathway to UK, Australia, Canada",
    intakes: "Once in every 3 months",
    avgTuition: "Only $4,200 USD (Below ₹4 Lakhs)",
    pathway: "Direct Pathway to UK, Australia & Canada",
    highlights: [
      "Pathway to UK, Australia & Canada",
      "Only $4,200 USD Tuition Fee (Below ₹4 Lakhs)",
      "Intakes once in every 3 months",
      "10th Class pass students eligible for direct foundation & diploma entry",
      "Visa sponsored directly by institutions with visa-on-arrival facilitation",
      "No IELTS test score required for qualifying applicants"
    ],
    description: "Mauritius provides a cost-effective, high-opportunity pathway to the UK, Australia, and Canada with simplified visa procedures, quarterly intakes, and total fees below ₹4 Lakhs ($4,200 USD)."
  }
];

export function DestinationsSection() {
  const [selectedCountry, setSelectedCountry] = useState<Destination | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when modal is active
  useEffect(() => {
    if (selectedCountry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCountry]);

  const handleContactClick = (country: Destination) => {
    setSelectedCountry(null);
    toast.success(`Country selected: ${country.name}!`, {
      description: "Fill out the contact form below to receive your customized admission & visa guide."
    });
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = (country: Destination) => {
    const message = encodeURIComponent(
      `Hi McCoy Global Consultancy, I am interested in studying in ${country.name}. Could you please send me the complete country guide, eligibility criteria, and fee details?`
    );
    window.open(`https://wa.me/917993356064?text=${message}`, "_blank");
  };

  return (
    <section id="destinations" className="bg-white text-slate-800 pt-12 pb-14 relative overflow-hidden border-b border-slate-100">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--gold)]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Title */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center flex flex-col items-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-2.5">
              <Globe className="h-3.5 w-3.5 shrink-0 animate-pulse text-[var(--gold)]" />
              <span>Study Destinations</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Choose Your <span className="text-[var(--gold)]">Global Path</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
              Click on any country flag below to view the full admission guide, eligibility criteria, and post-study work rights.
            </p>
          </div>
        </ScrollReveal>

        {/* Style tag to create smooth infinite scrolling marquee effect */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes infinite-scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
          .animate-infinite-scroll-up {
            animation: infinite-scroll-up 32s linear infinite;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />

        {/* Desktop/Laptop View: Premium horizontal infinite scrolling track */}
        <div className="hidden md:block">
          <ScrollReveal direction="up" delay={200}>
            <div className="relative w-full -mx-6 px-6 overflow-hidden">
              {/* Scrollable Row (Infinite loop) */}
              <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] w-max select-none">
                
                {/* Track 1 (Original List) */}
                <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
                  {destinations.map((country) => (
                    <button
                      key={`${country.code}-track1`}
                      type="button"
                      onClick={() => setSelectedCountry(country)}
                      className="w-[180px] sm:w-[220px] md:w-[280px] shrink-0 text-left focus:outline-none group cursor-pointer"
                      title={`Click to view ${country.name} Guide`}
                    >
                      {/* Card Container (Perfect Square) */}
                      <div className="relative flex flex-col justify-end aspect-square w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_45px_rgba(184,123,44,0.2)] group-hover:border-[var(--gold)]/50 transition-all duration-500 bg-slate-900 group-hover:-translate-y-1.5">
                        
                        {/* Background Destination Flag (Full Card) */}
                        <img 
                          src={`https://flagcdn.com/w640/${country.code}.png`} 
                          alt={`${country.name} Flag`} 
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Subtle dark gradient mask for high legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent z-10 transition-opacity duration-300 group-hover:from-slate-950/75" />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 z-15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/20 backdrop-blur-[1px]">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-3.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-widest text-white shadow-lg">
                            View Guide
                          </span>
                        </div>

                        {/* Country Pill Badge Overlay at the bottom */}
                        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg border border-slate-100 min-w-[100px] sm:min-w-[155px] justify-center z-20 transition-transform duration-300 group-hover:scale-105">
                          <div className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
                            <img 
                              src={`https://flagcdn.com/w40/${country.code}.png`} 
                              className="h-full w-full object-cover scale-125" 
                              alt={`${country.name} Flag`} 
                            />
                          </div>
                          <span className="text-[0.6rem] sm:text-[0.72rem] font-black text-slate-800 uppercase tracking-wider">{country.shortName || country.name}</span>
                        </div>

                      </div>
                    </button>
                  ))}
                </div>

                {/* Track 2 (Identical Copy for Seamless Infinite Scrolling Loop) */}
                <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
                  {destinations.map((country) => (
                    <button
                      key={`${country.code}-track2`}
                      type="button"
                      onClick={() => setSelectedCountry(country)}
                      className="w-[180px] sm:w-[220px] md:w-[280px] shrink-0 text-left focus:outline-none group cursor-pointer"
                      title={`Click to view ${country.name} Guide`}
                    >
                      {/* Card Container (Perfect Square) */}
                      <div className="relative flex flex-col justify-end aspect-square w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_45px_rgba(184,123,44,0.2)] group-hover:border-[var(--gold)]/50 transition-all duration-500 bg-slate-900 group-hover:-translate-y-1.5">
                        
                        {/* Background Destination Flag (Full Card) */}
                        <img 
                          src={`https://flagcdn.com/w640/${country.code}.png`} 
                          alt={`${country.name} Flag`} 
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Subtle dark gradient mask for high legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent z-10 transition-opacity duration-300 group-hover:from-slate-950/75" />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 z-15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/20 backdrop-blur-[1px]">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-3.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-widest text-white shadow-lg">
                            View Guide
                          </span>
                        </div>

                        {/* Country Pill Badge Overlay at the bottom */}
                        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg border border-slate-100 min-w-[100px] sm:min-w-[155px] justify-center z-20 transition-transform duration-300 group-hover:scale-105">
                          <div className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
                            <img 
                              src={`https://flagcdn.com/w40/${country.code}.png`} 
                              className="h-full w-full object-cover scale-125" 
                              alt={`${country.name} Flag`} 
                            />
                          </div>
                          <span className="text-[0.6rem] sm:text-[0.72rem] font-black text-slate-800 uppercase tracking-wider">{country.shortName || country.name}</span>
                        </div>

                      </div>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile View: Vertical Upward Infinite Scrolling Marquee (smooth continuous loop) */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" delay={200}>
            <div className="relative w-full h-[460px] xs:h-[500px] overflow-hidden">
              {/* Vertical Upward Moving Container */}
              <div className="flex flex-col animate-infinite-scroll-up hover:[animation-play-state:paused] active:[animation-play-state:paused] select-none">
                {/* Track 1 (Original List) */}
                <div className="grid grid-cols-2 gap-2.5 xs:gap-3 pb-2.5 xs:pb-3">
                  {destinations.map((country) => (
                    <button
                      key={`${country.code}-mobile-track1`}
                      type="button"
                      onClick={() => setSelectedCountry(country)}
                      className="group relative flex flex-col justify-end aspect-square w-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] active:scale-95 transition-transform bg-slate-900 text-left focus:outline-none cursor-pointer"
                      title={`Tap to view ${country.name} Guide`}
                    >
                      {/* Background Destination Flag (Full Card) */}
                      <img
                        src={`https://flagcdn.com/w320/${country.code}.png`}
                        alt={`${country.name} Flag`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle dark gradient mask for high legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent z-10" />

                      {/* Country Pill Badge Overlay at the bottom */}
                      <div className="absolute bottom-2.5 xs:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 xs:px-2.5 xs:py-1.5 rounded-full shadow-lg border border-slate-100 min-w-[80px] xs:min-w-[100px] max-w-[90%] justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                        <div className="h-3.5 w-3.5 xs:h-4.5 xs:w-4.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0">
                          <img
                            src={`https://flagcdn.com/w40/${country.code}.png`}
                            className="h-full w-full object-cover scale-125"
                            alt={`${country.name} Flag`}
                          />
                        </div>
                        <span className="text-[0.55rem] xs:text-[0.6rem] font-black text-slate-800 uppercase tracking-wider truncate">
                          {country.shortName || country.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Track 2 (Identical Duplicate for Seamless Infinite Loop) */}
                <div className="grid grid-cols-2 gap-2.5 xs:gap-3 pb-2.5 xs:pb-3" aria-hidden="true">
                  {destinations.map((country) => (
                    <button
                      key={`${country.code}-mobile-track2`}
                      type="button"
                      onClick={() => setSelectedCountry(country)}
                      className="group relative flex flex-col justify-end aspect-square w-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] active:scale-95 transition-transform bg-slate-900 text-left focus:outline-none cursor-pointer"
                      title={`Tap to view ${country.name} Guide`}
                    >
                      {/* Background Destination Flag (Full Card) */}
                      <img
                        src={`https://flagcdn.com/w320/${country.code}.png`}
                        alt={`${country.name} Flag`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle dark gradient mask for high legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent z-10" />

                      {/* Country Pill Badge Overlay at the bottom */}
                      <div className="absolute bottom-2.5 xs:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 xs:px-2.5 xs:py-1.5 rounded-full shadow-lg border border-slate-100 min-w-[80px] xs:min-w-[100px] max-w-[90%] justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                        <div className="h-3.5 w-3.5 xs:h-4.5 xs:w-4.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0">
                          <img
                            src={`https://flagcdn.com/w40/${country.code}.png`}
                            className="h-full w-full object-cover scale-125"
                            alt={`${country.name} Flag`}
                          />
                        </div>
                        <span className="text-[0.55rem] xs:text-[0.6rem] font-black text-slate-800 uppercase tracking-wider truncate">
                          {country.shortName || country.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* COUNTRY DETAILS POPUP MODAL (View Guide & Contact Integration)            */}
      {/* ========================================================================= */}
      {selectedCountry && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => setSelectedCountry(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="country-modal-title"
        >
          <div 
            className="relative w-full max-w-2xl rounded-3xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col max-h-[92vh] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner Header with Country Flag & Backdrop */}
            <div className="relative h-36 sm:h-48 w-full overflow-hidden bg-slate-900 shrink-0">
              <img 
                src={`https://flagcdn.com/w640/${selectedCountry.code}.png`} 
                alt={`${selectedCountry.name} Flag`} 
                className="w-full h-full object-cover opacity-65 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091930] via-[#091930]/60 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCountry(null)}
                className="absolute top-3.5 right-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 hover:scale-110 shadow-lg border border-white/20"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header Title Information */}
              <div className="absolute bottom-3.5 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between gap-3 z-10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl overflow-hidden border-2 border-white shadow-xl shrink-0 bg-white">
                    <img 
                      src={`https://flagcdn.com/w80/${selectedCountry.code}.png`} 
                      alt="" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 px-2.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-widest text-[var(--gold)] backdrop-blur-md mb-1">
                      <Plane className="h-2.5 w-2.5" />
                      <span>{selectedCountry.region || "Global Pathway"}</span>
                    </div>
                    <h3 id="country-modal-title" className="font-display text-xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
                      Study in {selectedCountry.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-slate-700 text-sm sm:text-base">
              
              {/* Short Country Overview */}
              {selectedCountry.description && (
                <p className="text-[0.88rem] sm:text-[0.95rem] text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  {selectedCountry.description}
                </p>
              )}

              {/* Transfer Pathway Banner (if specified) */}
              {selectedCountry.pathway && (
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/40 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Plane className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[0.66rem] font-bold uppercase tracking-wider text-blue-700 block">
                      Transfer Pathway
                    </span>
                    <span className="text-[0.92rem] font-extrabold text-slate-900 block">
                      {selectedCountry.pathway}
                    </span>
                  </div>
                </div>
              )}

              {/* Grid of Key Features & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                {/* Programs Available */}
                <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center gap-2 text-[var(--gold)] font-bold text-[0.72rem] uppercase tracking-wider mb-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Popular Programs</span>
                  </div>
                  <ul className="space-y-1">
                    {selectedCountry.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[0.82rem] sm:text-[0.86rem] text-slate-800 font-medium">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility Criteria */}
                <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center gap-2 text-[var(--gold)] font-bold text-[0.72rem] uppercase tracking-wider mb-2">
                    <FileText className="h-4 w-4" />
                    <span>Entry Requirements</span>
                  </div>
                  <p className="text-[0.82rem] sm:text-[0.86rem] text-slate-800 font-medium leading-snug">
                    {selectedCountry.eligibility}
                  </p>
                </div>

                {/* Post-Study Work Rights */}
                {selectedCountry.workRights && (
                  <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
                    <div className="flex items-center gap-2 text-[var(--gold)] font-bold text-[0.72rem] uppercase tracking-wider mb-1.5">
                      <Briefcase className="h-4 w-4" />
                      <span>Post-Study Work Visa</span>
                    </div>
                    <p className="text-[0.82rem] sm:text-[0.86rem] text-slate-800 font-medium leading-snug">
                      {selectedCountry.workRights}
                    </p>
                  </div>
                )}

                {/* Intakes & Tuition */}
                <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center gap-2 text-[var(--gold)] font-bold text-[0.72rem] uppercase tracking-wider mb-1.5">
                    <Clock className="h-4 w-4" />
                    <span>Intakes & Avg. Tuition</span>
                  </div>
                  <p className="text-[0.82rem] sm:text-[0.86rem] text-slate-800 font-medium leading-snug">
                    <span className="text-slate-500 block text-[0.75rem]">Intakes: {selectedCountry.intakes || "Spring & Fall"}</span>
                    <span className="text-emerald-600 font-bold block mt-0.5">{selectedCountry.avgTuition || "Affordable Fee Structure"}</span>
                  </p>
                </div>

              </div>

              {/* Key Highlights / Why Choose */}
              {selectedCountry.highlights && selectedCountry.highlights.length > 0 && (
                <div className="rounded-2xl border border-[var(--gold)]/20 bg-amber-50/40 p-3.5 sm:p-4">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                    <Sparkles className="h-4 w-4 text-[var(--gold)]" />
                    <span>Why Choose {selectedCountry.name}?</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[0.8rem] sm:text-[0.84rem] text-slate-700">
                    {selectedCountry.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Action Bar (View Guide, Contact & WhatsApp) */}
            <div className="p-3.5 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-center sm:text-left">
                <span className="block text-[0.7rem] font-extrabold uppercase tracking-widest text-[var(--gold)]">
                  Free Admission Assessment
                </span>
                <span className="text-xs text-slate-500 hidden sm:block">
                  Personalized university shortlist & visa roadmap
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick(selectedCountry)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-700 px-4 py-2.5 text-xs font-bold transition-all hover:bg-emerald-600 hover:text-white hover:scale-105 shadow-sm cursor-pointer"
                  title="Chat directly on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleContactClick(selectedCountry)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(224,183,109,0.4)] shadow-md cursor-pointer"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <span>View Guide & Contact</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

