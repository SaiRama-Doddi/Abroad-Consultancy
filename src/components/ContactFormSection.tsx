import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "US",
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
        country: "US",
        visaType: "student",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-background py-5 sm:py-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Contact Us</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Start Your Journey Today
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
            <p className="mt-6 text-[1.02rem] text-muted-foreground leading-relaxed">
              Ready to explore study or tourism options abroad? Fill out the form below, and our boutique consultant will get back to you with personalized guidance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <ScrollReveal direction="left" delay={200} className="lg:col-span-5 w-full">
            <div className="space-y-8 lg:pr-8">
              <div>
                <h3 className="font-display text-3xl text-foreground">Get In Touch</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  We believe a visa is a life decision, not just paperwork. Reach out directly via WhatsApp for a quick consultation, or visit us in Hyderabad.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1">Our Location</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1">Email Us</h4>
                    <a 
                      href="mailto:contact@maniabroad.com" 
                      className="mt-2 block text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors"
                    >
                      contact@maniabroad.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1">Call Us</h4>
                    <a 
                      href="tel:+918886368886" 
                      className="mt-2 block text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors"
                    >
                      +91 88863 68886
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-foreground uppercase tracking-wider mt-1">Business Hours</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp CTA */}
              <div className="pt-2">
                <a 
                  href="https://wa.me/918886368886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-[#0b1224] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(224,183,109,0.25)] hover:shadow-[0_0_30px_rgba(224,183,109,0.4)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Premium Contact Form */}
          <ScrollReveal direction="right" delay={350} className="lg:col-span-7 w-full">
            <div 
              className="relative rounded-3xl border border-border bg-card p-8 sm:p-10"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Full Name <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Phone / WhatsApp <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98499 20961"
                      className="rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Email Address <span className="text-muted-foreground/40">(Optional)</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. johndoe@gmail.com"
                    className="rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Destination Country Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="country" className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Preferred Destination
                    </label>
                    <div className="relative">
                      <select 
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors appearance-none cursor-pointer"
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>

                  {/* Visa Type Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="visaType" className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Visa / Service Pathway
                    </label>
                    <div className="relative">
                      <select 
                        id="visaType"
                        value={formData.visaType}
                        onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="student">Student Visa Pathway</option>
                        <option value="tourist">Tourism & Visitor Visa</option>
                        <option value="other">General Enquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Describe Your Dream & Profile
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your educational background, work experience, or any specific details..."
                    className="rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.22em] text-[#0b1224] transition-all duration-300 disabled:opacity-75 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(224,183,109,0.3)] cursor-pointer"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-[#0b1224] border-t-transparent" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Consultation Request
                    </>
                  )}
                </button>

                {/* Secure Seal */}
                <div className="flex items-center justify-center gap-2 text-[0.68rem] text-muted-foreground/60 mt-4">
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
