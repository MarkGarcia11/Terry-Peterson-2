import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      <Reveal direction="up" delay={0.1}>
        {(number || tag) && (
          <div
            className={`inline-flex items-center gap-3 mb-4 tech-tag ${
              isLight ? 'text-[#B8905A]' : 'text-[#B8905A]'
            }`}
          >
            {number && (
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#B8905A]/15 border border-[#B8905A]/30">
                {number}
              </span>
            )}
            {tag && <span className="tracking-widest uppercase text-xs">{tag}</span>}
          </div>
        )}
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.12] ${
            isLight ? 'text-[#423E37]' : 'text-white'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.3}>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-[#575654]' : 'text-white/75'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};
