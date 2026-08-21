import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ShieldCheck } from "lucide-react";
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
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <Mail className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Contact Us</span>
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
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 border border-slate-250 shadow-sm group-hover/item:border-[var(--gold)] group-hover/item:text-[var(--gold)] group-hover/item:bg-[var(--gold)]/5 transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-slate-500 uppercase tracking-widest mt-1">Our Location</h4>
                      <p className="mt-1 text-sm font-bold text-slate-900">Hyderabad, India</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 border border-slate-250 shadow-sm group-hover/item:border-[var(--gold)] group-hover/item:text-[var(--gold)] group-hover/item:bg-[var(--gold)]/5 transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-slate-500 uppercase tracking-widest mt-1">Email Us</h4>
                      <a 
                        href="mailto:info@mccoyglobal.com" 
                        className="mt-1 block text-sm font-bold text-slate-900 hover:text-[var(--gold)] transition-colors"
                      >
                        info@mccoyglobal.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 border border-slate-250 shadow-sm group-hover/item:border-[var(--gold)] group-hover/item:text-[var(--gold)] group-hover/item:bg-[var(--gold)]/5 transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-slate-500 uppercase tracking-widest mt-1">Call Us</h4>
                      <a 
                        href="tel:+918886368886" 
                        className="mt-1 block text-sm font-bold text-slate-900 hover:text-[var(--gold)] transition-colors"
                      >
                        +91 88863 68886
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4 group/item">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 border border-slate-250 shadow-sm group-hover/item:border-[var(--gold)] group-hover/item:text-[var(--gold)] group-hover/item:bg-[var(--gold)]/5 transition-all duration-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="text-left font-semibold">
                      <h4 className="font-display text-[0.7rem] font-black text-slate-500 uppercase tracking-widest mt-1">Business Hours</h4>
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
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#0b1224] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(224,183,109,0.3)] hover:shadow-[0_6px_18px_rgba(224,183,109,0.45)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
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
              <div className="flex items-center gap-2 mb-6 bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-4 py-2.5 rounded-2xl relative z-10 w-fit">
                <ShieldCheck className="h-4 w-4 text-[var(--gold)] shrink-0" />
                <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-[var(--gold)]">Free Confidential Assessment</span>
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
                  className="group/btn w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-extrabold uppercase tracking-[0.22em] text-[#0b1224] transition-all duration-300 disabled:opacity-75 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(224,183,109,0.3)] hover:shadow-[0_6px_18px_rgba(224,183,109,0.45)] cursor-pointer"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b1224] border-t-transparent" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      Submit Consultation Request
                    </>
                  )}
                </button>

                {/* Secure Seal */}
                <div className="flex items-center justify-center gap-2 text-[0.68rem] text-slate-500 mt-4 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
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
