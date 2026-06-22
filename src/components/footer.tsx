import { Logo } from "./logo";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-slate-400 text-sm max-w-xs">
              Reliable, modern electrical solutions for residential and commercial spaces in Mattawa and the surrounding areas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:6134020933" className="flex items-center gap-2 text-slate-400 hover:text-brand-yellow transition-colors">
                  <Phone className="w-4 h-4" /> 613-402-0933
                </a>
              </li>
              <li>
                <a href="mailto:wadecollinselectric@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-brand-yellow transition-colors">
                  <Mail className="w-4 h-4" /> wadecollinselectric@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  781 Bridges St<br />
                  P.O. Box 979<br />
                  Mattawa, ON P0H 1V0
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Service Hours</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed (Emergency Only)</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Wade Collins Electric. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
