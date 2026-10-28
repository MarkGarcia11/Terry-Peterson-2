import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          number="LEGAL"
          tag="TERMS OF ENGAGEMENT"
          title="Terms of Consulting"
          subtitle="Clear, fair terms governing diagnostic visits, training sessions, and technical recommendations."
        />

        <div className="space-y-8 text-sm text-white/80 leading-relaxed bg-[#2E2B26] p-8 sm:p-10 rounded-2xl border border-white/10">
          <section className="space-y-3">
            <h3 className="font-display text-xl text-white">
              1. Independent Consulting Scope
            </h3>
            <p>
              Terry Petterson provides technical advisory, line auditing, operator training, and process optimization for industrial powder-coating systems. Recommendations are provided based on physical inspection, empirical measurement, and 12 years of hands-on industry expertise.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-display text-xl text-white">
              2. Plant Safety & Operational Control
            </h3>
            <p>
              Client maintains full operational control and ultimate responsibility for plant safety, OSHA compliance, hazardous material handling, and equipment maintenance. Terry Petterson acts in an advisory capacity during booth-side walkthroughs and calibrations.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-display text-xl text-white">
              3. Independent Representation
            </h3>
            <p>
              Terry Petterson is an independent consultant and is not an agent, distributor, or employee of any powder manufacturer or equipment vendor. Technical suggestions are made solely for the client’s operational benefit.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-display text-xl text-white">
              4. Engagement Quotes & Invoicing
            </h3>
            <p>
              All consulting engagements, travel fees, and deliverables are agreed upon in writing prior to work commencing. Invoices are payable in accordance with the terms specified in individual engagement proposals.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
