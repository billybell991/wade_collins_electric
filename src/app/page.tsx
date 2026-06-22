import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Quote, Star } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  { num: "S-01", title: "Service Panel Upgrades", desc: "Replacement of outdated 60/100A panels with modern 200A service to meet today's load demands." },
  { num: "S-02", title: "Baseboard & Heating", desc: "Removing dead-weight baseboard heat, installing efficient replacements and dedicated circuits." },
  { num: "S-03", title: "EV Charger Installation", desc: "Level 2 home charging stations installed and inspected. Drive in, plug in." },
  { num: "S-04", title: "Switches, Outlets, Lighting", desc: "Wall switches, three-ways, pot lights, exterior security and dimmable LED conversions." },
  { num: "S-05", title: "Service Inspections", desc: "Pre-purchase wiring evaluations, hydro entrance assessments, ESA-ready troubleshooting." },
  { num: "S-06", title: "Commercial Build-out", desc: "Full electrical rough-in, finish, and code-compliant inspections for retail and light industrial." },
];

const reviews = [
  { text: "Wade replaced our entire panel and pulled out a bank of old baseboards in a single afternoon. Quoted on the dot, cleaner than when he arrived.", name: "Local Homeowner", role: "Mattawa, ON" },
  { text: "He sorted out a wiring issue two other guys had given up on. Knows his stuff and is straight with you. Will call him for everything from now on.", name: "Verified Customer", role: "Residential" },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 lg:py-28">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="eyebrow mb-8">// MATTAWA · ONTARIO</div>
            <h1 className="font-semibold tracking-tight text-white text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-8">
              Power, wired<br />
              <span className="text-accent">right.</span>{" "}
              <span className="text-mute">First time.</span>
            </h1>
            <p className="text-dim text-lg max-w-xl leading-relaxed mb-10">
              Licensed electrical contracting for homes and businesses in Mattawa
              and the Ottawa Valley. Panel upgrades, EV chargers, heating swaps,
              and the unglamorous stuff that just has to work.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:6134020933" className="btn-ghost">
                <Phone className="w-4 h-4" />
                <span className="font-mono tracking-wider">613.402.0933</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] border border-line">
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-accent" />
              <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-accent" />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-accent" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-accent" />
              <Image
                src={`${BASE}/photos/panel.jpg`}
                alt="Electrical service panel work"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 font-mono text-[0.65rem] tracking-widest text-white bg-black/70 px-2 py-1 border-l-2 border-accent">
                PANEL · 200A · ON-SITE
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-line bg-bg-1">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[0.7rem] tracking-widest text-dim">
            <div className="flex items-center gap-2"><Dot /> ESA LICENSED</div>
            <div className="flex items-center gap-2"><Dot /> FULLY INSURED</div>
            <div className="flex items-center gap-2"><Dot /> LOCALLY OWNED</div>
            <div className="flex items-center gap-2"><Dot /> FREE QUOTES</div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow mb-4">// 01 What we do</div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight max-w-2xl">
                From a single switch to a full panel swap.
              </h2>
            </div>
            <Link href="/services" className="btn-ghost self-start lg:self-end">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {services.map((s) => (
              <div key={s.num} className="bg-bg p-7 group hover:bg-bg-1 transition-colors">
                <div className="font-mono text-[0.7rem] text-accent tracking-widest mb-5">{s.num}</div>
                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-dim text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT / WIRING ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] border border-line">
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-accent" />
              <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-accent" />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-accent" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-accent" />
              <Image
                src={`${BASE}/photos/wiring.jpg`}
                alt="Electrician in a hard hat installing a wall outlet with a cordless drill"
                fill
                className="object-cover object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">// 02 About</div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-8">
              Local. Reliable.<br />
              <span className="text-mute">No-nonsense.</span>
            </h2>
            <p className="text-dim text-lg leading-relaxed mb-6">
              Wade Collins runs a tight, modern electrical operation out of
              Mattawa. The work gets quoted clearly, scheduled honestly, and
              left cleaner than it was found.
            </p>
            <p className="text-dim text-lg leading-relaxed mb-10">
              Residential service calls, panel changes, full commercial
              rough-ins — if it carries current, it falls in scope.
            </p>
            <div className="grid grid-cols-2 gap-px bg-line max-w-md">
              <Stat value="613" label="Service Area" />
              <Stat value="ON" label="ESA Licensed" />
              <Stat value="24h" label="Quote Response" />
              <Stat value="100%" label="Local Owned" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS PREVIEW ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow mb-4">// 03 What clients say</div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight max-w-xl">
                Word from the neighbourhood.
              </h2>
            </div>
            <Link href="/testimonials" className="btn-ghost self-start lg:self-end">
              All reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {reviews.map((r, i) => (
              <div key={i} className="bg-bg p-10">
                <Quote className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                <p className="text-white text-lg leading-relaxed mb-8">{r.text}</p>
                <div className="flex items-center justify-between pt-6 border-t border-line">
                  <div>
                    <div className="text-white text-sm font-semibold">{r.name}</div>
                    <div className="text-dim text-xs font-mono mt-1 tracking-wider">{r.role.toUpperCase()}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAR ============ */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="border border-line bg-bg-1 p-10 lg:p-14 relative">
            <span className="absolute -top-px -left-px w-4 h-4 border-t border-l border-accent" />
            <span className="absolute -top-px -right-px w-4 h-4 border-t border-r border-accent" />
            <span className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-accent" />
            <span className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-accent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="eyebrow mb-4">// Ready when you are</div>
                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Got a project? Let&apos;s scope it out.
                </h3>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="btn-primary">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:6134020933" className="btn-ghost">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">CALL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Dot() {
  return <span className="w-1 h-1 bg-accent inline-block" />;
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-bg p-5">
      <div className="text-white text-2xl font-semibold tracking-tight">{value}</div>
      <div className="font-mono text-[0.65rem] tracking-widest text-dim mt-1 uppercase">{label}</div>
    </div>
  );
}