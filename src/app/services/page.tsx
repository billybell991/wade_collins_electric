import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Home, Building2, Zap, Lightbulb, ThermometerSun, Plug, ClipboardCheck, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Residential & Commercial Electrical",
  description:
    "Service panel upgrades, EV chargers, baseboard heating, lighting, and full commercial electrical build-out in Mattawa and the Ottawa Valley.",
};

const residential = [
  { icon: Zap, num: "R-01", title: "Service Panel Upgrades", desc: "60A / 100A to 200A modernization. Permit pulled, hydro coordinated, ESA inspected." },
  { icon: ThermometerSun, num: "R-02", title: "Baseboard & Heating", desc: "Removal of obsolete electric heat, install of efficient replacements and zoning." },
  { icon: Lightbulb, num: "R-03", title: "Lighting & Switches", desc: "Pot lights, dimmers, three-way circuits, exterior security, smart switch wiring." },
  { icon: Plug, num: "R-04", title: "EV Charger Install", desc: "Level 2 chargers wired to dedicated 40A circuits. Rebate-ready documentation." },
  { icon: ClipboardCheck, num: "R-05", title: "Service Inspections", desc: "Pre-purchase wiring assessments, hydro entrance evaluations, troubleshooting." },
  { icon: Home, num: "R-06", title: "Renos & Additions", desc: "Rough-in and finish for kitchens, basements, garages, and additions." },
];

const commercial = [
  { icon: Building2, num: "C-01", title: "Build-Out & Rough-In", desc: "Full electrical for retail fit-outs, offices, and light industrial spaces." },
  { icon: Hammer, num: "C-02", title: "Lighting & Signage", desc: "High-bay, parking lot, illuminated sign feeds, photo-cell controls." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="eyebrow mb-6">// Services</div>
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95] max-w-4xl">
            What we wire.<br />
            <span className="text-mute">Top to bottom.</span>
          </h1>
          <p className="text-dim text-lg max-w-2xl mt-8 leading-relaxed">
            Two sides of the business: residential service work and commercial
            build-out. Both done to ESA code, both done clean.
          </p>
        </div>
      </section>

      {/* ============ RESIDENTIAL ============ */}
      <section id="residential" className="border-b border-line scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="eyebrow mb-4">// 01 Residential</div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Home electrical work.
              </h2>
            </div>
            <div className="font-mono text-xs text-mute tracking-widest">06 SERVICES</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {residential.map((s) => (
              <div key={s.num} className="bg-bg p-7 group hover:bg-bg-1 transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <s.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  <div className="font-mono text-[0.65rem] text-mute tracking-widest">{s.num}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-dim text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMERCIAL ============ */}
      <section id="commercial" className="border-b border-line scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="eyebrow mb-4">// 02 Commercial</div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Business & build-out.
              </h2>
            </div>
            <div className="font-mono text-xs text-mute tracking-widest">02 SERVICES</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {commercial.map((s) => (
              <div key={s.num} className="bg-bg p-10 group hover:bg-bg-1 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <s.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  <div className="font-mono text-[0.65rem] text-mute tracking-widest">{s.num}</div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">{s.title}</h3>
                <p className="text-dim text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="border border-line bg-bg-1 p-10 lg:p-14 relative">
            <span className="absolute -top-px -left-px w-4 h-4 border-t border-l border-accent" />
            <span className="absolute -top-px -right-px w-4 h-4 border-t border-r border-accent" />
            <span className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-accent" />
            <span className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-accent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="eyebrow mb-4">// Don&apos;t see it listed?</div>
                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Call. Most electrical work falls in scope.
                </h3>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="btn-primary">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:6134020933" className="btn-ghost">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">613.402.0933</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}