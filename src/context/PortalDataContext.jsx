import React, { createContext, useContext, useState, useEffect } from 'react'

const PortalDataContext = createContext(null)

/**
 * Helper to format amounts in Indian Rupees (₹ / INR)
 */
export const formatINR = (val) => {
  if (val === undefined || val === null || isNaN(val)) return '₹0'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val)
}

export const MANUFACTURING_STAGES = [
  { id: 'intake', step: 1, name: 'Gerber & BOM Data Intake', shortDesc: 'Files validated & CAD stackup extracted', icon: 'FileCode' },
  { id: 'dfm', step: 2, name: 'DFM & CAM Engineering Review', shortDesc: 'Impedance & annular ring design rule verification', icon: 'Search' },
  { id: 'etching', step: 3, name: 'Photolithography & Inner Layer Etching', shortDesc: 'Laser Direct Imaging & chemical copper removal', icon: 'Layers' },
  { id: 'lamination', step: 4, name: 'Vacuum Lamination & Heat Press', shortDesc: 'Prepreg bond sheet fusion at 200°C under vacuum', icon: 'Flame' },
  { id: 'drilling', step: 5, name: 'High-Precision CNC Drilling', shortDesc: 'Laser microvias & mechanical through-hole drilling', icon: 'Target' },
  { id: 'plating', step: 6, name: 'Electroless Copper Plating & Solder Mask', shortDesc: 'Hole-wall conductivity & UV cured protective mask', icon: 'Shield' },
  { id: 'smt', step: 7, name: 'Automated SMT Pick & Place', shortDesc: 'High-speed component placement & multi-zone reflow', icon: 'Cpu' },
  { id: 'inspection', step: 8, name: '3D AOI & X-Ray BGA Inspection', shortDesc: 'Automated optical inspection & zero-void verification', icon: 'Eye' },
  { id: 'qa', step: 9, name: 'Final QA, Conformal Coating & Testing', shortDesc: 'Flying probe continuity & IPC Class 3 quality signoff', icon: 'CheckCircle2' },
  { id: 'shipped', step: 10, name: 'Packaged & Dispatched In Transit', shortDesc: 'Vacuum moisture barrier packaging & courier tracking', icon: 'Truck' }
]

