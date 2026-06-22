import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Get a Quote",
  description:
    "Reach Wade Collins Electric: 613-402-0933 · wadecollinselectric@gmail.com · 781 Bridges St, Mattawa, ON. Free quotes, fast response.",
};

export default function ContactPage() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="eyebrow mb-6">// Contact</div>
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95] max-w-4xl">
            Get in touch.<br />
            <span className="text-mute">Get a quote.</span>
          </h1>
          <p className="text-dim text-lg max-w-2xl mt-8 leading-relaxed">
            Send a message, call direct, or send an email. Quotes typically
            return within 24 hours.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTACT GRID ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info Column */}
          <div className="lg:col-span-4 space-y-px bg-line flex flex-col">
            <ContactRow
              icon={Phone}
              label="01 / PHONE"
              value="613.402.0933"
              href="tel:6134020933"
              mono
            />
            <ContactRow
              icon={Mail}
              label="02 / EMAIL"
              value="wadecollinselectric@gmail.com"
              href="mailto:wadecollinselectric@gmail.com"
              small
            />
            <ContactRow
              icon={MapPin}
              label="03 / ADDRESS"
              value={
                <>
                  781 Bridges St, P.O. Box 979<br />
                  Mattawa, ON&nbsp; P0H 1V0
                </>
              }
            />
            <ContactRow
              icon={Clock}
              label="04 / HOURS"
              value={
                <>
                  Mon–Fri&nbsp; 08:00–17:00<br />
                  Sat&nbsp; by appointment<br />
                  Sun&nbsp; closed
                </>
              }
              mono
              small
            />
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">// Request a quote</div>
            <form
              action="https://formspree.io/f/your_form_id"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="font-mono text-[0.65rem] tracking-widest text-dim uppercase block mb-2">
                  // Service needed
                </label>
                <select
                  name="service"
                  className="w-full bg-bg-1 border border-line text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors font-sans"
                >
                  <option>Panel Upgrade</option>
                  <option>EV Charger</option>
                  <option>Lighting / Switches</option>
                  <option>Heating</option>
                  <option>Inspection / Diagnostic</option>
                  <option>Commercial Build-Out</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[0.65rem] tracking-widest text-dim uppercase block mb-2">
                  // Describe the work
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell Wade what you need done…"
                  className="w-full bg-bg-1 border border-line text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-mute"
                />
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
                <p className="font-mono text-xs text-mute tracking-wider">
                  / 24h response · free quotes
                </p>
                <button type="submit" className="btn-primary">
                  Send Request <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3">// Location</div>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                Based in Mattawa.
              </h2>
            </div>
            <div className="font-mono text-xs text-dim tracking-widest">
              46.31°N · 78.70°W
            </div>
          </div>
          <div className="relative border border-line aspect-[16/7]">
            <span className="absolute -top-px -left-px w-4 h-4 border-t border-l border-accent z-10" />
            <span className="absolute -top-px -right-px w-4 h-4 border-t border-r border-accent z-10" />
            <span className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-accent z-10" />
            <span className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-accent z-10" />
            <iframe
              src="https://www.google.com/maps?q=781+Bridges+St,+Mattawa,+ON+P0H+1V0&output=embed"
              title="Wade Collins Electric — Mattawa, ON"
              loading="lazy"
              className="w-full h-full grayscale contrast-125 brightness-90"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  mono,
  small,
}: {
  icon: IconType;
  label: string;
  value: React.ReactNode;
  href?: string;
  mono?: boolean;
  small?: boolean;
}) {
  const valueClasses = `${mono ? "font-mono" : ""} ${small ? "text-sm" : "text-lg"} text-white leading-relaxed`;
  const inner = (
    <div className="bg-bg p-6 flex gap-4 h-full">
      <Icon className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={1.5} />
      <div className="flex-1">
        <div className="font-mono text-[0.65rem] tracking-widest text-dim uppercase mb-2">
          {label}
        </div>
        <div className={valueClasses}>{value}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="group block hover:bg-bg-1 transition-colors">
        {inner}
      </a>
    );
  }
  return inner;
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[0.65rem] tracking-widest text-dim uppercase block mb-2">
        // {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-bg-1 border border-line text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}