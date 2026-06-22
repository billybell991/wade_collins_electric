import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Star, ExternalLink, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials — What our clients say",
  description:
    "Real reviews from homeowners and businesses across Mattawa and the Ottawa Valley. Verified Birdeye reviews available.",
};

const testimonials = [
  {
    text: "Wade replaced our entire panel and pulled out a bank of old baseboards in a single afternoon. Quoted on the dot, cleaner than when he arrived.",
    name: "Local Homeowner",
    location: "Mattawa, ON",
    project: "200A panel + heating swap",
  },
  {
    text: "He sorted out a wiring issue two other guys had given up on. Knows his stuff and is straight with you. Will call him for everything from now on.",
    name: "Verified Customer",
    location: "Bonfield, ON",
    project: "Diagnostic & repair",
  },
  {
    text: "Showed up on time, explained the work, and the bill matched the quote. That alone makes him a keeper in this town.",
    name: "Repeat Client",
    location: "Mattawa, ON",
    project: "EV charger install",
  },
  {
    text: "Did the full electrical for our shop. Quality work, fair price, ESA passed first try.",
    name: "Small Business Owner",
    location: "North Bay region",
    project: "Commercial build-out",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="eyebrow mb-6">// Testimonials</div>
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95] max-w-4xl">
            What the<br />
            <span className="text-accent">neighbourhood</span> says.
          </h1>
          <p className="text-dim text-lg max-w-2xl mt-8 leading-relaxed">
            Word-of-mouth runs this business. Here&apos;s what folks have said
            after the wires got pulled and the bill came in.
          </p>
        </div>
      </section>

      {/* ============ TESTIMONIALS GRID ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-bg p-10 lg:p-12 relative">
                <Quote className="w-12 h-12 text-accent absolute top-8 right-8 opacity-20" strokeWidth={1.5} />
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-6 border-t border-line flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-dim text-xs font-mono mt-1 tracking-wider uppercase">{t.location}</div>
                  </div>
                  <div className="font-mono text-[0.65rem] text-accent tracking-widest uppercase">
                    / {t.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BIRDEYE CTA ============ */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="border border-line bg-bg-1 p-10 lg:p-14 relative">
            <span className="absolute -top-px -left-px w-4 h-4 border-t border-l border-accent" />
            <span className="absolute -top-px -right-px w-4 h-4 border-t border-r border-accent" />
            <span className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-accent" />
            <span className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-accent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="eyebrow mb-4">// Verified reviews</div>
                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
                  Read more on Birdeye.
                </h3>
                <p className="text-dim text-base max-w-lg">
                  Independent, verified customer reviews from the same folks
                  whose lights stayed on.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="https://reviews.birdeye.com/wade-collins-electric-166834678687147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Birdeye Reviews <ExternalLink className="w-4 h-4" />
                </a>
                <Link href="/contact" className="btn-ghost">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">CONTACT</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}