import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MagneticButton } from '../components/common/MagneticButton';
import { GlassPanel } from '../components/common/GlassPanel';
import { FinishInspector } from '../components/interactive/FinishInspector';
import { TroubleshootingQuiz } from '../components/interactive/TroubleshootingQuiz';
import { CTABand } from '../components/common/CTABand';
import { Reveal } from '../components/common/Reveal';
import { PROBLEMS_DATA } from '../data/problemsData';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_NOTES_DATA } from '../data/caseNotesData';

export const HomePage: React.FC = () => {
  const aerospaceCase = CASE_NOTES_DATA.find((c) => c.id === 'aerospace-cleaning-challenge');

  return (
    <div className="relative">
      {/* 1. HERO SECTION (Full-bleed image + Sky Glass panel overlay) */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#2E2B26]">
        {/* Full-bleed background hero image with warm grading */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-powder-coating.jpg"
            alt="Electrostatic powder coating application on precision metal part"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#423E37] via-[#423E37]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E2B26]/80 via-transparent to-[#2E2B26]/70" />
          {/* Ambient brass pulse glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#B8905A]/15 rounded-full blur-[120px] pointer-events-none animate-ambient-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Headline & Call to Actions */}
            <div className="lg:col-span-8">
              <Reveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#B8905A] animate-pulse" />
                  <span className="tech-tag text-white/90 text-xs">
                    INDEPENDENT POWDER COATING CONSULTANT · 12 YEARS EXPERIENCE
                  </span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white leading-[1.08] tracking-tight">
                  When your powder coating isn’t right, <span className="italic font-normal text-[#C9A46E]">I find out why.</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl font-light">
                  Independent troubleshooting, hands-on training, and process improvement for powder-coating operations of every size.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <MagneticButton to="/contact" variant="primary" size="lg">
                    Tell me what you’re seeing
                  </MagneticButton>

                  <MagneticButton
                    href="tel:8155457709"
                    variant="secondary"
                    size="lg"
                    icon={<Phone className="w-4 h-4 text-[#B8905A]" />}
                  >
                    Call / text (815) 545-7709
                  </MagneticButton>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-white/70">
                  <Shield className="w-4 h-4 text-[#B8905A] shrink-0" />
                  <span>
                    You’ll speak directly with Terry — no sales reps, no junior handoffs.
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Floating Glass Highlight Card (Desktop) */}
            <div className="lg:col-span-4 hidden lg:block">
              <Reveal direction="left" delay={0.4}>
                <GlassPanel className="border-white/15">
                  <div className="space-y-4 text-xs font-mono">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">EXPERIENCE</span>
                      <span className="text-[#B8905A] font-semibold">12 Years Hands-On</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">LOCATION</span>
                      <span className="text-white">Shorewood, IL (Midwest & US)</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">FOCUS</span>
                      <span className="text-white">Job Shops · OEM · Aerospace</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">AFFILIATION</span>
                      <span className="text-[#B8905A]">100% Independent</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/75 leading-relaxed font-sans">
                    “Plain language, scientific root causes, and practical fixes you can run on your line today.”
                  </div>
                </GlassPanel>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT ARE YOU RUNNING INTO?" (Editorial Image-Led Problems Grid) */}
      <section className="py-20 sm:py-28 bg-[#423E37] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <SectionHeader
              number="01"
              tag="COMMON LINE DEFECTS"
              title={
                <>
                  What are you running into <span className="italic font-normal text-[#C9A46E]">on the line?</span>
                </>
              }
              subtitle="Most coating defects fall into four distinct root causes. Select what matches your current symptom to learn what is behind it."
              className="mb-0"
            />

            <Link
              to="/problems"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8905A] hover:text-[#C9A46E] animated-underline shrink-0"
            >
              <span>Explore all problem diagnostics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PROBLEMS_DATA.map((problem, idx) => (
              <Reveal key={problem.id} delay={idx * 0.12} direction="up">
                <Link
                  to={`/problems/${problem.slug}`}
                  className="group block relative rounded-2xl overflow-hidden bg-[#454543]/40 border border-white/10 hover:border-[#B8905A]/50 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  {/* Image Container with subtle warm overlay */}
                  <div className="relative h-60 sm:h-64 overflow-hidden">
                    <img
                      src={problem.heroImage}
                      alt={problem.altText}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26] via-[#2E2B26]/40 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#2E2B26]/80 text-[#B8905A] border border-white/10 backdrop-blur-md">
                      {problem.number}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="tech-tag text-[#B8905A] block mb-1">
                        DIAGNOSTIC PATH
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-[#B8905A] transition-colors leading-tight">
                        {problem.shortTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <p className="text-sm text-white/80 line-clamp-2 leading-relaxed">
                      {problem.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-white/60 font-mono">
                        {problem.symptoms.length} Symptoms documented
                      </span>
                      <span className="text-[#B8905A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read root cause</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE INTERACTIVE ELEMENT: THE FINISH INSPECTOR */}
      <section className="py-20 bg-[#38352F] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            number="02"
            tag="TACTILE VISUAL TOOL"
            title={
              <>
                See the difference <span className="italic font-normal text-[#C9A46E]">down to the micron.</span>
              </>
            }
            subtitle="Curing defects don't just look bad—they fail salt spray tests and burn customer trust. Slide between a rejected surface and a dialed-in finish to understand the physics."
          />

          <Reveal direction="up" delay={0.2}>
            <FinishInspector />
          </Reveal>
        </div>
      </section>

      {/* 4. GUIDED LINE TRIAGE QUIZ */}
      <section className="py-16 sm:py-20 bg-[#423E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <TroubleshootingQuiz />
          </Reveal>
        </div>
      </section>

      {/* 5. HOW I WORK (3 Calm, Clear Steps) */}
      <section className="py-20 sm:py-28 bg-[#2E2B26] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="03"
            tag="PROCESS"
            title={
              <>
                How we solve it, <span className="italic font-normal text-[#C9A46E]">step by step.</span>
              </>
            }
            subtitle="No lengthy agency presentations or theoretical fluff. We find the physical cause, lock in the fix, and make sure your team understands it."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <Reveal direction="up" delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#423E37]/50 border border-white/10 h-full flex flex-col justify-between hover:border-[#B8905A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-light text-[#B8905A]">
                      01
                    </span>
                    <span className="tech-tag text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      STEP 1
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">
                    You describe what you’re seeing
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    We start with a direct call or text. Send photos, line specs, and defect samples. Terry reviews your substrate, wash stages, and cure cycle to narrow down the culprits.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B8905A] font-mono">
                  Zero sales pressure · Fast triage
                </div>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal direction="up" delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#423E37]/50 border border-white/10 h-full flex flex-col justify-between hover:border-[#B8905A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-light text-[#B8905A]">
                      02
                    </span>
                    <span className="tech-tag text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      STEP 2
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">
                    We find the root cause
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Terry comes to your line with measurement tools: Megohmmeter for grounding, titration kits for chemistry, mil gauges, and cure thermal trackers. We test live until we have facts, not guesses.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B8905A] font-mono">
                  Live physical testing on your line
                </div>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal direction="up" delay={0.3}>
              <div className="p-8 rounded-2xl bg-[#423E37]/50 border border-white/10 h-full flex flex-col justify-between hover:border-[#B8905A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-light text-[#B8905A]">
                      03
                    </span>
                    <span className="tech-tag text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      STEP 3
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">
                    We fix it and train your team
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    We tune parameters directly on production parts and teach your operators why the change works. You get clear parameter cards so the defect doesn’t return next shift.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B8905A] font-mono">
                  Permanent fixes & operator SOPs
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. THREE SERVICES (Asymmetric Image-Led Grid) */}
      <section className="py-20 sm:py-28 bg-[#423E37] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="04"
            tag="CORE SERVICES"
            title={
              <>
                Three ways we can <span className="italic font-normal text-[#C9A46E]">work together.</span>
              </>
            }
            subtitle="From emergency line troubleshooting to multi-shift operator coaching and plant-wide waste audits."
          />

          <div className="space-y-12">
            {SERVICES_DATA.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <Reveal key={service.id} delay={idx * 0.15} direction="up">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl p-6 sm:p-8 bg-[#454543]/40 border border-white/10 hover:border-[#B8905A]/30 transition-all ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border border-white/10">
                        <img
                          src={service.heroImage}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26]/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 font-mono text-xs text-[#B8905A] bg-[#2E2B26]/90 px-3 py-1 rounded backdrop-blur-sm">
                          SERVICE {service.number}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <span className="tech-tag text-[#B8905A] block mb-2">
                        SPECIALIZED ENGAGEMENT
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.whatToExpect.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75">
                            <CheckCircle2 className="w-4 h-4 text-[#B8905A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                        <MagneticButton to={`/services/${service.slug}`} variant="primary" size="sm">
                          Explore Service Details
                        </MagneticButton>
                        <span className="text-xs text-white/50 font-mono">
                          {service.formatOptions.split('.')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CASE NOTE TEASER (The Aerospace Cleaning Challenge) */}
      {aerospaceCase && (
        <section className="py-20 sm:py-24 bg-[#2E2B26] border-t border-white/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <Reveal direction="up">
                  <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FEATURED CASE NOTE · AEROSPACE</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-white leading-tight mb-4">
                    {aerospaceCase.title}
                  </h2>
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                    {aerospaceCase.situation}
                  </p>

                  <div className="p-4 rounded-xl bg-[#423E37]/60 border border-white/10 mb-6">
                    <span className="text-xs font-mono uppercase text-[#B8905A] block mb-1 font-semibold">
                      The Key Finding
                    </span>
                    <p className="text-xs sm:text-sm text-white/90">
                      {aerospaceCase.whatWeFound[0]}
                    </p>
                  </div>

                  <MagneticButton to="/case-notes" variant="secondary" size="md">
                    Read Full Case Note & Takeaway
                  </MagneticButton>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <Reveal direction="left" delay={0.2}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                    <img
                      src={aerospaceCase.image}
                      alt={aerospaceCase.title}
                      className="w-full h-80 sm:h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26] via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#2E2B26]/85 backdrop-blur-md border border-[#B8905A]/30 text-xs">
                      <span className="text-[#B8905A] font-semibold block mb-0.5">
                        Outcome:
                      </span>
                      <p className="text-white/90">
                        {aerospaceCase.keyTakeaway}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. 12 YEARS OF EXPERIENCE BAND (Calm, dignified statement) */}
      <section className="py-20 sm:py-24 bg-[#423E37] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#B8905A]/15 border border-[#B8905A]/30 text-[#B8905A] mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-3xl mx-auto">
              12 years of hands-on experience on live powder lines. <span className="italic font-normal text-[#C9A46E]">No sales pitch, just honest answers.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              I don’t sell powder, guns, or conveyor systems. My only goal is getting your line running consistently, cleanly, and profitably.
            </p>

            <div className="mt-8 flex justify-center">
              <MagneticButton to="/about" variant="secondary" size="md">
                Learn more about Terry’s background
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. REUSABLE CONVERSION CTA BAND */}
      <CTABand />
    </div>
  );
};
