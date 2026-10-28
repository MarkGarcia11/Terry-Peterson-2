import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { SymptomCauseFix } from '../components/common/SymptomCauseFix';
import { MagneticButton } from '../components/common/MagneticButton';
import { CTABand } from '../components/common/CTABand';
import { Reveal } from '../components/common/Reveal';
import { PROBLEMS_DATA } from '../data/problemsData';

export const ProblemDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const problem = PROBLEMS_DATA.find((p) => p.slug === slug);

  if (!problem) {
    return <Navigate to="/problems" replace />;
  }

  // Find next problem for navigation
  const currentIndex = PROBLEMS_DATA.findIndex((p) => p.slug === slug);
  const nextProblem = PROBLEMS_DATA[(currentIndex + 1) % PROBLEMS_DATA.length];

  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* 1. HERO & BREADCRUMBS */}
      <section className="py-12 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/problems" className="hover:text-white transition-colors">Problems I Solve</Link>
            <span>/</span>
            <span className="text-[#B8905A]">{problem.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#B8905A]/20 border border-[#B8905A]/30">
                    PROBLEM {problem.number}
                  </span>
                  <span>ROOT CAUSE INVESTIGATION</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  {problem.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#C9A46E] font-medium leading-relaxed">
                  “{problem.headline}”
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  {problem.summary}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton to="/contact" variant="primary" size="md">
                    Have Terry Diagnose This
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
                    src={problem.heroImage}
                    alt={problem.altText}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#2E2B26]/85 backdrop-blur-md border border-white/10 text-xs text-white/80">
                    <span className="text-[#B8905A] font-semibold block mb-0.5">
                      Inspection Target:
                    </span>
                    {problem.tagline}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT YOU'RE SEEING (Symptoms) */}
      <section className="py-16 sm:py-20 bg-[#423E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="01"
            tag="IDENTIFICATION"
            title={
              <>
                What you’re seeing <span className="italic font-normal text-[#C9A46E]">on your parts.</span>
              </>
            }
            subtitle="These are the exact symptoms operators and quality managers report when this issue is present."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problem.symptoms.map((symptom, idx) => (
              <Reveal key={idx} delay={idx * 0.08} direction="up">
                <div className="p-5 rounded-xl bg-[#454543]/40 border border-white/10 flex items-start gap-3.5 hover:border-[#B8905A]/30 transition-colors">
                  <div className="p-1 rounded-full bg-[#D9A56B]/20 text-[#D9A56B] shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="tech-tag text-xs text-[#D9A56B] block mb-1">
                      SYMPTOM {idx + 1}
                    </span>
                    <p className="text-white text-sm sm:text-base leading-snug">
                      {symptom}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT'S USUALLY BEHIND IT (Causes in Plain Language) */}
      <section className="py-16 sm:py-20 bg-[#38352F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="02"
            tag="SCIENTIFIC ROOT CAUSES"
            title={
              <>
                What’s usually <span className="italic font-normal text-[#C9A46E]">behind it.</span>
              </>
            }
            subtitle="Powder coating issues are rarely random. Here is what is physically happening between your substrate, chemistry, and electrostatic field."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problem.causes.map((cause, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="p-6 rounded-xl bg-[#423E37]/60 border border-white/10 hover:border-[#B8905A]/40 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <HelpCircle className="w-4 h-4 text-[#B8905A]" />
                      <h3 className="font-semibold text-white text-base sm:text-lg">
                        {cause.title}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {cause.description}
                    </p>
                  </div>

                  {cause.technicalNote && (
                    <div className="mt-auto p-3 rounded-lg bg-[#2E2B26] border border-[#B8905A]/25 text-xs text-white/90">
                      <span className="font-mono text-[#B8905A] uppercase text-[10px] block font-semibold mb-0.5">
                        Technical Metric:
                      </span>
                      {cause.technicalNote}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SYMPTOM -> CAUSE -> FIX DESIGN MOTIF */}
      <section className="py-16 sm:py-20 bg-[#423E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SymptomCauseFix
            items={problem.symptomCauseFixStrip}
            title="Fast Action Diagnostic Summary"
            subtitle="The direct connection between line observation and physical resolution."
          />
        </div>
      </section>

      {/* 5. HOW I APPROACH IT ON YOUR LINE */}
      <section className="py-16 sm:py-20 bg-[#2E2B26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="03"
            tag="ON-SITE DIAGNOSTIC METHOD"
            title={
              <>
                How I approach it <span className="italic font-normal text-[#C9A46E]">on your line.</span>
              </>
            }
            subtitle="A systematic, measurement-based audit rather than trial-and-error guessing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problem.approach.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="p-6 rounded-xl bg-[#423E37]/50 border border-white/10 h-full">
                  <span className="font-mono text-2xl font-light text-[#B8905A] block mb-3">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT CHANGES AFTERWARD (Outcomes) */}
      <section className="py-16 sm:py-20 bg-[#423E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#454543]/40 border border-white/10">
            <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
              What changes once this is solved:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problem.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-black/20 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#B8905A] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-snug">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROBLEM-SPECIFIC FAQS */}
      {problem.faqs && problem.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#38352F] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="04"
              tag="FREQUENTLY ASKED QUESTIONS"
              title="Questions about this defect"
              subtitle="Plain answers to practical questions plant supervisors ask."
            />

            <div className="space-y-3">
              {problem.faqs.map((faq, idx) => {
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

      {/* 8. NEXT PROBLEM NAVIGATION STRIP */}
      <section className="py-8 bg-[#2E2B26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/problems"
            className="text-xs font-mono text-white/60 hover:text-white transition-colors"
          >
            ← Back to all problems
          </Link>

          <Link
            to={`/problems/${nextProblem.slug}`}
            className="flex items-center gap-2 text-sm text-[#B8905A] hover:text-[#C9A46E] font-medium"
          >
            <span>Next Problem: {nextProblem.shortTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 9. REUSABLE CTA BAND */}
      <CTABand />
    </div>
  );
};
