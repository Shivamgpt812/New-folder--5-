/**
 * ATRONICS Industries Engineering Data Layer
 * Comprehensive technical data, architecture breakdowns, regulatory matrices,
 * application sub-systems, and FAQs for 9 key industry sectors.
 */

export const INDUSTRIES_DATA = {
  'industrial-automation': {
    slug: 'industrial-automation',
    quoteServiceKey: 'Turnkey PCB Assembly',
    title: 'Industrial Automation & Smart Manufacturing',
    sectorBadge: 'MISSION-CRITICAL INDUSTRIAL CONTROL',
    tagline: 'Ruggedized Electronics Built to Withstand High Vibration, Wide Thermal Cycles & Harsh 24/7 Factory Environments',
    heroDescription: 'From high-speed EtherCAT motion controllers and programmable logic controllers (PLCs) to distributed I/O modules, ATRONICS designs and manufactures industrial-grade electronics with extended operational lifecycles and IEC 61508 functional safety.',
    heroImage: '/images/industries/hero-industrial.jpg',
    secondaryImage: '/images/industries/industry-industrial-automation.webp',
    certifications: ['IEC 61508 SIL 2/3', 'IPC-A-610 Class 3', 'ISO 9001:2015', 'UL 508A Industrial Control'],
    metrics: [
      { label: 'Operating Temp Range', value: '-40°C to +105°C' },
      { label: 'Field Reliability (MTBF)', value: '> 500,000 Hrs' },
      { label: 'Vibration Resistance', value: '20G RMS (IEC 60068)' },
      { label: 'Component Lifecycle', value: '10+ Years Support' }
    ],
    challengesSolved: [
      {
        title: 'Severe Electrical Noise & Transient Surges',
        description: 'Galvanic isolation on all I/O channels, TVS surge protection, differential signaling, and isolated DC-DC converters preventing inductive motor kickback damage.',
        icon: 'Zap'
      },
      {
        title: 'Extreme Vibration & Mechanical Shock',
        description: 'Heavy copper boards, anchored through-hole power components, corner-bonded BGAs, and silicone potting compound meeting IEC 60068-2-6 test standards.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Continuous Thermal Stress & Dust Ingress',
        description: 'Automated selective conformal coating (acrylic/polyurethane) preventing moisture and conductive dust short circuits, with copper thermal relief planes.',
        icon: 'Cpu'
      },
      {
        title: 'Deterministic Real-Time Fieldbus Communication',
        description: 'Strict length-matched differential routing for EtherCAT, PROFINET, Modbus-TCP, and CANopen protocols with ultra-low jitter and sub-microsecond synchronization.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'Programmable Logic Controllers (PLCs) & PACs',
        description: 'Multi-core embedded compute boards with redundant power supply rails and hot-swappable backplane interfaces.',
        deliverables: ['12-Layer High-Density Backplane PCB', 'Opto-Isolated Digital/Analog Inputs', 'Hardware Watchdog & Safe-State Relays']
      },
      {
        name: 'Multi-Axis Servo & Stepper Motor Drives',
        description: 'High-current MOSFET/IGBT inverter power stages with integrated current sensing, encoder feedback, and dynamic braking.',
        deliverables: ['3oz Heavy Copper Stacks', 'Integrated Shunt Resistors', 'Direct Heat Sink Thermal Pads']
      },
      {
        name: 'Industrial Human-Machine Interfaces (HMIs)',
        description: 'Capacitive touch display controller boards with sunlight-readable backlighting, LVDS/MIPI video, and wide-range DC input.',
        deliverables: ['Ruggedized Display Drivers', 'ESD 15kV Air Discharge Protection', 'EMI Gasket Grounding Ring']
      },
      {
        name: 'Distributed Edge I/O & Gateway Modules',
        description: 'DIN-rail mountable smart sensor aggregators with isolated RS-485, dual-port Gigabit Ethernet, and cellular backhaul.',
        deliverables: ['Compact DIN Form Factor', 'Dual MAC ID Serialized EEPROMs', 'Over-the-Air (OTA) Safe Bootloader']
      }
    ],
    standardsMatrix: [
      { standard: 'IPC-A-610 Class 3', scope: 'High-Reliability Electronic Assemblies', status: '100% Certified' },
      { standard: 'IEC 61508 / 62061', scope: 'Functional Safety of Safety-Related Systems', status: 'Compliant Design' },
      { standard: 'EN 61000-6-2 / 6-4', scope: 'Immunity & Emission for Industrial Environments', status: 'Tested & Verified' },
      { standard: 'UL 94V-0', scope: 'Flame Retardant PCB Laminate & Resins', status: 'Certified Substrates' }
    ],
    faqs: [
      {
        question: 'Do you provide conformal coating for moisture and chemical protection?',
        answer: 'Yes. We operate automated selective spray conformal coating lines applying acrylic, silicone, or polyurethane coatings with UV blacklight inspection to ensure complete coverage against humidity and corrosive chemicals.'
      },
      {
        question: 'Can you support long-term product lifecycles without component obsolescence?',
        answer: 'We provide active BOM lifecycle monitoring with guaranteed 10+ year availability roadmaps, sourcing only from authorized Tier-1 distributors with full Certificates of Conformance (CoC).'
      }
    ]
  },

  'automotive-mobility': {
    slug: 'automotive-mobility',
    quoteServiceKey: 'PCB Assembly',
    category: 'AUTOMOTIVE & EV HARDWARE',
    title: 'Automotive Electronics & EV Mobility',
    tagline: 'High-Voltage Powertrain, Battery Management Systems (BMS) & ADAS Sensor Boards',
    heroDescription: 'Delivering zero-defect automotive electronics engineered for 800V EV architectures, autonomous vehicle sensor suites, and connected telematics complying with IATF 16949 and AEC-Q100 standards.',
    heroImage: '/images/industries/hero-automotive.jpg',
    secondaryImage: '/images/industries/industry-automotive.webp',
    certifications: ['AEC-Q100 / Q200 Qualified', 'ISO 26262 ASIL-D Ready', 'IPC-6012 Class 3 / Automotive', 'RoHS / ELV Compliant'],
    metrics: [
      { label: 'Voltage Insulation', value: 'Up to 1500V DC' },
      { label: 'Thermal Cycling', value: '-40°C to +125°C' },
      { label: 'BGA Solder Voiding', value: '< 8% (X-Ray Verified)' },
      { label: 'Safety Integrity', value: 'ISO 26262 ASIL B-D' }
    ],
    challengesSolved: [
      {
        title: 'High-Voltage Creepage & Clearance (800V+)',
        description: 'Milled isolation slots, high CTI (Comparative Tracking Index > 600V) FR-4 laminates, and double-insulated potting barriers preventing flashover arcing.',
        icon: 'Zap'
      },
      {
        title: 'Automotive EMI / High-Current Switching Noise',
        description: 'Multi-layer shielding planes, ferrite filtering beads, and controlled di/dt gate drive routing meeting CISPR 25 Class 5 automotive emission limits.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Under-the-Hood Thermal Shock',
        description: 'High-Tg (TG180+) substrates, thick copper plating in via barrels (≥25µm), and low-CTE materials preventing thermal micro-cracking.',
        icon: 'Cpu'
      },
      {
        title: 'Functional Safety & Redundant Compute',
        description: 'Dual-core lockstep MCUs, redundant CAN-FD / Ethernet PHYs, and hardware watchdog supervisory circuits meeting ASIL-D requirements.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'Battery Management Systems (BMS Master & Slaves)',
        description: 'High-voltage cell monitoring boards measuring microvolt cell deltas and isolated isoSPI / CAN communication.',
        deliverables: ['High-CTI Multi-Layer Substrates', 'Galvanic High-Voltage Isolation', 'Precision Thermistor Sensor Matrix']
      },
      {
        name: 'On-Board Chargers (OBC) & DC-DC Converters',
        description: 'Bi-directional Silicon Carbide (SiC) power stages with heavy copper traces delivering 11kW–22kW charging efficiency.',
        deliverables: ['Heavy Copper 4oz-6oz Inner Layers', 'Direct Heatsink Mounting Screws', 'Planar Transformer Integration']
      },
      {
        name: 'ADAS Radar, Camera & Lidar Processing Modules',
        description: 'High-frequency 77 GHz RF radar front-ends with Rogers laminates and multi-gigabit camera serializer links.',
        deliverables: ['Hybrid Rogers/FR4 Stackup', 'Controlled Impedance ±5%', 'Micro-BGA 0.35mm Pitch Mounting']
      },
      {
        name: 'In-Cabin Telematics & Gateway Controllers',
        description: 'Connected 4G/5G, GNSS, and secure automotive Ethernet gateway boards with hardware cryptographic security.',
        deliverables: ['Secure Hardware Element', 'Multiple CAN-FD Transceivers', 'Automotive Connector Integration']
      }
    ],
    standardsMatrix: [
      { standard: 'ISO 26262', scope: 'Road Vehicles Functional Safety (ASIL A-D)', status: 'Design Verification' },
      { standard: 'CISPR 25 Class 5', scope: 'Automotive Radio Disturbance Limits', status: 'EMC Pre-Compliance' },
      { standard: 'AEC-Q100 / Q200', scope: 'Stress Test Qualification for Automotive ICs', status: '100% Sourced' },
      { standard: 'IPC-6012DA', scope: 'Automotive Addendum for Rigid PCBs', status: 'Certified Fabrication' }
    ],
    faqs: [
      {
        question: 'Do you only use AEC-Q qualified components for automotive builds?',
        answer: 'Yes. For automotive projects we strictly source AEC-Q100 (ICs), AEC-Q101 (Discretes), and AEC-Q200 (Passives) components with full manufacturer lot traceability.'
      },
      {
        question: 'Can you handle high-copper boards for EV power distribution units?',
        answer: 'We manufacture PCBs with up to 6oz copper thickness and heavy busbar integration, designed to carry continuous currents in excess of 300A.'
      }
    ]
  },

  'medical-devices': {
    slug: 'medical-devices',
    quoteServiceKey: 'PCB Design',
    category: 'HEALTHCARE & DIAGNOSTIC ELECTRONICS',
    title: 'Medical Devices & Diagnostic Hardware',
    tagline: 'Life-Critical Precision, Low-Noise Sensor Front-Ends & Wearable Biomedical Electronics',
    heroDescription: 'From patient monitors, defibrillators, and dialysis controllers to implantable sensors and point-of-care analyzers, ATRONICS builds healthcare electronics with zero-failure tolerance, biocompatible coatings, and ISO 13485 alignment.',
    heroImage: '/images/industries/hero-medical.jpg',
    secondaryImage: '/images/industries/industry-medical-devices.webp',
    certifications: ['ISO 13485 Alignment', 'IPC-A-610 Class 3 Medical', 'IEC 60601-1 Electrical Safety', 'FDA Traceability Ready'],
    metrics: [
      { label: 'Patient Isolation', value: '4kV AC (2x MOPP)' },
      { label: 'Signal-to-Noise Ratio', value: '> 110 dB' },
      { label: 'Traceability Level', value: '100% Serialized Device History' },
      { label: 'Inspection Protocol', value: '100% 3D AOI & X-Ray' }
    ],
    challengesSolved: [
      {
        title: 'Ultra-Low Noise Bio-Potential Amplification',
        description: 'Sub-microvolt ECG/EMG signal capture with guarded high-impedance routing, star-grounding topology, and ultra-low leakage dielectric substrates.',
        icon: 'Zap'
      },
      {
        title: '2x MOPP Patient Electrical Isolation',
        description: 'Rigorous 8.0mm creepage and clearance distances, high-isolation transformers, and optical barriers complying with IEC 60601-1 safety mandates.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Miniaturization for Wearables & Diagnostic Probes',
        description: 'High-Density Interconnect (HDI) with laser microvias down to 0.075mm, 01005 passives, and ultra-thin flex/rigid-flex multi-layer circuits.',
        icon: 'Cpu'
      },
      {
        title: 'Strict Regulatory Device History Records (DHR)',
        description: 'Complete component serialization, lot-level traceability, automated test logs, and calibration records ready for FDA / CE MDR audits.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'Patient Vital Signs Monitors & Ventilators',
        description: 'Multi-parameter acquisition boards for SpO2, NIBP, ECG, and EtCO2 with isolated patient-facing front-ends.',
        deliverables: ['IEC 60601-1 Isolated Channels', 'Precision 24-Bit ADC Integration', 'Medical-Grade DC Power Conditioning']
      },
      {
        name: 'Portable Point-of-Care Blood & Fluid Analyzers',
        description: 'Microfluidic pump drivers, optical spectrophotometer sensors, and thermal heating chambers in battery-operated handhelds.',
        deliverables: ['Rigid-Flex Miniaturized Assembly', 'Precision Temperature Controllers', 'Low-Power Sleep Modes']
      },
      {
        name: 'Ultrasound & Surgical Imaging Probes',
        description: 'Multi-channel beamforming acoustic transceiver arrays with high-density coaxial micro-connectors.',
        deliverables: ['High-Frequency Impedance Matched Stacks', 'Electromagnetic Shielding Cans', 'Fine-Pitch Micro-BGA Soldering']
      },
      {
        name: 'Continuous Glucose Monitors (CGM) & Wearables',
        description: 'Ultra-compact flexible substrate electronics with bluetooth low-energy SoC and skin-safe encapsulation.',
        deliverables: ['Flexible Polyimide Base Layer', '01005 Chip Mounting', 'IP68 Watertight Overmolding']
      }
    ],
    standardsMatrix: [
      { standard: 'IEC 60601-1 / 60601-1-2', scope: 'Medical Electrical Equipment Safety & EMC', status: 'Compliant Design' },
      { standard: 'IPC-A-610 Class 3', scope: 'High-Performance Electronic Assemblies', status: '100% Certified' },
      { standard: 'ISO 14971', scope: 'Application of Risk Management to Medical Devices', status: 'FMEA Process' },
      { standard: 'RoHS 3 / REACH', scope: 'Restriction of Hazardous Substances', status: 'Certified Materials' }
    ],
    faqs: [
      {
        question: 'Do you provide full Device History Records (DHR) for regulatory submissions?',
        answer: 'Yes. Every medical assembly build includes complete traceability records: component lot numbers, machine placement logs, reflow thermal profiles, and 3D AOI/X-Ray pass reports.'
      },
      {
        question: 'How do you ensure patient isolation meets IEC 60601-1 standards?',
        answer: 'We implement 2x MOPP (Means of Patient Protection) with 8mm creepage/clearance barriers, 4000V isolation transformers, optocouplers, and Hi-Pot dielectric breakdown testing.'
      }
    ]
  },

  'iot-connected-hardware': {
    slug: 'iot-connected-hardware',
    quoteServiceKey: 'PCB Design',
    category: 'INTERNET OF THINGS & SMART SENSORS',
    title: 'IoT & Connected Smart Hardware',
    tagline: 'Ultra-Low Power Sensor Nodes, Cellular NB-IoT/LTE-M, LoRaWAN & Compact Wearables',
    heroDescription: 'From battery-powered environmental monitors with 10-year lifespans to high-throughput edge gateways, ATRONICS builds connected hardware with optimized RF antennas, micro-amp sleep currents, and robust cloud connectivity.',
    heroImage: '/images/industries/hero-iot.jpg',
    secondaryImage: '/images/industries/industry-iot.webp',
    certifications: ['FCC / CE Pre-Compliance', 'PTCRB Cellular Ready', 'Bluetooth SIG Qualified', 'IP67 Ingress Rated'],
    metrics: [
      { label: 'Deep Sleep Current', value: '< 2.5 µA' },
      { label: 'Battery Lifespan', value: 'Up to 10 Years' },
      { label: 'Wireless Protocols', value: 'LoRa, BLE, NB-IoT, Wi-Fi 6' },
      { label: 'RF Tuning Accuracy', value: 'VSWR < 1.3:1' }
    ],
    challengesSolved: [
      {
        title: 'Micro-Power Battery Life Optimization',
        description: 'Power profiling, low-Iq buck-boost regulators, load-switch domain isolation, and coin-cell internal resistance mitigation.',
        icon: 'Zap'
      },
      {
        title: 'On-Board Antenna Matching & Range',
        description: 'Vector network analyzer (VNA) tuned inverted-F (IFA) PCB antennas and miniature chip antennas maximizing wireless range.',
        icon: 'Wifi'
      },
      {
        title: 'Ultra-Compact Form Factor Miniaturization',
        description: 'Multi-layer HDI designs with blind microvias, double-sided 0201 placement, and integrated ground shields.',
        icon: 'Cpu'
      },
      {
        title: 'Global Cellular Regulatory Pre-Certification',
        description: 'FCC Part 15 and RED compliance routing with harmonic filtering and shield cans preventing costly test lab respins.',
        icon: 'ShieldCheck'
      }
    ],
    applications: [
      {
        name: 'Smart Agriculture & Soil Moisture Probes',
        description: 'Solar-harvesting LoRaWAN sensor nodes with sub-GHz long-range telemetry and IP67 waterproof enclosures.',
        deliverables: ['Low-Power Energy Harvesting Circuit', 'Sub-GHz Antenna Matching', 'IP67 Conformal Coating']
      },
      {
        name: 'Asset Tracking & Fleet Telematics Beacons',
        description: 'LTE-M/NB-IoT trackers with GNSS multi-constellation satellite positioning and accelerometer motion wake-up.',
        deliverables: ['Cellular RF Front-End', 'Li-SOCl2 Battery Management', 'Tamper-Detection Sensors']
      },
      {
        name: 'Smart Metering & Grid Edge Sensors',
        description: 'Wireless electricity and gas meter interfaces with ultra-reliable frequency hopping and 15-year battery life.',
        deliverables: ['Industrial Temperature Rating', 'Tamper-Proof Flash Security', 'Over-Voltage Surge Protection']
      },
      {
        name: 'Smart Building Environmental Gateways',
        description: 'Multi-sensor nodes monitoring CO2, TVOC, temperature, and occupancy with BLE mesh and Wi-Fi bridging.',
        deliverables: ['Calibrated Gas Sensor Layout', 'Multi-Radio Coexistence Filtering', 'USB-C / PoE Power Support']
      }
    ],
    standardsMatrix: [
      { standard: 'FCC Part 15 Subpart B & C', scope: 'Unintentional & Intentional Radiators', status: 'Pre-Compliance Tested' },
      { standard: 'ETSI EN 300 220 / 328', scope: 'European Radio Equipment Directive (RED)', status: 'Certified Layout' },
      { standard: 'PTCRB', scope: 'Cellular Device Interoperability', status: 'Carrier Ready' },
      { standard: 'Bluetooth SIG', scope: 'Bluetooth 5.3 Core Specification', status: 'Verified Protocol' }
    ],
    faqs: [
      {
        question: 'Can you help tune our custom PCB antenna for maximum range?',
        answer: 'Yes! We perform 3D electromagnetic simulations and physical Vector Network Analyzer (VNA) testing to match the Pi-network impedance to exactly 50Ω, achieving VSWR < 1.3:1.'
      },
      {
        question: 'How do you achieve 10-year battery life in IoT devices?',
        answer: 'We design power architectures with sub-2µA deep sleep regulators, power-gated sensors, duty-cycled radio bursts, and zero-leakage capacitors.'
      }
    ]
  },

  'power-electronics': {
    slug: 'power-electronics',
    quoteServiceKey: 'PCB Fabrication',
    category: 'HIGH VOLTAGE & POWER CONVERSION',
    title: 'Power Electronics & Energy Systems',
    tagline: 'High-Efficiency Silicon Carbide (SiC) & Gallium Nitride (GaN) Power Inverters & Heavy Copper PCBs',
    heroDescription: 'Engineering next-generation power electronics for solar inverters, grid energy storage, high-power DC power supplies, and motor drives with up to 6oz copper layers and superior thermal management.',
    heroImage: '/images/industries/hero-power.jpg',
    secondaryImage: '/images/industries/industry-power-electronics.webp',
    certifications: ['UL 94V-0 High Flammability', 'Heavy Copper IPC-2152', 'High-Voltage Creepage Certified', 'ISO 9001:2015'],
    metrics: [
      { label: 'Power Conversion Density', value: 'Up to 250 kW' },
      { label: 'Copper Thickness', value: 'Up to 6.0 oz' },
      { label: 'Switching Frequency', value: 'Up to 1 MHz (GaN/SiC)' },
      { label: 'Thermal Dissipation', value: '> 98.5% Efficiency' }
    ],
    challengesSolved: [
      {
        title: 'High-Current Carrying Capacity & I²R Losses',
        description: 'Heavy copper multi-layer boards (3oz to 6oz), copper coin thermal inserts, and thick busbars designed using IPC-2152 current-carrying charts.',
        icon: 'Zap'
      },
      {
        title: 'Fast dv/dt & di/dt GaN/SiC Switching Transients',
        description: 'Ultra-low parasitic inductance power loops (< 2nH), Kelvin-source gate connections, and symmetrical split-phase routing.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Thermal Dissipation & Hot-Spot Elimination',
        description: 'Thermally conductive prepregs (up to 3.0 W/m·K), direct aluminum-core MCPCBs, and dense thermal via arrays under power MOSFETs.',
        icon: 'Cpu'
      },
      {
        title: 'Galvanic High-Voltage Isolation (1000V+)',
        description: 'Certified optocouplers and magnetic isolators with 15mm creepage barriers and high-CTI dielectric substrates.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'Solar Grid Inverters & Microinverters',
        description: 'High-efficiency MPPT DC-DC boost converters and 3-phase grid-tied SiC inverters with 99% peak efficiency.',
        deliverables: ['Heavy Copper 4oz Stacks', 'High-Voltage Surge Suppression', 'Planar Inductor Substrates']
      },
      {
        name: 'Battery Energy Storage Systems (BESS) Inverters',
        description: 'Bi-directional multi-megawatt battery power conversion systems (PCS) with liquid-cooled heat exchangers.',
        deliverables: ['Multi-Busbar Copper Interfaces', 'Current Sensor Hall IC Routing', 'Isolated Gate Driver Boards']
      },
      {
        name: 'High-Voltage DC-DC Power Supplies',
        description: 'Resonant LLC converters and phase-shifted full-bridge supplies for telecom server racks and industrial equipment.',
        deliverables: ['Resonant Tank Layout', 'Zero-Voltage Switching (ZVS) Gate Paths', 'Thermal Heat Sink Mounting']
      },
      {
        name: 'Industrial Variable Frequency Drives (VFD)',
        description: '3-phase AC motor drive inverters with integrated dynamic braking IGBTs and current feedback amplifiers.',
        deliverables: ['High-Power Creepage Slots', 'Snubber Circuit Integration', 'Isolated Control Board Stacks']
      }
    ],
    standardsMatrix: [
      { standard: 'IPC-2152', scope: 'Standard for Determining Current-Carrying Capacity in PCB Design', status: '100% Calculated' },
      { standard: 'UL 61800-5-1', scope: 'Adjustable Speed Electrical Power Drive Systems', status: 'Safety Verified' },
      { standard: 'IEC 62109-1 / 2', scope: 'Safety of Power Converters for Photovoltaic Power Systems', status: 'Compliant Design' },
      { standard: 'IEC 60664-1', scope: 'Insulation Coordination for Equipment within Low-Voltage Systems', status: 'Certified Creepage' }
    ],
    faqs: [
      {
        question: 'How do you design for High-Frequency GaN and SiC switching without ringing?',
        answer: 'We layout extremely compact power loops with integrated high-frequency ceramic bypass capacitors placed directly across the switch nodes, keeping stray parasitic loop inductance below 2 nanohenries.'
      },
      {
        question: 'What is the maximum copper thickness you can manufacture?',
        answer: 'We fabricate heavy copper boards with up to 6.0 oz copper on both inner and outer layers, capable of handling hundreds of continuous amperes with low temperature rise.'
      }
    ]
  },

  'robotics-automation': {
    slug: 'robotics-automation',
    quoteServiceKey: 'Turnkey PCB Assembly',
    category: 'ROBOTICS & MECHATRONIC SYSTEMS',
    title: 'Robotics & Autonomous Machines',
    tagline: 'Multi-Axis Motion Control, Lidar Sensor Fusion & Embedded AI Edge Compute',
    heroDescription: 'From warehouse Autonomous Mobile Robots (AMRs) and surgical robotic manipulators to multi-rotor UAVs, ATRONICS engineers robust multi-layer electronics capable of high shock, intense computational loads, and precise closed-loop servo control.',
    heroImage: '/images/industries/industry-robotics.webp',
    secondaryImage: '/images/industries/hero-industrial.jpg',
    certifications: ['ISO 9001:2015', 'IPC-A-610 Class 3', 'ANSI/RIA R15.06 Robot Safety', 'CE / FCC Ready'],
    metrics: [
      { label: 'Control Loop Frequency', value: 'Up to 50 kHz' },
      { label: 'Shock Resistance', value: '50G Half-Sine' },
      { label: 'Camera / Sensor Interfaces', value: 'MIPI CSI-2, GMSL2, Lidar' },
      { label: 'Servo Power Efficiency', value: '> 97%' }
    ],
    challengesSolved: [
      {
        title: 'Multi-Axis Dense Motor Drive Integration',
        description: 'Compact 6-axis and 8-axis integrated motor drivers with high-resolution magnetic encoder feedback and Field-Oriented Control (FOC).',
        icon: 'Cpu'
      },
      {
        title: 'High-Bandwidth Sensor Fusion & Vision Routing',
        description: 'Impedance-matched differential routing for MIPI CSI-2 cameras, GMSL2 serialized links, and Time-of-Flight (ToF) sensors.',
        icon: 'Zap'
      },
      {
        title: 'High G-Force Mechanical Shock & Vibration',
        description: 'Reinforced PCB mechanical mounting hole spacing, underfilled BGAs, and low-profile connectors rated for 50G shock loads.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Thermal Dissipation in Enclosed Robot Joints',
        description: 'Direct-bond copper thermal sinks and thermal relief vias channeling heat directly out to the robot arm chassis.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'Warehouse Autonomous Mobile Robot (AMR) Motherboards',
        description: 'Central navigation computers interfacing with safety lidars, 3D depth cameras, wheel hub motors, and Wi-Fi mesh.',
        deliverables: ['High-Performance SOM Carrier Board', 'Safety E-Stop Interlock Circuitry', 'Battery Management Interfacing']
      },
      {
        name: 'Collaborative Robot (Cobot) Joint Controllers',
        description: 'Ultra-compact round PCB assemblies embedded directly inside harmonic drive joints with torque strain-gauge amplifiers.',
        deliverables: ['Circular Multi-Layer Stacks', 'Integrated Dual Encoders', 'EtherCAT Sub-Microsecond Fieldbus']
      },
      {
        name: 'Drone & UAV Flight Controllers & ESCs',
        description: 'High-power Electronic Speed Controllers (ESCs) and flight computers with triple-redundant IMUs and barometer filtering.',
        deliverables: ['Lightweight High-Tg Rigid-Flex', '4-in-1 60A ESC Power Stage', 'Vibration-Isolated IMU Island']
      },
      {
        name: 'Robotic Gripper & Tactile End-Effector Boards',
        description: 'Miniature sensor arrays with tactile pressure sensing, micro-stepper motor driver, and CAN bus interface.',
        deliverables: ['High-Density HDI Layout', 'Pressure Sensor Matrix Interfacing', 'Flexible Cable Tail Harnesses']
      }
    ],
    standardsMatrix: [
      { standard: 'ISO 10218-1 / 2', scope: 'Robots and Robotic Devices Safety Requirements', status: 'Design Verification' },
      { standard: 'IPC-6012 Class 3', scope: 'High-Reliability Circuit Boards', status: 'Certified Production' },
      { standard: 'IEC 60068-2-27', scope: 'Mechanical Shock Resistance (50G)', status: 'Validated Hardware' },
      { standard: 'EN 61000-6-2', scope: 'Electromagnetic Immunity for Industrial Robotics', status: 'EMC Compliant' }
    ],
    faqs: [
      {
        question: 'Can you design circular or custom-shaped boards for robotic joints?',
        answer: 'Yes. We frequently design circular, annular, and custom 3D contoured rigid-flex boards designed to fit tightly inside robotic arm joint housings with central cable pass-throughs.'
      },
      {
        question: 'How do you isolate motor electrical noise from sensitive IMU gyroscopes?',
        answer: 'We isolate the motor driver power ground from sensitive sensor logic grounds using ferrite bead chokes, split planes, and physically separated placement islands.'
      }
    ]
  },

  'wireless-rf': {
    slug: 'wireless-rf',
    quoteServiceKey: 'PCB Design',
    category: 'RADIO FREQUENCY & MICROWAVE HARDWARE',
    title: 'Wireless, RF & Microwave Systems',
    tagline: 'High-Frequency 5G, Sub-6 GHz, Millimeter Wave & Phased Array Antenna Hardware',
    heroDescription: 'Engineering ultra-low loss RF and microwave circuit boards up to 77 GHz on Rogers, Taconic, and PTFE substrates with precision impedance modeling, coplanar waveguides, and anechoic chamber testing.',
    heroImage: '/images/industries/industry-wireless-rf.webp',
    secondaryImage: '/images/industries/hero-iot.jpg',
    certifications: ['Rogers / Taconic Certified', 'IPC-6012 Class 3 High-Frequency', 'FCC / CE Radiated Compliance', 'TDR Impedance Verified'],
    metrics: [
      { label: 'Frequency Capability', value: 'Up to 77 GHz' },
      { label: 'Dielectric Tolerance (Dk)', value: '± 0.05' },
      { label: 'Impedance Accuracy', value: '± 5% (TDR Verified)' },
      { label: 'Phase Matching', value: '< 1° Skew @ 10 GHz' }
    ],
    challengesSolved: [
      {
        title: 'Dielectric Loss & High-Frequency Signal Attenuation',
        description: 'Low-loss substrate selection (Rogers RO4350B, RO4003C, Megtron 6) with smooth copper foil profile ($R_q < 0.5\mu\text{m}$) preventing skin effect loss.',
        icon: 'Zap'
      },
      {
        title: 'Tight Microstrip & Coplanar Waveguide Tolerances',
        description: 'Laser Direct Imaging (LDI) etching achieving ±0.5 mil trace width tolerance with continuous ground via stitching walls.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Inter-Modulation Distortion (PIM) & Cavity Resonance',
        description: 'Gold ENIG / Silver immersion surface finishes and grounded cavity walls eliminating RF harmonic intermodulation.',
        icon: 'Cpu'
      },
      {
        title: 'Phased Array Antenna Phase & Amplitude Balance',
        description: 'Sub-millimeter serpentine delay lines tuned for precise beamforming phase alignment across 64-element antenna arrays.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: '5G Massive MIMO & Small Cell Base Stations',
        description: 'Multi-channel RF transceiver front-ends with integrated GaN power amplifiers (PAs) and low-noise amplifiers (LNAs).',
        deliverables: ['Hybrid Rogers + FR-4 Stackup', 'High-Isolation Guard Rings', 'Cavity Filter Mounting Interfaces']
      },
      {
        name: 'Automotive 77 GHz & 24 GHz Collision Radar',
        description: 'Millimeter wave radar front-ends with patch antenna arrays etched directly onto high-frequency substrates.',
        deliverables: ['Micro-Roughness Electrolytic Foil', 'ENEPIG Wire Bond Finish', 'Zero-Void SMT Solder Quality']
      },
      {
        name: 'Satellite Communications (Satcom) & Phased Arrays',
        description: 'Ku-band and Ka-band satellite transceivers with electronically steerable phased array beamforming networks.',
        deliverables: ['Phase-Matched Delay Lines', 'Blind Cavities & Stepped Edge Plating', 'Precision RF Launch Connectors']
      },
      {
        name: 'High-Power RF Amplifiers & Broadcast Transmitters',
        description: 'Solid-state RF power amplifiers (SSPA) with direct copper coin heatsink inserts for massive RF power dissipation.',
        deliverables: ['Copper Coin Embedded Vias', 'High-Current DC Bias Tees', 'Directional Coupler Sensors']
      }
    ],
    standardsMatrix: [
      { standard: 'IPC-6012DA / DS', scope: 'High Frequency Printed Board Performance', status: 'Certified Substrates' },
      { standard: 'IEEE 802.11be / 5G NR', scope: 'Next-Gen Wireless Protocol Standards', status: 'Hardware Verified' },
      { standard: 'FCC Part 15 / Part 25', scope: 'Telecommunications & Satellite Radio Standards', status: 'Compliant Design' },
      { standard: 'MIL-PRF-31032', scope: 'Rigid High-Reliability Printed Circuit Boards', status: 'Available Level' }
    ],
    faqs: [
      {
        question: 'Why do you use hybrid stackups (Rogers + FR4)?',
        answer: 'Hybrid stackups place low-loss Rogers substrates only on the outer RF signal layers while using cost-effective FR4 for inner digital and power planes, saving up to 40% in board fabrication costs without sacrificing RF performance.'
      },
      {
        question: 'How do you verify controlled impedance on high-frequency boards?',
        answer: 'Every fabrication panel includes dedicated Time Domain Reflectometry (TDR) test coupons measured with picosecond-fast pulse generators to verify trace impedance to within ±5%.'
      }
    ]
  },

  'ev-charging-infrastructure': {
    slug: 'ev-charging-infrastructure',
    quoteServiceKey: 'PCB Assembly',
    category: 'CLEAN ENERGY & CHARGING HARDWARE',
    title: 'EV Charging & Clean Energy Infrastructure',
    tagline: 'High-Power DC Fast Chargers (Level 3), AC Wallboxes & Smart Grid Load Controllers',
    heroDescription: 'Manufacturing rugged electronics for 50kW to 350kW+ ultra-fast EV chargers, ISO 15118 Plug & Charge controllers, RFID payment modules, and dynamic grid load management units designed for outdoor continuous operation.',
    heroImage: '/images/industries/industry-ev-charging.webp',
    secondaryImage: '/images/industries/hero-automotive.jpg',
    certifications: ['UL 2202 / 2594 EV Charging Safety', 'ISO 15118 Plug & Charge', 'OCPP 2.0.1 Ready', 'IP55 / IP65 Weatherproof'],
    metrics: [
      { label: 'Charging Power Scope', value: '7.4 kW to 350+ kW' },
      { label: 'Outdoor Temp Rating', value: '-35°C to +65°C' },
      { label: 'OCPP Communication', value: 'OCPP 1.6J & 2.0.1' },
      { label: 'Power Conversion Efficiency', value: '> 96.5%' }
    ],
    challengesSolved: [
      {
        title: 'Heavy High-Voltage DC Current (500A+)',
        description: 'Multi-layer 4oz-6oz heavy copper PCB traces, screw-mount busbars, and contactor driver isolation.',
        icon: 'Zap'
      },
      {
        title: 'Outdoor All-Weather Environmental Protection',
        description: 'Conformal coating, UV-stable solder masks, and sealed enclosures preventing condensation, dust, and coastal salt corrosion.',
        icon: 'ShieldCheck'
      },
      {
        title: 'ISO 15118 & HomePlug Green PHY Communication',
        description: 'High-frequency Power Line Communication (PLC) coupling directly over the EV charging pilot wire with zero packet loss.',
        icon: 'Cpu'
      },
      {
        title: 'High-Speed Payment, Touchscreen & Security',
        description: 'PCI-PTS certified tamper-proof payment processing, POS credit card readers, and 4G/Ethernet cloud billing.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'DC Fast Charger Main Controller Boards',
        description: 'Central charge controller running Linux, managing CCS1, CCS2, and NACS plugs with OCPP 2.0.1 cloud telemetry.',
        deliverables: ['Multi-Port CAN-Bus Hub', 'Isolated Contactor Relays', 'Secure Cryptographic Boot']
      },
      {
        name: 'AC Smart Wallbox Control Motherboards',
        description: 'Residential and commercial Level 2 charging units with integrated Class 1 revenue-grade energy metering and Wi-Fi/RFID.',
        deliverables: ['GFCI Ground Fault Detection', 'Current Metering Shunt Integration', 'Compact Form Factor']
      },
      {
        name: 'High-Power Liquid-Cooled Power Modules',
        description: '30kW modular DC power converter bricks with high-efficiency SiC MOSFET power stages and CAN control.',
        deliverables: ['Heavy Copper 4oz Inner Layers', 'Planar Magnetic Inductors', 'Thermal Interface Pads']
      },
      {
        name: 'RFID / NFC Payment & Display Interface Panels',
        description: 'Outdoor sunlight-readable 10-inch touchscreens with contactless payment, credit card EMV, and audio prompt feedback.',
        deliverables: ['Sunlight Readable Driver', 'NFC / EMV Isolated Antenna', 'Wide Temperature LCD Bridge']
      }
    ],
    standardsMatrix: [
      { standard: 'UL 2202 / UL 2594', scope: 'Standard for EV Charging System Equipment', status: 'Certified Production' },
      { standard: 'IEC 61851-1 / 23', scope: 'Electric Vehicle Conductive Charging System', status: 'Compliant Design' },
      { standard: 'ISO 15118-20', scope: 'Road Vehicles Vehicle-to-Grid Communication (V2G)', status: 'Verified Protocol' },
      { standard: 'OCPP 1.6 / 2.0.1', scope: 'Open Charge Point Protocol Cloud Interoperability', status: 'Ready Hardware' }
    ],
    faqs: [
      {
        question: 'Do you support North American NACS and European CCS2 charging standards?',
        answer: 'Yes. Our charge controller boards are designed with multi-protocol physical layers supporting NACS (J3400), CCS1, CCS2, CHAdeMO, and standard AC Type 1/Type 2 interfaces.'
      },
      {
        question: 'How do you protect outdoor chargers from lightning and utility grid transients?',
        answer: 'We incorporate heavy-duty Metal Oxide Varistors (MOVs), Gas Discharge Tubes (GDTs), and multi-stage TVS surge suppression complying with IEC 61000-4-5 surge immunity standards.'
      }
    ]
  },

  'consumer-electronics': {
    slug: 'consumer-electronics',
    quoteServiceKey: 'Turnkey PCB Assembly',
    category: 'SMART CONSUMER HARDWARE & AUDIO',
    title: 'Consumer Smart Electronics',
    tagline: 'High-Density Wearables, Smart Home Hubs, Audio Hardware & Rapid Mass-Production',
    heroDescription: 'From ultra-sleek smart home controllers and wireless audio devices to health wearables, ATRONICS accelerates consumer hardware from initial prototype to million-unit automated mass production with tight cost optimization.',
    heroImage: '/images/industries/industry-consumer-electronics.webp',
    secondaryImage: '/images/industries/hero-iot.jpg',
    certifications: ['High-Yield Automated Mass Production', 'FCC / CE / RoHS Consumer Certified', 'IPC-A-610 Class 2 High Volume', 'Drop & Reliability Tested'],
    metrics: [
      { label: 'Mass Production Capacity', value: '1M+ Units / Month' },
      { label: 'Passive Placement Size', value: 'Down to 01005' },
      { label: 'Turnkey Ramp Time', value: '4 to 6 Weeks' },
      { label: 'First Pass SMT Yield', value: '> 99.4%' }
    ],
    challengesSolved: [
      {
        title: 'Ultra-Compact Industrial Design Envelopes',
        description: 'Multi-layer rigid-flex circuits, 0.35mm pitch micro-BGAs, and cavity embedding enabling paper-thin consumer device enclosures.',
        icon: 'Cpu'
      },
      {
        title: 'Aggressive BOM Cost & Bill of Materials Optimization',
        description: 'Design for Volume (DFV) component selection, second-source alternative mapping, and high-speed automated panelization.',
        icon: 'Zap'
      },
      {
        title: 'High-Fidelity Audio & Low Noise Floor',
        description: 'Differential analog audio routing, star grounding, and low-dropout (LDO) linear regulator isolation achieving > 105 dB audio SNR.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Rapid Automated Factory End-of-Line (EOL) Testing',
        description: 'Custom automated test jigs testing Bluetooth/Wi-Fi pairing, audio acoustic frequency response, and battery charge in < 15 seconds.',
        icon: 'Layers'
      }
    ],
    applications: [
      {
        name: 'Smart Home Hubs & Voice Assistant Hardware',
        description: 'Quad-core ARM application processors with beamforming MEMS microphone arrays, Wi-Fi 6, and Zigbee/Matter radios.',
        deliverables: ['High-Density HDI Core Board', 'PDM Microphone Array Layout', 'Automated Flash Programming']
      },
      {
        name: 'True Wireless Stereo (TWS) Earbuds & Audio Gear',
        description: 'Ultra-miniature rigid-flex PCB boards with integrated ANC noise cancellation, Bluetooth 5.3, and capacitive touch.',
        deliverables: ['Custom Shape Flex Circuit', '01005 Chip Placement', 'Biocompatible Coating']
      },
      {
        name: 'Smart Health & Fitness Wearables',
        description: 'Wristband hardware with optical photoplethysmography (PPG) heart rate sensors, wireless charging, and OLED display.',
        deliverables: ['Curved Battery Form Factor Layout', 'Qi Wireless Charging Coil Integration', 'IP68 Waterproof Sealing']
      },
      {
        name: 'Smart Security Cameras & Video Doorbells',
        description: '4K HDR image sensor modules with low-power PIR motion detection, IR night vision LEDs, and two-way audio.',
        deliverables: ['MIPI Camera Interfacing', 'Ultra-Low Standby Power Mode', 'High-Speed Video Compression Core']
      }
    ],
    standardsMatrix: [
      { standard: 'FCC Part 15 Class B', scope: 'Consumer Digital Device Radio Frequency Standards', status: '100% Compliant' },
      { standard: 'CE Mark (RED & LVD)', scope: 'European Consumer Safety & Radio Directive', status: 'Certified Layout' },
      { standard: 'IEC 62368-1', scope: 'Audio/Video, Information & Communication Technology Equipment', status: 'Safety Verified' },
      { standard: 'RoHS 3 / WEEE', scope: 'Environmental & Recyclability Standards', status: 'Certified Materials' }
    ],
    faqs: [
      {
        question: 'Can you help reduce our BOM cost before scaling to mass production?',
        answer: 'Yes! Our procurement and DFM engineers analyze your Bill of Materials (BOM) to suggest drop-in pin-compatible alternatives and optimize panel utilization, frequently reducing total unit cost by 15% to 30%.'
      },
      {
        question: 'What is your capacity for high-volume consumer product assembly?',
        answer: 'Our automated high-speed SMT lines place over 80,000 components per hour, allowing us to ramp from prototype batches of 100 units to sustained mass production runs of over 100,000+ units per month.'
      }
    ]
  }
}

/**
 * Helper to get industry by slug
 */
export function getIndustryBySlug(slug) {
  return INDUSTRIES_DATA[slug] || null
}

/**
 * Helper to get all industries list
 */
export function getAllIndustries() {
  return Object.values(INDUSTRIES_DATA)
}
