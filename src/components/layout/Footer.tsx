import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#2E2B26] text-white pt-16 pb-24 lg:pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Contact Info (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group mb-4">
              <span className="font-sans font-bold text-lg sm:text-xl tracking-tight block text-white group-hover:text-[#B8905A] transition-colors">
                TERRY PETTERSON
              </span>
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#B8905A]">
                COATINGS CONSULTANT
              </span>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              Independent industrial powder-coating troubleshooting, team training, and process optimization. 12 years of hands-on experience diagnosing line defects from the ground up.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8905A] shrink-0 mt-0.5" />
                <span>21635 Nadia Dr., Shorewood, IL 60404</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8905A] shrink-0" />
                <a href="tel:8155457709" className="hover:text-[#B8905A] transition-colors font-mono">
                  (815) 545-7709 (Call or Text)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8905A] shrink-0" />
                <a href="mailto:tepowder@msn.com" className="hover:text-[#B8905A] transition-colors">
                  tepowder@msn.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Problems I Solve (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="tech-tag text-[#B8905A] mb-4">PROBLEMS I SOLVE</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/problems/grounding"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Grounding Problems
                </Link>
              </li>
              <li>
                <Link
                  to="/problems/cleaning-pretreatment"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Cleaning & Pretreatment
                </Link>
              </li>
              <li>
                <Link
                  to="/problems/powder-consumption"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Powder Consumption
                </Link>
              </li>
              <li>
                <Link
                  to="/problems/unusual-aerospace"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Unusual & Aerospace
                </Link>
              </li>
              <li>
                <Link
                  to="/problems"
                  className="text-[#B8905A] hover:underline transition-colors block pt-1 font-medium"
                >
                  View All Problems →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="tech-tag text-[#B8905A] mb-4">SERVICES</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/services/troubleshooting"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Coating Troubleshooting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/training"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Team Training
                </Link>
              </li>
              <li>
                <Link
                  to="/services/efficiency"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Efficiency & Waste
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#B8905A] hover:underline transition-colors block pt-1 font-medium"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Company (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="tech-tag text-[#B8905A] mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  About Terry
                </Link>
              </li>
              <li>
                <Link
                  to="/case-notes"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Case Notes
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  FAQ & Knowledge Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white/50 hover:text-white/80 transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/50 hover:text-white/80 transition-colors block"
                >
                  Terms of Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Action Box (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="bg-[#423E37]/80 rounded-xl p-4 border border-white/10">
              <span className="tech-tag text-[#D9A56B] block mb-2">
                ACTIVE LINE ISSUE?
              </span>
              <p className="text-xs text-white/80 mb-3 leading-snug">
                Call or text for immediate triage with Terry.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:8155457709"
                  className="w-full py-2 px-3 rounded bg-[#B8905A] hover:bg-[#C9A46E] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>(815) 545-7709</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full py-2 px-3 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Submit Inquiry</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8905A]" />
            <span>
              © {new Date().getFullYear()} Terry Petterson Coatings Consultant. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              Shorewood, IL · Midwest & Nationwide
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white/70 hover:text-[#B8905A] transition-colors font-mono"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
