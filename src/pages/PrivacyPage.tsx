import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          number="LEGAL"
          tag="CLIENT PRIVACY & CONFIDENTIALITY"
          title="Privacy Policy"
          subtitle="Last updated: January 2026. Terry Petterson Coatings Consultant respects your proprietary manufacturing data, blueprints, and line specifications."
        />

        <div className="space-y-8 text-sm text-white/80 leading-relaxed bg-[#2E2B26] p-8 sm:p-10 rounded-2xl border border-white/10">
          <section className="space-y-3">
            <h3 className="font-display text-xl text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#B8905A]" />
              <span>1. Strict Industrial Non-Disclosure</span>
            </h3>
            <p>
              In industrial manufacturing, line parameters, proprietary chemical formulations, and part geometries represent competitive trade secrets. Terry Petterson Coatings Consultant treats all photos, technical drawings, reject reports, and plant operating procedures as strictly confidential under industry-standard NDA protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-display text-xl text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B8905A]" />
              <span>2. Information We Collect</span>
            </h3>
            <p>
              When you submit an inquiry through our contact form, email us, or call us, we collect only the information necessary to evaluate your coating line problem:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-white/70">
              <li>Your name, company name, phone number, and email address.</li>
              <li>Operational details regarding your powder booth, oven, and wash stages.</li>
              <li>Photographs or documents you voluntarily provide for triage.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-display text-xl text-white">
              3. How Your Information Is Used
            </h3>
            <p>
              Your information is solely used by Terry Petterson to respond to your inquiry, perform diagnostic evaluations, and deliver consulting services. We never sell, rent, trade, or distribute your contact details or plant technical data to third-party advertisers or chemical vendors.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-display text-xl text-white">
              4. Contact for Privacy Inquiries
            </h3>
            <p>
              If you have any questions regarding how your technical data is handled or would like us to sign your company’s custom Mutual Non-Disclosure Agreement (MNDA) before sharing drawings, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#423E37]/60 border border-white/10 space-y-1 font-mono text-xs text-white/90">
              <p className="font-semibold text-[#B8905A]">Terry Petterson Coatings Consultant</p>
              <p>21635 Nadia Dr., Shorewood, IL 60404</p>
              <p>Email: tepowder@msn.com</p>
              <p>Phone: (815) 545-7709</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
