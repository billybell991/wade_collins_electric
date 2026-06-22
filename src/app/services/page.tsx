import { Zap, Sun, ShieldAlert, Cpu, Fan, Building, Home, Construction } from "lucide-react";
import Link from "next/link";

const residentialServices = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Panel Upgrades & Replacements",
    description: "Replace outdated or unsafe electrical panels. Essential for older homes to meet modern power demands and safety standards."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Lighting Solutions",
    description: "Interior and exterior lighting installation, including pot lights, security lighting, and energy-efficient LED upgrades."
  },
  {
    icon: <Fan className="w-8 h-8" />,
    title: "Heating Upgrades",
    description: "Removing and disabling old, inefficient baseboard heaters. Upgrading to smarter, more efficient thermal solutions."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Home Integration",
    description: "Installation of smart switches, thermostats, doorbells, and home automation systems."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "EV Charger Installation",
    description: "Professional installation of Level 2 electric vehicle charging stations right in your garage or driveway."
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Inspections & Troubleshooting",
    description: "Evaluating connections to provincial power lines, locating shorts, and standardizing older wiring setups."
  }
];

const commercialServices = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Commercial Build-outs",
    description: "Full electrical rough-ins and finishing for new offices, retail spaces, and warehouses."
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: "Lighting & Signage",
    description: "High-bay lighting, exterior security lighting, and dedicated circuits for commercial signage."
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 border-b border-white/5 pt-32 pb-20 mt-[-80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Expert Electrical Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From simple residential switch replacements to extensive commercial build-outs, we bring precision and modern know-how to every job.
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Residential Services</h2>
            <div className="h-1 w-20 bg-brand-yellow rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((svc, i) => (
              <div key={i} className="bg-slate-800/40 p-8 rounded-2xl border border-white/5 hover:border-brand-yellow/30 transition-colors group">
                <div className="text-brand-yellow mb-6 bg-brand-yellow/10 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Commercial Services</h2>
            <div className="h-1 w-20 bg-brand-blue rounded-full"></div>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((svc, i) => (
              <div key={i} className="bg-slate-800/40 p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-colors group">
                <div className="text-brand-blue mb-6 bg-brand-blue/10 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Have a specific project in mind?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">We provide free quotes and transparent pricing before starting any work.</p>
        <Link href="/contact" className="inline-flex px-8 py-4 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-[#fef08a] transition-colors">
          Contact Us for an Estimate
        </Link>
      </section>
    </div>
  );
}