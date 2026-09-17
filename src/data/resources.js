/**
 * ATRONICS ELECTRONICS ENGINEERING RESOURCE HUB DATA MODEL
 * Reusable, CMS-compatible data architecture for all engineering guides,
 * technical specifications, insights, and FAQs.
 */

export const RESOURCE_CATEGORIES = [
  {
    id: 'all',
    name: 'All',
    tag: 'ALL RESOURCES',
    count: 12
  },
  {
    id: 'engineering-guides',
    name: 'Engineering Guides',
    tag: '01 GUIDES',
    description: 'Practical engineering documentation, stackup calculations, and step-by-step design guidance.',
    icon: 'BookOpen'
  },
  {
    id: 'engineering-insights',
    name: 'Engineering Insights',
    tag: '02 INSIGHTS',
    description: 'Deep technical articles, high-speed signal integrity case studies, and RF hardware architectures.',
    icon: 'Zap'
  },
  {
    id: 'technical-specs',
    name: 'Technical Specs',
    tag: '03 TECH SPECS',
    description: 'PCB manufacturing limits, IPC Class 3 tolerances, material dielectric constants, and fabrication limits.',
    icon: 'Sliders'
  },
  {
    id: 'faq',
    name: 'FAQ',
    tag: '04 FAQ',
    description: 'Answers to common questions regarding SMT turnarounds, Gerber exports, component sourcing, and testing.',
    icon: 'HelpCircle'
  },
  {
    id: 'design-guidelines',
    name: 'Design Guidelines',
    tag: 'DESIGN',
    description: 'Stackup rules, controlled impedance routing, and layout guidelines for high-yield manufacturing.',
    icon: 'Layout'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tag: 'MANUFACTURING',
    description: 'Gerber preparation, SMT pick-and-place optimization, moisture sensitivity, and BOM supply chains.',
    icon: 'Factory'
  }
]

