import React from 'react';
import { Phone, MessageSquare, Mail, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';

interface CTABandProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CTABand: React.FC<CTABandProps> = ({
  title = 'Tell me what you’re seeing on your line.',
  subtitle = 'Whether parts are peeling, orange peel is out of control, or your line is stopped right now, I will tell you plainly what is going wrong and how to fix it.',
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-20 relative overflow-hidden ${className}`}>
      {/* Subtle ambient brass glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B8905A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#2E2B26] border border-[#D9D3C9]/15 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle top brass line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8905A] to-transparent opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Value Prop */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8905A]" />
                  <span>DIRECT CONSULTANT ACCESS · SHOREWOOD, IL & NATIONWIDE</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  {title}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                  {subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/60">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B8905A]" />
                    <span>No junior handoffs</span>
                  </div>
                  <span className="text-white/20">·</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B8905A]" />
                    <span>100% independent advice</span>
                  </div>
                  <span className="text-white/20">·</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#B8905A]" />
                    <span>Based in Shorewood, IL</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Direct Contact Action Blocks */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <Reveal direction="up" delay={0.1}>
                {/* Primary Button: Detailed Message */}
                <MagneticButton
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full text-center"
                >
                  Send Problem Details & Photos
                </MagneticButton>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {/* Call Direct */}
                  <a
                    href="tel:8155457709"
                    className="p-3.5 rounded-lg bg-[#454543]/60 hover:bg-[#454543] border border-white/10 hover:border-[#B8905A]/40 transition-all flex flex-col items-start gap-1 group"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-[#B8905A] font-mono uppercase">
                      <Phone className="w-3.5 h-3.5 text-[#B8905A]" />
                      <span>Call Direct</span>
                    </div>
                    <span className="text-white font-medium text-sm group-hover:text-[#B8905A] transition-colors">
                      (815) 545-7709
                    </span>
                  </a>

                  {/* Text Message */}
                  <a
                    href="sms:8155457709"
                    className="p-3.5 rounded-lg bg-[#454543]/60 hover:bg-[#454543] border border-white/10 hover:border-[#B8905A]/40 transition-all flex flex-col items-start gap-1 group"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-[#B8905A] font-mono uppercase">
                      <MessageSquare className="w-3.5 h-3.5 text-[#B8905A]" />
                      <span>Text Terry</span>
                    </div>
                    <span className="text-white font-medium text-sm group-hover:text-[#B8905A] transition-colors">
                      Fast SMS Triage
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                {/* Direct Email */}
                <a
                  href="mailto:tepowder@msn.com"
                  className="p-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between text-xs sm:text-sm text-white/80 group"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#B8905A]" />
                    <span>Email: tepowder@msn.com</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </Reveal>

              <p className="text-[11px] text-white/50 text-center mt-1">
                Terry reads every message personally and typically responds within a few hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
