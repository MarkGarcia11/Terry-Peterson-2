import { Problem } from '../types';

export const PROBLEMS_DATA: Problem[] = [
  {
    id: 'grounding',
    slug: 'grounding',
    number: '01',
    title: 'Grounding Problems & Electrostatic Transfer',
    shortTitle: 'Grounding Problems',
    headline: 'When the powder won’t stick where you want it to, start with the hook.',
    tagline: 'Poor wrap, back-ionization, patchy coverage, and heavy reject rates almost always trace back to electrical continuity.',
    summary: 'A powder gun is only half the circuit. If your parts lack a true earth ground under 1 megohm, the charged powder particles will repel, create micro-arcing stars (back-ionization), or build unevenly on corners while leaving recessed pockets starved.',
    heroImage: '/images/grounding-hooks.jpg',
    altText: 'Inspection of powder coating conveyor line hooks and bare metal grounding contact',
    symptoms: [
      'Powder puffs off the part or floats into the booth exhaust instead of wrapping.',
      'Small starry pinpricks or rough sandpaper textures (back-ionization) appearing on flat surfaces.',
      'Faraday cage pockets refusing to accept powder despite cranking gun voltage.',
      'Inconsistent film thickness between the top and bottom of a rack.',
      'Operators repeatedly turning up microamps or kV, which only makes the defect worse.',
    ],
    causes: [
      {
        title: 'Insulating build-up on hooks and racks',
        description: 'Every cured run leaves another 3 to 6 mils of baked polymer on your hanging hooks. After a few cycles, you have an electrical insulator between the conveyor line and your workpiece.',
        technicalNote: 'Resistance should measure under 1 Megohm (1,000,000 ohms). Many problem lines measure well over 20 Megohms.',
      },
      {
        title: 'Poor line continuity from track to earth ground',
        description: 'Swivel joints, lubricated conveyor trolleys, and painted rub rails can isolate the entire carrier from building earth ground.',
      },
      {
        title: 'Excessive gun kV triggering electrostatic repulsion',
        description: 'When ground is weak, operators instinctively turn kV to maximum (90-100 kV). The surface charges up quickly and repels incoming particles, leading to cratering and back-ionization.',
      },
      {
        title: 'Unequal contact pressure on lightweight parts',
        description: 'Light sheet-metal parts swinging on loose hooks lose solid contact points under booth airflow, creating intermittent grounding spikes.',
      },
    ],
    symptomCauseFixStrip: [
      {
        symptom: 'Starry micro-craters on cured flats (Back-ionization)',
        cause: 'High voltage charge accumulating on part with no path to ground',
        fix: 'Clean hook contacts to bare steel + drop gun to 40–50 kV / 15–20 µA.',
      },
      {
        symptom: 'Powder repels out of deep corners & tight 90° bends',
        cause: 'Faraday cage repulsion + electrostatic field lines grounding to outer edges',
        fix: 'Lower kV, use slotted or round deflector, adjust atomizing air volume.',
      },
      {
        symptom: 'Different operators getting wildly different mil builds on identical racks',
        cause: 'Variable hook contact positions and inconsistent gun-to-part distance',
        fix: 'Standardize hook burn-off schedules and establish set standoff ranges.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Live megohmmeter audit across the entire conveyor loop',
        description: 'We test resistance from earth ground through the drive chain, trolleys, hang points, and directly to the suspended part during normal line movement.',
      },
      {
        step: '02',
        title: 'Hook design and rack cleaning cycle evaluation',
        description: 'We review your hook geometry, contact knife-edges, burn-off or chemical stripping intervals, and masking strategies to guarantee clean metal-to-metal contact.',
      },
      {
        step: '03',
        title: 'Electrostatic gun parameter recalibration',
        description: 'We dial in voltage (kV), current limit (µA), fluidization pressure, and total air volume for your specific part geometries, ending the urge to run everything at 100 kV.',
      },
    ],
    outcomes: [
      'Immediate reduction in back-ionization and surface texture rejects.',
      'Superior powder wrap around backside edges and structural tubes.',
      'Lower powder consumption due to higher first-pass transfer efficiency.',
      'Clear, repeatable hook maintenance schedule your operators can follow without guessing.',
    ],
    faqs: [
      {
        question: 'How many ohms of resistance should I measure between my part and earth ground?',
        answer: 'The industry standard is less than 1 Megohm (1,000,000 ohms). For high-performance aerospace and automotive specifications, we target under 100,000 ohms. If your digital meter reads infinite (O.L.), you are effectively spraying ungrounded parts.',
      },
      {
        question: 'Why does turning down the gun voltage sometimes make the powder transfer better?',
        answer: 'When powder has weak ground, high voltage creates a strong opposing electrical charge on the part surface. Lowering the voltage (kV) and reducing microamps (µA) allows powder to enter recessed areas smoothly without blowing back out.',
      },
      {
        question: 'Can we fix our grounding problem without buying an expensive new conveyor system?',
        answer: 'Almost always, yes. In 12 years of consulting, the solution is usually practical: knife-edge hook redesign, scheduled burn-off rotation, trolley grounding wipers, and proper gun settings.',
      },
    ],
  },
  {
    id: 'cleaning-pretreatment',
    slug: 'cleaning-pretreatment',
    number: '02',
    title: 'Part Cleaning, Degreasing & Pretreatment',
    shortTitle: 'Part Cleaning & Pretreatment',
    headline: 'If the metal isn’t clean down to the grain, the cure won’t hold.',
    tagline: 'Adhesion failure, fisheyes, flash rust, and blistering are almost never paint defects—they start in the wash stages.',
    summary: 'Powder cannot bond to drawing oils, silicones, laser scale, or contaminated rinse stages. When parts fail cross-hatch tape tests or peel off in sheets after weather exposure, we look upstream at water chemistry, titrations, stage temperatures, and dry-off oven profiles.',
    heroImage: '/images/pretreatment-wash.jpg',
    altText: 'Industrial multi-stage pretreatment wash tunnel and rinse risers for powder coating lines',
    symptoms: [
      'Powder coating peeling, chipping, or failing cross-hatch adhesion tests.',
      'Fisheyes, cratering, or small circular grease blooms popping through the cured film.',
      'Flash rust forming on carbon steel parts between the final rinse and dry-off oven.',
      'Blistering or white corrosion creep under the paint along cut edges after salt spray testing.',
      'Uneven conversion coating (splotchy iron phosphate or irregular zirconium deposit).',
    ],
    causes: [
      {
        title: 'Silicone or heavy synthetic lubricant carry-over',
        description: 'Machining coolant, stamping lubes, or shop silicone sprays resist standard alkaline cleaners and cause severe surface tension craters.',
        technicalNote: 'Even 1 part per billion of airborne silicone mist can ruin an entire production batch.',
      },
      {
        title: 'Exhausted chemical wash or improper pH / titration',
        description: 'Wash tanks that aren’t titrated daily lose their cleaning potency, resulting in un-emulsified oils baking into the part in the dry-off oven.',
      },
      {
        title: 'Contaminated rinse stages with high Total Dissolved Solids (TDS)',
        description: 'If rinse water is dirty or has high mineral hardness, dissolved salts dry onto the metal. When powder is cured over salts, moisture draws through the film (osmotic blistering).',
      },
      {
        title: 'Laser oxide scale left on cut edges',
        description: 'Parts cut with oxygen laser leave a thin, brittle oxide layer. Powder adheres to the oxide, but the oxide snaps off the base metal under stress.',
      },
    ],
    symptomCauseFixStrip: [
      {
        symptom: 'Coating peels in large flakes down to bare metal',
        cause: 'Oils or dry-off residue preventing cross-link bonding to substrate',
        fix: 'Audit wash temperature, chemical concentration, and water-break-free surface.',
      },
      {
        symptom: 'Fisheye craters with tiny pin dots in center',
        cause: 'Airborne silicone, compressor oil blow-by, or residual drawing lube',
        fix: 'Install coalescing air filters and replace contaminated rinse water.',
      },
      {
        symptom: 'Rust bleeding along edges within weeks of installation',
        cause: 'Laser scale, inadequate conversion coating weight, or skipped seal stage',
        fix: 'Pre-treat with nitrogen laser assist or mechanical de-scale + verify phosphate weight.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Water-break test & chemical titration validation',
        description: 'We perform physical surface energy checks and titrate every wash stage, checking active chemical concentration, temperature, nozzle pressure, and impingement angles.',
      },
      {
        step: '02',
        title: 'Rinse water purity and TDS tracking',
        description: 'We test conductivity (microsiemens) and TDS on all rinse stages and final halo rinses to prevent mineral deposits from causing hidden blister sites.',
      },
      {
        step: '03',
        title: 'Dry-off and cure oven temperature profiling',
        description: 'We verify that moisture is completely evaporated before parts enter the powder booth without prematurely baking cleaning residues onto the substrate.',
      },
    ],
    outcomes: [
      '100% pass rates on ASTM D3359 cross-hatch adhesion testing.',
      'Elimination of fisheye rejects and crater rework.',
      'Significantly higher corrosion resistance and salt spray test hours.',
      'Optimized chemical consumption—using the right chemistry concentration rather than over-dosing.',
    ],
    faqs: [
      {
        question: 'What is a "water-break-free" test, and why is it so reliable?',
        answer: 'When clean, deoxidized metal is misted with clean water, the water sheets out smoothly without beading. If the water beads up, separates, or breaks into droplets, oil or grease is still present on the surface. It takes 10 seconds and tells you the truth about your cleaning stage.',
      },
      {
        question: 'How do you solve cleaning issues on delicate or aerospace metals like aluminum or magnesium?',
        answer: 'Aluminum and aerospace alloys require non-etch or controlled-etch alkaline cleaners and non-chromate conversion coatings (such as zirconium or silane) with strict temperature and contact time controls. We specialize in dialing in these exact multi-metal lines.',
      },
      {
        question: 'Can compressor line contamination cause paint surface defects?',
        answer: 'Yes. If your plant compressed air lines lack proper desiccant dryers and coalescing oil filters, vaporized compressor oil blows directly out of the powder gun onto the part, causing widespread fisheyes.',
      },
    ],
  },
  {
    id: 'powder-consumption',
    slug: 'powder-consumption',
    number: '03',
    title: 'Excessive Powder Consumption & Reclaim Waste',
    shortTitle: 'Excessive Powder Consumption',
    headline: 'You’re paying for powder to be on the part, not in the exhaust filters.',
    tagline: 'Overbuilding mils, poor transfer efficiency, and unbalanced reclaim systems silently burn tens of thousands of dollars a year.',
    summary: 'When operators apply 5 to 7 mils of powder on a job that calls for 2.5 to 3.0 mils, you are burning your raw material budget twice as fast. Combined with low first-pass transfer efficiency and cyclone reclaim contamination, the cost per part skyrockets.',
    heroImage: '/images/powder-reclaim.jpg',
    altText: 'Industrial powder coating fluidized hopper, feed pump and recovery system controls',
    symptoms: [
      'Mil thickness measuring 5.0 to 8.0 mils when the engineering drawing calls for 2.5 to 3.5 mils.',
      'Powder boxes disappearing twice as fast as job estimations predicted.',
      'Heavy powder fog inside the booth, clouding operator vision and overloading collector cartridges.',
      'Uneven fluidization in the hopper (boiling eruptions, rat-holing, or dead spots).',
      'Gun surging or spitting powder clumps onto parts, requiring manual sanding and re-coating.',
    ],
    causes: [
      {
        title: 'Excessive powder delivery air and gun velocity',
        description: 'Operators often turn up delivery air thinking it coats faster. High air velocity blows powder past the part and right into the exhaust filters.',
        technicalNote: 'First-pass transfer efficiency often drops from 65% down to under 30% when air velocity is set too high.',
      },
      {
        title: 'Operator "safety margin" over-spraying',
        description: 'Without thickness gauges and systematic spray technique training, manual operators spray extra heavy to avoid thin spots on difficult edges.',
      },
      {
        title: 'Poor virgin-to-reclaim powder blend ratios',
        description: 'Recirculating fine particles without balancing fresh virgin powder degrades particle size distribution, leading to low electrostatic charging and surging.',
      },
      {
        title: 'Fluidizing plate clogging or damp compressed air',
        description: 'Moisture in compressed air cakes powder on the porous membrane plate, causing erratic feed rates and gun spitting.',
      },
    ],
    symptomCauseFixStrip: [
      {
        symptom: 'Heavy orange peel + 6 mil dry film build',
        cause: 'Over-application due to high feed air pressure and slow pass speed',
        fix: 'Lower feed pump air, adjust gun trigger rhythm, calibrate target 2.5–3.0 mils.',
      },
      {
        symptom: 'Gun spitting clumps of powder onto parts',
        cause: 'Moisture in fluidizing air or impact fusion in pump venturis and hoses',
        fix: 'Inspect venturi insert wear, check air dew point (-40°F target), blow out hoses.',
      },
      {
        symptom: 'Cyclone reclaim powder failing to charge or wrap',
        cause: 'Particle size distribution skewed with too many fines under 10 microns',
        fix: 'Establish 70/30 or 80/20 virgin-to-reclaim blend protocol and sieve regularly.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Transfer efficiency audit & mil-build mapping',
        description: 'We weigh parts before and after coating, measure actual powder consumption against theoretical coverage, and map mil thickness across complex geometries.',
      },
      {
        step: '02',
        title: 'Hopper, pump, and venturi calibration',
        description: 'We inspect venturi throats for impact fusion wear, verify fluidization bubbling uniformity, and set optimal atomizing versus conveying air ratios.',
      },
      {
        step: '03',
        title: 'Operator technique coaching and thickness targets',
        description: 'We train booth technicians on proper gun standoff (8 to 12 inches), trigger sequencing, stroke overlap (50%), and quick-check magnetic/eddy-current mil testing.',
      },
    ],
    outcomes: [
      '20% to 35% reduction in monthly powder box purchases without dropping finish quality.',
      'Cleaner booth environments with longer cartridge filter lifespan.',
      'Elimination of gun spitting defects and sanding rework.',
      'Predictable, consistent mil thickness that satisfies strict customer QA specifications.',
    ],
    faqs: [
      {
        question: 'How much money can a typical job shop save by controlling powder mil build?',
        answer: 'If you spray 1,000 lbs of powder per month at $4.50/lb, dropping your average film build from 5.5 mils down to a target 3.0 mils can save $15,000 to $25,000+ per year in raw material alone, plus labor saved on rework.',
      },
      {
        question: 'Why does my gun spit powder clumps even though we just cleaned it?',
        answer: 'Spitting is often caused by impact fusion inside the pump venturi throat or powder hose bends where powder cakes under friction heat. High air moisture or worn pump inserts accelerate this rapidly.',
      },
      {
        question: 'Can we reuse 100% reclaim powder without issues?',
        answer: 'Not indefinitely. Every pass through the gun strips out ideal-sized particles (25–45 microns) and leaves sub-10-micron fines. We help you set an optimal virgin-to-reclaim ratio (usually 70/30 or 80/20) to prevent charge failure and orange peel.',
      },
    ],
  },
  {
    id: 'unusual-aerospace',
    slug: 'unusual-aerospace',
    number: '04',
    title: 'Industry-Specific & Unusual Coating Challenges',
    shortTitle: 'Industry-Specific & Unusual',
    headline: 'When the standard playbook fails, we dig into the metallurgy and chemistry.',
    tagline: 'From aerospace ultrasonic cleaning quirks to porous die-cast outgassing, some problems require specialized root-cause diagnosis.',
    summary: 'Not every coating problem is in standard manuals. When dealing with aerospace machined tolerances, outgassing cast aluminum, multi-coat intercoat adhesion, or high-temperature alloy finishes, Terry investigates the chemistry, thermal profile, and substrate interactions to solve what other suppliers could not.',
    heroImage: '/images/aerospace-part.jpg',
    altText: 'High precision aerospace machined aluminum component with satin powder coating finish',
    symptoms: [
      'Pinhole blisters and outgassing bubbles on cast aluminum or galvanized steel.',
      'Intercoat adhesion failure between epoxy primer and polyurethane/TGIC topcoat.',
      'Severe micro-adhesion failure on precision machined aerospace parts after solvent wipe or ultrasonic cleaning.',
      'Gloss loss or yellowing on light colors inside direct-fired gas cure ovens.',
      'Inconsistent cure kinetics on assemblies with variable metal thickness (thin sheet welded to thick structural plate).',
    ],
    causes: [
      {
        title: 'Trapped gasses and moisture inside porous castings',
        description: 'Castings and zinc galvanizing hold microscopic air and moisture pockets. As the powder melts and gels in the oven, expanding gas bursts through the coating.',
        technicalNote: 'Thermal pre-heating (outgas bake) at 20°F above cure temperature prior to application allows trapped gasses to escape before powder is sprayed.',
      },
      {
        title: 'Residual synthetic cutting lubricants and ultrasonic wash interactions',
        description: 'Certain aerospace machining coolants polymerize under ultrasonic heat, forming an invisible, non-polar barrier layer that standard alkaline washes cannot strip.',
      },
      {
        title: 'Cure oven combustion byproducts (NOx / sulfur gas checking)',
        description: 'Direct-fired gas burners with improper air-to-fuel ratios produce combustion gases that react with powder resins during gel phase, destroying gloss and causing wrinkling.',
      },
      {
        title: 'Intercoat time-window over-curing',
        description: 'When applying a multi-coat system (primer + topcoat), fully curing the primer closes all chemical reaction sites, leaving the topcoat with no cross-linking bond.',
      },
    ],
    symptomCauseFixStrip: [
      {
        symptom: 'Cast aluminum surface covered in micro-volcano blisters',
        cause: 'Air & moisture outgassing from substrate pores during powder melt',
        fix: 'Implement thermal pre-heat outgas cycle + use specialized OGF (outgas-forgiving) powder.',
      },
      {
        symptom: 'Topcoat flakes off primer like cellophane',
        cause: 'Primer was 100% cured instead of partial B-stage gelled before topcoat application',
        fix: 'Adjust primer schedule to partial gel (green cure) before topcoat application.',
      },
      {
        symptom: 'Thick metal sections under-curing while thin brackets over-bake',
        cause: 'Convection oven air circulation uneven across varying thermal masses',
        fix: 'Run Datapaq oven datalogger to map substrate PMT (Peak Metal Temp) and adjust line dwell.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Substrate & thermal profile investigation',
        description: 'We analyze the base metallurgy, surface roughness (Ra), pre-machining fluids, and run multi-probe thermal data-loggers directly on the parts through the cure oven.',
      },
      {
        step: '02',
        title: 'Chemistry compatibility and cross-link testing',
        description: 'We perform solvent rub tests (MEK resistance ASTM D5402), cross-hatch tape tests, and microscopic cross-section inspections to pinpoint the exact failure interface.',
      },
      {
        step: '03',
        title: 'Custom line protocol and parameter documentation',
        description: 'We establish an exact standard operating procedure (SOP) with repeatable dwell times, wash temperatures, outgas bake windows, and gun parameters.',
      },
    ],
    outcomes: [
      'Resolution of complex, high-stakes coating failures that stopped customer shipments.',
      'Reliable adhesion on difficult aerospace and defense-grade substrates.',
      'Repeatable thermal cure schedules for parts with mixed metal thicknesses.',
      'Defensible, documented QA process for ISO, AS9100, and demanding customer audits.',
    ],
    faqs: [
      {
        question: 'What was the aerospace cleaning challenge Terry solved?',
        answer: 'A precision aerospace manufacturer faced micro-adhesion failure on machined 6061-T6 aluminum components. Standard wash chemistry and solvent wipes looked clean, but parts failed adhesion tape tests. Terry investigated the CNC cutting fluid chemistry, identified an invisible silicone-modified surfactant residue, and redesigned the multi-stage wash sequence and bath temperatures to completely eliminate the contaminant.',
      },
      {
        question: 'Can you help us with heavy castings that continually outgas?',
        answer: 'Yes. Outgassing in die castings, sand castings, and hot-dip galvanized parts is common. The fix involves precise pre-heating to evacuate pores, custom powder chemistry selection (low-melt viscosity / OGF additives), and fine-tuned ramp rates.',
      },
      {
        question: 'How do you verify whether a part achieved full cure across thick and thin sections?',
        answer: 'We use multi-channel data-loggers attached directly to different gauge points on the part to record Peak Metal Temperature (PMT) curves, followed by MEK solvent cure resistance testing (ASTM D5402).',
      },
    ],
  },
];