const INITIAL_ORDERS = [
  {
    id: 'ATR-PCB-8942',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    projectName: 'High-Speed Quad-Core Drone ESC (v3.2)',
    category: 'Turnkey PCB Assembly',
    layerCount: '6 Layers',
    quantity: 250,
    dimensions: '120mm x 85mm',
    material: 'FR4 TG170 High-Tg',
    copperWeight: '2.0 oz Outer / 1.0 oz Inner',
    surfaceFinish: 'ENIG (Electroless Nickel Immersion Gold)',
    placedDate: '2026-09-12',
    estimatedDelivery: '2026-09-26',
    amount: 285000.00,
    paymentStatus: 'Paid',
    currentStageId: 'smt',
    currentStageIndex: 6, // 0-indexed -> stage 7: SMT Pick & Place
    trackingNumber: 'BLUEDART-8829104812IN',
    carrier: 'BlueDart Express / FedEx Priority',
    notes: 'Impedance coupon passed (50Ω single-ended ±4.2%). SMT reflow profile validated for BGA 0.4mm pitch.',
    files: [
      { name: 'Drone_ESC_v3.2_Gerbers.zip', size: '14.2 MB', type: 'gerber' },
      { name: 'BOM_Component_List_RevC.xlsx', size: '2.1 MB', type: 'bom' },
      { name: 'Pick_and_Place_Coordinates.csv', size: '850 KB', type: 'pnp' }
    ],
    certificates: [
      { name: 'IPC-A-610 Class 3 Inspection Pass.pdf', date: '2026-09-18' },
      { name: 'RoHS 3 / REACH Certificate of Conformance.pdf', date: '2026-09-16' },
      { name: 'TDR Controlled Impedance Test Coupon Log.pdf', date: '2026-09-15' }
    ],
    history: [
      { stage: 'Gerber & BOM Data Intake', timestamp: '2026-09-12 09:30 AM', note: 'CAD dataset received and checksum verified.' },
      { stage: 'DFM & CAM Engineering Review', timestamp: '2026-09-13 02:15 PM', note: 'DFM cleared. Minor annular ring optimization applied with client approval.' },
      { stage: 'Photolithography & Inner Layer Etching', timestamp: '2026-09-14 11:00 AM', note: 'LDI patterning complete on layers 2-5.' },
      { stage: 'Vacuum Lamination & Heat Press', timestamp: '2026-09-15 04:45 PM', note: '6-layer core fusion cycle completed with TG170 prepreg.' },
      { stage: 'High-Precision CNC Drilling', timestamp: '2026-09-16 10:20 AM', note: 'Mechanical drilling & 0.1mm laser microvias formed.' },
      { stage: 'Electroless Copper Plating & Solder Mask', timestamp: '2026-09-17 01:00 PM', note: '25µm copper barrel plating thickness achieved. Matte black mask applied.' },
      { stage: 'Automated SMT Pick & Place', timestamp: '2026-09-18 09:15 AM', note: 'High-speed surface mounting running on Yamaha YSM20R line.' }
    ],
    dfmReport: {
      score: 98.4,
      status: 'Ready for Fabrication',
      validatedBy: 'Vikram Mehta (Senior CAM / DFM Lead)',
      validationDate: '2026-09-13 02:15 PM',
      checks: [
        { name: 'Trace Width & Minimum Spacing', target: '4.0 / 4.0 mil', measured: '4.3 / 4.2 mil', status: 'pass', note: 'Adequate clearance on RF 50Ω tracks' },
        { name: 'Annular Ring & Drill-to-Copper', target: 'Min 4.5 mil', measured: '5.1 mil', status: 'pass', note: 'Zero breakout risk on vias' },
        { name: 'Solder Mask Sliver Clearance', target: 'Min 0.075 mm', measured: '0.088 mm', status: 'pass', note: 'No mask peeling between 0.4mm BGA pads' },
        { name: 'Silk Legend Over Exposed Pads', target: 'Zero Tolerance', measured: '0 Clipped', status: 'pass', note: 'Automated CAM clipping applied' },
        { name: 'Acute Copper Angle & Acid Traps', target: '< 90° Restricted', measured: '0 Found', status: 'pass', note: 'Mitred 45° corners verified' },
        { name: 'Copper Thieving & Area Balance', target: 'Within 15%', measured: '8.2% delta', status: 'pass', note: 'Cross-hatch pattern added to layer 2-5 planes' }
      ]
    },
    factoryGallery: [
      {
        id: 'gal-1',
        title: 'Laser Direct Imaging (LDI) Inner Layer Patterning',
        stage: 'Photolithography & Etch',
        timestamp: '2026-09-14 10:45 AM',
        machine: 'Orbotech Diamond 8 LDI System',
        operator: 'Cell Lead: Rajesh K.',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
        caption: 'High-definition 12µm trace exposure on Layer 3 inner core.'
      },
      {
        id: 'gal-2',
        title: 'High-Speed CNC Mechanical & Laser Micro-Drill',
        stage: 'Drilling & Microvias',
        timestamp: '2026-09-16 09:30 AM',
        machine: 'Schmoll Dual-Spindle Laser Drill',
        operator: 'Operator: A. Sharma',
        imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
        caption: '0.15mm blind laser microvias drilling with optical fiducial alignment.'
      },
      {
        id: 'gal-3',
        title: 'Yamaha YSM20R SMT Pick & Place Placement',
        stage: 'Automated SMT Assembly',
        timestamp: '2026-09-18 09:15 AM',
        machine: 'Yamaha YSM20R (90,000 CPH)',
        operator: 'SMT Line Eng: Priya V.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
        caption: 'Precision mounting of 0201 passives and 0.4mm pitch BGA processors.'
      },
      {
        id: 'gal-4',
        title: 'Koh Young 3D AOI Solder Meniscus Inspection',
        stage: 'Automated Optical Inspection',
        timestamp: '2026-09-18 03:30 PM',
        machine: 'Koh Young Zenith 3D AOI',
        operator: 'QA Lead: Suresh N.',
        imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
        caption: 'True 3D height profiling and volume verification with 100% pass yield.'
      }
    ],
    revisions: [
      {
        revision: 'Rev C (Current Production)',
        date: '2026-09-12',
        author: 'Apex Hardware Team (Eng. Alex Chen)',
        changes: 'Migrated BGA decoupling capacitors to 0201 packages. Optimized 50Ω RF coplanar waveguide ground clearances.',
        status: 'Active Build'
      },
      {
        revision: 'Rev B',
        date: '2026-08-15',
        author: 'Apex Hardware Team',
        changes: 'Swapped LDO regulator to higher-efficiency Buck converter. Added TVS ESD suppression diodes on CAN-FD port.',
        status: 'Archived'
      },
      {
        revision: 'Rev A (Initial Prototype)',
        date: '2026-07-01',
        author: 'Apex Hardware Team',
        changes: 'Initial breadboard validation and prototype spin.',
        status: 'Archived'
      }
    ],
    trackingData: {
      carrier: 'BlueDart Express Priority Air',
      awb: 'BLUEDART-8829104812IN',
      origin: 'Bengaluru Electronics City Hub, KA',
      destination: 'Apex Robotics Labs, Mumbai, MH - 400076',
      status: 'In Production Transit (Dispatch Scheduled)',
      estimatedDelivery: 'Sept 26, 2026 by 02:00 PM',
      weight: '4.8 kg',
      checkpoints: [
        { title: 'Gerber Intake & SMT Production Staged', location: 'Bengaluru Plant', time: 'Sept 12, 09:30 AM', completed: true },
        { title: 'CAM DFM Verification Passed', location: 'DFM Lab Cell 2', time: 'Sept 13, 02:15 PM', completed: true },
        { title: 'Multi-Layer Lamination & CNC Drilling', location: 'Fab Cleanroom B', time: 'Sept 16, 10:20 AM', completed: true },
        { title: 'High-Speed SMT Pick & Place Running', location: 'SMT Line 3', time: 'Sept 18, 09:15 AM', completed: true },
        { title: '3D AOI & X-Ray Quality Inspection', location: 'QA Bay 1', time: 'Estimated Sept 22', completed: false },
        { title: 'Handed Over to BlueDart Courier Air', location: 'Bengaluru BLR Hub', time: 'Estimated Sept 24', completed: false },
        { title: 'Out for Doorstep Delivery', location: 'Mumbai Sort Facility', time: 'Estimated Sept 26', completed: false }
      ]
    }
  },
  {
    id: 'ATR-PCB-8819',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    projectName: 'CAN-FD Isolated Gateway Module',
    category: 'Rapid PCB Prototype',
    layerCount: '4 Layers',
    quantity: 50,
    dimensions: '65mm x 45mm',
    material: 'Standard FR4 TG140',
    copperWeight: '1.0 oz',
    surfaceFinish: 'HASL Lead-Free',
    placedDate: '2026-08-28',
    estimatedDelivery: '2026-09-08',
    amount: 74500.00,
    paymentStatus: 'Paid',
    currentStageId: 'shipped',
    currentStageIndex: 9, // Delivered
    trackingNumber: 'DELHIVERY-9428571029',
    carrier: 'Delhivery Surface Pro',
    notes: 'Successfully delivered and signed on Sept 07, 2026.',
    files: [
      { name: 'Gateway_CANFD_Gerbers.zip', size: '8.4 MB', type: 'gerber' },
      { name: 'Gateway_BOM_v1.xlsx', size: '1.2 MB', type: 'bom' }
    ],
    certificates: [
      { name: 'Final QA Certificate of Conformance.pdf', date: '2026-09-06' }
    ],
    history: [
      { stage: 'Gerber & BOM Data Intake', timestamp: '2026-08-28 10:00 AM', note: 'Files checked in.' },
      { stage: 'Packaged & Dispatched In Transit', timestamp: '2026-09-06 05:30 PM', note: 'Dispatched via Express Courier.' }
    ]
  },
  {
    id: 'ATR-PCB-9014',
    userId: 'user_biomed',
    clientName: 'CardioPulse Medical Dynamics',
    clientEmail: 'harper.eng@cardiopulse.com',
    projectName: 'ECG Patient Monitor Isolated Front-End',
    category: 'Turnkey PCB Assembly',
    layerCount: '8 Layers',
    quantity: 100,
    dimensions: '140mm x 110mm',
    material: 'Rogers RO4350B + FR4 Hybrid',
    copperWeight: '2.0 oz',
    surfaceFinish: 'ENEPIG (Electroless Nickel Electroless Palladium Immersion Gold)',
    placedDate: '2026-09-14',
    estimatedDelivery: '2026-09-29',
    amount: 465000.00,
    paymentStatus: 'Paid',
    currentStageId: 'etching',
    currentStageIndex: 2,
    trackingNumber: 'Pending Dispatch',
    carrier: 'BlueDart Air Healthcare',
    notes: 'Medical-grade 4kV patient isolation barriers verified in layout.',
    files: [
      { name: 'ECG_FrontEnd_Gerbers_v4.zip', size: '18.1 MB', type: 'gerber' }
    ],
    certificates: [
      { name: 'ISO 13485 Manufacturing Compliance Note.pdf', date: '2026-09-14' }
    ],
    history: [
      { stage: 'Gerber & BOM Data Intake', timestamp: '2026-09-14 08:45 AM', note: 'Gerber files validated.' },
      { stage: 'DFM & CAM Engineering Review', timestamp: '2026-09-15 03:20 PM', note: 'High-voltage creepage clearances verified.' },
      { stage: 'Photolithography & Inner Layer Etching', timestamp: '2026-09-17 11:30 AM', note: 'Hybrid stackup etching in progress.' }
    ]
  }
]

