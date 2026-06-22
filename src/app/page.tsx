import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Clock, Home, Building2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-brand-dark to-slate-900 overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
            </span>
            Serving Mattawa & Surrounding Areas
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white text-balance">
            Powerful solutions for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-[#fef08a]">modern living.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl text-balance">
            Professional electrical contracting with a modern edge. Specializing in residential and commercial panel upgrades, lighting, and power solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-[#fef08a] transition-all flex items-center justify-center gap-2 group">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-brand-yellow/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Licensed & Insured</h3>
              <p className="text-slate-400">Fully certified electrical contractor ensuring your project meets all ESA requirements.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-brand-yellow/30 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Expertise</h3>
              <p className="text-slate-400">From EV chargers to smart homes, we bring the latest technological solutions to your doorstep.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-brand-yellow/30 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-[#2dd4bf]/10 text-[#2dd4bf] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reliable Service</h3>
              <p className="text-slate-400">We show up on time, communicate clearly, and leave our workspaces cleaner than we found them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Local expertise you can count on.</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Based right here in Mattawa, Wade Collins brings a fresh, highly-professional approach to electrical contracting. 
              Whether you need a complete panel upgrade, a complicated commercial rough-in, or just need to swap out those old baseboard heaters for something more efficient, we&apos;ve got you covered.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="p-1 rounded-full bg-brand-yellow/20 text-brand-yellow"><Home className="w-4 h-4" /></div>
                Full Residential Services & Panel Upgrades
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="p-1 rounded-full bg-brand-yellow/20 text-brand-yellow"><Building2 className="w-4 h-4" /></div>
                Commercial Contracting & Lighting
              </li>
            </ul>
            <Link href="/services" className="font-semibold text-brand-yellow hover:text-[#fef08a] inline-flex items-center gap-2">
              Explore our full list of services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1628126019561-12ec8d80f836?q=80&w=2070&auto=format&fit=crop" alt="Electrical Work" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
