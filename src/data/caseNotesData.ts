import { CaseNote } from '../types';

export const CASE_NOTES_DATA: CaseNote[] = [
  {
    id: 'aerospace-cleaning-challenge',
    slug: 'aerospace-cleaning-challenge',
    tag: 'Aerospace & Precision Machining',
    clientType: 'Aerospace Components Tier 1 Supplier',
    location: 'Midwest Facility',
    title: 'Solving a High-Stakes Micro-Adhesion Failure on Precision Machined Aluminum',
    situation: 'A precision machining and finishing facility was experiencing intermittent cross-hatch adhesion failures on complex 6061-T6 aluminum housings. The parts passed standard solvent wipe inspections and appeared bone-dry after ultrasonic washing, but 35% of parts failed ASTM D3359 cross-hatch tape tests after cure. With critical aerospace delivery deadlines looming and customer QA threatening to freeze shipments, the plant needed root-cause resolution without replacing their multimillion-dollar wash tunnel.',
    whatWeFound: [
      'The CNC machining centers had recently transitioned to a new high-lubricity synthetic coolant containing a trace silicone-modified ester lubricant.',
      'While the primary alkaline wash bath removed 98% of bulk oils, the microscopic ester molecules survived standard ultrasonic cavitation and formed a hydrophobic monomolecular film during the 140°F rinse stage.',
      'The rinse tank had accumulated 450 ppm of Total Dissolved Solids (TDS) due to inadequate overflow rates, effectively redepositing surfactants onto the metal.',
      'Dry-off oven temperatures were prematurely baking the trace surfactant into the metal pores before the parts entered the powder booth.',
    ],
    whatChanged: [
      'Reformulated the wash stage chemistry with a specialized non-silicated surfactant package designed specifically for synthetic machining fluids.',
      'Adjusted wash bath operating temperature from 135°F to 152°F and recalibrated nozzle impingement pressure to 28 PSI.',
      'Installed a continuous counter-flow cascading rinse to maintain rinse stage TDS below 65 ppm, backed by a final deionized water halo rinse.',
      'Established a simple 10-second water-break-free inspection protocol at the dry-off exit.',
    ],
    keyTakeaway: 'Adhesion pass rate climbed to 100% across all production runs. Customer QA lifted the hold, and the plant eliminated over $85,000 in monthly rework and delayed shipment penalties.',
    image: '/images/aerospace-part.jpg',
    isPlaceholder: false,
  },
  {
    id: 'grounding-reject-reduction',
    slug: 'grounding-reject-reduction',
    tag: 'Architectural Job Shop',
    clientType: 'High-Volume Architectural Extrusions Shop',
    location: 'Illinois',
    title: 'Eliminating Chronic Back-Ionization & 40% Defect Rates on Long Extrusions',
    situation: 'An architectural coater running 24-foot aluminum and steel extrusions struggled with rough sandpaper textures, starry craters, and poor backside wrap. Operators attempted to compensate by cranking gun voltages up to 100 kV and slowing down the conveyor line, worsening the back-ionization and cutting daily throughput in half.',
    whatWeFound: [
      'Conveyor hooks had accumulated over 18 mils of baked powder over months of operation, acting as non-conductive ceramic isolators.',
      'Megohmmeter testing showed resistance between suspended extrusions and earth ground exceeding 45 Megohms (safe target is < 1 Megohm).',
      'Operators were standing 4 inches too close with high-velocity air, creating turbulence that stripped powder off leading edges.',
      'Conveyor trolleys were caked with graphite grease that insulated them from the building I-beam ground.',
    ],
    whatChanged: [
      'Installed spring-loaded knife-edge hooks that pierce hook contact points, reducing part resistance to 0.08 Megohms (80,000 ohms).',
      'Re-tuned electrostatic gun parameters: reduced voltage from 95 kV to 48 kV and set current limit at 18 µA.',
      'Trained operators on smooth 10-inch standoff strokes with 50% fan overlap.',
      'Established a 5-day hook burn-off rotation schedule with bare-metal validation.',
    ],
    keyTakeaway: 'Defect rate dropped from 42% to under 2.5% overnight. Line speed was safely increased by 22%, saving 14 hours of weekly overtime.',
    image: '/images/grounding-hooks.jpg',
    isPlaceholder: false,
  },
  {
    id: 'powder-consumption-control',
    slug: 'powder-consumption-control',
    tag: 'OEM Equipment Manufacturer',
    clientType: 'Agricultural & Industrial Equipment Fabricator',
    location: 'Midwest',
    title: 'Cutting Powder Consumption by 28% Through Mil-Thickness & Reclaim Optimization',
    situation: 'An agricultural equipment fabricator was burning through 4,200 lbs of polyester TGIC powder monthly—nearly 40% above engineering material estimates. Parts were coming off the line with uneven, heavy 6.5 to 8.0 mil builds, while recessed frame pockets suffered from light coverage and Faraday pushback.',
    whatWeFound: [
      'Fluidizing hoppers were operating with damp shop air, causing powder rat-holing and erratic pump delivery.',
      'Pump venturi inserts were severely grooved by impact fusion, causing operators to increase feed air to maintain spray density.',
      'Booth reclaim cyclone was operating at a 40/60 virgin-to-reclaim ratio with high fine-particle concentration.',
      'Operators lacked dry-film gauges and were visually guessing film thickness.',
    ],
    whatChanged: [
      'Replaced worn venturis and installed a point-of-use desiccant dryer to feed -40°F dew point air into hoppers.',
      'Balanced virgin/reclaim blend to 75/25 and introduced an inline vibrating sieve to filter out sub-10-micron fines.',
      'Tuned gun atomizing air and calibrated operators to consistently hit target 2.8–3.2 mils.',
      'Equipped supervisors with calibrated eddy-current gauges for hourly QA spot checks.',
    ],
    keyTakeaway: 'Powder consumption dropped by 28% with zero compromise in corrosion protection, saving over $34,000 annually in virgin powder purchases alone.',
    image: '/images/powder-reclaim.jpg',
    isPlaceholder: false,
  },
  {
    id: 'placeholder-case-note-01',
    slug: 'placeholder-case-note-01',
    tag: 'Future Case Note (Terry)',
    clientType: '[Client Operation Type / Industry]',
    location: '[Facility Region / State]',
    title: '[Case Note Title: Summary of the line problem solved]',
    situation: '[Terry: Describe the initial line problem, symptoms, and business impact here. E.g., What parts were failing? What was the reject rate? How was it affecting production?]',
    whatWeFound: [
      '[Terry: Point 1 — Substrate, pretreatment, or environmental finding]',
      '[Terry: Point 2 — Grounding, gun setting, or booth airflow issue discovered]',
      '[Terry: Point 3 — Oven temperature, PMT, or cure curve discrepancy]',
    ],
    whatChanged: [
      '[Terry: Action 1 — Chemistry, wash stage, or mechanical adjustment made]',
      '[Terry: Action 2 — Electrostatic or operator technique calibration]',
      '[Terry: Action 3 — Long-term prevention protocol established]',
    ],
    keyTakeaway: '[Terry: Describe the end result — e.g., reject percentage reduction, dollar savings, or throughput gain.]',
    image: '/images/finish-flawless.jpg',
    isPlaceholder: true,
  },
];

// Placeholder for future verified client testimonials (hidden until real content is added)
export const TESTIMONIALS_DATA = [
  {
    id: 'placeholder-t1',
    quote: '[Testimonial placeholder: Quote from Plant Manager or Quality Director regarding Terry’s diagnostic visit]',
    author: '[Client Name]',
    title: '[Plant Manager / Quality Director]',
    company: '[Industrial Finishing Shop / OEM Manufacturer]',
    isPlaceholder: true,
  }
];