const INITIAL_QUOTES = [
  {
    id: 'QT-2026-7841',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    projectName: 'Autonomous Navigation Vision Carrier Board',
    serviceType: 'Turnkey PCB Assembly',
    layerCount: '8 Layers HDI',
    quantity: 150,
    dimensions: '160mm x 100mm',
    leadTime: '8 Business Days',
    specs: {
      material: 'FR4 TG170 High-Tg (Shengyi S1000-2M)',
      copperWeight: '1.5 oz Outer / 1.0 oz Inner',
      surfaceFinish: 'ENIG (2u" Gold over 120u" Nickel)',
      solderMask: 'Matte Black',
      silkscreen: 'High-Density White',
      microvias: 'Laser Drilled 1+N+1 HDI Stack',
      impedance: 'Single 50Ω / Diff 90Ω & 100Ω (±5%)',
      inspection: '100% 3D AOI & X-Ray for 0.4mm pitch BGA'
    },
    pricing: {
      fabrication: 120000.00,
      smtAssembly: 140000.00,
      bomComponents: 195000.00,
      toolingNRE: 22500.00,
      shipping: 10000.00,
      discount: 15000.00,
      total: 472500.00
    },
    status: 'Approved', // 'Pending Approval', 'Revision Requested', 'Approved', 'Paid / In Production'
    createdDate: '2026-09-16',
    validUntil: '2026-10-16',
    revisionNotes: '',
    adminNotes: 'Tier-1 BOM sourcing secured with authenticated Certificates of Conformance (CoC).',
    revisionsCount: 0
  },
  {
    id: 'QT-2026-7890',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    projectName: 'High-Torque BLDC Motor Driver Controller',
    serviceType: 'PCB Fabrication & Assembly',
    layerCount: '4 Layers Heavy Copper',
    quantity: 500,
    dimensions: '90mm x 75mm',
    leadTime: '6 Business Days',
    specs: {
      material: 'Heavy Copper FR4 TG150',
      copperWeight: '4.0 oz Heavy Outer & Inner',
      surfaceFinish: 'HASL Lead-Free',
      solderMask: 'Industrial Green',
      silkscreen: 'White',
      thermalManagement: 'Direct Aluminum Heatsink Bonding',
      impedance: 'Standard Power Plane Distribution',
      inspection: 'Hi-Pot Insulation Test (1500V DC)'
    },
    pricing: {
      fabrication: 180000.00,
      smtAssembly: 150000.00,
      bomComponents: 260000.00,
      toolingNRE: 15000.00,
      shipping: 13000.00,
      discount: 0.00,
      total: 618000.00
    },
    status: 'Pending Approval',
    createdDate: '2026-09-18',
    validUntil: '2026-10-18',
    revisionNotes: '',
    adminNotes: 'Includes 4oz copper heavy current trace verification for up to 60A continuous load.',
    revisionsCount: 0
  },
  {
    id: 'QT-2026-7732',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    projectName: 'Sub-GHz LoRa Telemetry Node',
    serviceType: 'PCB Fabrication',
    layerCount: '2 Layers',
    quantity: 1000,
    dimensions: '45mm x 30mm',
    leadTime: '5 Business Days',
    specs: {
      material: 'Standard FR4',
      copperWeight: '1.0 oz',
      surfaceFinish: 'OSP / ENIG Antennas',
      solderMask: 'Matte Blue',
      silkscreen: 'White'
    },
    pricing: {
      fabrication: 70000.00,
      smtAssembly: 0.00,
      bomComponents: 0.00,
      toolingNRE: 6000.00,
      shipping: 5500.00,
      discount: 2000.00,
      total: 79500.00
    },
    status: 'Paid / In Production',
    createdDate: '2026-09-10',
    validUntil: '2026-10-10',
    revisionNotes: '',
    adminNotes: 'Paid in full via RTGS Bank Transfer.',
    revisionsCount: 0
  }
]

