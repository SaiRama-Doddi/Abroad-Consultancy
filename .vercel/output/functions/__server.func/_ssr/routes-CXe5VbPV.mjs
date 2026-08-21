import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as Coins, B as Award, C as GraduationCap, D as Eye, E as FileCheck, F as ChevronLeft, I as ChevronDown, L as Calendar, M as CircleQuestionMark, N as CircleCheck, O as DollarSign, P as ChevronRight, R as Briefcase, S as Handshake, T as FileText, V as ArrowUp, _ as Menu, a as Target, b as Landmark, c as Sparkles, d as Send, f as Quote, g as MessagesSquare, h as MessageSquare, i as Trophy, j as Clock, k as Compass, l as Shield, m as Phone, n as Users, o as Tag, p as Plane, r as User, s as Star, t as X, u as ShieldCheck, v as MapPin, w as Globe, x as Headphones, y as Mail, z as BookOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CXe5VbPV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function SiteHeader() {
	const [activeLink, setActiveLink] = (0, import_react.useState)("Home");
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
			const sections = links.map((link) => {
				const id = link.href.substring(1);
				const element = document.getElementById(id);
				if (element) {
					const rect = element.getBoundingClientRect();
					return {
						label: link.label,
						top: rect.top + window.scrollY,
						bottom: rect.bottom + window.scrollY
					};
				}
				return null;
			});
			const scrollPosition = window.scrollY + 120;
			const currentSection = sections.find((sec) => sec && scrollPosition >= sec.top && scrollPosition < sec.bottom);
			if (currentSection) setActiveLink(currentSection.label);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-primary-foreground/5 ${isScrolled ? "bg-[#0b1224]/85 backdrop-blur-xl py-2.5 shadow-lg" : "bg-[#0b1224] py-3.5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3 animate-slide-right group",
					onClick: () => setActiveLink("Home"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-16 sm:h-12 sm:w-20 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(166,106,33,0.25)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "mcCoy Global Logo",
							className: "h-full w-full object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-sans text-[1.15rem] sm:text-[1.4rem] font-black tracking-[0.03em] text-white leading-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]",
							children: ["mcCoy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-gold-shimmer font-black text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(224,183,109,0.35)]",
								children: "Global"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-[0.55rem] sm:text-[0.68rem] tracking-[0.36em] text-[var(--gold)] font-bold leading-none uppercase mt-1.5 sm:mt-2.5 drop-shadow-[0_1px_5px_rgba(224,183,109,0.25)]",
							children: "Consultancy"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-4 lg:flex",
					children: links.map((l, index) => {
						const isActive = activeLink === l.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.href,
							onClick: () => setActiveLink(l.label),
							className: `relative text-[0.72rem] font-extrabold uppercase tracking-[0.18em] transition-all duration-300 py-2.5 flex items-center justify-center ${isActive ? "text-[#0b1224] px-7 gap-2" : "text-white/70 hover:text-white hover:bg-white/5 rounded-lg px-5 gap-0"} animate-slide-down`,
							style: { animationDelay: `${.1 * index}s` },
							children: [
								isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 active-flight-shape z-0" }),
								isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-3.5 w-3.5 text-[#0b1224] animate-plane-wiggle relative z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: l.label
								})
							]
						}, l.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex animate-slide-left",
					style: { animationDelay: "0.5s" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "flex items-center gap-2.5 rounded-lg border border-[var(--gold)] bg-[#0b1224] px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--gold)] hover:text-[#0b1224] hover:shadow-[0_0_20px_rgba(166,106,33,0.45)] group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-3.5 w-3.5 -rotate-45 text-[var(--gold)] group-hover:text-[#0b1224] transition-colors" }), "Enquire Now"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMobileMenuOpen(!mobileMenuOpen),
					className: "flex items-center justify-center p-2 text-white/80 hover:text-white lg:hidden",
					children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-full left-0 w-full bg-[#0b1224]/95 border-b border-primary-foreground/10 py-6 px-6 backdrop-blur-xl lg:hidden animate-fade-rise",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-5",
				children: [links.map((l) => {
					const isActive = activeLink === l.label;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => {
							setActiveLink(l.label);
							setMobileMenuOpen(false);
						},
						className: `text-xs font-semibold uppercase tracking-[0.2em] transition-colors py-2 border-b border-white/5 ${isActive ? "text-[var(--gold)]" : "text-white/75 hover:text-white"}`,
						children: l.label
					}, l.label);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					onClick: () => setMobileMenuOpen(false),
					className: "mt-2 flex items-center justify-center gap-2 rounded-lg py-3 text-xs font-bold uppercase tracking-[0.2em] text-white border border-[var(--gold)] bg-[#0b1224] hover:bg-[var(--gold)] hover:text-[#0b1224] transition-all duration-300 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-4 w-4 -rotate-45 text-[var(--gold)] group-hover:text-[#0b1224] transition-colors" }), "Enquire Now"]
				})]
			})
		})]
	});
}
function renderLetterByLetter(text, baseDelay, charStagger, animateClass, active, startIndex = 0) {
	let charIndex = startIndex;
	return text.split(" ").map((word, wi) => {
		const wordChars = word.split("");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-[0.24em] inline-block whitespace-nowrap",
			children: wordChars.map((ch, ci) => {
				const delay = baseDelay + charIndex * charStagger;
				charIndex++;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `${active ? animateClass : "opacity-0"} inline-block`,
					style: { animationDelay: `${delay}s` },
					children: ch
				}, ci);
			})
		}, wi);
	});
}
function HeroSection() {
	const [videoPlaying, setVideoPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setVideoPlaying(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-[90vh] lg:min-h-[85vh] items-center overflow-hidden pt-24 pb-4 sm:pb-6 lg:pb-8",
		style: { background: "linear-gradient(100deg, #091930 0%, #0a2e5c 35%, #0284c7 70%, #38bdf8 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 animate-slow-pan",
				style: { opacity: .65 },
				src: "/hero-flight.mp4",
				poster: "/hero-fallback.jpg",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				"aria-hidden": "true",
				onPlaying: () => setVideoPlaying(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-48 pointer-events-none z-[1]",
				style: { background: "linear-gradient(to top, #060a15 0%, rgba(6, 10, 21, 0.4) 40%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none z-[1]",
				style: { background: "linear-gradient(to right, rgba(9, 25, 48, 0.92) 0%, rgba(9, 25, 48, 0.75) 45%, rgba(9, 25, 48, 0.3) 75%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 animate-slide-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.72rem] font-bold uppercase tracking-[0.45em] text-[var(--gold)]",
								style: { textShadow: "0 1px 4px rgba(6, 10, 21, 0.9), 0 2px 10px rgba(6, 10, 21, 0.8)" },
								children: "Study \xA0·\xA0 Work \xA0·\xA0 Migrate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-36 h-8 overflow-visible hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "w-full h-full overflow-visible",
									viewBox: "0 0 120 30",
									fill: "none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										id: "flight-path",
										d: "M10,24 C40,4 80,8 110,12",
										stroke: "var(--gold)",
										strokeWidth: "1.5",
										strokeLinecap: "round",
										strokeDasharray: "4 4",
										className: "opacity-70"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M-5,-3 L5,0 L-5,3 L-2,0 Z",
										fill: "var(--gold)",
										className: "animate-plane-fly",
										style: { animationDelay: "0.2s" }
									})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] xl:text-[5.5rem] font-semibold leading-[1.05] text-white tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								style: { textShadow: "0 2px 12px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" },
								children: renderLetterByLetter("mcCoy Global", .3, .1, "animate-letter-in", videoPlaying, 0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block mt-2 text-[var(--gold)] font-semibold",
								style: { textShadow: "0 2px 12px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" },
								children: renderLetterByLetter("Consultancy", .3, .1, "animate-letter-in", videoPlaying, 12)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-base leading-relaxed text-white animate-fade-rise opacity-0 sm:text-lg",
							style: {
								animationDelay: "0.7s",
								textShadow: "0 2px 10px rgba(6, 10, 21, 0.95), 0 1px 3px rgba(6, 10, 21, 0.9)"
							},
							children: "Your journey beyond borders, guided end to end – from choosing the right country to boarding the flight with confidence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-rise opacity-0",
							style: { animationDelay: "0.9s" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "flex items-center justify-center gap-2.5 rounded-lg px-6 sm:px-8 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(166,106,33,0.45)] w-full sm:w-auto",
								style: { background: "var(--gradient-gold)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), "Free Consultation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#about",
								className: "flex items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-[#060a15]/30 backdrop-blur-sm px-6 sm:px-8 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold)]/10 hover:scale-105 w-full sm:w-auto",
								style: { textShadow: "0 1px 3px rgba(6, 10, 21, 0.8)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), "About Us"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 w-full rounded-2xl border border-white/10 bg-[#060a15]/65 p-5 backdrop-blur-lg md:p-6 animate-slide-up opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
					style: { animationDelay: "1.1s" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group transition-all duration-500 hover:-translate-y-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group-hover:translate-y-[-2px] transition-transform duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/25 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/25 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5.5 w-5.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-sans text-sm sm:text-base font-extrabold tracking-wider text-white uppercase",
											children: "Global Opportunities"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs sm:text-sm leading-relaxed text-white/80 group-hover:text-white transition-colors",
										children: "Access top study, work and migration destinations worldwide."
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group transition-all duration-500 hover:-translate-y-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group-hover:translate-y-[-2px] transition-transform duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/25 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/25 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5.5 w-5.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-sans text-sm sm:text-base font-extrabold tracking-wider text-white uppercase",
											children: "Expert Guidance"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs sm:text-sm leading-relaxed text-white/80 group-hover:text-white transition-colors",
										children: "Personalized support from application to visa and beyond."
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group transition-all duration-500 hover:-translate-y-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group-hover:translate-y-[-2px] transition-transform duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/25 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/25 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5.5 w-5.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-sans text-sm sm:text-base font-extrabold tracking-wider text-white uppercase",
											children: "Trusted & Reliable"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs sm:text-sm leading-relaxed text-white/80 group-hover:text-white transition-colors",
										children: "Transparent process with ethical advice you can always count on."
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group transition-all duration-500 hover:-translate-y-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group-hover:translate-y-[-2px] transition-transform duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/25 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/25 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "h-5.5 w-5.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-sans text-sm sm:text-base font-extrabold tracking-wider text-white uppercase",
											children: "End-to-End Support"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs sm:text-sm leading-relaxed text-white/80 group-hover:text-white transition-colors",
										children: "We're with you at every step of your journey, until you reach your destination."
									})]
								})
							})
						]
					})
				})]
			})
		]
	});
}
function ScrollReveal({ children, className = "", delay = 0, duration = 800, direction = "up", threshold = .05 }) {
	const [isIntersecting, setIsIntersecting] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsIntersecting(true);
				observer.unobserve(entry.target);
			}
		}, { threshold });
		if (ref.current) observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [threshold]);
	const getDirectionClass = () => {
		switch (direction) {
			case "up": return "translate-y-8 opacity-0";
			case "down": return "-translate-y-8 opacity-0";
			case "left": return "translate-x-8 opacity-0";
			case "right": return "-translate-x-8 opacity-0";
			default: return "opacity-0";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `transition-all cubic-bezier(0.22, 1, 0.36, 1) ${className} ${isIntersecting ? "translate-y-0 translate-x-0 opacity-100" : getDirectionClass()}`,
		style: {
			transitionDelay: `${delay}ms`,
			transitionDuration: `${duration}ms`
		},
		children
	});
}
var continentsRad = [
	[
		[-168, 65],
		[-120, 60],
		[-120, 48],
		[-125, 30],
		[-110, 22],
		[-98, 15],
		[-80, 8],
		[-80, 20],
		[-95, 30],
		[-75, 40],
		[-60, 50],
		[-55, 60],
		[-70, 70],
		[-100, 75],
		[-168, 65]
	],
	[
		[-80, 12],
		[-72, 10],
		[-50, -5],
		[-35, -5],
		[-40, -20],
		[-60, -40],
		[-70, -55],
		[-75, -50],
		[-70, -30],
		[-80, -10],
		[-80, 12]
	],
	[
		[-17, 32],
		[10, 35],
		[30, 30],
		[33, 10],
		[50, 10],
		[40, -15],
		[20, -34],
		[10, -10],
		[-10, 5],
		[-17, 15],
		[-17, 32]
	],
	[
		[-10, 62],
		[10, 55],
		[30, 65],
		[60, 70],
		[90, 75],
		[120, 75],
		[160, 70],
		[170, 60],
		[140, 50],
		[140, 35],
		[120, 30],
		[110, 15],
		[100, 10],
		[80, 10],
		[75, 20],
		[60, 15],
		[45, 12],
		[35, 30],
		[15, 38],
		[-10, 40],
		[-10, 62]
	],
	[
		[113, -22],
		[143, -20],
		[151, -33],
		[138, -38],
		[115, -34],
		[113, -22]
	],
	[
		[-70, 75],
		[-60, 83],
		[-25, 78],
		[-45, 60],
		[-70, 75]
	]
].map((poly) => poly.map(([lon, lat]) => [lon * Math.PI / 180, lat * Math.PI / 180]));
var cities = [
	{
		lon: -100,
		lat: 40,
		label: "USA 🇺🇸"
	},
	{
		lon: -79.3,
		lat: 43.6,
		label: "Canada 🇨🇦"
	},
	{
		lon: 0,
		lat: 51.5,
		label: "UK 🇬🇧"
	},
	{
		lon: 13.4,
		lat: 52.5,
		label: "Germany 🇩🇪"
	},
	{
		lon: 151.2,
		lat: -33.8,
		label: "Australia 🇦🇺"
	}
];
function InteractiveGlobe() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationId;
		let width = canvas.width;
		let height = canvas.height;
		let radius = 0;
		const resize = () => {
			const rect = canvas.parentElement?.getBoundingClientRect();
			width = rect?.width || 400;
			height = rect?.height || 500;
			canvas.width = width * window.devicePixelRatio;
			canvas.height = height * window.devicePixelRatio;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			radius = Math.min(width, height) * .38;
		};
		resize();
		window.addEventListener("resize", resize);
		let angleY = 1.6;
		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			const glowGrad = ctx.createRadialGradient(width / 2, height / 2, radius - 8, width / 2, height / 2, radius + 32);
			glowGrad.addColorStop(0, "rgba(224, 183, 109, 0.28)");
			glowGrad.addColorStop(.3, "rgba(224, 183, 109, 0.12)");
			glowGrad.addColorStop(.7, "rgba(224, 183, 109, 0.03)");
			glowGrad.addColorStop(1, "rgba(224, 183, 109, 0)");
			ctx.fillStyle = glowGrad;
			ctx.beginPath();
			ctx.arc(width / 2, height / 2, radius + 32, 0, Math.PI * 2);
			ctx.fill();
			const oceanGrad = ctx.createRadialGradient(width / 2 - radius * .25, height / 2 - radius * .25, radius * .1, width / 2, height / 2, radius);
			oceanGrad.addColorStop(0, "#0e1c3a");
			oceanGrad.addColorStop(.6, "#060f23");
			oceanGrad.addColorStop(1, "#030814");
			ctx.fillStyle = oceanGrad;
			ctx.beginPath();
			ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
			ctx.fill();
			angleY += .0035;
			const tiltAngle = .25;
			const cosX = Math.cos(tiltAngle);
			const sinX = Math.sin(tiltAngle);
			const project = (lonRad, latRad) => {
				const rotatedLon = lonRad + angleY;
				const x3d = radius * Math.cos(latRad) * Math.sin(rotatedLon);
				const y3d = -radius * Math.sin(latRad);
				const z3d = radius * Math.cos(latRad) * Math.cos(rotatedLon);
				const y3dTilted = y3d * cosX - z3d * sinX;
				const z3dTilted = y3d * sinX + z3d * cosX;
				return {
					x: width / 2 + x3d,
					y: height / 2 + y3dTilted,
					z: z3dTilted
				};
			};
			ctx.lineWidth = .6;
			ctx.strokeStyle = "rgba(224, 183, 109, 0.08)";
			for (let l = 0; l < 12; l++) {
				const lonRad = l * Math.PI / 6;
				ctx.beginPath();
				let first = true;
				for (let latDeg = -90; latDeg <= 90; latDeg += 10) {
					const p = project(lonRad, latDeg * Math.PI / 180);
					if (p.z < 0) if (first) {
						ctx.moveTo(p.x, p.y);
						first = false;
					} else ctx.lineTo(p.x, p.y);
					else first = true;
				}
				ctx.stroke();
			}
			for (let latDeg = -80; latDeg <= 80; latDeg += 20) {
				const latRad = latDeg * Math.PI / 180;
				ctx.beginPath();
				let first = true;
				for (let lonDeg = -180; lonDeg <= 180; lonDeg += 10) {
					const p = project(lonDeg * Math.PI / 180, latRad);
					if (p.z < 0) if (first) {
						ctx.moveTo(p.x, p.y);
						first = false;
					} else ctx.lineTo(p.x, p.y);
					else first = true;
				}
				ctx.stroke();
			}
			continentsRad.forEach((poly) => {
				const projectedPoly = poly.map(([lon, lat]) => project(lon, lat));
				if (projectedPoly.reduce((acc, p) => acc + p.z, 0) / projectedPoly.length < 0) {
					ctx.beginPath();
					ctx.moveTo(projectedPoly[0].x, projectedPoly[0].y);
					for (let i = 1; i < projectedPoly.length; i++) ctx.lineTo(projectedPoly[i].x, projectedPoly[i].y);
					ctx.closePath();
					const landGrad = ctx.createLinearGradient(width / 2 - radius, height / 2 - radius, width / 2 + radius, height / 2 + radius);
					landGrad.addColorStop(0, "rgba(224, 183, 109, 0.32)");
					landGrad.addColorStop(1, "rgba(184, 123, 44, 0.2)");
					ctx.fillStyle = landGrad;
					ctx.fill();
					ctx.strokeStyle = "rgba(224, 183, 109, 0.45)";
					ctx.lineWidth = .85;
					ctx.stroke();
				}
			});
			const shadowGrad = ctx.createRadialGradient(width / 2 - radius * .35, height / 2 - radius * .35, radius * .1, width / 2, height / 2, radius);
			shadowGrad.addColorStop(0, "rgba(255, 255, 255, 0.1)");
			shadowGrad.addColorStop(.55, "rgba(0, 0, 0, 0)");
			shadowGrad.addColorStop(1, "rgba(0, 0, 0, 0.85)");
			ctx.fillStyle = shadowGrad;
			ctx.beginPath();
			ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
			ctx.fill();
			const projectedCities = cities.map((c) => {
				return {
					...project(c.lon * Math.PI / 180, c.lat * Math.PI / 180),
					label: c.label
				};
			});
			ctx.lineWidth = 1;
			ctx.strokeStyle = "rgba(224, 183, 109, 0.4)";
			for (let i = 0; i < projectedCities.length; i++) {
				const c1 = projectedCities[i];
				const c2 = projectedCities[(i + 1) % projectedCities.length];
				if (c1.z < 0 && c2.z < 0) {
					ctx.beginPath();
					const midX = (c1.x + c2.x) / 2;
					const midY = (c1.y + c2.y) / 2 - 25;
					ctx.moveTo(c1.x, c1.y);
					ctx.quadraticCurveTo(midX, midY, c2.x, c2.y);
					ctx.stroke();
					const t = (Date.now() * 6e-4 + i * .25) % 1;
					const px = (1 - t) * (1 - t) * c1.x + 2 * (1 - t) * t * midX + t * t * c2.x;
					const py = (1 - t) * (1 - t) * c1.y + 2 * (1 - t) * t * midY + t * t * c2.y;
					ctx.fillStyle = "#ffffff";
					ctx.shadowColor = "#e0b76d";
					ctx.shadowBlur = 8;
					ctx.beginPath();
					ctx.arc(px, py, 2.5, 0, Math.PI * 2);
					ctx.fill();
					ctx.shadowBlur = 0;
				}
			}
			projectedCities.forEach((city) => {
				if (city.z < 0) {
					ctx.fillStyle = "#e0b76d";
					ctx.beginPath();
					ctx.arc(city.x, city.y, 4.5, 0, Math.PI * 2);
					ctx.fill();
					const ringScale = 1 + Math.abs(Math.sin(Date.now() * .0022)) * 1.4;
					ctx.strokeStyle = "rgba(224, 183, 109, 0.35)";
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.arc(city.x, city.y, 4.5 * ringScale, 0, Math.PI * 2);
					ctx.stroke();
					ctx.font = "bold 9px Karla, sans-serif";
					ctx.fillStyle = "#ffffff";
					ctx.textAlign = "center";
					ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
					ctx.shadowBlur = 4;
					ctx.fillText(city.label, city.x, city.y - 12);
					ctx.shadowBlur = 0;
				}
			});
			animationId = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "block w-full h-full object-cover",
		"aria-label": "Realistic rotating 3D golden globe showing worldwide visa destinations"
	});
}
function AnimatedCounter({ value, duration = 2e3 }) {
	const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
	const suffix = value.replace(/[0-9,]/g, "");
	const hasComma = value.includes(",");
	const [count, setCount] = (0, import_react.useState)(0);
	const countRef = (0, import_react.useRef)(0);
	const elementRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let observer;
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const currentCount = Math.floor(progress * numericValue);
			setCount(currentCount);
			countRef.current = currentCount;
			if (progress < 1) window.requestAnimationFrame(step);
		};
		const handleIntersection = (entries) => {
			if (entries[0].isIntersecting) {
				window.requestAnimationFrame(step);
				observer.disconnect();
			}
		};
		if (elementRef.current && !isNaN(numericValue)) {
			observer = new IntersectionObserver(handleIntersection, { threshold: .1 });
			observer.observe(elementRef.current);
		} else setCount(NaN);
		return () => {
			if (observer) observer.disconnect();
		};
	}, [numericValue, duration]);
	if (isNaN(numericValue)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value });
	const formatNumber = (num) => {
		if (hasComma) return num.toLocaleString();
		return num.toString();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref: elementRef,
		children: [formatNumber(count), suffix]
	});
}
var stats$1 = [
	{
		value: "12+",
		label: "Years Guiding Travellers",
		icon: Users
	},
	{
		value: "4,800+",
		label: "Visas Processed",
		icon: FileText
	},
	{
		value: "18",
		label: "Countries Covered",
		icon: Globe
	},
	{
		value: "Free",
		label: "Zero Fee Consultation",
		icon: Handshake
	}
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "bg-white text-slate-800 pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-14 lg:grid-cols-2 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "left",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
                @keyframes float-slow {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-12px) rotate(2deg); }
                }
                @keyframes float-medium {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(12px) rotate(-2deg); }
                }
                @keyframes float-fast {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
              ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[2.5rem] border border-[var(--gold)]/20 bg-slate-50/50 backdrop-blur-md",
							style: { boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.05), 0 0 50px rgba(184, 123, 44, 0.02)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] w-full overflow-hidden bg-slate-50 group/globe flex items-center justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 w-full h-full z-[1]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveGlobe, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-0 left-0 w-full h-24 pointer-events-none z-[2] opacity-[0.12]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "w-full h-full text-[var(--gold)]",
											viewBox: "0 0 400 100",
											fill: "currentColor",
											preserveAspectRatio: "none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "10",
													y: "30",
													width: "15",
													height: "70"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "30",
													y: "10",
													width: "18",
													height: "90"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "52",
													y: "40",
													width: "14",
													height: "60"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "70",
													y: "20",
													width: "22",
													height: "80"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 120 100 C 120 70, 135 60, 150 100 Z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 140 100 C 140 65, 158 55, 175 100 Z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 165 100 C 165 75, 180 70, 195 100 Z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 185 100 C 185 85, 195 80, 205 100 Z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M 230 100 Q 280 40 330 100",
													stroke: "currentColor",
													strokeWidth: "2.5",
													fill: "none"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M 235 100 Q 280 45 325 100",
													stroke: "currentColor",
													strokeWidth: "1",
													fill: "none"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "350",
													y: "30",
													width: "16",
													height: "70"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "370",
													y: "15",
													width: "20",
													height: "85"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-28 right-12 z-[2] pointer-events-none opacity-40 rotate-[25deg]",
										style: { animation: "float-medium 6.5s ease-in-out infinite" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-8 h-8 text-[var(--gold)]",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-6 left-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]",
										style: { animation: "float-slow 7s ease-in-out infinite" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--gold)]",
											children: "Study Abroad"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[0.82rem] font-black text-slate-800 uppercase tracking-wide mt-0.5",
											children: "Admissions & Visas"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-[46%] left-6 z-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)]",
										style: { animation: "float-fast 5s ease-in-out infinite" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex -space-x-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "https://flagcdn.com/w40/gb.png",
													className: "h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm",
													alt: "UK"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "https://flagcdn.com/w40/de.png",
													className: "h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm",
													alt: "Germany"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "https://flagcdn.com/w40/us.png",
													className: "h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm",
													alt: "USA"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[0.72rem] font-extrabold uppercase tracking-widest text-slate-800",
											children: "Global Visas"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-6 left-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]",
										style: { animation: "float-medium 6s ease-in-out infinite" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4.5 w-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--gold)]",
											children: "Work & Migrate"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[0.82rem] font-black text-slate-800 uppercase tracking-wide mt-0.5",
											children: "Opportunities"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-6 right-6 z-10 flex flex-col items-center justify-center text-center px-5 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]",
										style: { animation: "float-slow 7.5s ease-in-out infinite" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-2xl sm:text-3xl font-extrabold text-[var(--gold)] leading-none",
											children: "98%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[0.65rem] sm:text-[0.72rem] font-extrabold uppercase tracking-widest text-slate-700 mt-1 leading-none",
											children: "Approval Rate"
										})]
									})
								]
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "right",
					delay: 300,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] self-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "About Us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs shrink-0 select-none",
									children: "✈️"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl",
								children: ["From your first question to the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--gold)] font-bold",
									children: "check-in counter"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[1.02rem] leading-relaxed text-slate-600 text-justify",
								children: [
									"mcCoy Global Consultancy is a boutique overseas advisory built on one simple belief: a visa is not paperwork, it is a ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--gold)] font-semibold animate-pulse",
										children: "life decision"
									}),
									". We sit with you, understand your profile, and shape a route that actually fits — study, skilled work, or family migration."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[1.02rem] leading-relaxed text-slate-600 text-justify",
								children: [
									"Documentation, applications, interview prep, tickets and pre-departure briefing — ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--gold)] font-semibold",
										children: "every step"
									}),
									" is handled by a named consultant who stays with you until you walk through that terminal with your passport in hand."
								]
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center",
					children: stats$1.map((s, idx) => {
						const Icon = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex items-center gap-4 ${idx > 0 ? "pt-4 lg:pt-0 border-slate-100" : ""} ${idx === 1 || idx === 3 ? "sm:pl-6 sm:border-l lg:pl-8 lg:border-l border-slate-100" : ""} ${idx === 2 ? "sm:border-l-0 lg:pl-8 lg:border-l border-slate-100" : ""} ${idx >= 2 ? "pt-4 sm:pt-4 lg:pt-0 sm:border-t lg:border-t-0 border-slate-100" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5.5 w-5.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-3xl font-extrabold text-[var(--gold)] leading-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, { value: s.value })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.72rem] sm:text-[0.78rem] uppercase font-bold tracking-widest text-slate-500 mt-2 leading-none",
								children: s.label
							})] })]
						}, s.label);
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 mt-12 sm:mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)]/25 hover:shadow-[0_25px_50px_rgba(224,183,109,0.08)] overflow-hidden",
						style: { boxShadow: "var(--shadow-premium)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--gold)]/30 group-hover:bg-[var(--gold)] transition-colors duration-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--gold)]/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_20px_rgba(224,183,109,0.05)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-6.5 w-6.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] mb-1 leading-none",
									children: "Our Identity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-slate-800 leading-none",
									children: "Our Vision"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[1.02rem] leading-relaxed text-slate-500 text-justify",
								children: "To be the most trusted and client-centric global advisory, recognized for bridging the gap between local talent and international opportunities. We envision a world where borderless career and academic pursuits are seamless, straightforward, and accessible to every ambitious mind."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 300,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)]/25 hover:shadow-[0_25px_50px_rgba(224,183,109,0.08)] overflow-hidden",
						style: { boxShadow: "var(--shadow-premium)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--gold)]/30 group-hover:bg-[var(--gold)] transition-colors duration-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--gold)]/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_20px_rgba(224,183,109,0.05)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-6.5 w-6.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] mb-1 leading-none",
									children: "Our Commitment"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-slate-800 leading-none",
									children: "Our Mission"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[1.02rem] leading-relaxed text-slate-500 text-justify",
								children: "To empower students and professionals with honest, transparent, and tailored counseling. We commit to supporting our clients at every touchpoint—from counseling and documentation to application tracking, visa training, and final check-in, maintaining a 98% approval rate."
							})
						]
					})
				})]
			})
		})]
	});
}
var stats = [
	{
		value: "98% Success",
		label: "Visa Approval Rate",
		icon: Trophy
	},
	{
		value: "5000+ Students",
		label: "Secured Admissions",
		icon: GraduationCap
	},
	{
		value: "1500+ Universities",
		label: "Global Tie-ups",
		icon: Landmark
	},
	{
		value: "30+ Countries",
		label: "Global Partnerships",
		icon: Globe
	},
	{
		value: "12+ Years",
		label: "Guiding Aspirants",
		icon: Calendar
	},
	{
		value: "Most Trusted",
		label: "Advisory in Hyderabad",
		icon: ShieldCheck
	}
];
var features = [
	{
		title: "Trusted Customers",
		description: "Thousands of students trust our guidance and have successfully secured admissions in top global universities.",
		icon: Handshake
	},
	{
		title: "24/7 Support",
		description: "Our dedicated team is available 24/7 to assist with applications, documentation, and your entire abroad journey.",
		icon: Headphones
	},
	{
		title: "Trusted Consultant",
		description: "Certified counselors with years of industry expertise guiding you through every step of the visa process.",
		icon: CircleCheck
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-[#fcfbf9] pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#e0b76d_1px,transparent_1px)] [background-size:24px_24px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left w-full mb-8 flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Why Choose Us" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
								children: [
									"Our ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--gold)] font-bold",
										children: "Leadership"
									}),
									" & Achievements"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
								children: "Expert leadership and certified advisors backing your international education and visa journey."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-12 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7 flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
							direction: "left",
							delay: 200,
							className: "w-full flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group w-full relative rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 pb-8 sm:pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(224,183,109,0.08)] flex flex-col sm:flex-row items-center gap-8 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-44 w-44 sm:h-48 sm:w-48 shrink-0 rounded-full border-4 border-[var(--gold)]/20 p-1.5 bg-slate-50 flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.04)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full w-full rounded-full overflow-hidden bg-slate-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/founder.png",
												alt: "Mani Kumar",
												className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-dashed border-[var(--gold)]/40 animate-[spin_40s_linear_infinite] pointer-events-none" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-center flex-1 text-center sm:text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[var(--gold)] mb-4 self-center sm:self-start shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-2.5 w-2.5 fill-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Top Advisory Leadership" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl font-extrabold text-slate-800 tracking-tight leading-none",
												children: "Mani Kumar"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block mt-2.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--gold)] leading-none",
												children: "Founder & Managing Director"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 h-px w-full bg-gradient-to-r from-slate-100 via-[var(--gold)]/20 to-slate-100" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -top-3.5 -left-3.5 font-serif text-4xl text-[var(--gold)]/35 select-none",
														children: "“"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[0.88rem] leading-relaxed text-slate-500 italic relative z-10 px-2 text-justify",
														children: "Our mission is to shape clear, stress-free visa pathways and secure admissions in world-class institutions with absolute transparency and integrity."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -bottom-5 -right-1.5 font-serif text-4xl text-[var(--gold)]/35 select-none",
														children: "”"
													})
												]
											})
										]
									})
								]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 flex flex-col justify-between gap-4",
						children: features.map((feat, idx) => {
							const Icon = feat.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
								direction: "right",
								delay: 150 + idx * 120,
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative flex gap-5 rounded-2xl border border-slate-100/90 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(224,183,109,0.08)] overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute right-4 top-2 text-4xl font-extrabold text-slate-100/60 select-none pointer-events-none font-display group-hover:text-[var(--gold)]/10 transition-colors duration-500",
											children: String(idx + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-transform duration-300 group-hover:scale-105 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5.5 w-5.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-sans text-[0.88rem] font-bold text-slate-800 tracking-wider uppercase mb-1.5 leading-snug",
												children: feat.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.82rem] leading-relaxed text-slate-500 text-justify",
												children: feat.description
											})]
										})
									]
								})
							}, feat.title);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 400,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center border-t border-slate-100/90 pt-6 mt-8",
						children: stats.map((s) => {
							const Icon = s.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/10 transition-transform duration-300 group-hover:scale-110 shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-[1.12rem] font-extrabold text-slate-800 leading-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, { value: s.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mt-1.5 leading-none",
									children: s.label
								})] })]
							}, s.label);
						})
					})
				})
			]
		})]
	});
}
var expertiseItems = [
	{
		title: "Personalized Guidance",
		description: "Tailored counseling sessions focusing on your unique career goals and migration plans.",
		icon: Target
	},
	{
		title: "Pre & Post-Landing Support",
		description: "End-to-end guidance from departure checks to setting up your life in your new country.",
		icon: Globe
	},
	{
		title: "Career Counseling",
		description: "Expert direction to map your academic strengths to high-growth global professions.",
		icon: Briefcase
	},
	{
		title: "Country/CourseSelection",
		description: "Data-driven matching to pair you with the right course and world-class universities.",
		icon: GraduationCap
	},
	{
		title: "Application Assistance",
		description: "Meticulous review of essays, letters of recommendation, and application submissions.",
		icon: FileCheck
	},
	{
		title: "Admission in Top Universities",
		description: "Direct advisory pathways to secure placements in prestigious global institutions.",
		icon: Award
	},
	{
		title: "Test Prep Coaching",
		description: "Structured test coaching with simulated mock exams and personalized strategy logs.",
		icon: BookOpen
	},
	{
		title: "Financial Advice",
		description: "Structured planning for tuition budgets, living expenses, and international transfers.",
		icon: DollarSign
	},
	{
		title: "Visa Counseling",
		description: "Strategic mock interviews and thorough documentation to maximize approval rates.",
		icon: Compass
	},
	{
		title: "Discounts & Exam Training",
		description: "Access to exclusive waivers, scholarships, and premium test prep discounts.",
		icon: Tag
	},
	{
		title: "Student Educational Loans",
		description: "Hassle-free loan processing with top banking partners at competitive interest rates.",
		icon: Coins
	},
	{
		title: "Documentation",
		description: "Expert compiling, formatting, and verification of all academic and visa records.",
		icon: FileText
	},
	{
		title: "Free Mock Interviews",
		description: "Simulated visa and admissions interviews with real-time feedback and evaluations.",
		icon: MessagesSquare
	}
];
function ExpertiseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left w-full mb-8 flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Core Competencies" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
							children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)] font-bold",
								children: "Expertise"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
							children: "We don't just guide you; we ignite your career potential through dedicated end-to-end overseas migration counseling."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: expertiseItems.map((item, idx) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 100 + idx % 4 * 100,
						className: "flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex flex-col items-start rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden w-full h-full",
							style: { boxShadow: "0 10px 30px rgba(0,0,0,0.02)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-4 bottom-3 text-5xl font-black text-slate-100/50 select-none pointer-events-none font-display z-0 group-hover:text-[var(--gold)]/5 transition-colors duration-500",
									children: String(idx + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gold)]/8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-sm z-20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5.5 w-5.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-4 font-sans text-[0.88rem] font-bold uppercase tracking-wider text-slate-800 group-hover:text-[var(--gold)] transition-colors duration-300 z-20",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.82rem] leading-relaxed text-slate-500 text-justify z-20",
									children: item.description
								})
							]
						})
					}, item.title);
				})
			})]
		})
	});
}
var visaServices = [
	{
		title: "Student Visa",
		icon: GraduationCap,
		description: "Unlock global educational opportunities. We guide you from choosing the right university to submission and approval. Access quality education with high visa success rates.",
		features: [
			"End-to-end admission counseling",
			"IELTS / Duolingo / English prep support",
			"SOP writing & documentation guidance",
			"Mock visa interview sessions"
		]
	},
	{
		title: "Tourism & Visitor Visa",
		icon: Plane,
		description: "Travel the world with zero stress. Whether it is visiting family, exploring destinations, or business meetings, we manage your visa formalities quickly and transparently.",
		features: [
			"Fast-track visa processing options",
			"Detailed document checking",
			"Flight and itinerary guidance",
			"Travel insurance assistance"
		]
	},
	{
		title: "Opportunity Card Germany",
		countryCode: "de",
		icon: Briefcase,
		description: "Explore Germany's points-based job-seeking visa (Chancenkarte). We assess your eligibility, calculate points, and handle submissions for specialized visa programs.",
		features: [
			"Germany Opportunity Card (Chancenkarte)",
			"Points-based calculator & profile assessment",
			"Job search registry & cover support",
			"Unrestricted search visa advisory"
		]
	},
	{
		title: "Youth Mobility Visa UK",
		countryCode: "gb",
		icon: Globe,
		description: "Live and work in the United Kingdom for up to 2 years. Our advisors help you navigate the qualifying criteria, age limits, financial requirements, and biometric registrations.",
		features: [
			"Age 18-30 Eligibility Assessment",
			"Financial maintenance proof guidance",
			"Biometric slot booking & document checklist",
			"2-year stay and unrestricted work permit support"
		]
	}
];
var countries$1 = [
	{
		name: "United States",
		code: "us",
		region: "hubs",
		courses: [
			"Bachelors Degrees",
			"Masters & MBA Programs",
			"STEM Specializations"
		],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["Top-tier Ivy League & State Universities", "Optional Practical Training (OPT) up to 3 years"]
	},
	{
		name: "United Kingdom",
		code: "gb",
		region: "hubs",
		courses: [
			"Foundation & Undergraduate Degrees",
			"Postgraduate (Masters) Programs",
			"UK Youth Mobility Visa Scheme ✅"
		],
		eligibility: "Intermediate / Bachelors / Age 18-30",
		highlights: ["Youth Mobility Scheme: Live & work in the UK up to 2 years", "2-Year Post Study Work (PSW) Visa"]
	},
	{
		name: "Australia",
		code: "au",
		region: "hubs",
		courses: [
			"Vocational VET Courses",
			"Bachelors Programs",
			"Masters & PhD Research"
		],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["Post-Study Work rights (up to 4+ years)", "High standard of living and student cities"]
	},
	{
		name: "Canada",
		code: "ca",
		region: "hubs",
		courses: [
			"Post-Graduate Diplomas",
			"Bachelors Degrees",
			"Masters (Co-op pathways)"
		],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["Post-Graduation Work Permit (PGWP)", "Straightforward pathways to Permanent Residency (PR)"]
	},
	{
		name: "Germany",
		code: "de",
		region: "europe",
		courses: [
			"English-Taught Bachelors & Masters",
			"Germany Opportunity Card (Chancenkarte) ✅",
			"MBA & Engineering Programs"
		],
		eligibility: "Intermediate / Bachelors / Points-based System",
		highlights: ["Opportunity Card: Job search without a pre-existing job offer", "Zero tuition fees at public universities"]
	},
	{
		name: "Poland",
		code: "pl",
		region: "europe",
		courses: ["Bachelors & Masters Degrees", "Engineering & IT Specializations"],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["Affordable tuition fees and low cost of living", "Schengen area access for easy travel"]
	},
	{
		name: "Netherlands",
		code: "nl",
		region: "europe",
		courses: ["Bachelors Programs", "Research & Applied Sciences Masters"],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["Highly innovative education system", "1-year orientation year visa for graduates"]
	},
	{
		name: "Italy",
		code: "it",
		region: "europe",
		courses: ["Art, Design & Fashion Degrees", "Bachelors & Masters in English"],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["Regional scholarships and fee waivers", "Rich cultural heritage and historic universities"]
	},
	{
		name: "France",
		code: "fr",
		region: "europe",
		courses: [
			"Grandes Écoles Masters",
			"Luxury & Culinary Arts",
			"Business & Engineering"
		],
		eligibility: "Intermediate / Bachelors Pass",
		highlights: ["5-year short-stay visa for PG graduates", "Partial housing subsidies (CAF) available"]
	},
	{
		name: "Cyprus",
		code: "cy",
		region: "europe",
		courses: ["Foundation Courses", "Bachelors & Masters Degrees"],
		eligibility: "Intermediate Pass students can apply ✅",
		highlights: ["No IELTS options available", "Affordable European educational standard"]
	},
	{
		name: "Georgia",
		code: "ge",
		region: "europe",
		courses: ["MBBS / Doctor of Medicine", "Bachelors of Medicine"],
		eligibility: "Intermediate Pass (BiPC stream preferred)",
		highlights: ["WHO & NMC recognized medical degrees", "Direct admission without NEET competitive score rules"]
	},
	{
		name: "United Arab Emirates (Dubai)",
		code: "ae",
		region: "asia",
		courses: [
			"Undergraduate Diplomas",
			"Hotel Management Specializations",
			"Bachelors & Masters Degrees",
			"Other Professional Degrees"
		],
		eligibility: "10th / 12th / Graduate Pass",
		highlights: ["Thriving hospitality and business hub", "Easy visa processing with study-to-work transfer"]
	},
	{
		name: "Singapore",
		code: "sg",
		region: "asia",
		courses: [
			"Diploma in Leisure, Events & Lifestyle Management",
			"Diploma in Logistics Management with AI Applications",
			"Diploma Courses & Hotel Management"
		],
		eligibility: "10th Grade / Secondary Pass can apply ✅",
		highlights: ["6 Months Study + 6 Months Paid Internship (NSTC Package)", "Highly safe global financial capital"]
	},
	{
		name: "Malaysia",
		code: "my",
		region: "asia",
		courses: [
			"Hotel Management Courses",
			"Hospitality Diplomas",
			"Dual-Degree Programs"
		],
		eligibility: "10th / 12th Pass",
		highlights: ["Cost-effective Asian study hub", "Easy transfer pathways to UK and Australia universities"]
	},
	{
		name: "Mauritius",
		code: "mu",
		region: "asia",
		courses: ["Diploma in Business Management", "Diploma in Hospitality & Tourism Management"],
		eligibility: "10th Pass (Eligibility) ✅",
		highlights: ["Stunning island country with growing education hubs", "No IELTS requirement, work part-time while studying"]
	}
];
function ServicesSection() {
	const [selectedRegion, setSelectedRegion] = (0, import_react.useState)("all");
	const highlightTitle = (title) => {
		if (title.includes("Germany")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Opportunity Card ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[var(--gold)]",
			children: "Germany"
		})] });
		if (title.includes("UK")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Youth Mobility Visa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[var(--gold)]",
			children: "UK"
		})] });
		return title;
	};
	const filteredCountries = countries$1.filter((c) => selectedRegion === "all" || c.region === selectedRegion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-background/50 pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left w-full mb-8 flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Services" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
								children: [
									"Visa ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--gold)] font-bold",
										children: "Pathways"
									}),
									" & Destinations"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
								children: "mcCoy Global Consultancy provides comprehensive solutions, from standard student visa arrangements to tourist visa facilitation across the globe."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 grid-cols-1 lg:grid-cols-2 mb-8",
					children: visaServices.map((service, index) => {
						const Icon = service.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
							direction: "up",
							delay: 200 + index * 150,
							className: "flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 pb-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden w-full",
								style: { boxShadow: "0 10px 30px rgba(0,0,0,0.02)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute right-6 bottom-5 text-7xl font-black text-slate-100/50 select-none pointer-events-none font-display z-0 group-hover:text-[var(--gold)]/5 transition-colors duration-500",
										children: String(index + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" }),
									service.countryCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-6 right-6 z-30 transition-all duration-500 group-hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-2 border-white rounded-lg overflow-hidden shrink-0 group-hover:border-[var(--gold)] group-hover:shadow-[0_0_20px_rgba(184,123,44,0.5)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: `https://flagcdn.com/w80/${service.countryCode}.png`,
											className: "h-10 w-16 object-cover",
											alt: "Country Flag"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 mb-5 z-20 relative pr-20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5.5 w-5.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-extrabold text-slate-800 group-hover:text-[var(--gold)] transition-colors duration-300 tracking-tight leading-snug",
												children: highlightTitle(service.title)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.82rem] leading-relaxed text-slate-500 mb-6 text-justify z-20 relative",
											children: service.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-3 z-20 relative",
											children: service.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 group/li",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-300 group-hover/li:bg-[var(--gold)] group-hover/li:text-white mt-0.5 shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[0.82rem] font-medium text-slate-600 transition-colors duration-300 group-hover/li:text-slate-800 leading-snug",
													children: feat
												})]
											}, feat))
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => {
											const el = document.getElementById("contact");
											if (el) el.scrollIntoView({ behavior: "smooth" });
										},
										className: "mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--gold)] group-hover:text-[var(--gold)]/90 cursor-pointer z-20 relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" })]
									})
								]
							})
						}, service.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left w-full mb-8 flex flex-col items-start pt-8 border-t border-slate-100/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global Opportunities" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-3xl leading-tight text-slate-800 font-extrabold tracking-tight text-left",
								children: ["Explore Study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--gold)] font-bold",
									children: "Destinations"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[0.98rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
								children: "Select a region below to filter available countries and explore educational pathways."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-start gap-2 mb-8",
					children: [
						"all",
						"hubs",
						"europe",
						"asia"
					].map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelectedRegion(region),
						className: `rounded-full px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${selectedRegion === region ? "text-[#0b1224] shadow-[0_0_15px_rgba(224,183,109,0.3)] scale-105" : "text-muted-foreground/80 hover:text-foreground hover:bg-muted bg-card/65 border border-border"}`,
						style: { background: selectedRegion === region ? "var(--gradient-gold)" : void 0 },
						children: [
							region === "all" && "All Countries",
							region === "hubs" && "Major Hubs",
							region === "europe" && "Europe",
							region === "asia" && "Asia & Middle East"
						]
					}, region))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredCountries.map((country, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 100 + idx % 3 * 120,
						className: "flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden w-full",
							style: { boxShadow: "0 10px 30px rgba(0,0,0,0.02)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-6 bottom-5 text-7xl font-black text-slate-100/50 select-none pointer-events-none font-display z-0 group-hover:text-[var(--gold)]/5 transition-colors duration-500",
									children: String(idx + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gold)]/8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group-hover:translate-y-[-2px] transition-transform duration-300 z-20 relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-slate-100 pb-4 mb-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "relative overflow-hidden rounded-md border border-slate-100 shadow-sm shrink-0 h-6 w-9 transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--gold)]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: `https://flagcdn.com/w40/${country.code}.png`,
														srcSet: `https://flagcdn.com/w80/${country.code}.png 2x`,
														className: "h-full w-full object-cover",
														alt: `${country.name} Flag`
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-xl text-slate-800 font-extrabold tracking-tight group-hover:text-[var(--gold)] transition-colors duration-300",
													children: country.name
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5 text-slate-300 group-hover:text-[var(--gold)] group-hover:rotate-45 transition-all duration-500 shrink-0" })]
										}),
										country.eligibility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-6 flex items-center gap-2.5 bg-[var(--gold)]/5 border border-[var(--gold)]/10 rounded-2xl px-4 py-3 text-[0.82rem] text-slate-600",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4.5 w-4.5 text-[var(--gold)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "leading-snug",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-slate-800",
													children: "Eligibility: "
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.eligibility })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-[0.75rem] uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5 text-[var(--gold)]" }), " Featured Programs"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-2.5",
												children: country.courses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-2.5 text-[0.82rem] text-slate-600 group/course",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-[var(--gold)] shrink-0 mt-0.5 transition-transform duration-300 group-hover/course:translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "group-hover/course:text-slate-800 transition-colors",
														children: course
													})]
												}, course))
											})]
										})
									]
								}),
								country.highlights && country.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 border-t border-slate-100 pt-4 z-20 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-[0.75rem] uppercase tracking-wider text-[var(--gold)] font-bold mb-2.5",
										children: [
											"Why Choose ",
											country.name,
											"?"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: country.highlights.map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2.5 text-[0.82rem] text-slate-500 leading-relaxed group/highlight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-2 transition-transform duration-300 group-hover/highlight:scale-125" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 text-justify",
												children: highlight
											})]
										}, highlight))
									})]
								})
							]
						})
					}, country.name))
				})
			]
		})
	});
}
var goals = [
	{
		id: "study",
		title: "Study Abroad",
		description: "Get degree admissions and student visas in top international universities",
		icon: GraduationCap
	},
	{
		id: "migrate",
		title: "Work & Migrate",
		description: "Unlock work permits, job seeker visas, and residency opportunities",
		icon: Briefcase
	},
	{
		id: "visit",
		title: "Tourist / Visit",
		description: "Fast-track visitor visa applications for vacations or business trips",
		icon: Compass
	}
];
var countries = [
	{
		id: "US",
		name: "United States",
		code: "us",
		visa: "F-1 Student Visa / Tourist Visa"
	},
	{
		id: "GB",
		name: "United Kingdom",
		code: "gb",
		visa: "Tier 4 Student Visa / Youth Mobility Visa"
	},
	{
		id: "AU",
		name: "Australia",
		code: "au",
		visa: "Subclass 500 Student Visa / Work Rights"
	},
	{
		id: "DE",
		name: "Germany",
		code: "de",
		visa: "Opportunity Card (Chancenkarte) / Student Visa"
	},
	{
		id: "CA",
		name: "Canada",
		code: "ca",
		visa: "Study Permit / Express Entry"
	},
	{
		id: "SG",
		name: "Singapore",
		code: "sg",
		visa: "Student Pass / Training Work Permit"
	}
];
var educations = [
	{
		id: "intermediate",
		title: "Intermediate / 12th Pass",
		description: "Eligible for Bachelors degree enrollments and youth mobility schemes"
	},
	{
		id: "bachelors",
		title: "Bachelors Degree Completed",
		description: "Eligible for Masters/MBA admissions and global job-seeker work visas"
	},
	{
		id: "masters",
		title: "Masters Degree Completed",
		description: "Eligible for doctoral research and advanced professional skilled migration"
	}
];
function EligibilityPlanner() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [goal, setGoal] = (0, import_react.useState)(null);
	const [selectedCountry, setSelectedCountry] = (0, import_react.useState)(null);
	const [education, setEducation] = (0, import_react.useState)(null);
	const [leadName, setLeadName] = (0, import_react.useState)("");
	const [leadPhone, setLeadPhone] = (0, import_react.useState)("");
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const handleNext = () => {
		if (step < 4) setStep(step + 1);
	};
	const handleBack = () => {
		if (step > 1) {
			if (step === 4) setIsSubmitted(false);
			setStep(step - 1);
		}
	};
	const getMatchedPathway = () => {
		const countryObj = countries.find((c) => c.id === selectedCountry);
		const countryName = countryObj ? countryObj.name : "";
		if (goal === "study") {
			if (selectedCountry === "GB") return {
				title: "UK Higher Education & Youth Mobility Route",
				desc: `Based on your selection, you match both the UK Student Visa and the UK Youth Mobility Visa. You can apply for admissions in top UK universities or live and work in the UK for up to 2 years.`,
				features: [
					"2-Year Graduate Post-Study Work Route",
					"No sponsorships required for Youth Mobility",
					"Admission support in 150+ UK universities"
				]
			};
			return {
				title: `Student Visa Admission Route (${countryName})`,
				desc: `You are eligible for direct Bachelors or Masters admission pathways in the ${countryName}. mcCoy Global Consultancy will handle your university matching, documentation, and visa filing.`,
				features: [
					"Priority scholarship application assistance",
					"Post-study work permit arrangement (up to 3 years)",
					"Complete pre-departure briefings"
				]
			};
		} else if (goal === "migrate") {
			if (selectedCountry === "DE") return {
				title: "Germany Opportunity Card (Chancenkarte)",
				desc: "Excellent! You qualify for Germany's points-based Opportunity Card. This visa allows skilled professionals to live and seek job opportunities in Germany without a pre-existing job offer.",
				features: [
					"Live & look for work in Germany for up to 1 year",
					"Points based on qualification, age, and language skills",
					"Part-time work permitted up to 20 hours/week"
				]
			};
			else if (selectedCountry === "GB") return {
				title: "UK Youth Mobility Visa Route",
				desc: "You are eligible for the UK Youth Mobility Scheme. This allows young professionals to live, work, and travel in the United Kingdom without requiring job sponsorship.",
				features: [
					"Work in any job sector in the UK",
					"Stay up to 2 years with flexible extensions",
					"Fast-track processing & direct filing"
				]
			};
			return {
				title: `Skilled Visa & Direct Work Permits (${countryName})`,
				desc: `You qualify to explore skilled migration pathways, professional job placement routes, or direct tourist-to-work permit transitions for the ${countryName}.`,
				features: [
					"Official credential evaluation advisory",
					"Employer matchmaking assistance",
					"Comprehensive visa filing support"
				]
			};
		} else return {
			title: `Fast-Track Tourist & Visitor Visa (${countryName})`,
			desc: `You are set for a fast-track visitor or tourist visa pathway for the ${countryName}. We ensure error-free documentation checks to ensure high success rates.`,
			features: [
				"Sponsor document verification checks",
				"Interview preparation guides",
				"Hotel and flight booking itinerary drafts"
			]
		};
	};
	const handleLeadSubmit = (e) => {
		e.preventDefault();
		if (!leadName || !leadPhone) {
			toast.error("Please fill in your name and phone number.");
			return;
		}
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			toast.success("Enquiry submitted successfully! A consultant will contact you shortly.");
		}, 1200);
	};
	const pathway = getMatchedPathway();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "eligibility-planner",
		className: "bg-white text-slate-800 pt-4 pb-6 sm:pt-6 sm:pb-8 relative overflow-hidden border-b border-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left w-full mb-8 flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Interactive Tool" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
							children: [
								"Visa ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--gold)] font-bold",
									children: "Eligibility"
								}),
								" Planner"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
							children: "Answer 3 simple questions to instantly match with your dream destinations and evaluate your visa eligibility."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 relative overflow-hidden",
					style: { boxShadow: "0 15px 40px rgba(0,0,0,0.03)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] z-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center justify-between border-b border-slate-50 pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-extrabold uppercase tracking-widest text-slate-400",
								children: [
									"Step ",
									step,
									" of 4"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									1,
									2,
									3,
									4
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 rounded-full transition-all duration-300 ${i === step ? "w-8 bg-[var(--gold)]" : i < step ? "w-4 bg-[var(--gold)]/40" : "w-2 bg-slate-200"}` }, i))
							})]
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-in duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mb-6",
								children: "What is your primary goal?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-6 sm:grid-cols-3",
								children: goals.map((g) => {
									const Icon = g.icon;
									const isSelected = goal === g.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setGoal(g.id),
										className: `group relative flex flex-col justify-between text-left p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${isSelected ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_10px_25px_rgba(224,183,109,0.08)]" : "border-slate-100 bg-white hover:border-[var(--gold)]/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.02)]"}`,
										children: [
											isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[var(--gold)] absolute top-4 right-4 z-20 shrink-0" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-500 mb-6 border ${isSelected ? "bg-[var(--gold)] text-white border-[var(--gold)]" : "bg-[var(--gold)]/5 text-[var(--gold)] border-[var(--gold)]/10 group-hover:rotate-6 group-hover:scale-105"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5.5 w-5.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-sans text-sm font-bold uppercase tracking-wider text-slate-800",
												children: g.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs text-slate-500 leading-relaxed text-justify",
												children: g.description
											})] })
										]
									}, g.id);
								})
							})]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-in duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mb-6",
								children: "Select your preferred destination"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: countries.map((c) => {
									const isSelected = selectedCountry === c.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setSelectedCountry(c.id),
										className: `group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 text-left ${isSelected ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_5px_15px_rgba(224,183,109,0.08)]" : "border-slate-100 bg-white hover:border-[var(--gold)]/40 hover:shadow-[0_8px_15px_rgba(0,0,0,0.02)]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative overflow-hidden rounded-md border border-slate-100 shadow-sm shrink-0 h-5.5 w-8",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: `https://flagcdn.com/w40/${c.code}.png`,
													className: "h-full w-full object-cover",
													alt: `${c.name} Flag`
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold text-slate-800",
												children: c.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[0.62rem] text-slate-400 font-extrabold uppercase mt-0.5",
												children: c.visa.split(" / ")[0]
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `h-4 w-4 text-slate-400 transition-transform duration-300 ${isSelected ? "translate-x-1 text-[var(--gold)]" : "group-hover:translate-x-0.5"}` })]
									}, c.id);
								})
							})]
						}),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-in duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mb-6",
								children: "What is your highest education level completed?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5",
								children: educations.map((e) => {
									const isSelected = education === e.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setEducation(e.id),
										className: `group relative flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 text-left ${isSelected ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_5px_15px_rgba(224,183,109,0.08)]" : "border-slate-100 bg-white hover:border-[var(--gold)]/40 hover:shadow-[0_8px_15px_rgba(0,0,0,0.02)]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${isSelected ? "bg-[var(--gold)] text-white border-[var(--gold)]" : "bg-[var(--gold)]/5 text-[var(--gold)] border-[var(--gold)]/10 group-hover:rotate-6 group-hover:scale-105"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5.5 w-5.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold uppercase tracking-wider text-slate-800",
											children: e.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-slate-500 leading-relaxed text-justify",
											children: e.description
										})] })]
									}, e.id);
								})
							})]
						}),
						step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-fade-in duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 lg:grid-cols-12 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lg:col-span-6 space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-emerald-600 font-display text-lg font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Matching Pathway Found!" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-2xl text-slate-800 font-extrabold tracking-tight leading-snug",
											children: pathway.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-[0.88rem] leading-relaxed text-slate-500 text-justify",
											children: pathway.desc
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-3",
											children: pathway.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2.5 text-[0.82rem] text-slate-600 group/feature",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 mt-0.5 shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex-1 leading-snug",
													children: feat
												})]
											}, feat))
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-6 border-t border-slate-100 lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8",
									children: !isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleLeadSubmit,
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-sans text-xs font-extrabold text-slate-800 uppercase tracking-wider",
													children: "Book Priority Consultation"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-slate-400",
													children: "Submit your contact info to secure a priority assessment callback."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "lead-name",
													className: "text-[0.62rem] font-extrabold uppercase tracking-wider text-slate-400",
													children: "Your Name *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														id: "lead-name",
														value: leadName,
														onChange: (e) => setLeadName(e.target.value),
														placeholder: "e.g. John Doe",
														className: "w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-xs text-slate-800 focus:border-[var(--gold)] focus:outline-none transition-colors",
														required: true
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "lead-phone",
													className: "text-[0.62rem] font-extrabold uppercase tracking-wider text-slate-400",
													children: "Phone Number *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "tel",
														id: "lead-phone",
														value: leadPhone,
														onChange: (e) => setLeadPhone(e.target.value),
														placeholder: "e.g. +91 88863 68886",
														className: "w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-xs text-slate-800 focus:border-[var(--gold)] focus:outline-none transition-colors",
														required: true
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: isSubmitting,
												className: "w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#0b1224] transition-all duration-300 disabled:opacity-50 hover:shadow-[0_4px_15px_rgba(184,123,44,0.35)] cursor-pointer",
												style: { background: "var(--gradient-gold)" },
												children: isSubmitting ? "Submitting..." : "Get Free Assessment Callback"
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center py-10 space-y-4 animate-fade-in",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 mx-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-xl text-slate-800 font-extrabold tracking-tight",
											children: "Priority Booking Confirmed!"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-[0.88rem] text-slate-500 leading-relaxed text-center",
											children: [
												"Thank you, ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-slate-800",
													children: leadName
												}),
												". A dedicated specialist for your ",
												countries.find((c) => c.id === selectedCountry)?.name,
												" pathway will call you at ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-slate-800",
													children: leadPhone
												}),
												" within 24 business hours."
											]
										})] })]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex justify-between border-t border-slate-100 pt-5",
							children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleBack,
								className: "flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 transition-colors py-2 px-4 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Back"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), step < 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleNext,
								disabled: step === 1 && !goal || step === 2 && !selectedCountry || step === 3 && !education,
								className: `flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest px-6 py-3 rounded-2xl transition-all duration-300 ${step === 1 && goal || step === 2 && selectedCountry || step === 3 && education ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/90 hover:to-[var(--gold)] text-[#0b1224] shadow-[0_4px_12px_rgba(224,183,109,0.3)] hover:shadow-[0_6px_18px_rgba(224,183,109,0.45)] hover:-translate-y-0.5 cursor-pointer" : "bg-slate-100 text-slate-400 cursor-not-allowed opacity-50"}`,
								children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})
			})]
		})
	});
}
var successStories = [
	{
		name: "Kiran Kumar",
		destination: "United States",
		countryCode: "us",
		visaType: "student",
		visaLabel: "Student Visa (F-1)",
		pathwayInfo: "MS in Computer Science · UT Dallas",
		image: "/student-usa.png"
	},
	{
		name: "Ananya Reddy",
		destination: "Germany",
		countryCode: "de",
		visaType: "mobility",
		visaLabel: "Germany Opportunity Card",
		pathwayInfo: "IT Software Engineer Pathway",
		image: "/student-germany.png"
	},
	{
		name: "Vikram Malhotra",
		destination: "United Kingdom",
		countryCode: "gb",
		visaType: "mobility",
		visaLabel: "UK Youth Mobility Visa",
		pathwayInfo: "Marketing Analyst · London",
		image: "/student-uk.png"
	},
	{
		name: "Sneha Rao",
		destination: "Singapore",
		countryCode: "sg",
		visaType: "student",
		visaLabel: "Student Visa & Internship",
		pathwayInfo: "NSTC Logistics Management + AI",
		image: "/student-singapore.png"
	}
];
function GallerySection() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const filteredStories = successStories.filter((story) => filter === "all" || story.visaType === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "bg-background pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left w-full mb-8 flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Success Stories" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
								children: [
									"Visa ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--gold)] font-bold",
										children: "Success"
									}),
									" Gallery"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
								children: "Real approvals from ambitious students and professionals who achieved their dreams abroad with mcCoy Global Consultancy."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-2 mb-8",
						children: [
							"all",
							"student",
							"mobility"
						].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setFilter(type),
							className: `rounded-full px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${filter === type ? "text-[#0b1224] shadow-[0_0_15px_rgba(224,183,109,0.3)] scale-105" : "text-muted-foreground/80 hover:text-foreground hover:bg-muted bg-card/65 border border-border"}`,
							style: { background: filter === type ? "var(--gradient-gold)" : void 0 },
							children: [
								type === "all" && "All Approvals",
								type === "student" && "Student Visas",
								type === "mobility" && "Opportunity & Mobility"
							]
						}, type))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: filteredStories.map((story, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 150 + idx % 4 * 100,
						className: "flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group relative flex flex-col justify-between rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/60 hover:shadow-[0_20px_45px_rgba(224,183,109,0.2)] w-full ${idx === 1 ? "border-[var(--gold)] bg-gradient-to-b from-card via-card to-[var(--gold)]/5 shadow-[0_15px_35px_rgba(224,183,109,0.18)]" : "border-border bg-card shadow-premium"}`,
							style: { boxShadow: idx === 1 ? "0 15px 35px rgba(224,183,109,0.18)" : "var(--shadow-premium)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group-hover:translate-y-[-2px] transition-transform duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-64 w-full overflow-hidden bg-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: story.image,
												alt: story.name,
												className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-white shadow-lg",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visa Approved" })]
											}),
											idx === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-4 right-4 z-20 flex items-center gap-1 rounded-full bg-[var(--gold)] px-2.5 py-1.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-black shadow-lg",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⭐ Highlighted" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 mb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: `https://flagcdn.com/w40/${story.countryCode}.png`,
													width: "20",
													alt: `${story.destination} Flag`,
													className: "rounded-sm border border-border/40 shadow-sm"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[0.68rem] font-bold uppercase tracking-wider text-[var(--gold)]",
													children: story.destination
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display text-xl text-foreground font-semibold group-hover:text-[var(--gold)] transition-colors mb-2",
												children: story.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 text-xs text-muted-foreground font-medium",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5 text-[var(--gold)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: story.visaLabel })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1.5 text-xs text-muted-foreground/80 pl-5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: story.pathwayInfo })
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
							]
						})
					}, story.name))
				})
			]
		})
	});
}
var testimonials = [
	{
		name: "Rahul Kurapati",
		location: "USA",
		program: "Masters in Computer Science",
		rating: 5,
		quote: "Mani Abroad Consultancy made my dream of studying in the US a reality. They helped me choose the right university, guided me through the SOP drafting, and prepped me for the visa interview. The support was outstanding!",
		initials: "RK"
	},
	{
		name: "Aisha Mohammed",
		location: "Singapore",
		program: "Diploma in Logistics Management (NSTC)",
		rating: 5,
		quote: "The Singapore 6+6 package (6 months study + 6 months paid internship) recommended by Mani Abroad was a game-changer. They managed the visa process seamlessly and guided me all the way to check-in.",
		initials: "AM"
	},
	{
		name: "Dr. Sandeep Yadav",
		location: "Georgia",
		program: "MBBS (Doctor of Medicine)",
		rating: 5,
		quote: "Getting admission for my MBBS in Georgia was simple and stress-free with their NEET-free counseling process. They guided me through translations, foreign registrations, and even helped with flight ticketing.",
		initials: "SY"
	}
];
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-to-b from-background to-muted/40 pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left w-full mb-8 flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Testimonials" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
							children: [
								"What Our ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--gold)] font-bold",
									children: "Clients"
								}),
								" Say"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
							children: "Real success stories from students and professionals who successfully migrated, studied, and advanced their careers overseas."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: testimonials.map((t, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "up",
					delay: 200 + index * 150,
					className: "flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_rgba(224,183,109,0.12)] overflow-hidden w-full",
						style: { boxShadow: "var(--shadow-premium)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group-hover:translate-y-[-2px] transition-transform duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1",
										children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-[var(--gold)]/20 group-hover:text-[var(--gold)]/35 transition-colors duration-300" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-relaxed text-muted-foreground italic mb-8 relative z-10",
									children: [
										"\"",
										t.quote,
										"\""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mt-auto border-t border-border/40 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#0b1224] tracking-wider uppercase",
									style: { background: "var(--gradient-gold)" },
									children: t.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-sans text-sm font-extrabold text-foreground tracking-wide uppercase leading-none",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block mt-1.5 text-xs text-muted-foreground",
									children: [
										t.program,
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-[var(--gold)] font-medium",
											children: t.location
										})
									]
								})] })]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
