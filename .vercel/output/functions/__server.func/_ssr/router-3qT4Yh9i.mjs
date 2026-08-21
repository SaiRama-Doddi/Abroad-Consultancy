import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-3qT4Yh9i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Preloader() {
	const [show, setShow] = (0, import_react.useState)(true);
	const [fadeOut, setFadeOut] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const fadeTimer = setTimeout(() => {
			setFadeOut(true);
		}, 2300);
		const removeTimer = setTimeout(() => {
			setShow(false);
		}, 3e3);
		return () => {
			clearTimeout(fadeTimer);
			clearTimeout(removeTimer);
		};
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060b13] transition-opacity duration-700 select-none ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes takeoff-flight-preload {
          0% {
            offset-distance: 0%;
            opacity: 0;
            transform: scale(0.6);
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
            transform: scale(1.15);
          }
          100% {
            offset-distance: 100%;
            opacity: 0;
            transform: scale(1.3);
          }
        }
        .animate-takeoff {
          animation: takeoff-flight-preload 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          offset-path: path('M -100 800 Q 720 380 1640 -50');
          offset-rotate: auto;
        }
        
        /* Sparkle trail particles */
        @keyframes particle-fade {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
        }
        .trail-particle {
          animation: particle-fade 1.5s ease-out forwards;
        }
      ` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#060b13] to-black opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-[450px] h-[450px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center select-none text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-10 rounded-full border border-dashed border-[var(--gold)]/15 animate-[spin_60s_linear_infinite] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-20 rounded-full border border-slate-800/40 animate-[spin_90s_linear_infinite] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute w-[280px] h-[280px] animate-[spin_4.5s_linear_infinite] flex items-center justify-center z-20 pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-0 flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 64 64",
								fill: "none",
								stroke: "var(--gold)",
								strokeWidth: "2",
								className: "h-8 w-8 text-[var(--gold)] drop-shadow-[0_0_10px_rgba(224,183,109,0.9)]",
								style: { transform: "rotate(90deg)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "var(--gold)",
									d: "M32 4 L35 18 L58 36 L58 41 L35 33 L35 52 L44 57 L44 60 L32 57 L20 60 L20 57 L29 52 L29 33 L6 41 L6 36 L29 18 Z"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-[1.5px] h-12 bg-gradient-to-t from-transparent to-[var(--gold)] mt-0.5 opacity-80",
								style: { transform: "translateY(-4px)" }
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex h-28 w-44 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_15px_50px_rgba(224,183,109,0.22)] border-2 border-[var(--gold)]/30 transition-transform duration-700 animate-[pulse_2s_infinite]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "mcCoy Global Logo",
							className: "h-full w-full object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-8 font-display text-2xl tracking-[0.2em] font-extrabold uppercase text-white animate-[pulse_2.5s_infinite]",
						children: "mcCoy Global"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.72rem] tracking-[0.42em] uppercase text-[var(--gold)] font-bold mt-2.5",
						children: "Consultancy"
					})
				]
			})
		]
	});
}
function BackgroundFlight() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 pointer-events-none overflow-hidden z-[5] select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes bg-corner-to-corner {
          0% {
            left: -180px;
            top: 95%;
            transform: scale(0.35) rotate(-38deg) rotateX(15deg);
            opacity: 0;
          }
          8% {
            opacity: 0.22;
          }
          50% {
            transform: scale(1.15) rotate(-35deg) rotateX(15deg);
            opacity: 0.38; /* Faint overlay presence to preserve readability */
          }
          92% {
            opacity: 0.22;
          }
          100% {
            left: 108vw;
            top: -12%;
            transform: scale(0.4) rotate(-32deg) rotateX(15deg);
            opacity: 0;
          }
        }
        .animate-bg-flight {
          animation: bg-corner-to-corner 16s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
      ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute animate-bg-flight",
			style: {
				left: "-180px",
				top: "95%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 64 64",
				fill: "none",
				stroke: "var(--gold)",
				strokeWidth: "1.5",
				className: "h-20 w-20 text-[var(--gold)]/40 drop-shadow-[0_20px_40px_rgba(224,183,109,0.35)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "var(--gold)",
					fillOpacity: "0.25",
					d: "M32 4 L35 18 L58 36 L58 41 L35 33 L35 52 L44 57 L44 60 L32 57 L20 60 L20 57 L29 52 L29 33 L6 41 L6 36 L29 18 Z"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-[1px] h-20 bg-gradient-to-t from-transparent to-[var(--gold)]/30 opacity-70 origin-top",
				style: { transform: "rotate(180deg) translateY(-2px)" }
			})]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "mcCoy Global Consultancy" },
			{
				name: "description",
				content: "Study, Work & Migrate Overseas"
			},
			{
				name: "author",
				content: "mcCoy Global Consultancy"
			},
			{
				property: "og:title",
				content: "mcCoy Global Consultancy"
			},
			{
				property: "og:description",
				content: "Study, Work & Migrate Overseas"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg?v=5",
				type: "image/svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon.png?v=5",
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.png?v=5"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png?v=5"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundFlight, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-D-TY0ICe.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "mcCoy Global Consultancy | Study, Work & Migrate Overseas" },
		{
			name: "description",
			content: "mcCoy Global Consultancy guides you from first enquiry to airport check-in — student visas, work visas, PR and migration handled end to end."
		},
		{
			property: "og:title",
			content: "mcCoy Global Consultancy | Study, Work & Migrate Overseas"
		},
		{
			property: "og:description",
			content: "Boutique overseas education and migration advisory. Honest advice, transparent fees, a 98% approval rate."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
