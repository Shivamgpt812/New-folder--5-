/**
 * ATRONICS Engineering Services Data Layer
 * Comprehensive technical data, specifications, process workflows,
 * equipment lists, and FAQs for each of the 4 dedicated service offerings.
 */

export const SERVICES_DATA = {
  'pcb-design': {
    slug: 'pcb-design',
    quoteServiceKey: 'PCB Design',
    category: 'HARDWARE ENGINEERING & LAYOUT',
    title: 'PCB Design & Layout Engineering',
    tagline: 'High-Speed, Signal-Integrity Focused Hardware Design with Zero-Respin DFM Verification',
    heroDescription: 'From multi-gigabit differential routing and DDR5/PCIe Gen 5 interfaces to rugged power electronics, ATRONICS transforms architectural block diagrams into production-ready, DFM/DFA-optimized multi-layer layouts.',
    heroImage: '/images/services/service-design-hero.jpg',
    secondaryImage: '/images/services/service-design-sim.jpg',
    badgeText: 'IPC-2221 / CID+ CERTIFIED DESIGNERS',
    stats: [
      { label: 'Layer Stacks Supported', value: 'Up to 50+' },
      { label: 'High-Speed Routing', value: '56+ Gbps PAM4' },
      { label: 'DFM/DFA Audit Speed', value: '< 24 Hours' },
      { label: 'Design Respin Rate', value: '< 0.8%' }
    ],
    overviewPoints: [
      'Pre-layout stackup modeling with field solver for 50Ω single-ended & 90/100Ω differential impedance.',
      'Comprehensive Signal Integrity (SI) and Power Integrity (PI) simulations eliminating EMI/EMC compliance issues.',
      'Rigorous DFM (Design for Manufacturability) and DFA (Design for Assembly) rule checks matched to production capabilities.',
      'Full manufacturing package generation: ODB++, IPC-2581, Gerber RS-274X, NC Drill, 3D STEP, and IPC netlists.'
    ],
    coreCapabilities: [
      {
        id: 'high-speed',
        title: 'High-Speed Digital & RF / Microwave Routing',
        description: 'Complex constraint-driven routing for PCIe Gen 4/5, DDR4/DDR5 fly-by topologies, USB4, 100G Ethernet, and microwave RF microstrips with tight skew, phase delay, and serpentine length matching.',
        deliverables: ['Impedance Profile Tables', 'Eye Diagram Simulations', 'S-Parameter Extraction', 'Length Matching Reports'],
        icon: 'Zap'
      },
      {
        id: 'power-thermal',
        title: 'Power Integrity (PI) & Thermal Modeling',
        description: 'DC drop analysis (IR drop), plane resonance calculation, copper pour thermal relief, and thermal via placement for high-power switching regulators, motor drivers, and high-TDP processor sockets.',
        deliverables: ['Current Density Heatmaps', 'DC IR Drop Reports', 'Decoupling Capacitor Optimization', 'Copper Weight Budgeting'],
        icon: 'Layers'
      },
      {
        id: 'dfm-dfa',
        title: 'DFM & DFA Engineering Optimization',
        description: 'Comprehensive design rule checking tailored to physical manufacturing limits: copper clearance, annular rings, solder mask webbing, acid trap prevention, teardropping, and automated panelization.',
        deliverables: ['Pre-Fab DRC Rule Validation', 'Component Clearance Audits', 'Panel Fiducial Alignment', 'SMT Stencil Aperture Rules'],
        icon: 'CheckCircle2'
      },
      {
        id: 'schematic-bom',
        title: 'Schematic Capture & BOM Sourcing Strategy',
        description: 'Hierarchical schematic entry, pin-swapping optimization for dense FPGAs/MCUs, component lifecycle risk analysis, and multi-sourced alternate parts mapping to avoid obsolete or long-lead components.',
        deliverables: ['Multi-Sheet Schematics', 'Active BOM Lifecycle Analysis', 'Second-Source Mappings', 'Netlist IPC-D-356'],
        icon: 'FileText'
      }
    ],
    technicalSpecs: [
      { parameter: 'Maximum Layer Count', standard: '1 – 32 Layers', advanced: 'Up to 50+ Layers' },
      { parameter: 'Minimum Trace / Space (Inner & Outer)', standard: '3.0 / 3.0 mil (0.075mm)', advanced: '2.0 / 2.0 mil (0.050mm)' },
      { parameter: 'Impedance Control Accuracy', standard: '± 7%', advanced: '± 5%' },
      { parameter: 'High-Speed Data Rates', standard: 'Up to 25 Gbps (NRZ)', advanced: '56+ Gbps (PAM4)' },
      { parameter: 'Minimum Component Pitch', standard: '0.40 mm BGA', advanced: '0.30 mm Micro-BGA' },
      { parameter: 'Via Technologies Supported', standard: 'Through-hole, Blind, Buried', advanced: 'Microvia (Stacked/Staggered), VIPPO' },
      { parameter: 'EDA Design Software', standard: 'Altium Designer, KiCad Pro', advanced: 'Cadence Allegro, Mentor Xpedition' },
      { parameter: 'Output Deliverable Formats', standard: 'Gerber RS-274X, NC Drill', advanced: 'ODB++, IPC-2581, 3D STEP, PDF drawings' }
    ],
    workflowSteps: [
      {
        stepNumber: '01',
        title: 'Requirement & Architecture Ingestion',
        description: 'We review schematics, component datasheets, mechanical envelope constraints (DXF/STEP), power budgets, and target manufacturing volume.',
        qualityGate: 'Architecture & Constraint Review Gate'
      },
      {
        stepNumber: '02',
        title: 'Stackup & Impedance Simulation',
        description: 'Our engineers configure the optimal multi-layer dielectric stackup, selecting core/prepreg materials and running 2D/3D field solver simulations for target trace impedance.',
        qualityGate: 'Impedance & Dielectric Approval'
      },
      {
        stepNumber: '03',
        title: 'Critical Placement & Routing',
        description: 'Floorplanning sensitive RF/analog blocks, high-current power paths, and high-speed bus topologies with strict length, phase, and return path grounding.',
        qualityGate: 'Mechanical 3D Collision & Fit Check'
      },
      {
        stepNumber: '04',
        title: 'DFM/DFA Audit & Verification',
        description: 'Automated DRC audits verify 120+ fabrication parameters against real-world fab tolerances, eliminating manufacturing bottlenecks before release.',
        qualityGate: 'Fabrication Partner DFM Sign-Off'
      },
      {
        stepNumber: '05',
        title: 'Production Data Package Release',
        description: 'Complete release package generated containing Gerber/ODB++, Pick-and-Place centroids, assembly drawings, netlists, and full fabrication notes.',
        qualityGate: 'Master Engineering Release Seal'
      }
    ],
    equipmentAndStandards: {
      headline: 'Enterprise EDA Suites & Verification Standards',
      tools: ['Altium Designer 24 Enterprise', 'Cadence Allegro & Sigrity', 'Siemens PADS Professional', 'Keysight ADS RF Simulation', 'Ansys HFSS 3D EM', 'Polar SI9000 Field Solver'],
      standards: ['IPC-2221 Generic Standard on Printed Board Design', 'IPC-2222 Sectional Standard for Rigid Organic Boards', 'IPC-7351 Footprint Surface Mount Design', 'MIL-STD-883 Environmental Testing Compliance', 'RoHS 3 (EU 2015/863) & REACH Compliance']
    },
    faqs: [
      {
        question: 'What inputs do I need to provide to start a PCB design project?',
        answer: 'You can provide an existing schematic (or block diagram/circuit description), Bill of Materials (BOM), enclosure mechanical dimensions (DXF or 3D STEP), and any critical net constraints (e.g. DDR, differential pairs, RF frequencies).'
      },
      {
        question: 'How do you ensure the board will not have Signal Integrity (SI) or EMI issues?',
        answer: 'We implement continuous ground reference planes, matched impedance routing, return path via stitching, length/skew balancing, and pre-route/post-route simulation using field solvers and eye diagram generators.'
      },
      {
        question: 'Can you design high-density HDI boards with microvias and VIPPO?',
        answer: 'Yes. We frequently design 1+N+1 through 4+N+4 HDI stackups with laser-drilled blind/buried microvias and Via-in-Pad Plated Over (VIPPO) for fine-pitch 0.35mm BGAs and tight wearables/sensor boards.'
      },
      {
        question: 'What manufacturing output formats do you deliver?',
        answer: 'We deliver industry-standard ODB++, IPC-2581, Gerber RS-274X, Excellon NC drill, IPC-D-356 electrical test netlists, 3D STEP mechanical models, and detailed PDF fabrication & assembly drawings.'
      }
    ]
  },

  'pcb-fabrication': {
    slug: 'pcb-fabrication',
    quoteServiceKey: 'PCB Fabrication',
    category: 'PRECISION MANUFACTURING & SUBSTRATES',
    title: 'Precision Multi-Layer PCB Fabrication',
    tagline: 'High-Density Interconnect (HDI), Rigid, Flex & RF Substrates Built to IPC Class 2/3 Standards',
    heroDescription: 'From rapid-turn 24-hour prototypes to multi-thousand production runs, ATRONICS manufactures high-reliability printed circuit boards with tight tolerances, advanced surface finishes, and 100% electrical verification.',
    heroImage: '/images/services/service-fab-hero.jpg',
    secondaryImage: '/images/services/service-fab-panel.jpg',
    badgeText: 'ISO 9001:2015 & IPC-6012 CERTIFIED FABRICATION',
    stats: [
      { label: 'Layer Count Scope', value: '2 to 32+ Layers' },
      { label: 'Min Trace / Spacing', value: '2.5 mil (0.065mm)' },
      { label: 'Fastest Turnaround', value: '24 Hours' },
      { label: 'Electrical Test Pass', value: '100% Flying Probe' }
    ],
    overviewPoints: [
      'Multi-layer rigid, flex, and rigid-flex substrates engineered for harsh thermal and mechanical environments.',
      'Laser-direct imaging (LDI) and high-aspect ratio chemical copper plating for microvias and ultra-fine pitch.',
      'Wide substrate library: standard FR4, High-Tg (TG170/TG180), Rogers RF (4350B, 4003C), Polyimide flex, and Metal Core.',
      'Premium surface finishes: ENIG, ENEPIG, Lead-Free HASL, Immersion Silver, Immersion Tin, and Hard Gold fingers.'
    ],
    coreCapabilities: [
      {
        id: 'hdi-microvias',
        title: 'High-Density Interconnect (HDI) & Microvias',
        description: 'Advanced laser-drilled microvias (stacked and staggered), blind and buried vias, and Via-in-Pad Plated Over (VIPPO) for maximum routing density on high-pin-count BGA packages.',
        deliverables: ['1+N+1 to 4+N+4 HDI Stacks', 'Laser Microvias down to 0.075mm', 'Copper Filled Solid Vias', 'High Aspect Ratio Plating'],
        icon: 'Cpu'
      },
      {
        id: 'specialty-substrates',
        title: 'Rigid-Flex, Polyimide & Metal Core (MCPCB)',
        description: 'Dynamic flexing circuits for aerospace, medical wearables, and tight enclosures. Heavy copper and aluminum-clad MCPCBs designed for superior thermal dissipation in high-power lighting and EV motor drives.',
        deliverables: ['Multi-Layer Rigid-Flex Panels', 'Adhesiveless Polyimide Base', 'Aluminum / Copper Clad MCPCB', 'Controlled Bend Radius Specs'],
        icon: 'Layers'
      },
      {
        id: 'rf-microwave',
        title: 'High-Frequency RF & Microwave Boards',
        description: 'Low-loss substrates with stable dielectric constant ($D_k$) and dissipation factor ($D_f$) up to 77 GHz. Hybrid stackups combining Rogers/Taconic with standard FR4 for optimal cost/performance balance.',
        deliverables: ['Rogers RO4350B / RO4003C', 'PTFE Teflon Substrates', 'Controlled Impedance Coupons', 'TDR Verification Reports'],
        icon: 'Zap'
      },
      {
        id: 'surface-finishes',
        title: 'Advanced Surface Finishes & Plating',
        description: 'High-purity chemical surface finishes delivering flat pad coplanarity for 0.35mm BGA mounting, wire bonding capability, and long-term solderability across lead-free assembly processes.',
        deliverables: ['ENIG (Au: 1-3µin, Ni: 120-200µin)', 'ENEPIG for Wire Bonding', 'Lead-Free HASL (RoHS)', 'Hard Gold Edge Connectors'],
        icon: 'ShieldCheck'
      }
    ],
    technicalSpecs: [
      { parameter: 'Layer Count', standard: '2 – 16 Layers', advanced: 'Up to 32+ Layers' },
      { parameter: 'Board Thickness', standard: '0.4 mm – 2.4 mm', advanced: '0.2 mm – 4.0 mm' },
      { parameter: 'Min Mechanical Drill Size', standard: '0.20 mm (8 mil)', advanced: '0.15 mm (6 mil)' },
      { parameter: 'Min Laser Microvia Size', standard: '0.10 mm (4 mil)', advanced: '0.075 mm (3 mil)' },
      { parameter: 'Copper Thickness (Inner/Outer)', standard: '0.5 oz – 2.0 oz', advanced: 'Up to 6.0 oz (Heavy Copper)' },
      { parameter: 'Min Solder Mask Webbing', standard: '3.0 mil (0.075mm)', advanced: '2.5 mil (0.065mm)' },
      { parameter: 'Impedance Tolerance', standard: '± 7%', advanced: '± 5%' },
      { parameter: 'Maximum Panel Dimension', standard: '400 × 500 mm', advanced: '500 × 600 mm' }
    ],
    workflowSteps: [
      {
        stepNumber: '01',
        title: 'CAM Engineering & DRC Audit',
        description: 'Incoming Gerber/ODB++ files are run through Genesis CAM software to verify etch compensation, solder mask clearances, and drill aspect ratios.',
        qualityGate: 'Automated CAM Verification Report'
      },
      {
        stepNumber: '02',
        title: 'Core Inner-Layer Imaging & Etch',
        description: 'Copper-clad laminates are coated with photoresist, exposed via high-precision Laser Direct Imaging (LDI), and chemically etched.',
        qualityGate: 'Automated Optical Inspection (AOI) on Inners'
      },
      {
        stepNumber: '03',
        title: 'Lamination & Laser Drilling',
        description: 'Layers are bonded under vacuum hot presses. Mechanical CNC drills handle through-holes while UV/CO2 laser drills create microvias.',
        qualityGate: 'X-Ray Drill Alignment & Registration Gate'
      },
      {
        stepNumber: '04',
        title: 'Electroless Plating & Solder Mask',
        description: 'Chemical copper deposition plates through-hole barrels. Liquid photoimageable (LPI) solder mask is applied and cured in cleanroom ovens.',
        qualityGate: 'Micro-Section Plating Thickness Audit'
      },
      {
        stepNumber: '05',
        title: 'Surface Finish & 100% E-Test',
        description: 'Plating of ENIG/HASL/ENEPIG followed by 100% Flying Probe electrical continuity and isolation testing against original netlists.',
        qualityGate: 'Certificate of Conformance (CoC) Issued'
      }
    ],
    equipmentAndStandards: {
      headline: 'Cleanroom Machinery & Fabrication Standards',
      tools: ['Orbotech Laser Direct Imaging (LDI)', 'Schmoll High-Speed CNC Drilling', 'Pluritec Vacuum Lamination Presses', 'Mania Flying Probe E-Testers', 'Hitachi Laser Microvia Drills', 'X-Ray Fluorescence Plating Gauges'],
      standards: ['IPC-6012 Class 2 & Class 3 (Rigid PCB)', 'IPC-6013 (Flexible Printed Boards)', 'ISO 9001:2015 Quality Management', 'UL 94V-0 Flammability Certification', 'RoHS 3 & REACH Certified']
    },
    faqs: [
      {
        question: 'What is your fastest prototype turnaround time?',
        answer: 'We offer quick-turn fabrication in as fast as 24 hours for 2–4 layer prototypes, and 48–72 hours for 6–10 layer multi-layer boards.'
      },
      {
        question: 'Do you provide IPC Class 3 fabrication for medical and aerospace applications?',
        answer: 'Yes. We routinely build to IPC-6012 Class 3 specifications with thicker copper plating in hole barrels (average 1.0 mil / 25µm), tight annular ring controls, and micro-section test reports.'
      },
      {
        question: 'What surface finish do you recommend for fine-pitch BGA components?',
        answer: 'We strongly recommend ENIG (Electroless Nickel Immersion Gold) or ENEPIG. These chemical finishes provide an ultra-flat planar pad surface essential for reliable 0.4mm and 0.35mm BGA soldering.'
      },
      {
        question: 'How do you verify there are no open or short circuits in fabricated boards?',
        answer: '100% of all boards go through Automated Flying Probe Electrical Testing (E-Test) verified directly against your IPC-D-356 or ODB++ netlist, ensuring zero opens, shorts, or leakage faults.'
      }
    ]
  },

  'pcb-assembly': {
    slug: 'pcb-assembly',
    quoteServiceKey: 'PCB Assembly',
    category: 'AUTOMATED SMT & TURNKEY PCBA',
    title: 'Turnkey SMT & PCB Assembly (PCBA)',
    tagline: 'Precision Surface Mount Technology, Fine-Pitch BGA Placement, and Automated 3D AOI / X-Ray Inspection',
    heroDescription: 'From high-mix low-volume rapid prototypes to scheduled mass production batches, ATRONICS provides complete turnkey electronics assembly with 01005 passives capability, nitrogen reflow, and multi-stage automated optical and 3D X-ray inspection.',
    heroImage: '/images/services/service-assembly-hero.jpg',
    secondaryImage: '/images/services/service-assembly-aoi.jpg',
    badgeText: 'IPC-A-610 CLASS 2 & 3 CERTIFIED ASSEMBLY',
    stats: [
      { label: 'Minimum Passive Size', value: '01005 Metric' },
      { label: 'Fine-Pitch BGA Support', value: '0.35 mm Pitch' },
      { label: 'Quality Verification', value: '3D AOI & X-Ray' },
      { label: 'Turnkey Lead Time', value: '3 to 5 Days' }
    ],
    overviewPoints: [
      'Full turnkey assembly including PCB fabrication, 100% component procurement, and SMT/THT mounting.',
      'High-speed dual-lane Yamaha and Panasonic SMT lines with automated solder paste printing and 3D SPI.',
      'Advanced component placement: 01005 chips, micro-BGA, QFN, LGA, CSP, and Package-on-Package (POP).',
      'Multi-zone reflow with Nitrogen ($N_2$) purging for void-free solder joints and pristine wetting.'
    ],
    coreCapabilities: [
      {
        id: 'automated-smt',
        title: 'High-Precision Automated SMT Assembly',
        description: 'Multi-head pick-and-place systems capable of placing up to 80,000 components per hour with ±25µm accuracy. Precision stencil printing with laser-cut electro-polished stainless stencils.',
        deliverables: ['01005 Chip Placement', 'Fine-Pitch 0.35mm BGA', 'Double-Sided SMT Reflow', '3D Solder Paste Inspection (SPI)'],
        icon: 'Cpu'
      },
      {
        id: 'tht-soldering',
        title: 'Through-Hole Technology (THT) & Selective Soldering',
        description: 'Automated selective soldering machines and wave soldering for mixed-technology boards, heavy power connectors, transformers, and terminal blocks with precise thermal profiling.',
        deliverables: ['Selective Soldering Nitrogen Shielded', 'Wave Soldering (Lead-Free & SnPb)', 'IPC-A-610 Certified Hand Assembly', 'Press-Fit Connector Insertion'],
        icon: 'Layers'
      },
      {
        id: '3d-xray-aoi',
        title: '3D Automated Optical & Real-Time X-Ray Inspection',
        description: '100% inline 3D AOI inspects solder fillet volume, component alignment, polarity, and bridging. Real-time 3D X-Ray inspects hidden BGA solder balls, QFN ground pad voiding, and inner solder joints.',
        deliverables: ['100% 3D AOI Full-Board Inspection', 'BGA Voiding Analysis (< 10%)', 'First Article Inspection (FAI) Report', 'Solder Joint Cross-Section Logs'],
        icon: 'ShieldCheck'
      },
      {
        id: 'conformal-coating',
        title: 'Conformal Coating & Potting Protection',
        description: 'Automated selective spray conformal coating (Acrylic, Silicone, Polyurethane) and silicone potting protecting electronics against moisture, dust, salt spray, and extreme thermal shock.',
        deliverables: ['Automated Selective Spray Dispensing', 'UV Blacklight Coverage Inspection', 'IP67/IP68 Waterproof Potting', 'Dielectric Barrier Protection'],
        icon: 'Zap'
      }
    ],
    technicalSpecs: [
      { parameter: 'SMT Placement Accuracy', standard: '± 35 µm @ 3σ', advanced: '± 25 µm @ 3σ' },
      { parameter: 'Minimum SMD Chip Size', standard: '0201 Imperial (0603 Metric)', advanced: '01005 Imperial (0402 Metric)' },
      { parameter: 'Minimum BGA Ball Pitch', standard: '0.40 mm', advanced: '0.35 mm' },
      { parameter: 'Max PCB Assembly Size', standard: '350 × 450 mm', advanced: '500 × 600 mm' },
      { parameter: 'Solder Alloys Used', standard: 'SAC305 (Lead-Free, RoHS)', advanced: 'Sn63Pb37 (Leaded), Low-Temp Bismuth' },
      { parameter: 'Reflow Atmosphere', standard: 'Forced Air Convection (10 Zone)', advanced: 'Nitrogen Purged (N₂)' },
      { parameter: 'Inspection Protocols', standard: '3D SPI, 3D AOI', advanced: '3D AOI + 3D High-Res X-Ray + FAI' },
      { parameter: 'Assembly Types', standard: 'Turnkey, Partial Turnkey', advanced: 'Consigned / Kitted' }
    ],
    workflowSteps: [
      {
        stepNumber: '01',
        title: 'BOM & Centroid File Ingestion',
        description: 'Our manufacturing engineering team verifies component footprints against the CAD centroid (Pick-and-Place) file and prepares feeder setups.',
        qualityGate: 'DFM/DFA Engineering Sign-off'
      },
      {
        stepNumber: '02',
        title: '3D Solder Paste Stencil Printing & SPI',
        description: 'Solder paste is applied using electro-polished stencils. 3D SPI cameras verify height, volume, and area of paste deposits before component mounting.',
        qualityGate: '100% Solder Paste Volume Audit'
      },
      {
        stepNumber: '03',
        title: 'High-Speed SMT Component Placement',
        description: 'Dual-gantry Pick and Place machines mount micro-passives, ICs, and BGAs under optical centering and vision alignment cameras.',
        qualityGate: 'Component Placement Vision Alignment'
      },
      {
        stepNumber: '04',
        title: 'Multi-Zone Nitrogen Reflow Soldering',
        description: 'Panels pass through a 10-zone reflow oven with real-time profiling tailored specifically to the thermal mass of heavy BGAs and small passives.',
        qualityGate: 'Thermal Profiler Validation'
      },
      {
        stepNumber: '05',
        title: '3D AOI, X-Ray & First Article Inspection',
        description: 'Comprehensive inspection checks solder wetting, polarities, tombstoning, and BGA voids. First article reports are signed off by QA leads.',
        qualityGate: 'IPC-A-610 Class 3 Quality Seal'
      }
    ],
    equipmentAndStandards: {
      headline: 'SMT Machinery & Quality Certifications',
      tools: ['Yamaha YSM20R High-Speed Mounters', 'Panasonic NPM-D3 SMT Lines', 'Nordson YESTECH 3D AOI Systems', 'Nordson Dage Quadra 5 3D X-Ray', 'Heller 10-Zone Nitrogen Reflow Ovens', 'ERSA Versaflow Selective Soldering'],
      standards: ['IPC-A-610 Class 2 and Class 3 Acceptability of Electronics', 'J-STD-001 Requirements for Soldered Electrical Assemblies', 'ISO 9001:2015 Registered Quality System', 'ANSI/ESD S20.20 Electrostatic Discharge Certified', 'RoHS 3 / REACH Solder Standards']
    },
    faqs: [
      {
        question: 'Do you handle full turnkey assembly where you source all parts?',
        answer: 'Yes! Our turnkey service includes high-reliability PCB fabrication, 100% component procurement from authorized distributors, stencil fabrication, surface mount placement, and final inspection.'
      },
      {
        question: 'Can you assemble boards with consigned / customer-supplied components?',
        answer: 'Yes. We support Full Turnkey, Partial Turnkey (we buy missing parts), and 100% Consigned kits where you ship the components to our facility.'
      },
      {
        question: 'How do you inspect Ball Grid Arrays (BGAs) and QFN ground pads?',
        answer: 'We utilize high-resolution industrial 3D X-Ray inspection systems that measure solder ball diameter, circularity, bridging, and voiding percentages under ICs where optical cameras cannot see.'
      },
      {
        question: 'What is your minimum order quantity for PCBA?',
        answer: 'We have no minimum order quantity (MOQ). We happily assemble 1 to 5 prototype units for R&D validation, scaling seamlessly to 10,000+ units for full production.'
      }
    ]
  },

  'component-sourcing-box-build': {
    slug: 'component-sourcing-box-build',
    quoteServiceKey: 'Component Sourcing',
    category: 'SUPPLY CHAIN, TESTING & ELECTROMECHANICAL INTEGRATION',
    title: 'Component Sourcing, Testing & Box Build',
    tagline: '100% Authorized Component Procurement, Functional Testing & Complete End-User Box-Build Integration',
    heroDescription: 'Protect your hardware against counterfeit components, eliminate supply chain disruptions, and receive fully assembled, programmed, tested, and packaged electromechanical electronic products ready for market deployment.',
    heroImage: '/images/services/service-boxbuild-hero.jpg',
    secondaryImage: '/images/services/service-boxbuild-test.jpg',
    badgeText: '100% AUTHORIZED SUPPLY NETWORK & ZERO COUNTERFEIT GUARANTEE',
    stats: [
      { label: 'Authorized Sourcing', value: '100% Direct CoC' },
      { label: 'Counterfeit Tolerance', value: '0% Policy' },
      { label: 'Testing Coverage', value: 'ICT & Functional FCT' },
      { label: 'Mechanical Integration', value: 'Full Turnkey' }
    ],
    overviewPoints: [
      'Direct partnerships with global Tier-1 authorized distributors: Mouser, DigiKey, Arrow, Avnet, and Future Electronics.',
      'Active BOM lifecycle scrub: early warning for obsolete (EOL) components and drop-in alternate suggestions.',
      'Custom Functional Testing (FCT) jigs, firmware burning, boundary scan, and In-Circuit Testing (ICT).',
      'Full box-build integration: CNC enclosure installation, cable harnesses, potting, and retail packaging.'
    ],
    coreCapabilities: [
      {
        id: 'authorized-sourcing',
        title: '100% Authorized Component Procurement',
        description: 'Strict anti-counterfeit protocols with full manufacturer traceability and Certificates of Conformance (CoC). Factory-sealed reels, moisture barrier packaging, and humidity indicator tracking.',
        deliverables: ['100% Authorized Traceability', 'Certificate of Conformance (CoC)', 'MSL Moisture Sensitive Handling', 'BOM Cost Optimization'],
        icon: 'ShieldCheck'
      },
      {
        id: 'bom-lifecycle',
        title: 'BOM Lifecycle Analysis & Risk Mitigation',
        description: 'Automated scrubbing of your bill of materials against manufacturer roadmaps to detect End-of-Life (EOL), Not Recommended for New Designs (NRND), and long lead-time parts before they halt production.',
        deliverables: ['Obsolescence Risk Reports', 'Pin-Compatible Alternates', 'Lead-Time Forecasts', 'Volume Pricing Schedules'],
        icon: 'Layers'
      },
      {
        id: 'functional-testing',
        title: 'Functional Testing (FCT) & Firmware Flashing',
        description: 'Custom bed-of-nails test fixtures, power-on verification, RF signal calibration, boundary scan (JTAG), and secure cryptographic firmware flashing with automated serial number logging.',
        deliverables: ['Custom FCT Bed-of-Nails Jigs', 'Automated Pass/Fail Test Logs', 'Firmware Flashing & Mac ID Burning', 'In-Circuit Testing (ICT)'],
        icon: 'Zap'
      },
      {
        id: 'box-build',
        title: 'Electromechanical Box Build & System Integration',
        description: 'Complete final unit assembly: custom CNC aluminum or plastic injection molded chassis installation, display and button integration, wire harness routing, thermal pads, and final retail boxing.',
        deliverables: ['Chassis & Enclosure Assembly', 'Custom Wiring & Harness Routing', 'Display & Membrane Mounting', 'Drop-Test & Retail Packaging'],
        icon: 'Cpu'
      }
    ],
    technicalSpecs: [
      { parameter: 'Component Sourcing Channels', standard: 'Authorized Tier-1 Distributors Only', advanced: 'Factory-Direct Franchise Lines' },
      { parameter: 'Traceability & Compliance', standard: 'CoC, Lot Codes, Date Codes', advanced: 'Full Serialized Barcode Traceability' },
      { parameter: 'Moisture Sensitive Handling', standard: 'IPC/JEDEC J-STD-033', advanced: 'Baking Ovens & Nitrogen Dry Cabinets' },
      { parameter: 'Functional Testing Types', standard: 'Power-on, Voltage Rail Check', advanced: 'Custom Bed-of-Nails Automated FCT, RF Analyzer' },
      { parameter: 'Firmware Burning Protocols', standard: 'SWD, JTAG, UART, SPI', advanced: 'Secure Key Injection & Unique Serial MAC' },
      { parameter: 'Environmental Burn-In', standard: 'Room Temperature Cycling', advanced: 'Thermal Chamber Burn-in (-40°C to +85°C)' },
      { parameter: 'Enclosure Material Support', standard: 'Off-the-shelf Enclosures, Sheet Metal', advanced: 'Custom CNC Billet, Injection Molded, 3D Print' },
      { parameter: 'Packaging & Fulfillment', standard: 'Anti-Static ESD Bubble Bags', advanced: 'Custom Foam Inlays, Retail Boxes, Barcodes' }
    ],
    workflowSteps: [
      {
        stepNumber: '01',
        title: 'BOM Scrubbing & Sourcing Validation',
        description: 'Our supply chain engineers cross-check every part number against authorized global stock, validating MPNs, packages, and lead times.',
        qualityGate: 'Component Availability & Alternate Sign-off'
      },
      {
        stepNumber: '02',
        title: 'Receiving Inspection & MSL Control',
        description: 'Incoming components are verified against vendor pack slips, inspected under microscopes for original markings, and stored in humidity-controlled dry cabinets.',
        qualityGate: 'Incoming Quality Control (IQC) Pass'
      },
      {
        stepNumber: '03',
        title: 'PCBA SMT Assembly & Solder Inspection',
        description: 'Boards are assembled on automated SMT lines, reflowed, and verified via 3D AOI before advancing to functional test stations.',
        qualityGate: 'AOI Solder Quality Clearance'
      },
      {
        stepNumber: '04',
        title: 'Firmware Programming & Functional Test',
        description: 'PCBs are loaded onto custom test fixtures, flashed with target firmware binaries, and subjected to automated voltage, signal, and RF tests.',
        qualityGate: '100% Functional Test Pass Logged'
      },
      {
        stepNumber: '05',
        title: 'Box-Build Enclosure Assembly & Packaging',
        description: 'Tested assemblies are installed into enclosures with custom cabling, torqued screws, labels, and packaged in custom ESD protective boxes.',
        qualityGate: 'Final QA Outgoing Inspection (OQC)'
      }
    ],
    equipmentAndStandards: {
      headline: 'Supply Chain Quality & Testing Systems',
      tools: ['Keysight In-Circuit Test Systems', 'Tektronix Mixed Domain Oscilloscopes', 'Rohde & Schwarz RF Signal Generators', 'Dryzone Nitrogen Dry Cabinets', 'Plexus Automated Wire Harness Testers', 'Tenney Environmental Burn-in Chambers'],
      standards: ['IDEA-STD-1010 Counterfeit Component Detection', 'IPC/JEDEC J-STD-033 Moisture Sensitive Devices', 'ISO 9001:2015 Certified Supply Chain', 'ANSI/ESD S20.20 Electrostatic Control', 'CE / FCC / RoHS Compliance Ready']
    },
    faqs: [
      {
        question: 'How do you guarantee that components are authentic and not counterfeit?',
        answer: 'We procure 100% of electronic components directly from factory-authorized franchise distributors (DigiKey, Mouser, Arrow, Avnet, Future). Every shipment is accompanied by manufacturer Certificates of Conformance (CoC).'
      },
      {
        question: 'Can you help if a key microchip on my BOM has a 40-week lead time?',
        answer: 'Yes. Our engineering and procurement team performs active BOM cross-matching to find pin-compatible alternative ICs or redesign minor footprint circuitry to keep your production schedule on track.'
      },
      {
        question: 'Can you build a custom test fixture (bed-of-nails) for our product?',
        answer: 'Yes! We design and manufacture custom pogo-pin test fixtures with automated test software (LabVIEW, Python) to flash firmware, measure critical test points, and log serial numbers.'
      },
      {
        question: 'What is included in your box-build services?',
        answer: 'Box-build covers mechanical enclosure integration, cable harness assembly, button and LED pipe mounting, conformal coating, potting, functional testing, label printing, and final retail packaging.'
      }
    ]
  }
}

/**
 * Helper to get service by slug
 */
export function getServiceBySlug(slug) {
  return SERVICES_DATA[slug] || null
}

/**
 * Helper to get all services list
 */
export function getAllServices() {
  return Object.values(SERVICES_DATA)
}
