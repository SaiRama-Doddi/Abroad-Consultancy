import { useState } from "react";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck 
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "us",
    visaType: "student",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulate form submission to database / email service
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Enquiry submitted successfully! Our expert consultant will reach out on WhatsApp/Phone shortly.", {
        duration: 5000,
        description: `Thank you ${formData.name}. We will guide you for your journey to ${
          formData.country.toUpperCase()
        }!`,
      });
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        country: "us",
        visaType: "student",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100 scroll-mt-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1224] border border-amber-400/50 px-4 py-1.5 text-[0.72rem] sm:text-[0.75rem] font-black uppercase tracking-[0.22em] text-amber-300 shadow-[0_4px_16px_rgba(11,18,36,0.18)] mb-3">
              <Mail className="h-3.5 w-3.5 shrink-0 fill-amber-400/20 text-amber-400 animate-pulse" />
              <span className="text-amber-300 tracking-[0.22em] font-extrabold">Contact Us</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl font-extrabold tracking-tight text-left">
              Start Your <span className="text-[var(--gold)] font-bold">Journey</span> Today
            </h2>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[1.02rem] text-slate-800 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis font-medium">
              Ready to explore study or tourism options abroad? Fill out the form below, and our boutique consultant will get back to you with personalized guidance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Direct Contact Info (Now in a premium details card) */}
          <ScrollReveal direction="left" delay={200} className="lg:col-span-5 flex w-full">
            <div 
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 overflow-hidden w-full transition-all duration-500 hover:border-[var(--gold)]/60 hover:shadow-[0_15px_30px_rgba(184,123,44,0.06)]"
            >
              {/* Left-edge gold highlight bar */}
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[var(--gold)]/20 group-hover:bg-[var(--gold)] transition-colors duration-300 z-20" />

              {/* Faint 'INFO' Watermark */}
              <div className="absolute right-4 bottom-2 text-8xl font-display font-black text-slate-200/20 select-none pointer-events-none transition-colors duration-500 group-hover:text-[var(--gold)]/5 z-0">
                INFO
              </div>

              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight text-left">
                    Global Liaison Desk
                  </h3>
                  <p className="mt-3 text-[0.88rem] text-slate-800 leading-relaxed text-justify pr-2 font-medium">
                    We believe a visa is a life decision, not just paperwork. Reach out directly via WhatsApp for a quick consultation, or visit us in Hyderabad.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-50 to-rose-100/80 border border-rose-200/90 text-rose-600 shadow-[0_4px_14px_rgba(244,63,94,0.14)] group-hover/item:scale-110 group-hover/item:shadow-[0_6px_18px_rgba(244,63,94,0.25)] transition-all duration-300">
                      <MapPin className="h-5 w-5 fill-rose-500/20 text-rose-600" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-rose-600 uppercase tracking-widest mt-1">Our Location</h4>
                      <p className="mt-1 text-sm font-bold text-slate-900">Hyderabad, India</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-blue-100/80 border border-sky-200/90 text-sky-600 shadow-[0_4px_14px_rgba(2,132,199,0.14)] group-hover/item:scale-110 group-hover/item:shadow-[0_6px_18px_rgba(2,132,199,0.25)] transition-all duration-300">
                      <Mail className="h-5 w-5 fill-sky-500/20 text-sky-600" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-sky-600 uppercase tracking-widest mt-1">Email Us</h4>
                      <a 
                        href="mailto:info@mccoyglobal.com" 
                        className="mt-1 block text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        info@mccoyglobal.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100/80 border border-emerald-200/90 text-emerald-600 shadow-[0_4px_14px_rgba(16,185,129,0.14)] group-hover/item:scale-110 group-hover/item:shadow-[0_6px_18px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <Phone className="h-5 w-5 fill-emerald-500/20 text-emerald-600" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-emerald-600 uppercase tracking-widest mt-1">Call Us</h4>
                      <a 
                        href="tel:+918886368886" 
                        className="mt-1 block text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        +91 88863 68886
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-100/80 border border-amber-200/90 text-amber-600 shadow-[0_4px_14px_rgba(245,158,11,0.14)] group-hover/item:scale-110 group-hover/item:shadow-[0_6px_18px_rgba(245,158,11,0.25)] transition-all duration-300">
                      <Clock className="h-5 w-5 fill-amber-500/20 text-amber-600" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-amber-600 uppercase tracking-widest mt-1">Business Hours</h4>
                      <p className="mt-1 text-sm font-bold text-slate-900">Mon - Sat: 10:00 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp CTA */}
              <div className="pt-8 border-t border-slate-250/30 relative z-10 text-left">
                <a 
                  href="https://wa.me/918886368886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] border border-emerald-400/30 group"
                  style={{ background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)" }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-4.5 w-4.5 fill-white transition-transform duration-300 group-hover:scale-110 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.074-4.513 10.077-10.067.001-2.69-1.04-5.218-2.929-7.11A9.97 9.97 0 0 0 12.008 1.54c-5.561 0-10.08 4.515-10.084 10.07a10.024 10.024 0 0 0 1.536 5.25l-.995 3.638 3.738-.98c1.554.849 3.037 1.282 4.444 1.282zm9.99-6.313c-.274-.137-1.62-.8-1.874-.892-.254-.092-.44-.137-.625.137-.184.274-.71.892-.87 1.077-.16.184-.32.208-.593.07-.273-.137-1.155-.425-2.2-1.358-.813-.726-1.362-1.623-1.522-1.897-.16-.273-.017-.42.12-.556.123-.122.274-.32.41-.48.137-.16.183-.273.273-.456.09-.184.046-.346-.023-.483-.069-.137-.625-1.506-.856-2.062-.225-.54-.472-.466-.647-.476-.168-.008-.361-.01-.555-.01-.194 0-.51.073-.777.366-.267.293-1.02 1.002-1.02 2.443s1.045 2.825 1.19 3.018c.146.193 2.056 3.14 4.978 4.4 1.127.487 2.008.777 2.687.992.684.218 1.307.187 1.8.114.55-.082 1.62-.662 1.848-1.27.228-.609.228-1.13.16-1.24-.07-.11-.255-.2-.53-.337z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Premium Contact Form */}
          <ScrollReveal direction="right" delay={350} className="lg:col-span-7 flex w-full">
            <div 
              className="group/form relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 w-full transition-all duration-500 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden"
            >
              {/* Top gold bar accent panel */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/80 scale-x-0 group-hover/form:scale-x-100 transition-transform duration-500 origin-left z-20" />

              {/* Shine effect overlay */}
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover/form:animate-shine pointer-events-none z-20" />

              {/* Free Assessment Badge Banner */}
              <div className="flex items-center gap-2 mb-6 bg-[#0b1224] border border-amber-400/40 px-4 py-2 rounded-xl relative z-10 w-fit shadow-sm">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-amber-300">Free Confidential Assessment</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="name" className="text-[0.7rem] font-black uppercase tracking-widest text-slate-800">
                      Full Name <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 font-semibold"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="phone" className="text-[0.7rem] font-black uppercase tracking-widest text-slate-800">
                      Phone / WhatsApp <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98499 20961"
                      className="rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 font-semibold"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="email" className="text-[0.7rem] font-black uppercase tracking-widest text-slate-800">
                    Email Address <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. johndoe@gmail.com"
                    className="rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 font-semibold"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 font-semibold">
                  {/* Preferred Destination Country Selection */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="country" className="text-[0.7rem] font-black uppercase tracking-widest text-slate-800">
                      Preferred Destination
                    </label>
                    <div className="relative">
                      <select 
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 appearance-none cursor-pointer font-bold"
                      >
                        <option value="us">United States</option>
                        <option value="gb">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="ca">Canada</option>
                        <option value="de">Germany</option>
                        <option value="pl">Poland</option>
                        <option value="nl">Netherlands</option>
                        <option value="it">Italy</option>
                        <option value="fr">France</option>
                        <option value="cy">Cyprus</option>
                        <option value="ge">Georgia</option>
                        <option value="ae">United Arab Emirates (Dubai)</option>
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="mu">Mauritius</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-650">
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>

                  {/* Visa Type Selection */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="visaType" className="text-[0.7rem] font-black uppercase tracking-widest text-slate-800">
                      Visa / Service Pathway
                    </label>
                    <div className="relative">
                      <select 
                        id="visaType"
                        value={formData.visaType}
                        onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 appearance-none cursor-pointer font-bold"
                      >
                        <option value="student">Student Visa Pathway</option>
                        <option value="tourist">Tourism & Visitor Visa</option>
                        <option value="other">General Enquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-650">
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="message" className="text-[0.7rem] font-black uppercase tracking-widest text-slate-800">
                    Describe Your Dream & Profile
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your educational background, work experience, or any specific details..."
                    className="rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 resize-none font-semibold"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn w-full flex items-center justify-center gap-2.5 px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-[0.78rem] sm:text-sm font-extrabold uppercase tracking-wide sm:tracking-wider text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border border-emerald-400/30 transition-all duration-300 disabled:opacity-70 hover:-translate-y-0.5 active:scale-[0.99] shadow-[0_6px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 text-white" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>

                {/* Secure Seal */}
                <div className="flex items-center justify-center gap-2 text-[0.68rem] text-slate-500 mt-4 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Your information is encrypted & shared only with our consultant.</span>
                </div>

              </form>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

// Small inline component for chevron down svg
function ChevronDownIcon() {
  return (
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  );
}
