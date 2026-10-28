import React, { useState } from 'react';
import { ArrowRight, RotateCcw, PhoneCall, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    sublabel: string;
    category: 'grounding' | 'cleaning' | 'powder-waste' | 'unusual';
    targetSlug: string;
  }[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Where on the part or line is the issue most noticeable?',
    subtitle: 'Select the primary location or visual symptom you are encountering.',
    options: [
      {
        label: 'Backside wrap, corners, or starry pinpricks on flats',
        sublabel: 'Powder repels from recessed pockets or sparks back out',
        category: 'grounding',
        targetSlug: '/problems/grounding',
      },
      {
        label: 'Fisheye craters, peeling paint, or cross-hatch tape failure',
        sublabel: 'Coating lifts off substrate or shows circular oil craters',
        category: 'cleaning',
        targetSlug: '/problems/cleaning-pretreatment',
      },
      {
        label: 'Heavy orange peel, thick mil build, or high powder consumption',
        sublabel: 'Using too many boxes or guns spitting clumps onto parts',
        category: 'powder-waste',
        targetSlug: '/problems/powder-consumption',
      },
      {
        label: 'Outgassing blisters on castings, or aerospace micro-adhesion failure',
        sublabel: 'Difficult alloy, multi-coat peeling, or gas checking in oven',
        category: 'unusual',
        targetSlug: '/problems/unusual-aerospace',
      },
    ],
  },
];

export const TroubleshootingQuiz: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = QUESTIONS[0];

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
  };

  const activeResult = selectedOption !== null ? question.options[selectedOption] : null;

  return (
    <div className="bg-[#423E37]/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INSTANT LINE TRIAGE</span>
        </div>
        {selectedOption !== null && (
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white font-mono transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
        {selectedOption === null ? question.question : 'Diagnosed Root-Cause Track'}
      </h3>
      <p className="text-white/70 text-sm mb-6">
        {selectedOption === null
          ? question.subtitle
          : 'Based on your selection, here is where Terry recommends starting your investigation:'}
      </p>

      {selectedOption === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className="text-left p-4 sm:p-5 rounded-xl border border-white/10 bg-[#454543]/40 hover:bg-[#454543]/80 hover:border-[#B8905A]/50 transition-all duration-300 group flex items-start justify-between gap-3"
            >
              <div>
                <p className="font-medium text-white group-hover:text-[#B8905A] transition-colors text-sm sm:text-base">
                  {option.label}
                </p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  {option.sublabel}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#B8905A] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </button>
          ))}
        </div>
      ) : (
        activeResult && (
          <div className="p-6 rounded-xl bg-[#2E2B26] border border-[#B8905A]/40 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="tech-tag text-[#B8905A] block mb-1">
                  RECOMMENDED DIAGNOSTIC CATEGORY
                </span>
                <h4 className="font-display text-2xl text-white">
                  {activeResult.label}
                </h4>
                <p className="text-sm text-white/75 mt-2 max-w-xl">
                  {activeResult.sublabel}. We have documented the exact causes, electrostatic/chemical tests, and fixes for this specific failure mode.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <MagneticButton to={activeResult.targetSlug} variant="primary" size="sm">
                  View Root Cause & Fix
                </MagneticButton>
                <MagneticButton
                  href="tel:8155457709"
                  variant="secondary"
                  size="sm"
                  icon={<PhoneCall className="w-3.5 h-3.5" />}
                  showArrow={false}
                >
                  Call (815) 545-7709
                </MagneticButton>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
