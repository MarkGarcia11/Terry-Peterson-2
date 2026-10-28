import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Wrench } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/common/Reveal';
import { CTABand } from '../components/common/CTABand';
import { MagneticButton } from '../components/common/MagneticButton';

export const AboutPage: React.FC = () => {
  const tools = [
    {
      name: 'High-Precision Megohmmeter',
      purpose: 'Measures electrical resistance from hook to earth ground (< 1 MΩ target).',
    },
    {
      name: 'Digital Eddy-Current & Magnetic Mil Gauge',
      purpose: 'Maps dry film thickness across complex geometries in real time.',
    },
    {
      name: 'ASTM D3359 Cross-Hatch Adhesion Kit',
      purpose: 'Evaluates mechanical intercoat and substrate bonding under precision shear.',
    },
    {
      name: 'Multi-Channel Oven Cure Data-Logger',
      purpose: 'Tracks true Peak Metal Temperature (PMT) curves through convection zones.',
    },
    {
      name: 'Chemical Titration & Water-Break Kit',
      purpose: 'Verifies active bath concentrations, TDS conductivity, and rinse surface energy.',
    },
    {
      name: 'MEK Solvent Double-Rub Test Kit',
      purpose: 'Determines complete polymer cross-link density (ASTM D5402).',
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* 1. HERO / INTRODUCTION */}
      <section className="py-12 sm:py-16 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Story */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8905A]" />
                  <span>ABOUT TERRY PETTERSON</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  12 years on the booth floor. <span className="italic font-normal text-[#C9A46E]">Direct answers, zero corporate fluff.</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#C9A46E] font-medium leading-relaxed">
                  “I’ve stood in the booth with powder fog in the air, worked through late-night reject emergencies, and tuned lines from small custom job shops to demanding aerospace facilities.”
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  When you call Terry Petterson Coatings Consultant, you are not talking to a regional sales rep or an account coordinator. You are talking directly with Terry—an independent specialist whose only job is finding out why your parts aren’t coating properly and showing your team how to fix it.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton to="/contact" variant="primary" size="md">
                    Speak Directly with Terry
                  </MagneticButton>
                  <MagneticButton
                    href="tel:8155457709"
                    variant="secondary"
                    size="md"
                    icon={<Phone className="w-3.5 h-3.5" />}
                    showArrow={false}
                  >
                    (815) 545-7709
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Candid Portrait */}
            <div className="lg:col-span-5">
              <Reveal direction="left" delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  {/* Photo of Terry */}
                  <img
                    src="/images/terry-portrait.jpg"
                    alt="Terry Petterson inspecting a powder coated panel with precision dry film thickness gauge"
                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#2E2B26]/90 backdrop-blur-md border border-[#B8905A]/30 text-xs">
                    <p className="font-semibold text-white">Terry Petterson</p>
                    <p className="text-white/70">
                      Independent Industrial Coatings Consultant · Shorewood, IL
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE VALUES TRIO */}
      <section className="py-16 sm:py-24 bg-[#423E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="01"
            tag="HOW I OPERATE"
            title={
              <>
                Three principles I bring <span className="italic font-normal text-[#C9A46E]">to every shop.</span>
              </>
            }
            subtitle="I built this practice on honesty, clarity, and respect for the people who run the line every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#454543]/40 border border-white/10 h-full">
                <span className="font-mono text-xs uppercase text-[#B8905A] block mb-2 font-semibold">
                  PRINCIPLE 01
                </span>
                <h3 className="font-display text-2xl text-white mb-3">
                  Plain Language
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  I don’t hide behind complex electro-chemical jargon to sound smart. Every issue has a physical explanation, and I explain it in plain, clear terms that make immediate sense to your operators and your plant manager.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#454543]/40 border border-white/10 h-full">
                <span className="font-mono text-xs uppercase text-[#B8905A] block mb-2 font-semibold">
                  PRINCIPLE 02
                </span>
                <h3 className="font-display text-2xl text-white mb-3">
                  Root Causes, Not Guesses
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We don’t randomly twist dials on guns or swap expensive chemicals hoping things improve. We measure ground resistance, titrate baths, profile oven temperatures, and test until we have proven facts.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="p-8 rounded-2xl bg-[#454543]/40 border border-white/10 h-full">
                <span className="font-mono text-xs uppercase text-[#B8905A] block mb-2 font-semibold">
                  PRINCIPLE 03
                </span>
                <h3 className="font-display text-2xl text-white mb-3">
                  Your Team Understands It Too
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  A fix that leaves when the consultant walks out the door is useless. I work side-by-side with your booth operators so they understand what changed and can maintain the finish across every shift.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. THE ONE-PERSON ADVANTAGE */}
      <section className="py-16 sm:py-20 bg-[#38352F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Reveal direction="up">
                <div className="flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE ONE-PERSON ADVANTAGE</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight mb-4">
                  Why working directly with an independent specialist matters.
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                  Many large industrial consulting firms send a senior partner to sell the project, then dispatch a junior engineer with limited real booth time to do the actual audit.
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  With Terry Petterson, there are no middle layers. You get 12 years of hands-on troubleshooting experience directly on your line, working with your team from start to finish.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-[#423E37]/70 border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8905A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Direct Phone Access</h4>
                    <p className="text-xs text-white/75 mt-0.5">
                      Call or text (815) 545-7709 and talk directly to the person who will be standing in your booth.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#423E37]/70 border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8905A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">100% Unbiased Advice</h4>
                    <p className="text-xs text-white/75 mt-0.5">
                      I have no powder sales targets or equipment distributor quotas. If a 10-minute hook cleaning fixes the problem, that is what I tell you.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#423E37]/70 border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8905A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Fast Decision Making</h4>
                    <p className="text-xs text-white/75 mt-0.5">
                      No corporate red tape or multi-week approval cycles. We schedule, we troubleshoot, and we solve the issue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ON-SITE TOOLKIT */}
      <section className="py-16 sm:py-20 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="02"
            tag="DIAGNOSTIC INSTRUMENTATION"
            title={
              <>
                What I bring <span className="italic font-normal text-[#C9A46E]">to your line.</span>
              </>
            }
            subtitle="I arrive with calibrated measurement tools to test every stage of your coating process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <Reveal key={idx} delay={idx * 0.08} direction="up">
                <div className="p-5 rounded-xl bg-[#423E37]/50 border border-white/10 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4 text-[#B8905A]" />
                    <h3 className="font-semibold text-white text-sm sm:text-base">
                      {tool.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {tool.purpose}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & CONTACT QUICK SUMMARY */}
      <section className="py-12 bg-[#423E37] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#2E2B26] border border-[#B8905A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="tech-tag text-[#B8905A] block mb-1">
                LOCATION & AVAILABILITY
              </span>
              <h3 className="font-display text-2xl text-white">
                Based in Shorewood, Illinois · Serving Nationwide
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-xl">
                21635 Nadia Dr., Shorewood, IL 60404. On-site dispatch throughout Chicagoland, Illinois, Midwest, and nationwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <MagneticButton to="/contact" variant="primary" size="md">
                Get in Touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTABand */}
      <CTABand />
    </div>
  );
};
