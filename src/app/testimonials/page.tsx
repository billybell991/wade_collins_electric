import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "John D.",
    location: "Mattawa, ON",
    text: "Wade replaced my entire panel and disabled some old baseboard heaters in a single afternoon. Kept the area clean, explained everything to me clearly, and the price was exactly what he quoted. Highly recommend!",
    rating: 5
  },
  {
    name: "Sarah M.",
    location: "Mattawa, ON",
    text: "Had him out to evaluate our connection to provincial power and change some awkward wall light switches. Very knowledgeable, professional, and you can tell he takes pride in his work.",
    rating: 5
  },
  {
    name: "Mike T.",
    location: "Commercial Client",
    text: "Wade handled the rough-in for our new shop. Fast, up to code, and zero issues with the ESA inspection. We'll be using him for all future commercial work.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 border-b border-white/5 pt-32 pb-20 mt-[-80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Client Testimonials</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here is what our neighbors in Mattawa have to say about our work.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                <div className="flex gap-1 mb-6 text-brand-yellow">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 font-bold text-white flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link 
              href="https://reviews.birdeye.com/wade-collins-electric-166834678687147" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 items-center justify-center gap-2"
            >
              Read more reviews on Birdeye <Star className="w-4 h-4 text-brand-yellow fill-current" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}