const INITIAL_TICKETS = [
  {
    id: 'TCK-4912',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    relatedOrderId: 'ATR-PCB-8942',
    subject: 'Impedance coupon tolerance verification on Layer 3 PCIe pair',
    category: 'DFM & Engineering',
    priority: 'High',
    status: 'In Progress', // 'Open', 'In Progress', 'Awaiting Client', 'Resolved'
    createdDate: '2026-09-17 10:30 AM',
    lastUpdated: '2026-09-18 04:15 PM',
    assignedTo: 'Sarah Chen (Lead DFM Engineer)',
    messages: [
      {
        id: 'msg_1',
        sender: 'user',
        senderName: 'Apex Robotics Engineer',
        timestamp: '2026-09-17 10:30 AM',
        text: 'Hello ATRONICS Team, on our Drone ESC v3.2 board (ATR-PCB-8942), we have high-speed differential pairs on Layer 3 with 90Ω target impedance. Can you confirm the dielectric constant used in CAM calculations for the Shengyi prepreg?',
        attachments: ['impedance_spec_sheet.pdf']
      },
      {
        id: 'msg_2',
        sender: 'admin',
        senderName: 'Sarah Chen (Lead DFM Engineer)',
        timestamp: '2026-09-17 02:40 PM',
        text: 'Hi Apex Engineering, we modeled your stackup using Polar SI9000 with Shengyi S1000-2M (Er = 4.35 @ 1GHz). Trace width 0.127mm with 0.152mm space yields exactly 90.4Ω, well within your ±5% envelope. TDR coupon test has been logged!',
        attachments: ['Polar_SI9000_Impedance_Report.pdf']
      },
      {
        id: 'msg_3',
        sender: 'user',
        senderName: 'Apex Robotics Engineer',
        timestamp: '2026-09-18 09:10 AM',
        text: 'Thank you Sarah, that is exactly what we needed. Looking forward to the SMT placement milestone update today.'
      },
      {
        id: 'msg_4',
        sender: 'admin',
        senderName: 'Sarah Chen (Lead DFM Engineer)',
        timestamp: '2026-09-18 04:15 PM',
        text: 'SMT line mounting is currently 65% complete. 3D AOI inspection will commence first thing tomorrow morning.'
      }
    ]
  },
  {
    id: 'TCK-4889',
    userId: 'user_apex',
    clientName: 'Apex Robotics International',
    clientEmail: 'client.engineer@apexrobotics.io',
    relatedOrderId: 'QT-2026-7841',
    subject: 'Requesting expediting lead time from 8 days to 5 days',
    category: 'Quotation & Pricing',
    priority: 'Urgent',
    status: 'Open',
    createdDate: '2026-09-18 11:20 AM',
    lastUpdated: '2026-09-18 11:20 AM',
    assignedTo: 'Marcus Vance (Production Planner)',
    messages: [
      {
        id: 'msg_1',
        sender: 'user',
        senderName: 'Apex Robotics Engineer',
        timestamp: '2026-09-18 11:20 AM',
        text: 'Hi team, for quotation QT-2026-7841 (Vision Carrier Board), our customer brought the milestone forward. Is it possible to expedite turnkey assembly from 8 business days down to 5 business days? Please quote the expedite fee.',
        attachments: []
      }
    ]
  },
  {
    id: 'TCK-4750',
    userId: 'user_biomed',
    clientName: 'CardioPulse Medical Dynamics',
    clientEmail: 'harper.eng@cardiopulse.com',
    relatedOrderId: 'ATR-PCB-9014',
    subject: 'ISO 13485 Device History Record (DHR) batch certificate request',
    category: 'Quality & Inspection',
    priority: 'Medium',
    status: 'Resolved',
    createdDate: '2026-09-14 02:00 PM',
    lastUpdated: '2026-09-15 05:00 PM',
    assignedTo: 'Elena Rostova (QA Director)',
    messages: [
      {
        id: 'msg_1',
        sender: 'user',
        senderName: 'Harper - CardioPulse',
        timestamp: '2026-09-14 02:00 PM',
        text: 'Please ensure full DHR documentation is prepared for our FDA audit binder.',
        attachments: []
      },
      {
        id: 'msg_2',
        sender: 'admin',
        senderName: 'Elena Rostova (QA Director)',
        timestamp: '2026-09-15 05:00 PM',
        text: 'All lot traceability records and component CoCs are compiled. You can download the signed DHR from your portal under Order Certificates.',
        attachments: ['Signed_DHR_ATR-PCB-9014.pdf']
      }
    ]
  }
]

