import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/common/Reveal';
import { CTABand } from '../components/common/CTABand';
import { CASE_NOTES_DATA } from '../data/caseNotesData';

export const CaseNotesPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const realCaseNotes = CASE_NOTES_DATA.filter((c) => !c.isPlaceholder);
  const placeholderCaseNotes = CASE_NOTES_DATA.filter((c) => c.isPlaceholder);

  const displayedNotes = selectedTag === 'all'
    ? realCaseNotes
    : realCaseNotes.filter((c) => c.tag.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="03 / FIELD CASE NOTES"
            tag="REAL PROBLEMS · PHYSICAL EVIDENCE"
            title={
              <>
                Anonymized Case Notes <span className="italic font-normal text-[#C9A46E]">from the line.</span>
              </>
            }
            subtitle="To respect non-disclosure agreements and client proprietary part designs, all plant names and part part-numbers are anonymized. The physics, chemistry, and line outcomes are 100% real."
          />

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <button
              onClick={() => setSelectedTag('all')}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                selectedTag === 'all'
                  ? 'bg-[#B8905A] text-white border-[#B8905A]'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
              }`}
            >
              All Case Notes
            </button>
            <button
              onClick={() => setSelectedTag('aerospace')}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                selectedTag === 'aerospace'
                  ? 'bg-[#B8905A] text-white border-[#B8905A]'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
              }`}
            >
              Aerospace & Machining
            </button>
            <button
              onClick={() => setSelectedTag('architectural')}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                selectedTag === 'architectural'
                  ? 'bg-[#B8905A] text-white border-[#B8905A]'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
              }`}
            >
              Architectural Job Shop
            </button>
            <button
              onClick={() => setSelectedTag('equipment')}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                selectedTag === 'equipment'
                  ? 'bg-[#B8905A] text-white border-[#B8905A]'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
              }`}
            >
              OEM Equipment
            </button>
          </div>
        </div>
      </section>

      {/* Main Case Notes Feed */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {displayedNotes.map((caseNote, idx) => (
            <Reveal key={caseNote.id} delay={idx * 0.1} direction="up">
              <article className="rounded-2xl bg-[#454543]/40 border border-white/10 overflow-hidden p-6 sm:p-10 hover:border-[#B8905A]/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="tech-tag text-[#B8905A] px-2.5 py-1 rounded bg-[#B8905A]/15 border border-[#B8905A]/30">
                      {caseNote.tag}
                    </span>
                    <span className="text-xs text-white/60 font-mono">
                      {caseNote.clientType} · {caseNote.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8905A]" />
                    <span>Client Anonymized (NDA Compliant)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  {/* Left Column: Story Structure */}
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="font-display text-2xl sm:text-3xl text-white leading-tight">
                      {caseNote.title}
                    </h2>

                    <div>
                      <span className="text-xs font-mono uppercase text-[#D9A56B] block mb-1 font-semibold">
                        The Situation:
                      </span>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        {caseNote.situation}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase text-[#B8905A] block mb-2 font-semibold">
                        What We Found (Root Cause Diagnosis):
                      </span>
                      <ul className="space-y-2">
                        {caseNote.whatWeFound.map((item, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                            <span className="text-[#B8905A] font-bold">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase text-white/70 block mb-2 font-semibold">
                        What Changed (On-Site Solution):
                      </span>
                      <ul className="space-y-2">
                        {caseNote.whatChanged.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                            <CheckCircle2 className="w-4 h-4 text-[#B8905A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Image and Key Takeaway Callout */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg mb-6">
                      <img
                        src={caseNote.image}
                        alt={caseNote.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26]/80 via-transparent to-transparent" />
                    </div>

                    <div className="p-5 rounded-xl bg-[#2E2B26] border border-[#B8905A]/40 text-left">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#B8905A] uppercase mb-1 font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Key Measurable Outcome</span>
                      </div>
                      <p className="text-sm font-medium text-white leading-relaxed">
                        {caseNote.keyTakeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clearly Marked Template Placeholder for Terry to complete */}
      <section className="py-12 bg-[#2E2B26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-dashed border-[#B8905A]/40 rounded-2xl p-6 sm:p-8 bg-[#423E37]/30">
            <div className="flex items-center gap-2 tech-tag text-[#B8905A] mb-2">
              <FileText className="w-4 h-4" />
              <span>EDITABLE CASE NOTE TEMPLATE (FOR TERRY)</span>
            </div>
            <p className="text-xs text-white/60 mb-4 font-mono">
              Note for Terry: You can edit or add new case notes in <code className="text-[#B8905A]">src/data/caseNotesData.ts</code> at any time without changing layout code.
            </p>

            <div className="space-y-3 opacity-60 pointer-events-none text-xs sm:text-sm">
              <div className="font-display text-lg text-white">
                {placeholderCaseNotes[0]?.title}
              </div>
              <p className="text-white/70 italic">
                {placeholderCaseNotes[0]?.situation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTABand */}
      <CTABand />
    </div>
  );
};
