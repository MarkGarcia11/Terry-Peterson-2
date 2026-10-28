import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [problemsDropdownOpen, setProblemsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProblemsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Problems I Solve', path: '/problems', hasDropdown: true },
    { label: 'Services', path: '/services' },
    { label: 'Case Notes', path: '/case-notes' },
    { label: 'About Terry', path: '/about' },
    { label: 'Resources & FAQ', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  const problemSubLinks = [
    { title: 'Grounding Problems', path: '/problems/grounding', desc: 'Poor wrap, back-ionization, and hook resistance' },
    { title: 'Part Cleaning & Pretreatment', path: '/problems/cleaning-pretreatment', desc: 'Adhesion failure, fisheyes, and wash chemistry' },
    { title: 'Excessive Powder Consumption', path: '/problems/powder-consumption', desc: 'Mil overbuild, transfer waste, and reclaim balance' },
    { title: 'Industry-Specific & Unusual', path: '/problems/unusual-aerospace', desc: 'Aerospace cleaning, outgassing, and complex alloys' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#423E37]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-[#2E2B26]/80 via-[#2E2B26]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Wordmark */}
            <Link to="/" className="group flex flex-col text-left select-none">
              <span className="font-sans font-bold tracking-tight text-lg sm:text-xl text-white group-hover:text-[#B8905A] transition-colors">
                TERRY PETTERSON
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#B8905A] group-hover:text-white transition-colors">
                COATINGS CONSULTANT
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.path}
                      className="relative group py-2"
                      onMouseEnter={() => setProblemsDropdownOpen(true)}
                      onMouseLeave={() => setProblemsDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                          isActive(link.path)
                            ? 'text-[#B8905A] font-semibold'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-white/50" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                          problemsDropdownOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-[#2E2B26] border border-white/15 rounded-xl p-3 shadow-2xl backdrop-blur-xl">
                          <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-[#B8905A] tracking-wider border-b border-white/10 mb-1">
                            Common Problem Areas
                          </div>
                          {problemSubLinks.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group/sub"
                            >
                              <div className="text-xs font-semibold text-white group-hover/sub:text-[#B8905A] transition-colors">
                                {sub.title}
                              </div>
                              <div className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                                {sub.desc}
                              </div>
                            </Link>
                          ))}
                          <div className="mt-2 pt-2 border-t border-white/10 px-2">
                            <Link
                              to="/problems"
                              className="text-xs text-[#B8905A] hover:underline flex items-center gap-1 font-medium"
                            >
                              <span>View all problems</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm tracking-wide transition-colors animated-underline ${
                      isActive(link.path)
                        ? 'text-[#B8905A] font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Direct Phone / CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:8155457709"
                className="hidden xl:flex items-center gap-2 text-xs font-mono text-white/90 hover:text-[#B8905A] transition-colors py-2 px-3 rounded border border-white/10 hover:border-[#B8905A]/40"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8905A]" />
                <span>(815) 545-7709</span>
              </a>

              <MagneticButton
                to="/contact"
                variant="primary"
                size="sm"
                showArrow={false}
              >
                Speak with Terry
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#B8905A] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Staggered Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#2E2B26]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn overflow-y-auto">
          <div className="space-y-4">
            <div className="tech-tag text-[#B8905A] mb-2">NAVIGATION</div>
            {navLinks.map((link) => (
              <div key={link.path} className="border-b border-white/10 pb-3">
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-display tracking-wide ${
                    isActive(link.path) ? 'text-[#B8905A]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="mt-2 pl-3 space-y-1.5 border-l border-[#B8905A]/30">
                    {problemSubLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-white/70 hover:text-[#B8905A] py-1"
                      >
                        → {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Direct Action Controls */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <p className="text-xs font-mono text-white/50 uppercase tracking-wider">
              Direct Contact
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:8155457709"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#423E37] border border-white/10 text-white text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8905A]" />
                <span>Call Terry</span>
              </a>
              <a
                href="sms:8155457709"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#423E37] border border-white/10 text-white text-xs font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#B8905A]" />
                <span>Text Terry</span>
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-lg bg-[#B8905A] text-white text-sm font-semibold shadow-lg shadow-[#B8905A]/20"
            >
              <span>Describe Your Line Problem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
