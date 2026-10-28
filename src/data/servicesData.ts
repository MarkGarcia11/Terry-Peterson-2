import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'troubleshooting',
    slug: 'troubleshooting',
    number: '01',
    title: 'Coating Troubleshooting & Defect Diagnostics',
    tagline: 'When parts are coming out of the oven wrong, I come in, find the root cause, and help you fix it.',
    summary: 'Direct, hands-on diagnostics for active defects on your coating line. Whether you are dealing with orange peel, pinholes, adhesion loss, poor wrap, or color drift, Terry diagnoses the physical root cause across grounding, pretreatment, booth airflow, and oven profiles.',
    heroImage: '/images/hero-powder-coating.jpg',
    whoItsFor: [
      'Job shop and OEM owners facing costly customer rejects or stopped lines.',
      'Quality managers who need an independent, scientific diagnosis of chronic defects.',
      'Operations running new powder formulations, difficult alloys, or complex part shapes.',
      'Facilities needing rapid triage before a critical customer inspection or audit.',
    ],
    whatToExpect: [
      'Direct contact with Terry from the first phone call—no account reps or junior technicians.',
      'Comprehensive on-site line walkthrough from raw metal staging to final packaging.',
      'Immediate physical testing: grounding continuity, chemical wash titrations, mil thickness mapping, and cure verification.',
      'Clear, practical adjustments made directly on the line during the visit.',
      'A concise written report documenting findings, parameters, and long-term prevention protocols.',
    ],
    howItWorks: [
      {
        stepNumber: '01',
        stepTitle: 'Initial Problem Review (Call or Video)',
        stepDetails: 'You describe what you are seeing, send photos or defect samples, and we discuss line specs (gun type, wash stages, oven setup) to narrow down potential causes.',
      },
      {
        stepNumber: '02',
        stepTitle: 'On-Site Diagnostic Audit',
        stepDetails: 'Terry visits your facility. We measure resistance on hooks, test wash bath chemistry, evaluate booth airflow and gun parameters, and inspect cured parts under magnification.',
      },
      {
        stepNumber: '03',
        stepTitle: 'Live Adjustments & Parameter Lock-In',
        stepDetails: 'We test changes live on production parts until the finish is dialed in. Your operators see exactly what changed and why.',
      },
      {
        stepNumber: '04',
        stepTitle: 'Documentation & Follow-Up',
        stepDetails: 'You receive a clear parameter sheet and action items, followed by a check-in call to ensure the fix remains permanent over multiple shifts.',
      },
    ],
    deliverables: [
      'Root-cause diagnostic summary and photo evidence.',
      'Optimal gun setting card (kV, µA, atomizing air, conveying air) per part family.',
      'Pretreatment wash and rinse operating windows (temperature, concentration, TDS limits).',
      'Hook and ground maintenance checklist.',
    ],
    formatOptions: 'On-site in Illinois / Midwest and nationwide travel. Same-day / next-day phone triage for urgent line-down situations.',
    faqs: [
      {
        question: 'How quickly can Terry visit our shop?',
        answer: 'For plants in Illinois and the greater Midwest, on-site visits can often be scheduled within 2 to 4 days (or next day for urgent line shutdowns). Nationwide visits are scheduled around plant production windows.',
      },
      {
        question: 'Can you help us diagnose a problem through photos and video first?',
        answer: 'Yes. A 20-minute phone or video conversation with clear photos often lets us rule out 80% of common causes (like bad grounding or flash rust) before planning on-site work.',
      },
      {
        question: 'Are you affiliated with any powder or equipment manufacturer?',
        answer: 'No. Terry is 100% independent. Advice is based solely on what is best for your line, with zero incentive to push a specific powder brand or expensive equipment upgrades.',
      },
    ],
  },
  {
    id: 'training',
    slug: 'training',
    number: '02',
    title: 'Operator & Supervisor Team Training',
    tagline: 'Give your team the technical knowledge and muscle memory to spray consistently every shift.',
    summary: 'Practical, booth-side instruction tailored to your specific parts, guns, and conveyor line. We turn operators from "paint sprayers" into confident coating specialists who understand gun mechanics, film control, Faraday penetration, and daily line maintenance.',
    heroImage: '/images/team-training.jpg',
    whoItsFor: [
      'Shops with high operator turnover needing structured, repeatable onboarding.',
      'Lines transitioning from liquid paint to powder coating.',
      'Teams struggling with uneven mil thickness, gun spitting, or inconsistent pass quality between shifts.',
      'Lead operators and supervisors who want to troubleshoot minor defects without halting the line.',
    ],
    whatToExpect: [
      'Hands-on coaching inside your booth with your actual guns and production parts.',
      'Plain-language explanations of electrostatic principles (no confusing academic jargon).',
      'Ergonomic spray stroke training that reduces operator fatigue and film overbuild.',
      'Daily checklist routines for gun teardown, venturi inspection, and grounding checks.',
      'Empowered operators who take pride in consistent, reject-free finishes.',
    ],
    howItWorks: [
      {
        stepNumber: '01',
        stepTitle: 'Pre-Training Assessment',
        stepDetails: 'We review current reject logs, part mix, operator experience levels, and equipment types to customize the curriculum.',
      },
      {
        stepNumber: '02',
        stepTitle: 'Classroom & Fundamentals (45–60 min)',
        stepDetails: 'A high-impact, visual breakdown of powder physics: electrostatics, grounding, Faraday cage effect, mil targets, and cure chemistry.',
      },
      {
        stepNumber: '03',
        stepTitle: 'Booth-Side Hands-On Drills',
        stepDetails: 'Terry works one-on-one with each operator at the booth, tuning gun distance, trigger rhythm, stroke overlap, and corner penetration.',
      },
      {
        stepNumber: '04',
        stepTitle: 'Maintenance & Quality Verification Routines',
        stepDetails: 'Training on wet/dry mil gauge usage, cross-hatch testing, fluidizing hopper cleaning, and pump venturi inspection.',
      },
    ],
    deliverables: [
      'Laminated booth-side standard operating procedures (SOPs).',
      'Operator quick-reference defect troubleshooting chart.',
      'Daily & weekly preventative maintenance checklist.',
      'Training completion verification for plant quality records.',
    ],
    formatOptions: 'Available on-site at your facility for 1-day or multi-day intensive sessions, with shift-flexible scheduling to cover 1st, 2nd, and 3rd shifts.',
    faqs: [
      {
        question: 'Can you train operators across multiple shifts (night / second shift)?',
        answer: 'Yes. Training can be structured to span shift handovers so that both day and night operators receive identical instruction and standard operating procedures.',
      },
      {
        question: 'Do you provide training materials our supervisors can keep?',
        answer: 'Yes. Every session includes laminated booth-side parameter cards, defect quick-guides, and daily maintenance checklists custom-made for your equipment.',
      },
      {
        question: 'Is this training suitable for operators who speak English as a second language?',
        answer: 'Absolutely. Powder coating is highly visual and tactile. We emphasize hands-on muscle memory, visual demonstrations, and clear photo-based guides rather than dense text.',
      },
    ],
  },
  {
    id: 'efficiency',
    slug: 'efficiency',
    number: '03',
    title: 'Efficiency, Waste Reduction & Process Improvement',
    tagline: 'Cut powder waste, eliminate line bottlenecks, and lower your true cost per coated part.',
    summary: 'A holistic line evaluation designed to maximize throughput and profitability. We analyze line density, conveyor speed, powder reclaim ratios, wash chemical consumption, and cure oven thermal efficiency to reduce raw material waste and increase plant capacity.',
    heroImage: '/images/cure-oven.jpg',
    whoItsFor: [
      'Plant managers looking to reduce raw material costs and powder scrap.',
      'High-volume operations with tight profit margins per part.',
      'Shops experiencing conveyor line bottlenecks or erratic cure cycles.',
      'Operations preparing for capacity expansion without investing in a new building.',
    ],
    whatToExpect: [
      'Comprehensive material balance audit (purchased powder vs cured mil build vs scrap).',
      'Conveyor rack density optimization (hanging parts for maximum parts-per-hour without shadowing).',
      'Fluidized hopper and reclaim sieve recovery tuning.',
      'Oven thermal profiling to reduce energy waste while guaranteeing full cure kinetics.',
      'Concrete ROI analysis showing payback within weeks or months.',
    ],
    howItWorks: [
      {
        stepNumber: '01',
        stepTitle: 'Line Data & Material Flow Audit',
        stepDetails: 'We analyze your powder purchasing records, scrap rates, rack hanging configurations, and line speeds.',
      },
      {
        stepNumber: '02',
        stepTitle: 'Process Bottleneck & Waste Mapping',
        stepDetails: 'We identify where time and dollars leak: over-spraying, loose rack spacing, long wash transfer times, or over-baking in the cure oven.',
      },
      {
        stepNumber: '03',
        stepTitle: 'Targeted Engineering Interventions',
        stepDetails: 'We re-engineer rack hanging patterns for higher part density, calibrate reclaim blend ratios, and optimize conveyor travel speed.',
      },
      {
        stepNumber: '04',
        stepTitle: 'Verification & Cost-Savings Validation',
        stepDetails: 'We measure film thickness consistency and track powder consumption over multiple runs to verify tangible dollar savings.',
      },
    ],
    deliverables: [
      'Material efficiency roadmap with quantified savings projections.',
      'Optimized rack racking schematics for high-runner parts.',
      'Virgin/reclaim blend SOP and hopper maintenance schedule.',
      'Thermal profile curve documentation for cure oven energy efficiency.',
    ],
    formatOptions: 'Comprehensive 2 to 3-day on-site process audit with 30/60/90-day progress check-ins.',
    faqs: [
      {
        question: 'What is the typical return on investment (ROI) for an efficiency audit?',
        answer: 'Most shops recover the cost of the consulting engagement within 30 to 90 days solely through reduced powder consumption, lower scrap rates, and higher conveyor rack density.',
      },
      {
        question: 'Can you help us increase conveyor speed without sacrificing cure or quality?',
        answer: 'Often, yes. By profiling part thermal mass and adjusting oven zone temperatures or wash stage impingement, we frequently increase line speed by 15% to 25% while maintaining full cure compliance.',
      },
      {
        question: 'How do you handle custom or low-volume job shops with hundreds of different part numbers?',
        answer: 'We group parts into standardized "part families" by thermal mass and geometry, creating 3 to 4 universal gun presets and hanging recipes that eliminate constant line re-tuning.',
      },
    ],
  },
];
