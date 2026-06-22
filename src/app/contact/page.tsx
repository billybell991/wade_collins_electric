import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 border-b border-white/5 pt-32 pb-20 mt-[-80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to start your electrical project? Reach out today for a prompt response and a free estimate.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a href="tel:6134020933" className="flex items-center gap-4 text-slate-300 hover:text-brand-yellow transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-brand-yellow/10">
                      <Phone className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div className="text-xl font-semibold">613-402-0933</div>
                  </a>
                  <a href="mailto:wadecollinselectric@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-brand-yellow transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-brand-yellow/10">
                      <Mail className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div className="text-lg">wadecollinselectric@gmail.com</div>
                  </a>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div className="leading-tight">
                      781 Bridges St<br/>
                      P.O. Box 979, Mattawa, ON P0H 1V0
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Monday - Friday</span> 
                      <span className="font-semibold text-white">8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Saturday</span> 
                      <span className="font-semibold text-brand-yellow">By Appointment</span>
                    </li>
                    <li className="flex justify-between items-center text-slate-500">
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-600" /> Sunday</span> 
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

             {/* Placeholder Form */}
             <div className="bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-white/5 h-fit">
              <h2 className="text-2xl font-bold text-white mb-2">Request an Estimate</h2>
              <p className="text-slate-400 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">First Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Description</label>
                  <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all resize-none" placeholder="Briefly describe what you need help with..."></textarea>
                </div>
                <button type="button" className="w-full px-8 py-4 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-[#fef08a] transition-all pt-4">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}