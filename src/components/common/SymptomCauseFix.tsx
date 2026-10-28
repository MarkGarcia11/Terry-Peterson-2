import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

interface SymptomCauseFixItem {
  symptom: string;
  cause: string;
  fix: string;
}

interface SymptomCauseFixProps {
  items: SymptomCauseFixItem[];
  theme?: 'dark' | 'light';
  title?: string;
  subtitle?: string;
  className?: string;
}

export const SymptomCauseFix: React.FC<SymptomCauseFixProps> = ({
  items,
  theme = 'dark',
  title = 'Symptom · Cause · Fix Breakdown',
  subtitle = 'How a surface defect traces back to an electrical, chemical, or operational root cause.',
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`my-12 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8905A]" />
            <span>DIAGNOSTIC MATRIX</span>
          </div>
          {title && (
            <h3
              className={`font-display text-2xl sm:text-3xl ${
                isLight ? 'text-[#423E37]' : 'text-white'
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              className={`mt-1 text-sm sm:text-base ${
                isLight ? 'text-[#575654]' : 'text-white/70'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.12} direction="up">
            <div
              className={`rounded-xl border p-5 sm:p-6 transition-all duration-300 ${
                isLight
                  ? 'bg-white border-[#D9D3C9] hover:border-[#B8905A]/50 shadow-sm'
                  : 'bg-[#454543]/40 border-white/10 hover:border-[#B8905A]/40 backdrop-blur-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                {/* Symptom */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#D9A56B]" />
                    <span className="tech-tag text-[#D9A56B]">SYMPTOM</span>
                  </div>
                  <p
                    className={`font-medium text-sm sm:text-base leading-snug ${
                      isLight ? 'text-[#423E37]' : 'text-white'
                    }`}
                  >
                    {item.symptom}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center text-white/30">
                  <ArrowRight className="w-4 h-4 text-[#B8905A]" />
                </div>

                {/* Cause */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#B8905A]" />
                    <span className="tech-tag text-[#B8905A]">ROOT CAUSE</span>
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isLight ? 'text-[#575654]' : 'text-white/75'
                    }`}
                  >
                    {item.cause}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center text-white/30">
                  <ArrowRight className="w-4 h-4 text-[#B8905A]" />
                </div>

                {/* Fix */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8905A]" />
                    <span className="tech-tag text-[#B8905A]">PRACTICAL FIX</span>
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-medium ${
                      isLight ? 'text-[#2E2B26]' : 'text-white'
                    }`}
                  >
                    {item.fix}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
