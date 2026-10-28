import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, BookOpen, Lightbulb } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/common/Reveal';
import { CTABand } from '../components/common/CTABand';
import { FAQ_DATA } from '../data/faqData';

export const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'grounding', label: 'Grounding & Electrostatics' },
    { id: 'pretreatment', label: 'Cleaning & Wash Stages' },
    { id: 'application', label: 'Application & Mil Build' },
    { id: 'curing', label: 'Curing & Thermal Profiles' },
    { id: 'working-together', label: 'Working with Terry' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.quickCheckTip &&
          item.quickCheckTip.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const glossaryTerms = [
    {
      term: 'Back-Ionization',
      definition: 'A surface defect where trapped electrostatic charge in cured/uncured powder sparks out through the film, leaving starry micro-craters and rough texture.',
    },
    {
      term: 'Faraday Cage Effect',
      definition: 'The physical tendency of charged powder particles to attract to the outer edges of a grounded metal part, repelling powder from deep 90° inner corners.',
    },
    {
      term: 'Peak Metal Temperature (PMT)',
      definition: 'The actual temperature reached by the substrate metal itself inside the cure oven (not just the surrounding oven air temperature).',
    },
    {
      term: 'Water-Break-Free Test',
      definition: 'A fast 10-second surface cleanliness test where clean water is misted on bare metal. If water sheets smoothly without beading, the part is free of oils.',
    },
    {
      term: 'Dry Film Thickness (DFT / Mils)',
      definition: 'The cured coating thickness measured in mils (1 mil = 0.001 inch or 25.4 microns). Target standard is typically 2.5 to 3.5 mils.',
    },
    {
      term: 'Impact Fusion',
      definition: 'Friction-heat buildup inside pump venturis and hoses causing powder particles to melt into clumps and spit onto parts.',
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* 1. HERO HEADER */}
      <section className="py-12 sm:py-16 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="04 / KNOWLEDGE BASE"
            tag="PRACTICAL SHOP ANSWERS"
            title={
              <>
                Powder Coating <span className="italic font-normal text-[#C9A46E]">Troubleshooting FAQ.</span>
              </>
            }
            subtitle="Clear answers to real-world coating line questions, based on 12 years of hands-on diagnostics."
          />

          {/* Search and Filters */}
          <div className="mt-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by defect (e.g. wrap, orange peel, fisheye, grounding)..."
                className="w-full bg-[#423E37]/80 border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#B8905A] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#B8905A] text-white border-[#B8905A]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ ACCORDION LIST */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-xl bg-[#454543]/30 border border-white/10">
              <p className="text-white/70 text-sm">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs text-[#B8905A] hover:underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <Reveal key={faq.id} delay={idx * 0.05} direction="up">
                    <div className="rounded-xl border border-white/10 bg-[#454543]/40 overflow-hidden transition-all hover:border-[#B8905A]/40">
                      <button
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 font-medium text-white hover:text-[#B8905A] transition-colors"
                      >
                        <div>
                          <span className="tech-tag text-xs text-[#B8905A] block mb-1">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-base sm:text-lg font-medium leading-snug">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-[#B8905A] shrink-0 mt-1 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-5 sm:p-6 pt-0 text-white/80 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-fadeIn">
                          <p className="mb-4">{faq.answer}</p>

                          {faq.quickCheckTip && (
                            <div className="p-3.5 rounded-lg bg-[#2E2B26] border border-[#B8905A]/30 flex items-start gap-2.5 text-xs text-white/90">
                              <Lightbulb className="w-4 h-4 text-[#D9A56B] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-mono text-[#D9A56B] uppercase font-semibold block mb-0.5">
                                  Quick Line Check:
                                </span>
                                <span>{faq.quickCheckTip}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. POWDER COATING GLOSSARY SECTION */}
      <section className="py-16 sm:py-20 bg-[#2E2B26] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 tech-tag text-[#B8905A] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>REFERENCE GLOSSARY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
            Key Powder Coating Terms in Plain English
          </h2>
          <p className="text-white/70 text-sm mb-10 max-w-2xl">
            A quick reference guide to technical terminology frequently heard around powder booths and quality labs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#423E37]/50 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">
                    {item.term}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTABand */}
      <CTABand />
    </div>
  );
};