var faqs = [
	{
		question: "What is the Germany Opportunity Card (Chancenkarte) and how do I qualify?",
		answer: "The Opportunity Card is a points-based job-seeker visa that lets skilled professionals move to Germany for up to 12 months to seek employment. Qualification requires a minimum of 6 points, scored across categories like recognized university degrees or vocational qualifications, work experience, age (under 35 or 40), and language proficiency (German A1 or English B2)."
	},
	{
		question: "Am I eligible for the UK Youth Mobility Scheme Visa?",
		answer: "The UK Youth Mobility Scheme Visa is open to young professionals (typically aged 18 to 30) from participating countries and eligible passport arrangements (including Indian nationals with qualified degrees). It provides a 2-year visa allowing you to work in any job sector in the UK without requiring a local employer sponsorship."
	},
	{
		question: "Does Mani Abroad Consultancy assist with university scholarships and waivers?",
		answer: "Yes, absolutely! We match your academic profile, credentials, and standardized language scores (IELTS, PTE, TOEFL) with active merit-based university scholarships, fee waivers, and assistantship packages to minimize your study costs."
	},
	{
		question: "What post-landing services do you offer once my visa is approved?",
		answer: "We support you even after you arrive! Our comprehensive post-landing services include arranging airport pickup transfers, assisting with student housing or shared accommodation bookings, setting up local bank accounts & SIM cards, and guiding you on local work rights."
	},
	{
		question: "What is the average timeline for securing a student visa?",
		answer: "University admissions typically take 2 to 6 weeks, while visa processing takes an additional 3 to 8 weeks depending on the destination (e.g., fast-track routes for the UK and USA). We advise starting your application process at least 4 to 6 months before your intended intake."
	}
];
function FaqSection() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-background pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left w-full mb-8 flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Got Questions?" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
							children: ["Frequently Asked ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)] font-bold",
								children: "Questions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
							children: "Find quick answers to common queries regarding admissions, visas, application timelines, and loan assistance."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl space-y-4",
				children: faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 100 + index * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group rounded-2xl border transition-all duration-300 bg-card/45 overflow-hidden ${isOpen ? "border-[var(--gold)]/40 shadow-[0_10px_25px_rgba(224,183,109,0.06)]" : "border-border hover:border-border-hover"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => toggleFaq(index),
								className: "w-full flex items-center justify-between text-left p-6 gap-4 cursor-pointer focus:outline-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: `h-5 w-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-[var(--gold)]" : "text-muted-foreground/60"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[0.92rem] font-bold uppercase tracking-wider ${isOpen ? "text-[var(--gold)]" : "text-foreground"}`,
										children: faq.question
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--gold)]" : "group-hover:text-foreground"}` })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-all duration-300 ease-in-out px-6 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px w-full bg-border/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed pl-8",
										children: faq.answer
									})]
								})
							})]
						})
					}, index);
				})
			})]
		})
	});
}
function ContactFormSection() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		country: "US",
		visaType: "student",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name.trim()) {
			toast.error("Please enter your full name.");
			return;
		}
		if (!formData.phone.trim()) {
			toast.error("Please enter your phone/WhatsApp number.");
			return;
		}
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			toast.success("Enquiry submitted successfully! Our expert consultant will reach out on WhatsApp/Phone shortly.", {
				duration: 5e3,
				description: `Thank you ${formData.name}. We will guide you for your journey to ${formData.country.toUpperCase()}!`
			});
			setFormData({
				name: "",
				phone: "",
				email: "",
				country: "US",
				visaType: "student",
				message: ""
			});
		}, 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-background pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100 scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left w-full mb-8 flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Us" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left",
							children: [
								"Start Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--gold)] font-bold",
									children: "Journey"
								}),
								" Today"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis",
							children: "Ready to explore study or tourism options abroad? Fill out the form below, and our boutique consultant will get back to you with personalized guidance."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "left",
					delay: 200,
					className: "lg:col-span-5 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8 lg:pr-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl text-foreground",
								children: "Get In Touch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: "We believe a visa is a life decision, not just paperwork. Reach out directly via WhatsApp for a quick consultation, or visit us in Hyderabad."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1",
											children: "Our Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: "Hyderabad, India"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1",
											children: "Email Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:contact@maniabroad.com",
											className: "mt-2 block text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors",
											children: "contact@maniabroad.com"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1",
											children: "Call Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+918886368886",
											className: "mt-2 block text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors",
											children: "+91 88863 68886"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1",
											children: "Business Hours"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: "Mon - Sat: 10:00 AM - 6:30 PM"
										})] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/918886368886",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(166,106,33,0.25)] hover:shadow-[0_0_30px_rgba(166,106,33,0.4)]",
									style: { background: "var(--gradient-gold)" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }), "Chat on WhatsApp"]
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					direction: "right",
					delay: 350,
					className: "lg:col-span-7 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative rounded-3xl border border-border bg-card p-8 sm:p-10",
						style: { boxShadow: "var(--shadow-premium)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "name",
											className: "text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground",
											children: ["Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[var(--gold)]",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											id: "name",
											value: formData.name,
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											placeholder: "e.g. John Doe",
											className: "rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors",
											required: true
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "phone",
											className: "text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground",
											children: ["Phone / WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[var(--gold)]",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											id: "phone",
											value: formData.phone,
											onChange: (e) => setFormData({
												...formData,
												phone: e.target.value
											}),
											placeholder: "e.g. +91 98499 20961",
											className: "rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors",
											required: true
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "email",
										className: "text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground",
										children: ["Email Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground/40",
											children: "(Optional)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										id: "email",
										value: formData.email,
										onChange: (e) => setFormData({
											...formData,
											email: e.target.value
										}),
										placeholder: "e.g. johndoe@gmail.com",
										className: "rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "country",
											className: "text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground",
											children: "Preferred Destination"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "country",
												value: formData.country,
												onChange: (e) => setFormData({
													...formData,
													country: e.target.value
												}),
												className: "w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors appearance-none cursor-pointer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "us",
														children: "United States"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "gb",
														children: "United Kingdom"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "au",
														children: "Australia"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "ca",
														children: "Canada"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "de",
														children: "Germany"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "pl",
														children: "Poland"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "nl",
														children: "Netherlands"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "it",
														children: "Italy"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "fr",
														children: "France"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "cy",
														children: "Cyprus"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "ge",
														children: "Georgia"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "ae",
														children: "United Arab Emirates (Dubai)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "sg",
														children: "Singapore"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "my",
														children: "Malaysia"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "mu",
														children: "Mauritius"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {})
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "visaType",
											className: "text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground",
											children: "Visa / Service Pathway"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "visaType",
												value: formData.visaType,
												onChange: (e) => setFormData({
													...formData,
													visaType: e.target.value
												}),
												className: "w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors appearance-none cursor-pointer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "student",
														children: "Student Visa Pathway"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "tourist",
														children: "Tourism & Visitor Visa"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "other",
														children: "General Enquiry"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {})
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "message",
										className: "text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground",
										children: "Describe Your Dream & Profile"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message",
										rows: 4,
										value: formData.message,
										onChange: (e) => setFormData({
											...formData,
											message: e.target.value
										}),
										placeholder: "Tell us about your educational background, work experience, or any specific details...",
										className: "rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 disabled:opacity-75 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(166,106,33,0.3)] cursor-pointer",
									style: { background: "var(--gradient-gold)" },
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4.5 w-4.5 animate-spin rounded-full border-2 border-white border-t-transparent" }), "Submitting Enquiry..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), "Submit Consultation Request"] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-2 text-[0.68rem] text-muted-foreground/60 mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your information is encrypted & shared only with our consultant." })]
								})
							]
						})
					})
				})]
			})]
		})
	});
}
function ChevronDownIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "fill-current h-4 w-4",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })
	});
}
var columns = [{
	title: "Explore",
	items: [
		"Home",
		"About",
		"Services",
		"Gallery",
		"Contact"
	]
}, {
	title: "Services",
	items: [
		"Student Visa",
		"Work Visa",
		"PR & Migration",
		"Tourist Visa",
		"Air Ticketing"
	]
}];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "text-primary-foreground",
		style: { background: "var(--gradient-ink)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-20 items-center justify-center rounded-lg bg-white p-1.5 overflow-hidden shadow-[0_0_15px_rgba(166,106,33,0.25)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.png",
										alt: "mcCoy Global Logo",
										className: "h-full w-full object-contain"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl tracking-[0.16em]",
									children: "mcCoy Global"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/65",
								children: "Licensed overseas education and migration consultancy. Honest advice, transparent fees, and a consultant who answers the phone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 h-px w-28",
								style: { background: "var(--gradient-gold)" }
							})
						]
					}),
					columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[0.7rem] uppercase tracking-[0.28em] text-gold",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${item.toLowerCase().split(" ")[0]}`,
								className: "text-sm text-primary-foreground/70 transition-colors hover:text-gold",
								children: item
							}) }, item))
						})]
					}, col.title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[0.7rem] uppercase tracking-[0.28em] text-gold",
							children: "Contact Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-4 text-sm text-primary-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[0.62rem] uppercase tracking-wider text-gold/60 font-semibold",
										children: "Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white text-xs",
										children: "Hyderabad, India"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[0.62rem] uppercase tracking-wider text-gold/60 font-semibold",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://wa.me/919849920961",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-white hover:text-gold transition-colors text-xs flex items-center gap-1",
										children: "+91 98499 20961"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[0.62rem] uppercase tracking-wider text-gold/60 font-semibold",
										children: "Working Hours"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white text-xs",
										children: "10:00 AM - 7:00 PM"
									})] })]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-[0.75rem] uppercase tracking-[0.16em] text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" mcCoy Global Consultancy"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hyderabad \xA0·\xA0 +91 98499 20961" })]
			})]
		})
	});
}
function WhatsAppWidget() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [hasPopped, setHasPopped] = (0, import_react.useState)(false);
	const [showBadge, setShowBadge] = (0, import_react.useState)(true);
	const [showScrollTop, setShowScrollTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) setShowScrollTop(true);
			else setShowScrollTop(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		if (!sessionStorage.getItem("whatsapp_prompt_opened")) {
			const timer = setTimeout(() => {
				setIsOpen(true);
				setHasPopped(true);
				sessionStorage.setItem("whatsapp_prompt_opened", "true");
			}, 4e3);
			return () => clearTimeout(timer);
		}
	}, []);
	const handleToggle = () => {
		setIsOpen(!isOpen);
		setShowBadge(false);
	};
	const handleClose = (e) => {
		e.stopPropagation();
		setIsOpen(false);
		setShowBadge(false);
	};
	const handleWhatsAppRedirect = () => {
		sessionStorage.setItem("whatsapp_prompt_opened", "true");
		setIsOpen(false);
		toast.success("Redirecting to WhatsApp chat...");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: scrollToTop,
				className: `group flex h-12 w-12 items-center justify-center rounded-full bg-[#0a1122]/90 border border-[var(--gold)]/35 text-white transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-[var(--gold)] hover:text-[#0b1224] hover:border-[var(--gold)] cursor-pointer ${showScrollTop ? "translate-y-0 opacity-100 scale-100 pointer-events-auto" : "translate-y-4 opacity-0 scale-75 pointer-events-none absolute"}`,
				"aria-label": "Scroll to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `w-[340px] rounded-3xl border border-border bg-card overflow-hidden shadow-2xl transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100 scale-100 pointer-events-auto" : "translate-y-8 opacity-0 scale-90 pointer-events-none"}`,
				style: { boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#0c1224] p-5 border-b border-border/40 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleClose,
							className: "absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer",
							"aria-label": "Close chat assistant",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-11 w-11 shrink-0 rounded-full border border-[var(--gold)]/35 p-0.5 bg-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/founder.png",
									alt: "Mani Kumar",
									className: "h-full w-full rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0c1224] animate-pulse" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-extrabold uppercase tracking-wider text-white",
								children: "Mani Kumar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.62rem] font-bold uppercase tracking-widest text-[var(--gold)] mt-0.5",
								children: "Founder & Managing Director"
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 space-y-4 bg-muted/20 max-h-[220px] overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 max-w-[85%] bg-card border border-border px-4 py-3 rounded-2xl rounded-tl-none text-xs text-foreground leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.62rem] font-semibold text-[var(--gold)] uppercase tracking-wider mb-1",
								children: "mcCoy Global Advisory"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hello! Thank you for visiting our website. ✈️" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-1 max-w-[85%] bg-card border border-border px-4 py-3 rounded-2xl rounded-tl-none text-xs text-foreground leading-relaxed",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Whether you want to explore the Germany Opportunity Card, UK Youth Mobility, or university admissions, I'm here to assist you directly." })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 border-t border-border/40 bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/918886368886?text=Hi%20Mani%20Kumar,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire%20about%20visa%20options.",
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: handleWhatsAppRedirect,
							className: "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(166,106,33,0.3)]",
							style: { background: "var(--gradient-gold)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), "Start Chat on WhatsApp"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleToggle,
				className: "group relative flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.45)] cursor-pointer",
				style: { background: "linear-gradient(135deg, #128C7E, #25D366)" },
				"aria-label": "Toggle WhatsApp assistant chat",
				children: [showBadge && !isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative inline-flex items-center justify-center rounded-full h-4.5 w-4.5 bg-red-500 text-[0.55rem] font-bold text-white leading-none",
						children: "1"
					})]
				}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6 text-white transition-transform duration-300 rotate-90" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					className: "h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-105",
					xmlns: "http://www.w3.org/2000/svg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.074-4.513 10.077-10.067.001-2.69-1.04-5.218-2.929-7.11A9.97 9.97 0 0 0 12.008 1.54c-5.561 0-10.08 4.515-10.084 10.07a10.024 10.024 0 0 0 1.536 5.25l-.995 3.638 3.738-.98c1.554.849 3.037 1.282 4.444 1.282zm9.99-6.313c-.274-.137-1.62-.8-1.874-.892-.254-.092-.44-.137-.625.137-.184.274-.71.892-.87 1.077-.16.184-.32.208-.593.07-.273-.137-1.155-.425-2.2-1.358-.813-.726-1.362-1.623-1.522-1.897-.16-.273-.017-.42.12-.556.123-.122.274-.32.41-.48.137-.16.183-.273.273-.456.09-.184.046-.346-.023-.483-.069-.137-.625-1.506-.856-2.062-.225-.54-.472-.466-.647-.476-.168-.008-.361-.01-.555-.01-.194 0-.51.073-.777.366-.267.293-1.02 1.002-1.02 2.443s1.045 2.825 1.19 3.018c.146.193 2.056 3.14 4.978 4.4 1.127.487 2.008.777 2.687.992.684.218 1.307.187 1.8.114.55-.082 1.62-.662 1.848-1.27.228-.609.228-1.13.16-1.24-.07-.11-.255-.2-.53-.337z" })
				})]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpertiseSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EligibilityPlanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactFormSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppWidget, {})
		]
	});
}
//#endregion
export { Index as component };
