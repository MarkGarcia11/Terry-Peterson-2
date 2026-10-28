import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/common/Reveal';
import { CTABand } from '../components/common/CTABand';
import { MagneticButton } from '../components/common/MagneticButton';
import { SERVICES_DATA } from '../data/servicesData';

export const ServicesHubPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* Header */}
      <section className="py-12 sm:py-16 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="02 / CONSULTING SERVICES"
            tag="HOW I HELP COATING LINES"
            title={
              <>
                Independent expertise <span className="italic font-normal text-[#C9A46E]">tailored to your shop.</span>
              </>
            }
            subtitle="I offer three focused consulting formats, whether you need rapid triage for a stopped line, structured operator coaching, or plant-wide material waste reduction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B8905A]" />
              <span>Direct access to Terry on every project</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B8905A]" />
              <span>Chicagoland, Midwest & Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B8905A]" />
              <span>Zero supplier or vendor kickbacks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.1} direction="up">
              <div className="rounded-2xl bg-[#454543]/40 border border-white/10 overflow-hidden p-6 sm:p-10 hover:border-[#B8905A]/40 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Image */}
                  <div className="lg:col-span-5">
                    <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 shadow-xl">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#2E2B26]/90 text-[#B8905A] border border-white/10">
                        SERVICE {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="lg:col-span-7">
                    <span className="tech-tag text-[#B8905A] block mb-2">
                      SPECIALIZED PRACTICE
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-[#C9A46E] font-medium text-sm sm:text-base mb-4">
                      “{service.tagline}”
                    </p>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    <div className="mb-6 space-y-2">
                      <span className="text-xs font-mono uppercase text-white/50 block font-semibold mb-2">
                        Key Deliverables Include:
                      </span>
                      {service.deliverables.slice(0, 3).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-[#B8905A] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      <MagneticButton to={`/services/${service.slug}`} variant="primary" size="md">
                        View Service Breakdown
                      </MagneticButton>
                      <Link
                        to="/contact"
                        className="text-xs sm:text-sm text-white/70 hover:text-[#B8905A] animated-underline font-medium"
                      >
                        Request Quote / Availability →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reusable CTABand */}
      <CTABand />
    </div>
  );
};