export const RESOURCES_DATA = [
  {
    slug: 'pcb-design-guidelines-dfm',
    title: 'PCB Design Guidelines for Manufacturability',
    category: 'Design Guidelines',
    categorySlug: 'design-guidelines',
    badge: 'FEATURED GUIDE',
    description: 'Key PCB layout considerations covering stackups, copper clearances, drill aspect ratios, annular rings, and DFM rules for high-yield volume production.',
    excerpt: 'Practical guidelines covering stackups, spacing, routing, tolerances and DFM considerations for production-ready PCB designs.',
    image: '/images/resources-dfm-guide.jpg',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal DFM & Hardware Architect',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'September 12, 2026',
    updatedAt: 'September 16, 2026',
    readTime: '8 min read',
    featured: true,
    tags: ['DFM', 'PCB Layout', 'Fabrication', 'IPC Class 3', 'Tolerances'],
    tableOfContents: [
      { id: 'introduction', title: '1. Why DFM Matters in Production' },
      { id: 'trace-clearance', title: '2. Trace Width & Spacing Rules' },
      { id: 'annular-rings', title: '3. Drill Aspect Ratios & Annular Rings' },
      { id: 'solder-mask', title: '4. Solder Mask Dams & Web Openings' },
      { id: 'smt-footprints', title: '5. SMT Component Pad Geometry' },
      { id: 'spec-table', title: '6. Recommended DFM Specifications' },
      { id: 'dfm-checklist', title: '7. Final Pre-Release Checklist' }
    ],
    sections: [
      {
        id: 'introduction',
        title: 'Why DFM Matters in Production',
        paragraphs: [
          'Design for Manufacturability (DFM) is the discipline of architecting electronic circuit boards so they can be fabricated and assembled with maximum yield, optimal cost, and zero post-assembly failure modes.',
          'In modern multi-layer boards featuring high-density interconnects (HDI) and fine-pitch BGA packages, ignoring fabrication limits creates solder bridging, tombstoning, and internal microvia fractures.'
        ],
        callout: {
          type: 'engineering-note',
          title: 'ENGINEERING NOTE',
          text: 'Over 78% of manufacturing delays are caused by avoidable PCB CAD DRC discrepancies such as missing solder mask dams or insufficient copper-to-edge clearances.'
        }
      },
      {
        id: 'trace-clearance',
        title: 'Trace Width & Spacing Rules',
        paragraphs: [
          'For standard outer copper layers (1 oz / 35µm base copper), the minimum standard trace width and spacing is 4 mil (0.100 mm). For advanced HDI fabrication, ATRONICS supports trace geometry down to 3 mil (0.075 mm).',
          'Ensure high-voltage or power delivery traces incorporate appropriate creepage and clearance distances in accordance with IPC-2221B standards.'
        ],
        bullets: [
          'Signal traces (1 oz Cu): 4 mil min width / 4 mil min clearance.',
          'Power planes / High-current traces: Calculate width using IPC-2152 thermal charts with a 10°C max temp rise.',
          'Differential pairs: Maintain constant pitch across corners and serpentine length matching.'
        ]
      },
      {
        id: 'annular-rings',
        title: 'Drill Aspect Ratios & Annular Rings',
        paragraphs: [
          'A robust annular ring prevents breakout during mechanical drilling. ATRONICS recommends a minimum outer annular ring of 4 mil (0.10 mm) for standard fabrication and 5 mil (0.125 mm) for Class 3 high-reliability builds.',
          'The maximum mechanical drill aspect ratio is 10:1 (e.g. 0.20 mm drill through a 2.0 mm thick board). For microvias, laser-drilled aspect ratios should not exceed 1:1.'
        ],
        callout: {
          type: 'design-tip',
          title: 'DESIGN TIP',
          text: 'Always provide teardrop pads on all via-to-trace transitions. Teardrops prevent neck-down stress fractures during thermal reflow cycles.'
        }
      },
      {
        id: 'solder-mask',
        title: 'Solder Mask Dams & Web Openings',
        paragraphs: [
          'Solder mask dams prevent molten solder from creating bridges between adjacent IC pins during convection reflow.',
          'Ensure a minimum solder mask bridge width of 3.5 mil (0.089 mm) for green solder mask, and 4.0 mil (0.102 mm) for black/white matte masks.'
        ]
      },
      {
        id: 'smt-footprints',
        title: 'SMT Component Pad Geometry',
        paragraphs: [
          'Component pads must be symmetrically designed to balance thermal dissipation during reflow. Uneven trace connections to 0402 or 0201 chip passives can pull the component upright, resulting in tombstoning.',
          'Use thermal relief spokes (4-way tie) when connecting pads to large ground or power copper pours.'
        ],
        callout: {
          type: 'manufacturing-note',
          title: 'MANUFACTURING NOTE',
          text: 'For 0.4mm pitch QFN and BGA footprints, specify Non-Solder Mask Defined (NSMD) pads to achieve maximum solder joint perimeter adhesion.'
        }
      },
      {
        id: 'spec-table',
        title: 'Recommended DFM Specifications',
        table: {
          headers: ['Parameter', 'Standard Capability', 'Advanced HDI Capability', 'IPC Standard'],
          rows: [
            ['Min Trace / Space', '4 mil / 4 mil (0.10 mm)', '3 mil / 3 mil (0.075 mm)', 'IPC-2221B'],
            ['Min Mechanical Drill', '0.20 mm (8 mil)', '0.15 mm (6 mil)', 'IPC-A-600'],
            ['Min Laser Microvia', '0.10 mm (4 mil)', '0.075 mm (3 mil)', 'IPC-6012'],
            ['Min Annular Ring', '4 mil (0.10 mm)', '3.5 mil (0.089 mm)', 'IPC-Class 2/3'],
            ['Solder Mask Dam', '3.5 mil (0.089 mm)', '3.0 mil (0.075 mm)', 'IPC-SM-840'],
            ['Copper to Board Edge', '8 mil (0.20 mm)', '6 mil (0.15 mm)', 'IPC-2221B']
          ]
        }
      },
      {
        id: 'dfm-checklist',
        title: 'Final Pre-Release Checklist',
        paragraphs: [
          'Prior to submitting your production Gerber package, verify the following checks inside your ECAD tool (Altium, KiCad, Cadence):'
        ],
        bullets: [
          'Run automated Electrical Rule Check (ERC) and Design Rule Check (DRC) with zero violations.',
          'Verify drill file units, format (Excellon 2:4 or 2:5 metric), and tool diameter definitions.',
          'Check layer alignment and verify that solder mask openings match silkscreen polarity.',
          'Include copper balance thieving on outer layers to prevent board warpage during wave soldering.'
        ]
      }
    ],
    relatedSlugs: ['gerber-file-preparation-guide', 'controlled-impedance-high-speed-pcb', 'pcb-layer-stackup-explained']
  },
  {
    slug: 'gerber-file-preparation-guide',
    title: 'Gerber File Preparation & Submission Guide',
    category: 'Manufacturing',
    categorySlug: 'manufacturing',
    badge: 'MANUFACTURING GUIDE',
    description: 'Comprehensive instructions for exporting RS-274X and Gerber X2 layers, NC drill files, IPC-D-356 netlists, and centroid pick-and-place files.',
    excerpt: 'Everything you need to know before submitting Gerber files for automated PCB fabrication and SMT assembly.',
    image: '/images/resources-hero-cad.jpg',
    author: {
      name: 'Elena Rostova',
      role: 'Lead SMT Process Engineer',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'September 08, 2026',
    updatedAt: 'September 15, 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['Gerber', 'RS-274X', 'Gerber X2', 'IPC-D-356', 'CAD Export'],
    tableOfContents: [
      { id: 'overview', title: '1. Gerber Format Standards' },
      { id: 'required-layers', title: '2. Mandatory Layer Checklist' },
      { id: 'drill-files', title: '3. NC Drill & Tool Tables' },
      { id: 'centroid-bom', title: '4. Centroid (Pick & Place) & BOM' },
      { id: 'submission-table', title: '5. File Extension Reference' }
    ],
    sections: [
      {
        id: 'overview',
        title: 'Gerber Format Standards',
        paragraphs: [
          'The Gerber format remains the de-facto standard for PCB manufacturing data exchange. ATRONICS recommends exporting files in **Gerber X2** or **Extended Gerber RS-274X** format with embedded aperture definitions.',
          'Gerber X2 offers automatic layer stack assignment, drill function attribution, and impedance flags, reducing manual CAM engineering intervention by over 60%.'
        ]
      },
      {
        id: 'required-layers',
        title: 'Mandatory Layer Checklist',
        paragraphs: [
          'A complete fabrication package must include distinct layers for every functional copper plane, solder mask, silkscreen, and mechanical edge contour.'
        ],
        bullets: [
          'Top / Bottom Copper Layers (GTL / GBL)',
          'Internal Signal & Plane Layers (G1, G2, GP1, etc.)',
          'Top / Bottom Solder Mask (GTS / GBS)',
          'Top / Bottom Silkscreen Legend (GTO / GBO)',
          'Top / Bottom Solder Paste / Stencil (GTP / GBP)',
          'Board Mechanical Outline / Routing Profile (GKO / GM1)'
        ]
      },
      {
        id: 'drill-files',
        title: 'NC Drill & Tool Tables',
        paragraphs: [
          'Always export Excellon format drill files with explicit Plated Through-Hole (PTH) and Non-Plated Through-Hole (NPTH) separation.',
          'Blind and buried via layers must be exported as separate paired NC drill files (e.g. Layer 1-2, Layer 2-3).'
        ],
        callout: {
          type: 'important',
          title: 'CRITICAL REQUIREMENT',
          text: 'Ensure the board outline layer (Edge.Cuts or Mechanical 1) is closed, continuous, and centered on the exact drill coordinate origin.'
        }
      },
      {
        id: 'centroid-bom',
        title: 'Centroid (Pick & Place) & BOM',
        paragraphs: [
          'For turnkey SMT assembly, include an XY Centroid file containing designators, mid-point coordinates (X, Y), rotation angle (0-360°), and board side (Top/Bottom).',
          'Provide the Bill of Materials (BOM) in `.xlsx` or `.csv` with Manufacturer Part Numbers (MPN) and authorized substitute parts.'
        ]
      },
      {
        id: 'submission-table',
        title: 'File Extension Reference',
        table: {
          headers: ['Layer Name', 'RS-274X Extension', 'Gerber X2 Function', 'Requirement'],
          rows: [
            ['Top Copper', '.GTL / .top', 'Layer 1, Top', 'Mandatory'],
            ['Bottom Copper', '.GBL / .bot', 'Layer N, Bottom', 'Mandatory'],
            ['Top Solder Mask', '.GTS / .smt', 'Top Mask', 'Mandatory'],
            ['Bottom Solder Mask', '.GBS / .smb', 'Bottom Mask', 'Mandatory'],
            ['Top Silkscreen', '.GTO / .slt', 'Top Legend', 'Recommended'],
            ['Paste Stencil', '.GTP / .spt', 'Top Paste Apertures', 'For SMT Assembly'],
            ['NC Drill (Plated)', '.DRL / .txt', 'Excellon PTH Drill', 'Mandatory']
          ]
        }
      }
    ],
    relatedSlugs: ['pcb-design-guidelines-dfm', 'pcb-manufacturing-capabilities', 'component-sourcing-guide']
  },
  {
    slug: 'controlled-impedance-high-speed-pcb',
    title: 'Controlled Impedance in High-Speed PCB Design',
    category: 'Engineering Insights',
    categorySlug: 'engineering-insights',
    badge: 'TECHNICAL DEEP DIVE',
    description: 'Understanding single-ended 50Ω microstrip, 100Ω differential pairs, dielectric loss tangent (Df), and return current path routing.',
    excerpt: 'Mastering impedance control, signal integrity modeling, and high-speed routing strategies for GHz-frequency hardware.',
    image: '/images/resources-signal-integrity.jpg',
    author: {
      name: 'Alexandre Chen',
      role: 'High-Speed Signal Integrity Specialist',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'September 05, 2026',
    updatedAt: 'September 14, 2026',
    readTime: '9 min read',
    featured: true,
    tags: ['Impedance', 'High-Speed', 'Signal Integrity', 'Differential Pairs', 'RF'],
    tableOfContents: [
      { id: 'impedance-fundamentals', title: '1. Characteristic Impedance Fundamentals' },
      { id: 'microstrip-stripline', title: '2. Microstrip vs. Stripline Topologies' },
      { id: 'dielectric-selection', title: '3. Substrate Materials & Dk/Df Selection' },
      { id: 'return-path', title: '4. Ground Return Current & Plane Splits' },
      { id: 'stackup-specs', title: '5. Standard Impedance Stackups' }
    ],
    sections: [
      {
        id: 'impedance-fundamentals',
        title: 'Characteristic Impedance Fundamentals',
        paragraphs: [
          'In high-speed digital circuits (DDR4/5, PCIe Gen 4/5, USB 3.2, Gigabit Ethernet), traces no longer act as simple lumped connections. Instead, they behave as distributed transmission lines where characteristic impedance (Z0) must match driver and receiver terminations.',
          'Mismatched impedance creates signal reflections, overshoot, ringing, and catastrophic bit error rates (BER).'
        ],
        callout: {
          type: 'engineering-note',
          title: 'SIGNAL INTEGRITY NOTE',
          text: 'Any signal with a rise time (tr) where the trace length exceeds 1/6th of the signal propagation distance (approx. 2 inches for 1ns edge) requires controlled transmission line routing.'
        }
      },
      {
        id: 'microstrip-stripline',
        title: 'Microstrip vs. Stripline Topologies',
        paragraphs: [
          'Surface microstrip traces are routed on outer layers directly above a continuous reference plane. Stripline traces are embedded on internal layers sandwiched symmetrically between two ground planes.',
          'Striplines provide superior EMI containment and eliminate radiation losses, making them ideal for high-speed differential bus routing.'
        ]
      },
      {
        id: 'dielectric-selection',
        title: 'Substrate Materials & Dk/Df Selection',
        paragraphs: [
          'Standard FR4 (Dk ~4.3, Df ~0.020) performs reliably up to 2.5 GHz. For multi-gigabit signaling, specify high-Tg mid-loss materials (Isola 370HR, IT-180A) or low-loss PTFE/ceramic laminates (Rogers RO4350B, Panasonic Megtron 6).'
        ]
      },
      {
        id: 'return-path',
        title: 'Ground Return Current & Plane Splits',
        paragraphs: [
          'High-frequency return current travels directly beneath the signal trace on the nearest continuous reference plane. Never route a high-speed differential pair across a split ground or power plane boundary.',
          'Crossing a split forces the return current into a wide loop, drastically increasing loop inductance, jitter, and radiated emissions.'
        ],
        callout: {
          type: 'design-tip',
          title: 'DESIGN TIP',
          text: 'When high-speed signals transition layers via vias, place adjacent ground return vias within 25–35 mil of the signal via pair to preserve return path continuity.'
        }
      },
      {
        id: 'stackup-specs',
        title: 'Standard Impedance Stackups',
        table: {
          headers: ['Target Impedance', 'Trace Geometry', 'Dielectric Height (H)', 'Typical Application'],
          rows: [
            ['50Ω Single-Ended', '4.5 mil width / 1 oz Cu', '3.5 mil Prepreg (Dk 4.1)', 'RF Antenna / Clock Traces'],
            ['90Ω USB Differential', '4.0 mil trace / 5.0 mil space', '3.5 mil Prepreg', 'USB 2.0 / USB 3.0'],
            ['100Ω Differential', '4.0 mil trace / 6.0 mil space', '4.0 mil Prepreg', 'PCIe / Ethernet / HDMI / LVDS'],
            ['85Ω PCIe Gen 4/5', '4.8 mil trace / 4.5 mil space', '3.8 mil Low-Loss Prepreg', 'PCIe 4.0 / 5.0 Bus']
          ]
        }
      }
    ],
    relatedSlugs: ['pcb-layer-stackup-explained', 'designing-for-emi-emc', 'hdi-pcb-design-considerations']
  },
  {
    slug: 'pcb-layer-stackup-explained',
    title: 'PCB Layer Stackup Explained: Signal Integrity & EMI',
    category: 'Engineering Guides',
    categorySlug: 'engineering-guides',
    badge: 'ARCHITECTURE GUIDE',
    description: 'How layer count, dielectric materials, power planes, and symmetrical signal layers affect PCB electrical performance and thermal stability.',
    excerpt: 'How layer count, dielectric materials, power planes and signal layers affect PCB performance.',
    image: '/images/pcb-stack.webp',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal DFM & Hardware Architect',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'August 28, 2026',
    updatedAt: 'September 10, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['Stackup', 'Layer Count', 'Power Integrity', 'EMI', 'Fabrication'],
    tableOfContents: [
      { id: 'principles', title: '1. Symmetrical Stackup Principles' },
      { id: 'four-vs-six', title: '2. 4-Layer vs. 6-Layer Architecture' },
      { id: 'eight-plus', title: '3. 8 to 16+ Layer High-Density Stackups' },
      { id: 'power-planes', title: '4. Power Plane Decoupling & Resonance' }
    ],
    sections: [
      {
        id: 'principles',
        title: 'Symmetrical Stackup Principles',
        paragraphs: [
          'A properly engineered PCB layer stackup forms the foundation for both mechanical stability and clean electromagnetic compliance (EMC).',
          'Stackups must always maintain z-axis symmetry in core thicknesses, prepreg plies, and copper weights to prevent severe board bow and twist during thermal reflow.'
        ]
      },
      {
        id: 'four-vs-six',
        title: '4-Layer vs. 6-Layer Architecture',
        paragraphs: [
          'In a standard 4-layer board (SIG1 - GND - PWR - SIG2), each signal layer has one adjacent reference plane.',
          'For designs containing high-speed interfaces, migrating to a 6-layer stackup (SIG1 - GND - SIG2 - PWR - GND - SIG3) provides internal shielded stripline layers and dedicated ground return reference on both sides.'
        ]
      },
      {
        id: 'eight-plus',
        title: '8 to 16+ Layer High-Density Stackups',
        paragraphs: [
          'High-pin-count BGAs (0.5mm / 0.4mm pitch) require 8, 10, or 12 layers to break out inner balls without bottlenecking ground return channels.',
          'Interleaved ground planes between signal pairs eliminate broadside crosstalk between high-density buses.'
        ]
      },
      {
        id: 'power-planes',
        title: 'Power Plane Decoupling & Resonance',
        paragraphs: [
          'Placing power and ground planes with ultra-thin dielectric spacing (e.g. 2–3 mil core) creates high intrinsic inter-plane capacitance, effectively shunting GHz-frequency switching noise.'
        ]
      }
    ],
    relatedSlugs: ['controlled-impedance-high-speed-pcb', 'pcb-design-guidelines-dfm', 'hdi-pcb-design-considerations']
  },
  {
    slug: 'designing-for-emi-emc',
    title: 'Designing for EMI / EMC in Production Hardware',
    category: 'Engineering Insights',
    categorySlug: 'engineering-insights',
    badge: 'COMPLIANCE GUIDE',
    description: 'Practical PCB layout techniques for passing FCC Class B and CE EMC compliance testing on first pass.',
    excerpt: 'Practical techniques for reducing electromagnetic interference and passing emissions testing.',
    image: '/images/industry-wireless-rf.webp',
    author: {
      name: 'Alexandre Chen',
      role: 'High-Speed Signal Integrity Specialist',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'August 22, 2026',
    updatedAt: 'September 04, 2026',
    readTime: '8 min read',
    featured: false,
    tags: ['EMC', 'EMI', 'FCC Compliance', 'Shielding', 'Filtering'],
    tableOfContents: [
      { id: 'emc-fundamentals', title: '1. Radiated vs. Conducted Emissions' },
      { id: 'grounding-chassis', title: '2. Ground Stitching & Chassis Shielding' },
      { id: 'power-filtering', title: '3. Filter Topologies (Common-Mode Chokes)' },
      { id: 'clock-routing', title: '4. Clock & High-Frequency Routing' }
    ],
    sections: [
      {
        id: 'emc-fundamentals',
        title: 'Radiated vs. Conducted Emissions',
        paragraphs: [
          'Failing EMC testing at certified laboratories costs thousands in re-test fees and delays product launches by months.',
          'Emissions originate from high-frequency current loops acting as miniature slot antennas. Minimizing loop area is the single most effective EMC suppression technique.'
        ]
      },
      {
        id: 'grounding-chassis',
        title: 'Ground Stitching & Chassis Shielding',
        paragraphs: [
          'Stitch perimeter ground vias at spacing no greater than λ/20 of the highest harmonic frequency (typically 100–150 mil spacing for GHz systems) to create a Faraday fence around board edges.'
        ]
      },
      {
        id: 'power-filtering',
        title: 'Filter Topologies (Common-Mode Chokes)',
        paragraphs: [
          'Place common-mode chokes and TVS diode arrays directly at high-speed I/O connectors (USB, Ethernet, CAN) before traces enter the internal board area.'
        ]
      },
      {
        id: 'clock-routing',
        title: 'Clock & High-Frequency Routing',
        paragraphs: [
          'Enclose sensitive high-speed clock lines between ground reference planes and guard traces to prevent capacitive crosstalk into adjacent signal channels.'
        ]
      }
    ],
    relatedSlugs: ['controlled-impedance-high-speed-pcb', 'rf-microwave-pcb-design-guide', 'pcb-design-guidelines-dfm']
  },
  {
    slug: 'hdi-pcb-design-considerations',
    title: 'HDI PCB Design Considerations & Microvia Architecture',
    category: 'Engineering Insights',
    categorySlug: 'engineering-insights',
    badge: 'ADVANCED TECH',
    description: 'Engineering microvias (1+N+1, 2+N+2, Any-Layer HDI), fine-pitch BGA escape routing, and laser drilling constraints.',
    excerpt: 'Understanding microvias, fine-pitch components and high-density interconnect design.',
    image: '/images/capabilities-pcb.webp',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal DFM & Hardware Architect',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'August 14, 2026',
    updatedAt: 'August 30, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['HDI', 'Microvias', 'BGA Escape', 'Laser Drill', 'High Density'],
    tableOfContents: [
      { id: 'hdi-structure', title: '1. HDI Stackup Classifications' },
      { id: 'microvia-physics', title: '2. Laser Microvias vs. Mechanical Drills' },
      { id: 'bga-escape', title: '3. 0.4mm BGA Via-in-Pad (VIPPO) Routing' }
    ],
    sections: [
      {
        id: 'hdi-structure',
        title: 'HDI Stackup Classifications',
        paragraphs: [
          'High Density Interconnect (HDI) PCBs utilize microvia technology, buried vias, and thin dielectrics to achieve circuit densities impossible with standard through-hole manufacturing.',
          'Standard build types include Type I (1+N+1 with single microvia layer), Type II (2+N+2 stacked/staggered), and Any-Layer HDI where microvias span all interconnects.'
        ]
      },
      {
        id: 'microvia-physics',
        title: 'Laser Microvias vs. Mechanical Drills',
        paragraphs: [
          'CO2 and UV lasers create blind microvias down to 3 mil (0.075 mm) diameter with zero stub length, eliminating high-frequency signal degradation caused by mechanical drill stubs.'
        ]
      },
      {
        id: 'bga-escape',
        title: '0.4mm BGA Via-in-Pad (VIPPO) Routing',
        paragraphs: [
          'For ultra-fine pitch BGA packages (0.5mm and 0.4mm), traces cannot fit between surface pads. Via-in-Pad Plated Over (VIPPO) places copper-filled, planarized microvias directly inside the SMT pad.'
        ]
      }
    ],
    relatedSlugs: ['pcb-design-guidelines-dfm', 'pcb-layer-stackup-explained', 'pcb-manufacturing-capabilities']
  },
  {
    slug: 'pcb-manufacturing-capabilities',
    title: 'ATRONICS PCB Fabrication & Assembly Capabilities',
    category: 'Technical Specifications',
    categorySlug: 'technical-specs',
    badge: 'SPECS & TOLERANCES',
    description: 'Detailed specification sheets covering layer counts, standard/advanced tolerances, surface finishes (ENIG, Immersion Silver, HASL), and SMT placement limits.',
    excerpt: 'Explore layer counts, materials, tolerances and production capabilities.',
    image: '/images/about/about-advanced-manufacturing.webp',
    author: {
      name: 'Elena Rostova',
      role: 'Lead SMT Process Engineer',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'August 04, 2026',
    updatedAt: 'September 15, 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Capabilities', 'Specs', 'Tolerances', 'Surface Finish', 'IPC Standards'],
    tableOfContents: [
      { id: 'fab-capabilities', title: '1. PCB Fabrication Limits' },
      { id: 'assembly-capabilities', title: '2. SMT & THT Assembly Limits' },
      { id: 'surface-finishes', title: '3. Surface Finish Comparison' }
    ],
    sections: [
      {
        id: 'fab-capabilities',
        title: 'PCB Fabrication Limits',
        paragraphs: [
          'ATRONICS operates multi-line fabrication centers capable of rapid turnaround prototypes (24–48h) and high-volume mass runs (100,000+ panels monthly).'
        ],
        table: {
          headers: ['Specification', 'Standard Capability', 'Advanced Capability'],
          rows: [
            ['Layer Count', '2 to 16 Layers', '18 to 32+ Layers'],
            ['Max Panel Size', '500 x 600 mm', '610 x 1200 mm'],
            ['Min Board Thickness', '0.4 mm (16 mil)', '0.2 mm (8 mil)'],
            ['Max Board Thickness', '3.2 mm (125 mil)', '6.0 mm (236 mil)'],
            ['Base Copper Weight', '0.5 oz to 3 oz', '4 oz to 10 oz Heavy Copper'],
            ['Min Trace / Spacing', '4 / 4 mil (0.10 mm)', '3 / 3 mil (0.075 mm)']
          ]
        }
      },
      {
        id: 'assembly-capabilities',
        title: 'SMT & THT Assembly Limits',
        paragraphs: [
          'Our high-speed Yamaha and Fuji pick-and-place lines feature automated feeder calibration, 3D solder paste inspection (SPI), and dual-lane reflow ovens.'
        ],
        table: {
          headers: ['SMT Parameter', 'Production Limit', 'Verification Method'],
          rows: [
            ['Min Passive Size', '0201 (0.6 x 0.3 mm)', '3D AOI Optical'],
            ['Min BGA Pitch', '0.35 mm Fine Pitch', '3D X-Ray Inspection'],
            ['Component Range', '0201 to 50x50mm QFP, BGA, PoP', 'High-Speed Vision'],
            ['Through-Hole Soldering', 'Selective Soldering & Wave', 'IPC-A-610 Class 3']
          ]
        }
      },
      {
        id: 'surface-finishes',
        title: 'Surface Finish Comparison',
        paragraphs: [
          'We support Electroless Nickel Immersion Gold (ENIG), Lead-Free HASL, Immersion Silver, Immersion Tin, and Organic Solderability Preservatives (OSP).'
        ]
      }
    ],
    relatedSlugs: ['pcb-design-guidelines-dfm', 'pcb-assembly-faq', 'component-sourcing-guide']
  },
  {
    slug: 'pcb-assembly-faq',
    title: 'PCB Assembly & SMT Manufacturing FAQ',
    category: 'FAQ',
    categorySlug: 'faq',
    badge: 'ENGINEERING FAQ',
    description: 'Direct answers to critical questions regarding component sourcing, turnkey BOM delivery, quick-turn prototyping, and test coverage.',
    excerpt: 'Answers to common questions about SMT, BGA, component sourcing and assembly.',
    image: '/images/contact-hero.jpg',
    author: {
      name: 'Elena Rostova',
      role: 'Lead SMT Process Engineer',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'July 29, 2026',
    updatedAt: 'September 12, 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['FAQ', 'SMT', 'BOM', 'Turnaround', 'Testing'],
    tableOfContents: [
      { id: 'q-turnaround', title: '1. What is the turnaround time for quick-turn prototypes?' },
      { id: 'q-turnkey', title: '2. Do you offer full turnkey component sourcing?' },
      { id: 'q-nda', title: '3. How are proprietary Gerber and BOM files protected?' },
      { id: 'q-testing', title: '4. What testing procedures are performed before shipment?' }
    ],
    sections: [
      {
        id: 'q-turnaround',
        title: '1. What is the turnaround time for quick-turn prototypes?',
        paragraphs: [
          'For 2 to 4-layer boards with in-stock components, ATRONICS provides 24-hour to 48-hour express turnkey fabrication and assembly.',
          'Standard prototype turn is 5–7 business days, and volume production batches typically dispatch within 12–15 business days.'
        ]
      },
      {
        id: 'q-turnkey',
        title: '2. Do you offer full turnkey component sourcing?',
        paragraphs: [
          'Yes. ATRONICS procures 100% of components directly from authorized franchised distributors (Digi-Key, Mouser, Arrow, Future, Avnet). We also support consigned or hybrid BOM structures where clients provide custom ASICs.'
        ]
      },
      {
        id: 'q-nda',
        title: '3. How are proprietary Gerber and BOM files protected?',
        paragraphs: [
          'All customer files are protected under standard mutual non-disclosure agreements (NDAs) and stored in encrypted, access-restricted engineering environments.'
        ]
      },
      {
        id: 'q-testing',
        title: '4. What testing procedures are performed before shipment?',
        paragraphs: [
          'Every assembly undergoes automated optical inspection (AOI), 3D X-Ray for BGA/QFN solder joint integrity, flying probe electrical tests, and optional customer-supplied functional firmware programming.'
        ]
      }
    ],
    relatedSlugs: ['pcb-manufacturing-capabilities', 'prototype-to-production-checklist', 'component-sourcing-guide']
  },
  {
    slug: 'prototype-to-production-checklist',
    title: 'Prototype to Production Engineering Checklist',
    category: 'Engineering Guides',
    categorySlug: 'engineering-guides',
    badge: 'PRACTICAL CHECKLIST',
    description: 'A 10-point actionable checklist to take electronics hardware from laboratory benchtop prototypes to high-yield mass manufacturing.',
    excerpt: 'A practical checklist for moving an electronics design from prototype to production.',
    image: '/images/process-prototype.webp',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal DFM & Hardware Architect',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'July 18, 2026',
    updatedAt: 'August 24, 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['NPI', 'Prototyping', 'Manufacturing', 'Checklist', 'Yield'],
    tableOfContents: [
      { id: 'phase-npi', title: '1. New Product Introduction (NPI) Stages' },
      { id: 'bom-scrub', title: '2. BOM Lifecycle & Lead Time Scrub' },
      { id: 'test-fixture', title: '3. In-Circuit Test (ICT) Fixture Design' },
      { id: 'ten-point-checklist', title: '4. The 10-Point Engineering Checklist' }
    ],
    sections: [
      {
        id: 'phase-npi',
        title: 'New Product Introduction (NPI) Stages',
        paragraphs: [
          'Transitioning from an EVT (Engineering Validation Test) build to DVT (Design Validation Test) and PVT (Production Validation Test) requires strict revision control and manufacturing freeze dates.'
        ]
      },
      {
        id: 'bom-scrub',
        title: 'BOM Lifecycle & Lead Time Scrub',
        paragraphs: [
          'Verify that zero components on your BOM are marked as End-Of-Life (EOL), Not Recommended for New Designs (NRND), or have lead times exceeding 16 weeks without pre-approved secondary source alternates.'
        ]
      },
      {
        id: 'test-fixture',
        title: 'In-Circuit Test (ICT) Fixture Design',
        paragraphs: [
          'Place standard 35 mil test point pads with 75 mil center-to-center pitch on bottom layer power rails, reset pins, programming headers (SWD/JTAG), and critical communication buses.'
        ]
      },
      {
        id: 'ten-point-checklist',
        title: 'The 10-Point Engineering Checklist',
        bullets: [
          '1. Schematic frozen and signed off by lead engineer.',
          '2. 100% of BOM parts verified with manufacturer active status.',
          '3. Gerber files exported with layer assignment verification.',
          '4. Panelization borders equipped with fiducial markers and tooling holes.',
          '5. Test points added for automated boundary scan and ICT.',
          '6. Conformal coating masking areas defined if operating in humid environments.',
          '7. 3D STEP mechanical model checked against enclosure clearances.',
          '8. Thermal relief connections verified on all internal ground plane ties.',
          '9. Firmware programming header accessibility verified in final fixture.',
          '10. Production test procedure documentation generated and reviewed.'
        ]
      }
    ],
    relatedSlugs: ['pcb-design-guidelines-dfm', 'component-sourcing-guide', 'pcb-assembly-faq']
  },
  {
    slug: 'component-sourcing-guide',
    title: 'Component Sourcing & BOM Management Guide',
    category: 'Manufacturing',
    categorySlug: 'manufacturing',
    badge: 'SUPPLY CHAIN',
    description: 'Mitigating counterfeit IC risks, managing long-lead semiconductor parts, BOM cost optimization, and authorized franchise procurement.',
    excerpt: 'Key considerations for BOM management, component availability and counterfeit prevention.',
    image: '/images/process-engineer.webp',
    author: {
      name: 'Elena Rostova',
      role: 'Lead SMT Process Engineer',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'July 10, 2026',
    updatedAt: 'August 18, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['BOM', 'Supply Chain', 'Counterfeit Prevention', 'Procurement'],
    tableOfContents: [
      { id: 'counterfeit-risks', title: '1. Counterfeit Semiconductor Risks' },
      { id: 'bom-structuring', title: '2. Structuring a Clean Turnkey BOM' },
      { id: 'second-sourcing', title: '3. Second Sourcing & Pin-Compatible Alternates' }
    ],
    sections: [
      {
        id: 'counterfeit-risks',
        title: 'Counterfeit Semiconductor Risks',
        paragraphs: [
          'Open-market component brokers introduce massive risks of re-marked, refurbished, or defective silicon. ATRONICS maintains strict franchised chain-of-custody protocols with full Certificate of Conformance (CoC) traceability.'
        ]
      },
      {
        id: 'bom-structuring',
        title: 'Structuring a Clean Turnkey BOM',
        paragraphs: [
          'A production-ready BOM must contain: Item Number, Quantity per Board, Reference Designator, Manufacturer Name, Complete Manufacturer Part Number (MPN), Package/Footprint, and Description.'
        ]
      },
      {
        id: 'second-sourcing',
        title: 'Second Sourcing & Pin-Compatible Alternates',
        paragraphs: [
          'For commodity passives (resistors, MLCC capacitors) and standard linear regulators, always specify allowable secondary brands (e.g. Yageo, Murata, TDK, Samsung, Taiyo Yuden) to prevent assembly line pauses.'
        ]
      }
    ],
    relatedSlugs: ['prototype-to-production-checklist', 'gerber-file-preparation-guide', 'pcb-assembly-faq']
  },
  {
    slug: 'rf-microwave-pcb-design-guide',
    title: 'RF & Microwave PCB Design: High-Frequency Substrates',
    category: 'Engineering Insights',
    categorySlug: 'engineering-insights',
    badge: 'RF ENGINEERING',
    description: 'Substrate loss tangents, coplanar waveguide with ground (CPW-G), antenna feed networks, and EMI shielding cans for GHz RF boards.',
    excerpt: 'Understanding high-frequency RF layouts, Rogers substrates and wireless antenna matching.',
    image: '/images/industry-wireless-rf.webp',
    author: {
      name: 'Alexandre Chen',
      role: 'High-Speed Signal Integrity Specialist',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'June 29, 2026',
    updatedAt: 'August 08, 2026',
    readTime: '8 min read',
    featured: false,
    tags: ['RF', 'Microwave', 'Antenna', 'Rogers', 'Wireless'],
    tableOfContents: [
      { id: 'rf-substrates', title: '1. RF Substrate Material Comparison' },
      { id: 'transmission-lines', title: '2. Coplanar Waveguide (CPW-G) Design' },
      { id: 'rf-vias', title: '3. Ground Via Stitching & Shielding Cans' }
    ],
    sections: [
      {
        id: 'rf-substrates',
        title: 'RF Substrate Material Comparison',
        paragraphs: [
          'Standard FR-4 exhibits high dielectric loss and unpredictable Dk variations across GHz frequencies. For Wi-Fi 6E/7 (6 GHz), 5G Sub-6, and 24 GHz radar, Rogers 4003C or 4350B ceramic laminates are recommended.'
        ]
      },
      {
        id: 'transmission-lines',
        title: 'Coplanar Waveguide (CPW-G) Design',
        paragraphs: [
          'Grounded Coplanar Waveguide (CPW-G) incorporates ground planes alongside the trace on the same layer, offering tight electromagnetic confinement and reduced dispersion.'
        ]
      },
      {
        id: 'rf-vias',
        title: 'Ground Via Stitching & Shielding Cans',
        paragraphs: [
          'Provide dedicated solder mask openings for surface-mount metal RF shielding cans to isolate sensitive LNA and transceiver circuitry from switching power supply noise.'
        ]
      }
    ],
    relatedSlugs: ['controlled-impedance-high-speed-pcb', 'designing-for-emi-emc', 'pcb-layer-stackup-explained']
  },
  {
    slug: 'thermal-management-power-pcb',
    title: 'Thermal Management in High-Power Electronics PCBs',
    category: 'Design Guidelines',
    categorySlug: 'design-guidelines',
    badge: 'POWER HARDWARE',
    description: 'Heavy copper boards, thermal via arrays, aluminum metal core substrates (MCPCB), and heatsink thermal interface materials (TIM).',
    excerpt: 'Techniques for managing high heat dissipation in power converters, motor drives and LED modules.',
    image: '/images/industry-power-electronics.webp',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal DFM & Hardware Architect',
      avatar: '/images/about/founder.webp'
    },
    publishedAt: 'June 15, 2026',
    updatedAt: 'July 25, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['Thermal', 'Power Electronics', 'Heavy Copper', 'MCPCB', 'Heatsinks'],
    tableOfContents: [
      { id: 'thermal-via-arrays', title: '1. Thermal Via Matrix Calculations' },
      { id: 'heavy-copper', title: '2. Heavy Copper & Aluminum Substrates' },
      { id: 'thermal-simulation', title: '3. FEA Thermal Simulation & Heat Pipes' }
    ],
    sections: [
      {
        id: 'thermal-via-arrays',
        title: 'Thermal Via Matrix Calculations',
        paragraphs: [
          'Placing a dense array of 12 mil (0.30 mm) plated through-hole vias filled with conductive epoxy directly under power MOSFET thermal pads transfers heat efficiently to bottom-side ground planes.'
        ]
      },
      {
        id: 'heavy-copper',
        title: 'Heavy Copper & Aluminum Substrates',
        paragraphs: [
          'High-current power electronics (EV motor drives, solar inverters) benefit from 3 oz to 6 oz heavy copper layers or Metal Core PCBs (MCPCB) with 2.0 W/m-K thermally conductive prepreg.'
        ]
      },
      {
        id: 'thermal-simulation',
        title: 'FEA Thermal Simulation & Heat Pipes',
        paragraphs: [
          'Perform electro-thermal co-simulation during layout to identify localized hotspots and calculate required heatsink surface areas under full ambient load.'
        ]
      }
    ],
    relatedSlugs: ['pcb-design-guidelines-dfm', 'pcb-manufacturing-capabilities', 'pcb-layer-stackup-explained']
  }
]

/**
 * Utility functions for filtering, querying and retrieval
 */
export const getFeaturedResource = () => {
  return RESOURCES_DATA.find(r => r.featured) || RESOURCES_DATA[0]
}

export const getResourceBySlug = (slug) => {
  return RESOURCES_DATA.find(r => r.slug === slug)
}

export const getRelatedResources = (relatedSlugs) => {
  if (!relatedSlugs || !relatedSlugs.length) {
    return RESOURCES_DATA.slice(0, 3)
  }
  return RESOURCES_DATA.filter(r => relatedSlugs.includes(r.slug)).slice(0, 3)
}

export const filterResources = (query = '', categoryId = 'all') => {
  let filtered = RESOURCES_DATA

  // Filter by category
  if (categoryId && categoryId !== 'all') {
    if (categoryId === 'engineering-guides') {
      filtered = filtered.filter(r => r.category === 'Engineering Guides' || r.category === 'Engineering Guide')
    } else if (categoryId === 'engineering-insights') {
      filtered = filtered.filter(r => r.category === 'Engineering Insights')
    } else if (categoryId === 'technical-specs') {
      filtered = filtered.filter(r => r.category === 'Technical Specifications')
    } else if (categoryId === 'faq') {
      filtered = filtered.filter(r => r.category === 'FAQ')
    } else if (categoryId === 'design-guidelines') {
      filtered = filtered.filter(r => r.category === 'Design Guidelines')
    } else if (categoryId === 'manufacturing') {
      filtered = filtered.filter(r => r.category === 'Manufacturing' || r.category === 'Manufacturing Guide')
    }
  }

  // Filter by query string
  if (query && query.trim()) {
    const q = query.toLowerCase().trim()
    filtered = filtered.filter(r => {
      const matchTitle = r.title.toLowerCase().includes(q)
      const matchDesc = r.description.toLowerCase().includes(q)
      const matchExcerpt = r.excerpt.toLowerCase().includes(q)
      const matchTags = r.tags.some(t => t.toLowerCase().includes(q))
      const matchCat = r.category.toLowerCase().includes(q)
      return matchTitle || matchDesc || matchExcerpt || matchTags || matchCat
    })
  }

  return filtered
}