const INITIAL_USERS = [
  {
    id: 'user_apex',
    name: 'Apex Robotics Engineering',
    email: 'client.engineer@apexrobotics.io',
    company: 'Apex Robotics International LLC',
    phone: '+91 98765 43210',
    address: 'Plot 45, Electronic City Phase 1, Bengaluru, Karnataka 560100',
    tier: 'Enterprise VIP',
    totalSpent: 1450000.00,
    ordersCount: 8,
    joinedDate: '2025-11-10',
    status: 'Active'
  },
  {
    id: 'user_biomed',
    name: 'CardioPulse Hardware Labs',
    email: 'harper.eng@cardiopulse.com',
    company: 'CardioPulse Medical Dynamics Corp',
    phone: '+91 98112 34567',
    address: 'Cyber Towers, HITEC City, Hyderabad, Telangana 500081',
    tier: 'Medical Tier-1',
    totalSpent: 2360000.00,
    ordersCount: 5,
    joinedDate: '2026-01-15',
    status: 'Active'
  },
  {
    id: 'user_grid',
    name: 'SolarGrid Power Systems',
    email: 'lead.tech@solargridpower.in',
    company: 'SolarGrid Technologies India Pvt Ltd',
    phone: '+91 99001 22334',
    address: 'MIDC Industrial Area, Bhosari, Pune, Maharashtra 411026',
    tier: 'Industrial Partner',
    totalSpent: 3500000.00,
    ordersCount: 12,
    joinedDate: '2025-06-20',
    status: 'Active'
  }
]



const INITIAL_AUDIT_LOGS = [
  {
    id: 'AUD-9941',
    timestamp: '2026-09-19 15:42:10',
    actor: 'Admin (Vikram Mehta - CAM Lead)',
    action: 'QUOTATION_GENERATED',
    entity: 'QT-2026-7890 (BLDC Motor Driver)',
    details: 'Generated official quotation for ₹6,18,000 INR with 4oz heavy copper stackup.',
    compliance: 'ISO 9001:2015 Sec 8.2',
    ip: '103.14.120.88',
    hash: 'SHA256: 8f9b2a1c4e7d0e'
  },
  {
    id: 'AUD-9938',
    timestamp: '2026-09-18 11:20:45',
    actor: 'Client (Alex Chen - Apex Robotics)',
    action: 'PAYMENT_AUTHORIZED',
    entity: 'ATR-PCB-8942 (Drone ESC)',
    details: 'Authorized online advance payment of ₹2,85,000 via UPI (apexrobotics@okaxis).',
    compliance: 'RBI Digital Payments Directive',
    ip: '49.207.194.12',
    hash: 'SHA256: 3c7a9e1b2f4d8a'
  },
  {
    id: 'AUD-9935',
    timestamp: '2026-09-17 14:15:30',
    actor: 'Admin (Priya Verma - SMT Lead)',
    action: 'PRODUCTION_STAGE_ADVANCED',
    entity: 'ATR-PCB-8942',
    details: 'Cell status updated to Stage 7 (Automated SMT Pick & Place Yamaha YSM20R line).',
    compliance: 'IPC-A-610 Class 3 Traceability',
    ip: '103.14.120.91',
    hash: 'SHA256: 1a9d8c4e5b2f7a'
  },
  {
    id: 'AUD-9930',
    timestamp: '2026-09-16 09:30:15',
    actor: 'System / Automated DFM Engine',
    action: 'DFM_RULE_CHECK_PASSED',
    entity: 'Drone_ESC_v3.2_Gerbers.zip',
    details: 'Completed pre-flight DRC with 98.4% health score. 0 severe violations.',
    compliance: 'IPC-2221 Generic PCB Design',
    ip: 'Internal Server Cluster',
    hash: 'SHA256: 5e2b7a9c1d4f8e'
  }
]

