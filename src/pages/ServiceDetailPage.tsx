import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Target,
  Sparkles,
  FileCheck2,
  Calendar,
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MagneticButton } from '../components/common/MagneticButton';
import { CTABand } from '../components/common/CTABand';
import { Reveal } from '../components/common/Reveal';
import { SERVICES_DATA } from '../data/servicesData';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Next service calculation
  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const nextService = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];

  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* 1. HERO & BREADCRUMBS */}
      <section className="py-12 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#B8905A]">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#B8905A]/20 border border-[#B8905A]/30">
                    SERVICE {service.number}
                  </span>
                  <span>CONSULTING PRACTICE</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  {service.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#C9A46E] font-medium leading-relaxed">
                  “{service.tagline}”
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  {service.summary}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton to="/contact" variant="primary" size="md">
                    Schedule with Terry
                  </MagneticButton>
                  <MagneticButton
                    href="tel:8155457709"
                    variant="secondary"
                    size="md"
                    showArrow={false}
                  >
                    Call (815) 545-7709
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal direction="left" delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#2E2B26]/85 backdrop-blur-md border border-white/10 text-xs text-white/80">
                    <span className="text-[#B8905A] font-semibold block mb-0.5">
                      Service Format:
                    </span>
                    {service.formatOptions}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO IT'S FOR & WHAT TO EXPECT */}
      <section className="py-16 sm:py-20 bg-[#423E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Who it's for */}
            <Reveal direction="up" delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#454543]/40 border border-white/10 h-full">
                <div className="flex items-center gap-2 mb-4 tech-tag text-[#B8905A]">
                  <Target className="w-4 h-4" />
                  <span>WHO THIS SERVICE IS DESIGNED FOR</span>
                </div>
                <h2 className="font-display text-2xl text-white mb-6">
                  Ideal for operations that need:
                </h2>
                <ul className="space-y-3.5">
                  {service.whoItsFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/85">
                      <span className="w-2 h-2 rounded-full bg-[#B8905A] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* What to expect */}
            <Reveal direction="up" delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#454543]/40 border border-white/10 h-full">
                <div className="flex items-center gap-2 mb-4 tech-tag text-[#B8905A]">
                  <Sparkles className="w-4 h-4" />
                  <span>THE CONSULTING EXPERIENCE</span>
                </div>
                <h2 className="font-display text-2xl text-white mb-6">
                  What to expect when working together:
                </h2>
                <ul className="space-y-3.5">
                  {service.whatToExpect.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-[#B8905A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Step-by-Step Workflow) */}
      <section className="py-16 sm:py-24 bg-[#38352F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="01"
            tag="ENGAGEMENT ROADMAP"
            title={
              <>
                How the engagement <span className="italic font-normal text-[#C9A46E]">unfolds.</span>
              </>
            }
            subtitle="Clear phases from initial phone triage through on-site execution and shift documentation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="p-6 rounded-xl bg-[#423E37]/60 border border-white/10 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-light text-[#B8905A] block mb-3">
                      {step.stepNumber}
                    </span>
                    <h3 className="font-display text-lg text-white mb-2 font-medium">
                      {step.stepTitle}
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                      {step.stepDetails}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES & FORMAT OPTIONS */}
      <section className="py-16 sm:py-20 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Deliverables */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-[#423E37]/50 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <FileCheck2 className="w-4 h-4" />
                  <span>TANGIBLE ARTIFACTS</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-6">
                  What you receive upon completion:
                </h3>
                <div className="space-y-3">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-white/5 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B8905A] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Format & Scheduling */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#423E37]/50 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>LOCATION & SCHEDULING</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-4">
                  Flexible Delivery Formats
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {service.formatOptions}
                </p>
                <div className="p-4 rounded-xl bg-[#2E2B26] border border-[#B8905A]/30 text-xs text-white/85 space-y-2">
                  <p className="font-semibold text-[#B8905A]">
                    Midwest Base · Shorewood, IL
                  </p>
                  <p>
                    Rapid on-site dispatch across Illinois, Indiana, Wisconsin, Iowa, and Michigan. Nationwide travel scheduled based on production windows.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <MagneticButton to="/contact" variant="primary" size="sm" className="w-full text-center">
                  Request Consulting Availability
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#38352F] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="02"
              tag="SERVICE QUESTIONS"
              title="Frequently asked about this service"
              subtitle="Practical answers regarding scheduling, pricing structure, and prep work."
            />

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#423E37]/60 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-medium text-white hover:text-[#B8905A] transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B8905A] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-white/80 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. NEXT SERVICE NAVIGATION */}
      <section className="py-8 bg-[#2E2B26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/services"
            className="text-xs font-mono text-white/60 hover:text-white transition-colors"
          >
            ← Back to all services
          </Link>

          <Link
            to={`/services/${nextService.slug}`}
            className="flex items-center gap-2 text-sm text-[#B8905A] hover:text-[#C9A46E] font-medium"
          >
            <span>Next Service: {nextService.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. REUSABLE CTA BAND */}
      <CTABand />
    </div>
  );
};
