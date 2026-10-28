import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Sparkles, Filter } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/common/Reveal';
import { CTABand } from '../components/common/CTABand';
import { TroubleshootingQuiz } from '../components/interactive/TroubleshootingQuiz';
import { PROBLEMS_DATA } from '../data/problemsData';

export const ProblemsHubPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filterTags = [
    { id: 'all', label: 'All Problems' },
    { id: 'grounding', label: 'Grounding & Wrap' },
    { id: 'cleaning-pretreatment', label: 'Cleaning & Adhesion' },
    { id: 'powder-consumption', label: 'Powder Waste & Mil Build' },
    { id: 'unusual-aerospace', label: 'Aerospace & Castings' },
  ];

  const filteredProblems = selectedTag === 'all'
    ? PROBLEMS_DATA
    : PROBLEMS_DATA.filter((p) => p.slug === selectedTag);

  return (
    <div className="pt-28 pb-16 bg-[#423E37]">
      {/* Hub Hero Header */}
      <section className="py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="01 / DIAGNOSTIC HUB"
            tag="SURFACE & LINE PROBLEMS"
            title={
              <>
                Problems I Solve <span className="italic font-normal text-[#C9A46E]">on live coating lines.</span>
              </>
            }
            subtitle="Coating defects are physical symptoms of underlying electrical, chemical, or operational imbalances. Explore each defect class to understand the root cause and practical fix."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {filterTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedTag === tag.id
                    ? 'bg-[#B8905A] text-white border-[#B8905A]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProblems.map((problem, idx) => (
              <Reveal key={problem.id} delay={idx * 0.1} direction="up">
                <div className="rounded-2xl overflow-hidden bg-[#454543]/40 border border-white/10 hover:border-[#B8905A]/40 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Hero Image Header */}
                    <div className="relative h-60 sm:h-72 overflow-hidden">
                      <img
                        src={problem.heroImage}
                        alt={problem.altText}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B26] via-[#2E2B26]/40 to-transparent" />
                      
                      <div className="absolute top-4 left-4 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#2E2B26]/80 text-[#B8905A] border border-white/10">
                        PROBLEM {problem.number}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="tech-tag text-[#B8905A] block mb-1">
                          ROOT CAUSE CATEGORY
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl text-white">
                          {problem.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6">
                      <p className="text-white/85 text-sm leading-relaxed mb-6 font-medium">
                        “{problem.headline}”
                      </p>

                      <div className="space-y-3 mb-6">
                        <span className="text-xs font-mono uppercase text-[#D9A56B] flex items-center gap-1.5 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Common Symptoms</span>
                        </span>
                        <ul className="space-y-1.5 text-xs text-white/75">
                          {problem.symptoms.slice(0, 3).map((sym, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#B8905A] font-bold">›</span>
                              <span>{sym}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="p-6 pt-0 border-t border-white/10 mt-auto">
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-xs text-white/50 font-mono">
                        {problem.causes.length} Technical Causes Detailed
                      </span>
                      <Link
                        to={`/problems/${problem.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8905A] hover:text-[#C9A46E] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Deep Dive Diagnosis</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Triage Self-Test */}
      <section className="py-12 bg-[#2E2B26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 tech-tag text-[#B8905A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNSURE WHICH CATEGORY YOUR DEFECT FALLS UNDER?</span>
          </div>
          <TroubleshootingQuiz />
        </div>
      </section>

      {/* Reusable CTABand */}
      <CTABand />
    </div>
  );
};
