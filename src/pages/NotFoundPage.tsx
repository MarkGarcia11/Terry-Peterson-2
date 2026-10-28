import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center bg-[#2E2B26] text-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="font-mono text-sm px-3 py-1 rounded bg-[#B8905A]/20 text-[#B8905A] border border-[#B8905A]/30">
          404 · PAGE NOT FOUND
        </span>

        <h1 className="font-display text-4xl sm:text-5xl text-white mt-6 mb-4">
          This part seems to be off-rack.
        </h1>

        <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for doesn’t exist or has moved. If you have an active problem on your powder coating line, let’s get you back to the right place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <MagneticButton to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Homepage
          </MagneticButton>

          <MagneticButton to="/problems" variant="secondary" size="md" icon={<Search className="w-4 h-4" />}>
            Explore Problem Hub
          </MagneticButton>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50">
          Need immediate triage? Call or text Terry directly at{' '}
          <a href="tel:8155457709" className="text-[#B8905A] hover:underline font-mono">
            (815) 545-7709
          </a>
        </div>
      </div>
    </div>
  );
};