export const PortalDataProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('atronics_portal_orders')
    return saved ? JSON.parse(saved) : INITIAL_ORDERS
  })

  const [quotes, setQuotes] = useState(() => {
    const saved = localStorage.getItem('atronics_portal_quotes')
    return saved ? JSON.parse(saved) : INITIAL_QUOTES
  })

  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('atronics_portal_tickets')
    return saved ? JSON.parse(saved) : INITIAL_TICKETS
  })

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('atronics_portal_users')
    return saved ? JSON.parse(saved) : INITIAL_USERS
  })

  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('atronics_portal_audit_logs')
    return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS
  })

  useEffect(() => {
    localStorage.setItem('atronics_portal_orders', JSON.stringify(orders))
  }, [orders])

  useEffect(() => {
    localStorage.setItem('atronics_portal_quotes', JSON.stringify(quotes))
  }, [quotes])

  useEffect(() => {
    localStorage.setItem('atronics_portal_tickets', JSON.stringify(tickets))
  }, [tickets])

  useEffect(() => {
    localStorage.setItem('atronics_portal_users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem('atronics_portal_audit_logs', JSON.stringify(auditLogs))
  }, [auditLogs])

  const logAuditEvent = (action, entity, details, actor = 'Current User') => {
    const newLog = {
      id: `AUD-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      actor,
      action,
      entity,
      details,
      compliance: 'ISO 9001 / IPC-A-610',
      ip: '103.14.120.' + Math.floor(10 + Math.random() * 80),
      hash: `SHA256: ${Math.random().toString(16).slice(2, 14)}`
    }
    setAuditLogs(prev => [newLog, ...prev])
  }

  // 1. Raise Support / DFM Ticket
  const raiseTicket = ({ subject, category, priority, relatedOrderId, message, clientName, clientEmail }) => {
    const newTicket = {
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: 'user_apex',
      clientName: clientName || 'Apex Robotics Engineering',
      clientEmail: clientEmail || 'client.engineer@apexrobotics.io',
      subject,
      category: category || 'DFM & Engineering Review',
      priority: priority || 'Medium',
      relatedOrderId: relatedOrderId || 'General Inquiry',
      status: 'In Review',
      assignedTo: 'Vikram Mehta (Senior CAM / DFM Lead)',
      createdDate: new Date().toISOString().split('T')[0],
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: clientName || 'Apex Robotics Engineering',
          senderRole: 'Client Engineer',
          timestamp: new Date().toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
          text: message
        }
      ]
    }
    setTickets(prev => [newTicket, ...prev])
    logAuditEvent('TICKET_RAISED', newTicket.id, `Subject: ${subject}`, clientName)
    return newTicket
  }

  // 2. Reply to Ticket
  const replyToTicket = (ticketId, replyText, senderName, senderRole) => {
    setTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        return {
          ...t,
          status: senderRole === 'Admin / CAM Lead' ? 'Client Action Required' : 'Under CAM Review',
          messages: [
            ...t.messages,
            {
              id: `msg-${Date.now()}`,
              sender: senderName,
              senderRole: senderRole || 'Client Engineer',
              timestamp: new Date().toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
              text: replyText
            }
          ]
        }
      }
      return t
    }))
    logAuditEvent('TICKET_REPLIED', ticketId, `Reply added by ${senderName}`, senderName)
  }

  // 3. Update Ticket Status
  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: newStatus } : t))
    logAuditEvent('TICKET_STATUS_UPDATED', ticketId, `Status changed to ${newStatus}`)
  }

  // 4. Request Quote Revision
  const requestQuoteRevision = (quoteId, clientNotes) => {
    setQuotes(prev => prev.map(q => {
      if (q.id === quoteId) {
        return {
          ...q,
          status: 'Revision Requested',
          revisionNotes: clientNotes,
          revisionsCount: (q.revisionsCount || 0) + 1
        }
      }
      return q
    }))
    logAuditEvent('QUOTE_REVISION_REQUESTED', quoteId, `Notes: ${clientNotes}`)
  }

  // 5. Approve Quotation
  const approveQuotation = (quoteId) => {
    setQuotes(prev => prev.map(q => {
      if (q.id === quoteId) {
        return { ...q, status: 'Approved' }
      }
      return q
    }))
    logAuditEvent('QUOTE_APPROVED', quoteId, 'Quotation marked as approved by client')
  }

  // 6. Complete Payment for Quotation
  const processPayment = (quote, paymentMethod, paymentDetails) => {
    setQuotes(prev => prev.map(q => {
      if (q.id === quote.id) {
        return { ...q, status: 'Paid / In Production' }
      }
      return q
    }))

    const newOrder = {
      id: `ATR-PCB-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: quote.userId || 'user_apex',
      clientName: quote.clientName || 'Apex Robotics International',
      clientEmail: quote.clientEmail || 'client.engineer@apexrobotics.io',
      projectName: quote.projectName,
      category: quote.serviceType || 'Turnkey PCB Assembly',
      layerCount: quote.layerCount || '4 Layers',
      quantity: quote.quantity || 100,
      dimensions: quote.dimensions || '100mm x 100mm',
      material: quote.specs?.material || 'FR4 TG170 High-Tg',
      copperWeight: quote.specs?.copperWeight || '1.0 oz',
      surfaceFinish: quote.specs?.surfaceFinish || 'ENIG',
      placedDate: new Date().toISOString().split('T')[0],
      estimatedDelivery: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      amount: quote.pricing?.total || 120000.00,
      paymentStatus: 'Paid',
      paymentMethod: paymentMethod || 'Online Checkout',
      paymentDetails,
      currentStageId: 'intake',
      currentStageIndex: 0,
      trackingNumber: `BLUEDART-${Math.floor(1000000000 + Math.random() * 9000000000)}IN`,
      carrier: 'BlueDart Express Air',
      notes: `Order placed via online payment checkout (${paymentMethod}). Production queued for CAM Gerber verification.`,
      files: [
        { name: `${quote.projectName.replace(/\s+/g, '_')}_Gerbers.zip`, size: '12.8 MB', type: 'gerber' },
        { name: 'BOM_Component_List.xlsx', size: '1.9 MB', type: 'bom' }
      ],
      certificates: [
        { name: 'RoHS 3 / REACH Statement.pdf', date: new Date().toISOString().split('T')[0] }
      ],
      history: [
        {
          stage: 'Gerber & BOM Data Intake',
          timestamp: new Date().toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
          note: `Payment authorized via ${paymentMethod}. Engineering files locked for fabrication.`
        }
      ],
      dfmReport: {
        score: 99.1,
        status: 'Ready for Fabrication',
        validatedBy: 'Vikram Mehta (Senior CAM Lead)',
        validationDate: new Date().toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit' }),
        checks: [
          { name: 'Trace Width & Minimum Spacing', target: '4.0 / 4.0 mil', measured: '4.5 / 4.2 mil', status: 'pass', note: 'Adequate clearance on all signal traces' },
          { name: 'Annular Ring & Drill-to-Copper', target: 'Min 4.5 mil', measured: '5.2 mil', status: 'pass', note: 'Passes IPC Class 3 annular ring criteria' },
          { name: 'Solder Mask Sliver Clearance', target: 'Min 0.075 mm', measured: '0.090 mm', status: 'pass', note: 'Adequate solder dam' },
          { name: 'Silk Legend Over Exposed Pads', target: 'Zero Tolerance', measured: '0 Clipped', status: 'pass', note: 'Cleared from all pads' }
        ]
      },
      trackingData: {
        carrier: 'BlueDart Express Priority Air',
        awb: `BLUEDART-${Math.floor(1000000000 + Math.random() * 9000000000)}IN`,
        origin: 'Bengaluru Electronics City Hub, KA',
        destination: quote.clientName,
        status: 'Order Placed (CAM Intake in Progress)',
        estimatedDelivery: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0],
        weight: '3.5 kg',
        checkpoints: [
          { title: 'Payment Confirmed & Intake Queued', location: 'Bengaluru Plant', time: 'Just now', completed: true },
          { title: 'CAM DFM Verification', location: 'DFM Lab', time: 'Pending', completed: false },
          { title: 'Multi-Layer Lamination & SMT Assembly', location: 'Production Cleanroom', time: 'Pending', completed: false },
          { title: 'Dispatch via Express Courier', location: 'Courier Air Hub', time: 'Pending', completed: false }
        ]
      }
    }

    setOrders(prev => [newOrder, ...prev])
    logAuditEvent('PAYMENT_PROCESSED', newOrder.id, `Amount: ${formatINR(newOrder.amount)} via ${paymentMethod}`)
    return newOrder
  }

  // 7. Reorder PCB with Batch Scaling
  const reorderPCB = (orderId, scaledQty = null, targetLeadTime = null, customPrice = null) => {
    const existing = orders.find(o => o.id === orderId)
    if (!existing) return null

    const finalQty = scaledQty || (existing.quantity * 2)
    const basePrice = customPrice !== null ? customPrice : (existing.amount * (finalQty / existing.quantity) * 0.9) // 10% volume discount

    const newOrder = {
      ...existing,
      id: `ATR-PCB-${Math.floor(1000 + Math.random() * 9000)}`,
      projectName: `${existing.projectName} (Batch Run)`,
      quantity: finalQty,
      placedDate: new Date().toISOString().split('T')[0],
      estimatedDelivery: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      amount: Math.round(basePrice),
      paymentStatus: 'Pending Payment',
      currentStageId: 'intake',
      currentStageIndex: 0,
      trackingNumber: 'Awaiting Fabrication',
      notes: `Repeat production run for ${existing.projectName} (${finalQty} units). Volume discount applied.`,
      history: [
        {
          stage: 'Gerber & BOM Data Intake',
          timestamp: new Date().toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
          note: `Repeat batch scaled to ${finalQty} units. Tooling and stencils retrieved from active archive.`
        }
      ]
    }
    setOrders(prev => [newOrder, ...prev])
    logAuditEvent('REORDER_BATCH_CREATED', newOrder.id, `Reordered ${existing.projectName} with scaled quantity ${finalQty} units`)
    return newOrder
  }

  // 8. Create New Quotation (Admin)
  const createQuotation = (quotePayload) => {
    const newQuote = {
      id: `QT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: quotePayload.userId || 'user_apex',
      clientName: quotePayload.clientName || 'Apex Robotics International',
      clientEmail: quotePayload.clientEmail || 'client.engineer@apexrobotics.io',
      projectName: quotePayload.projectName || 'Custom PCB Engineering Run',
      serviceType: quotePayload.serviceType || 'Turnkey PCB Assembly',
      tier: quotePayload.tier || 'Pilot Production',
      layerCount: quotePayload.layerCount || '4 Layers',
      quantity: Number(quotePayload.quantity) || 100,
      dimensions: quotePayload.dimensions || '100mm x 100mm',
      leadTime: quotePayload.leadTime || '5-7 Business Days',
      specs: quotePayload.specs || {
        material: 'FR4 TG170 High-Tg',
        copperWeight: '1.0 oz',
        surfaceFinish: 'ENIG',
        solderMask: 'Matte Black',
        silkscreen: 'White'
      },
      pricing: quotePayload.pricing || {
        fabrication: 75000.00,
        smtAssembly: 65000.00,
        bomComponents: 110000.00,
        toolingNRE: 12000.00,
        testing: 8000.00,
        shipping: 8000.00,
        discount: 10000.00,
        total: 260000.00
      },
      status: 'Pending Approval',
      createdDate: new Date().toISOString().split('T')[0],
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      revisionNotes: '',
      adminNotes: quotePayload.adminNotes || 'Engineered as per customer CAD & stackup submission.',
      revisionsCount: 0
    }
    setQuotes(prev => [newQuote, ...prev])
    logAuditEvent('QUOTATION_CREATED', newQuote.id, `Total: ${formatINR(newQuote.pricing?.total)} for ${newQuote.clientName}`, 'Admin')
    return newQuote
  }

  // 9. Update Order Stage & Progress (Admin)
  const updateOrderStage = (orderId, newStageId, adminNote, trackingNumber) => {
    const stageIndex = MANUFACTURING_STAGES.findIndex(s => s.id === newStageId)
    if (stageIndex === -1) return

    const stageObj = MANUFACTURING_STAGES[stageIndex]
    const timestamp = new Date().toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })

    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        const updatedHistory = [
          ...order.history,
          {
            stage: stageObj.name,
            timestamp,
            note: adminNote || `Production advanced to ${stageObj.name}. Verified by QC engineer.`
          }
        ]
        return {
          ...order,
          currentStageId: newStageId,
          currentStageIndex: stageIndex,
          trackingNumber: trackingNumber || order.trackingNumber,
          notes: adminNote || order.notes,
          history: updatedHistory
        }
      }
      return order
    }))
    logAuditEvent('STAGE_ADVANCED', orderId, `Stage advanced to: ${stageObj.name}`, 'Admin Operations')
  }

  // Reset demo data helper
  const resetDemoData = () => {
    setOrders(INITIAL_ORDERS)
    setQuotes(INITIAL_QUOTES)
    setTickets(INITIAL_TICKETS)
    setUsers(INITIAL_USERS)
    setAuditLogs(INITIAL_AUDIT_LOGS)
    localStorage.removeItem('atronics_portal_orders')
    localStorage.removeItem('atronics_portal_quotes')
    localStorage.removeItem('atronics_portal_tickets')
    localStorage.removeItem('atronics_portal_users')
    localStorage.removeItem('atronics_portal_audit_logs')
  }

  return (
    <PortalDataContext.Provider
      value={{
        orders,
        quotes,
        tickets,
        users,
        auditLogs,
        logAuditEvent,
        raiseTicket,
        replyToTicket,
        updateTicketStatus,
        requestQuoteRevision,
        approveQuotation,
        processPayment,
        reorderPCB,
        createQuotation,
        updateOrderStage,
        resetDemoData
      }}
    >
      {children}
    </PortalDataContext.Provider>
  )
}

export const usePortalData = () => {
  const context = useContext(PortalDataContext)
  if (!context) {
    throw new Error('usePortalData must be used within a PortalDataProvider')
  }
  return context
}
