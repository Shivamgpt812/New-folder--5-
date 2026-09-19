import React, { useState } from 'react'
import { 
  X, 
  Calculator, 
  Layers, 
  Plus, 
  Save, 
  Sparkles, 
  Building2, 
  Calendar, 
  FileText,
  DollarSign,
  CheckCircle2,
  Download,
  Cpu,
  ShieldCheck,
  Zap,
  Wrench,
  HelpCircle
} from 'lucide-react'
import { usePortalData, formatINR } from '../../context/PortalDataContext'
import { generateQuotationPDF } from '../../utils/quotationPdfGenerator'
import './AdminQuoteCreatorModal.css'

export default function AdminQuoteCreatorModal({ onClose, onSuccess }) {
  const { createQuotation, users } = usePortalData()
  const [activeSection, setActiveSection] = useState('project') // 'project' | 'pcb' | 'engineering' | 'assembly' | 'pricing'
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

  // 1. Client & Project Details
  const [selectedUser, setSelectedUser] = useState('user_apex')
  const [projectName, setProjectName] = useState('Next-Gen Edge AI Processor Carrier')
  const [serviceType, setServiceType] = useState('Turnkey PCB Assembly')
  const [tier, setTier] = useState('Pilot Production')
  const [quantity, setQuantity] = useState(200)
  const [dimensions, setDimensions] = useState('140mm x 95mm')
  const [leadTime, setLeadTime] = useState('7 Business Days')

  // 2. PCB Fabrication & Stackup Specs
  const [layerCount, setLayerCount] = useState('6 Layers')
  const [material, setMaterial] = useState('FR4 TG170 High-Tg (Shengyi S1000-2M)')
  const [thickness, setThickness] = useState('1.6mm (Standard)')
  const [copperWeight, setCopperWeight] = useState('2.0 oz Outer / 1.0 oz Inner')
  const [surfaceFinish, setSurfaceFinish] = useState('ENIG (Electroless Nickel Immersion Gold)')
  const [solderMask, setSolderMask] = useState('Matte Black')
  const [silkscreen, setSilkscreen] = useState('Crisp White')
  const [panelization, setPanelization] = useState('Single PCB (Individual Routing)')

  // 3. Precision Engineering & Quality Specs
  const [impedance, setImpedance] = useState('Controlled Single 50Ω & Diff 90Ω (±5%)')
  const [viaProcess, setViaProcess] = useState('VIPPO (Via-in-Pad Plated Over / Capped)')
  const [minDrill, setMinDrill] = useState('0.20mm (8 mil Drill)')
  const [minSpacing, setMinSpacing] = useState('4/4 mil (Precision Class)')
  const [qualityClass, setQualityClass] = useState('IPC-A-610 Class 3 (Aerospace / High-Rel)')
  const [testingInspection, setTestingInspection] = useState('100% 3D AOI + Flying Probe + X-Ray Inspection')

  // 4. SMT Assembly & Sourcing
  const [assemblySide, setAssemblySide] = useState('Double-Sided SMT + THT')
  const [sourcingMode, setSourcingMode] = useState('Full Turnkey (100% Authorized Sourcing)')
  const [conformalCoating, setConformalCoating] = useState('Silicone Humiseal (Moisture & Thermal)')
  const [firmwareTesting, setFirmwareTesting] = useState('Functional Test Jig Fixture + Firmware Flash')

  // 5. Itemized Cost Calculation (INR ₹)
  const [fabricationCost, setFabricationCost] = useState(95000)
  const [assemblyCost, setAssemblyCost] = useState(115000)
  const [bomCost, setBomCost] = useState(165000)
  const [toolingCost, setToolingCost] = useState(14000)
  const [testingCost, setTestingCost] = useState(8000)
  const [shippingCost, setShippingCost] = useState(6500)
  const [discountAmount, setDiscountAmount] = useState(12000)
  const [adminNotes, setAdminNotes] = useState('Includes full DFM impedance modeling, 3D AOI, and BGA X-Ray verification with Certificates of Conformance.')

  // Total Calculation
  const subtotal = Number(fabricationCost) + Number(assemblyCost) + Number(bomCost) + Number(toolingCost) + Number(testingCost) + Number(shippingCost)
  const total = Math.max(0, subtotal - Number(discountAmount))

  const buildPayload = () => {
    const clientObj = users.find(u => u.id === selectedUser) || {
      name: 'Apex Robotics Engineering',
      email: 'client.engineer@apexrobotics.io',
      company: 'Apex Robotics International LLC'
    }

    return {
      userId: selectedUser,
      clientName: clientObj.company || clientObj.name,
      clientEmail: clientObj.email,
      projectName,
      serviceType,
      tier,
      layerCount,
      quantity: Number(quantity),
      dimensions,
      leadTime,
      specs: {
        material,
        thickness,
        copperWeight,
        surfaceFinish,
        solderMask,
        silkscreen,
        panelization,
        impedance,
        viaProcess,
        minDrill,
        minSpacing,
        qualityClass,
        testingInspection,
        assemblySide,
        sourcingMode,
        conformalCoating,
        firmwareTesting
      },
      pricing: {
        fabrication: Number(fabricationCost),
        smtAssembly: Number(assemblyCost),
        bomComponents: Number(bomCost),
        toolingNRE: Number(toolingCost),
        testing: Number(testingCost),
        shipping: Number(shippingCost),
        discount: Number(discountAmount),
        total
      },
      adminNotes
    }
  }

  const handleCreateAndSave = (e) => {
    if (e) e.preventDefault()
    const payload = buildPayload()
    const newQuote = createQuotation(payload)
    if (onSuccess) onSuccess(newQuote)
    onClose()
  }

  const handleCreateAndDownloadPdf = async (e) => {
    if (e) e.preventDefault()
    setIsGeneratingPdf(true)
    const payload = buildPayload()
    const newQuote = createQuotation(payload)
    await generateQuotationPDF(newQuote)
    setIsGeneratingPdf(false)
    if (onSuccess) onSuccess(newQuote)
    onClose()
  }

  const handleDirectDownloadPreview = async () => {
    setIsGeneratingPdf(true)
    const payload = buildPayload()
    await generateQuotationPDF(payload)
    setIsGeneratingPdf(false)
  }

  return (
    <div className="admin-quote-modal-overlay" onClick={onClose}>
      <div className="admin-quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="quote-close-btn" onClick={onClose} aria-label="Close Quote Creator">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="admin-quote-header">
          <div className="quote-badge-admin">
            <Calculator size={14} />
            <span>ENTERPRISE PCB QUOTATION SUITE (INR ₹)</span>
          </div>
          <div className="header-flex-row">
            <div>
              <h2 className="admin-quote-title">Create Official PCB Quotation</h2>
              <p className="admin-quote-desc">
                Configure full-spec manufacturing parameters, itemized INR commercial breakdown, and generate branded PDF quotes.
              </p>
            </div>

            <button 
              type="button" 
              className="btn-quick-preview-pdf"
              onClick={handleDirectDownloadPreview}
              disabled={isGeneratingPdf}
              title="Generate and download official PDF with company logo"
            >
              <Download size={15} />
              <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Preview'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="quote-nav-tabs">
          <button 
            type="button" 
            className={`nav-tab-btn ${activeSection === 'project' ? 'active' : ''}`}
            onClick={() => setActiveSection('project')}
          >
            <Building2 size={15} />
            <span>1. Client & Project</span>
          </button>
          <button 
            type="button" 
            className={`nav-tab-btn ${activeSection === 'pcb' ? 'active' : ''}`}
            onClick={() => setActiveSection('pcb')}
          >
            <Layers size={15} />
            <span>2. PCB Stackup & Material</span>
          </button>
          <button 
            type="button" 
            className={`nav-tab-btn ${activeSection === 'engineering' ? 'active' : ''}`}
            onClick={() => setActiveSection('engineering')}
          >
            <Zap size={15} />
            <span>3. Precision Specs & Quality</span>
          </button>
          <button 
            type="button" 
            className={`nav-tab-btn ${activeSection === 'assembly' ? 'active' : ''}`}
            onClick={() => setActiveSection('assembly')}
          >
            <Cpu size={15} />
            <span>4. SMT & Sourcing</span>
          </button>
          <button 
            type="button" 
            className={`nav-tab-btn ${activeSection === 'pricing' ? 'active' : ''}`}
            onClick={() => setActiveSection('pricing')}
          >
            <Calculator size={15} />
            <span>5. Commercials & Totals</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCreateAndSave} className="admin-quote-form">
          <div className="quote-tab-content">

            {/* TAB 1: Client & Project Details */}
            {activeSection === 'project' && (
              <div className="quote-section-pane">
                <div className="pane-header">
                  <h3 className="section-title">Client Account & Production Scope</h3>
                  <p className="section-desc">Designate target customer account, project designation, and production turnaround requirements.</p>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Target Client Account *</label>
                    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                      {users.map(u => (
                        <option key={u.id} value={u.id}>
                          {u.company} ({u.email})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Production Scope / Service Category *</label>
                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                      <option value="Turnkey PCB Assembly">Turnkey PCB Assembly (Fab + SMT + BOM)</option>
                      <option value="PCB Fabrication Only">Bare Board PCB Fabrication Only</option>
                      <option value="Rapid PCB Prototype">Rapid PCB Prototype (24-72h Fast-Track)</option>
                      <option value="High-Density HDI PCB">High-Density HDI & Microvia</option>
                      <option value="Flex & Rigid-Flex PCB">Flex & Rigid-Flex Multi-Layer</option>
                      <option value="Heavy Copper Power Board">Heavy Copper High-Current Board</option>
                      <option value="High Frequency RF / Microwave">High Frequency RF (Rogers / Megtron)</option>
                      <option value="Box Build System Integration">Box Build & Enclosure System Assembly</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Title / Board Hardware Model *</label>
                  <input 
                    type="text" 
                    value={projectName} 
                    onChange={(e) => setProjectName(e.target.value)} 
                    placeholder="e.g. Quad-Core Flight Controller ESC v4.2"
                    required 
                  />
                </div>

                <div className="form-row-3">
                  <div className="form-group">
                    <label>Production Run Tier</label>
                    <select value={tier} onChange={(e) => setTier(e.target.value)}>
                      <option value="Rapid Prototype">Rapid Prototype (1-10 pcs)</option>
                      <option value="Pilot Production">Pilot Production (25-250 pcs)</option>
                      <option value="Mass Production">Mass Production (500-10,000+ pcs)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Batch Quantity (Pcs) *</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Committed Lead Time *</label>
                    <select value={leadTime} onChange={(e) => setLeadTime(e.target.value)}>
                      <option value="3 Business Days (Super Express)">3 Business Days (Super Express)</option>
                      <option value="5 Business Days (Express)">5 Business Days (Express)</option>
                      <option value="7 Business Days (Standard)">7 Business Days (Standard)</option>
                      <option value="10 Business Days (Economy)">10 Business Days (Economy)</option>
                      <option value="15 Business Days (Mass Production)">15 Business Days (Mass Production)</option>
                    </select>
                  </div>
                </div>

                <div className="quick-nav-actions">
                  <div></div>
                  <button type="button" className="btn-next-step" onClick={() => setActiveSection('pcb')}>
                    <span>Next: PCB Stackup Specs</span>
                    <Sparkles size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: PCB Stackup & Material */}
            {activeSection === 'pcb' && (
              <div className="quote-section-pane">
                <div className="pane-header">
                  <h3 className="section-title">PCB Stackup, Substrate & Finishes</h3>
                  <p className="section-desc">Select board geometry, layer count, base dielectric material, copper weight, and soldermask.</p>
                </div>

                <div className="form-row-3">
                  <div className="form-group">
                    <label>Layer Count *</label>
                    <select value={layerCount} onChange={(e) => setLayerCount(e.target.value)}>
                      <option value="1 Layer Single-Sided">1 Layer Single-Sided</option>
                      <option value="2 Layers Double-Sided">2 Layers Double-Sided</option>
                      <option value="4 Layers">4 Layers Multilayer</option>
                      <option value="6 Layers">6 Layers High-Density</option>
                      <option value="8 Layers HDI">8 Layers HDI (1+N+1)</option>
                      <option value="10 Layers HDI">10 Layers HDI (2+N+2)</option>
                      <option value="12 Layers Any-Layer">12 Layers Any-Layer HDI</option>
                      <option value="14-32 Layers Backplane">14-32 Layers High Layer Backplane</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Board Dimensions (L x W) *</label>
                    <input 
                      type="text" 
                      value={dimensions} 
                      onChange={(e) => setDimensions(e.target.value)} 
                      placeholder="e.g. 140mm x 95mm"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Finished Board Thickness *</label>
                    <select value={thickness} onChange={(e) => setThickness(e.target.value)}>
                      <option value="0.4mm (Ultra Thin)">0.4mm (Ultra Thin)</option>
                      <option value="0.6mm">0.6mm</option>
                      <option value="0.8mm">0.8mm</option>
                      <option value="1.0mm">1.0mm</option>
                      <option value="1.2mm">1.2mm</option>
                      <option value="1.6mm (Standard)">1.6mm (Standard)</option>
                      <option value="2.0mm (Heavy Duty)">2.0mm (Heavy Duty)</option>
                      <option value="2.4mm">2.4mm</option>
                      <option value="3.2mm (Industrial Power)">3.2mm (Industrial Power)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Base Substrate / Laminate *</label>
                    <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                      <option value="FR4 TG140 Standard (Shengyi S1141)">FR4 TG140 Standard (Shengyi S1141)</option>
                      <option value="FR4 TG170 High-Tg (Shengyi S1000-2M)">FR4 TG170 High-Tg (Shengyi S1000-2M - Recommended)</option>
                      <option value="FR4 TG180 Ultra High-Tg (Isola 370HR)">FR4 TG180 Ultra High-Tg (Isola 370HR)</option>
                      <option value="Rogers RO4350B (RF Low Loss)">Rogers RO4350B (RF Low Loss 3.48 Dk)</option>
                      <option value="Rogers RO4003C / FR4 Hybrid">Rogers RO4003C / FR4 Hybrid Stackup</option>
                      <option value="Megtron 6 (High-Speed Multi-Gigabit)">Panasonic Megtron 6 (Ultra Low Df)</option>
                      <option value="Polyimide Flex Core (DuPont Pyralux)">Polyimide Flexible Substrate (DuPont Pyralux)</option>
                      <option value="Aluminum Metal Core (MCPCB 2.0 W/m-K)">Aluminum Metal Core (MCPCB for Power/LED)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Copper Weight (Outer / Inner) *</label>
                    <select value={copperWeight} onChange={(e) => setCopperWeight(e.target.value)}>
                      <option value="0.5 oz Outer / 0.5 oz Inner">0.5 oz Outer / 0.5 oz Inner (Fine Pitch)</option>
                      <option value="1.0 oz Outer / 1.0 oz Inner">1.0 oz Outer / 1.0 oz Inner (Standard 35µm)</option>
                      <option value="2.0 oz Outer / 1.0 oz Inner">2.0 oz Outer / 1.0 oz Inner (Enhanced Current)</option>
                      <option value="2.0 oz Outer / 2.0 oz Inner">2.0 oz Outer / 2.0 oz Inner (Heavy Power)</option>
                      <option value="3.0 oz Outer / 2.0 oz Inner">3.0 oz Outer / 2.0 oz Inner</option>
                      <option value="4.0 oz Heavy Copper">4.0 oz Heavy Copper (High Current 60A+)</option>
                      <option value="6.0 oz Ultra Heavy Copper">6.0 oz Ultra Heavy Copper Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-3">
                  <div className="form-group">
                    <label>Surface Finish / Plating *</label>
                    <select value={surfaceFinish} onChange={(e) => setSurfaceFinish(e.target.value)}>
                      <option value="ENIG (Electroless Nickel Immersion Gold 2u)">ENIG (2u" Gold over 120u" Nickel - Best for BGA)</option>
                      <option value="HASL Lead-Free (RoHS Compliant)">HASL Lead-Free (RoHS Compliant)</option>
                      <option value="HASL Leaded (Sn63/Pb37)">HASL Leaded (Sn63/Pb37 Mil/Aero)</option>
                      <option value="ENEPIG (Electroless Ni-Pd-Au)">ENEPIG (Wire-Bondable & Zero Corrosion)</option>
                      <option value="Immersion Silver (Ag)">Immersion Silver (Ag - High Speed RF)</option>
                      <option value="Immersion Tin (Sn)">Immersion Tin (Sn - Press-Fit)</option>
                      <option value="Hard Gold Fingers (30u for PCIe Edge)">Hard Gold Fingers (30u" for PCIe/Edge Connector)</option>
                      <option value="OSP (Organic Solderability Preservative)">OSP (Organic Solderability Preservative)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Solder Mask Color</label>
                    <select value={solderMask} onChange={(e) => setSolderMask(e.target.value)}>
                      <option value="Matte Black">Matte Black (Executive Finish)</option>
                      <option value="Glossy Black">Glossy Black</option>
                      <option value="Industrial Green (Standard)">Industrial Green (Standard)</option>
                      <option value="Matte Green">Matte Green</option>
                      <option value="Cobalt Blue">Cobalt Blue</option>
                      <option value="Clean White">Clean White (High Reflectivity LED)</option>
                      <option value="Signal Red">Signal Red</option>
                      <option value="Sun Yellow">Sun Yellow</option>
                      <option value="Royal Purple">Royal Purple</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Silkscreen Legend</label>
                    <select value={silkscreen} onChange={(e) => setSilkscreen(e.target.value)}>
                      <option value="Crisp White">Crisp White (High Density)</option>
                      <option value="Jet Black">Jet Black (for White Mask)</option>
                      <option value="Yellow">Yellow Legend</option>
                      <option value="None">No Silkscreen</option>
                    </select>
                  </div>
                </div>

                <div className="quick-nav-actions">
                  <button type="button" className="btn-prev-step" onClick={() => setActiveSection('project')}>
                    Back: Client Info
                  </button>
                  <button type="button" className="btn-next-step" onClick={() => setActiveSection('engineering')}>
                    <span>Next: Precision Engineering</span>
                    <Sparkles size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: Precision Specs & Quality */}
            {activeSection === 'engineering' && (
              <div className="quote-section-pane">
                <div className="pane-header">
                  <h3 className="section-title">Precision CAM Rules, Impedance & Quality Class</h3>
                  <p className="section-desc">Define controlled impedance targets, via plugging technology, minimum drill diameters, and IPC testing standards.</p>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Controlled Impedance Specification</label>
                    <select value={impedance} onChange={(e) => setImpedance(e.target.value)}>
                      <option value="Controlled Single 50Ω & Diff 90Ω (±5%)">Controlled Single 50Ω & Diff 90Ω (±5% with Test Coupon)</option>
                      <option value="Controlled Single 50Ω & Diff 100Ω (±5%)">Controlled Single 50Ω & Diff 100Ω (Ethernet/HDMI)</option>
                      <option value="Multi-Track RF Impedance Stackup (±5%)">Multi-Track RF Impedance Stackup (±5% Polar SI8000)</option>
                      <option value="Standard Non-Impedance Control">Standard Non-Impedance Control</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Via Technology & Hole Processing</label>
                    <select value={viaProcess} onChange={(e) => setViaProcess(e.target.value)}>
                      <option value="VIPPO (Via-in-Pad Plated Over / Capped)">VIPPO (Via-in-Pad Plated Over / Capped - Best for BGA)</option>
                      <option value="Tented & Solder Mask Plugged">Tented & Solder Mask Plugged (Standard)</option>
                      <option value="Resin Filled & Planarized Copper Cap">Resin Filled & Planarized Copper Cap (IPC-4761 Type VII)</option>
                      <option value="Conductive Copper Paste Filled">Conductive Copper Paste Filled (Thermal Vias)</option>
                      <option value="Staggered Laser Microvias">Staggered Laser Microvias (0.10mm)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Minimum Drill / Laser Hole Diameter</label>
                    <select value={minDrill} onChange={(e) => setMinDrill(e.target.value)}>
                      <option value="0.15mm (6 mil Laser Microvia)">0.15mm (6 mil Laser Microvia HDI)</option>
                      <option value="0.20mm (8 mil Mechanical CNC)">0.20mm (8 mil Mechanical CNC - Precision)</option>
                      <option value="0.25mm (10 mil)">0.25mm (10 mil)</option>
                      <option value="0.30mm (12 mil Standard)">0.30mm (12 mil Standard)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Minimum Track / Spacing</label>
                    <select value={minSpacing} onChange={(e) => setMinSpacing(e.target.value)}>
                      <option value="3/3 mil (Ultra Fine HDI)">3/3 mil (Ultra Fine HDI / Laser Direct Imaging)</option>
                      <option value="4/4 mil (Precision Class)">4/4 mil (Precision Class - Recommended)</option>
                      <option value="5/5 mil (Standard)">5/5 mil (Standard)</option>
                      <option value="6/6 mil (Heavy Copper)">6/6 mil (Heavy Copper)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>IPC Quality & Manufacturing Standard</label>
                    <select value={qualityClass} onChange={(e) => setQualityClass(e.target.value)}>
                      <option value="IPC-A-610 Class 3 (Aerospace / High-Rel)">IPC-A-610 Class 3 (Aerospace / High-Rel Medical - Zero Defect)</option>
                      <option value="IPC-A-610 Class 2 (Standard Commercial)">IPC-A-610 Class 2 (Standard Commercial & Consumer)</option>
                      <option value="ISO 13485 Medical Device Standard">ISO 13485 Medical Device Standard</option>
                      <option value="IATF 16949 Automotive Standard">IATF 16949 Automotive Grade 1</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Inspection & Verification Suite</label>
                    <select value={testingInspection} onChange={(e) => setTestingInspection(e.target.value)}>
                      <option value="100% 3D AOI + Flying Probe + X-Ray Inspection">100% 3D AOI + Flying Probe + X-Ray Inspection for BGAs</option>
                      <option value="100% Flying Probe E-Test + AOI">100% Flying Probe E-Test + AOI</option>
                      <option value="4-Wire Kelvin Low Resistance Test + AOI">4-Wire Kelvin Low Resistance Test + AOI</option>
                      <option value="Standard Netlist Electrical E-Test">Standard Netlist Electrical E-Test</option>
                    </select>
                  </div>
                </div>

                <div className="quick-nav-actions">
                  <button type="button" className="btn-prev-step" onClick={() => setActiveSection('pcb')}>
                    Back: PCB Specs
                  </button>
                  <button type="button" className="btn-next-step" onClick={() => setActiveSection('assembly')}>
                    <span>Next: SMT & Sourcing</span>
                    <Sparkles size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: SMT Assembly & Sourcing */}
            {activeSection === 'assembly' && (
              <div className="quote-section-pane">
                <div className="pane-header">
                  <h3 className="section-title">SMT Pick & Place, Component Procurement & Testing</h3>
                  <p className="section-desc">Specify surface mount technology placement lines, turnkey BOM sourcing, conformal coating, and programming.</p>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>SMT Assembly Configuration</label>
                    <select value={assemblySide} onChange={(e) => setAssemblySide(e.target.value)}>
                      <option value="Double-Sided SMT + THT">Double-Sided SMT + Through-Hole (THT)</option>
                      <option value="Top Side SMT Only">Top Side SMT Only</option>
                      <option value="Bottom Side SMT Only">Bottom Side SMT Only</option>
                      <option value="SMT + Pin Through Hole Selective Soldering">SMT + Selective Wave Soldering</option>
                      <option value="Bare Board Only (No Assembly)">Bare Board Only (No Assembly)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>BOM Component Sourcing Model</label>
                    <select value={sourcingMode} onChange={(e) => setSourcingMode(e.target.value)}>
                      <option value="Full Turnkey (100% Authorized Sourcing)">Full Turnkey (100% Sourced via DigiKey, Mouser, Arrow, TI, ST)</option>
                      <option value="Partial Turnkey (Hybrid Shared BOM)">Partial Turnkey (Client provides main ICs, Atronics sources passives)</option>
                      <option value="Consigned / Kitted (Client Provides All)">Consigned / Kitted (Client provides 100% of components)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Conformal Coating Protection</label>
                    <select value={conformalCoating} onChange={(e) => setConformalCoating(e.target.value)}>
                      <option value="None">None (Standard)</option>
                      <option value="Silicone Humiseal (Moisture & Thermal)">Silicone Humiseal 1B31 (Moisture & Thermal -55°C to +150°C)</option>
                      <option value="Acrylic Protective Coating (MIL-I-46058C)">Acrylic Protective Coating (MIL-I-46058C Fast Cure)</option>
                      <option value="Polyurethane Hard Resin">Polyurethane Chemical Resistant Coating</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Firmware Flashing & Functional Test Fixture</label>
                    <select value={firmwareTesting} onChange={(e) => setFirmwareTesting(e.target.value)}>
                      <option value="Functional Test Jig Fixture + Firmware Flash">Functional Bed-of-Nails Test Jig + Firmware Flash + Serial Log</option>
                      <option value="Basic Power-Up Verification">Basic Power-Up Rail Voltages Verification</option>
                      <option value="None (Visual & E-Test Only)">None (Visual & E-Test Only)</option>
                    </select>
                  </div>
                </div>

                <div className="quick-nav-actions">
                  <button type="button" className="btn-prev-step" onClick={() => setActiveSection('engineering')}>
                    Back: Engineering
                  </button>
                  <button type="button" className="btn-next-step" onClick={() => setActiveSection('pricing')}>
                    <span>Next: Itemized Commercials (INR)</span>
                    <Sparkles size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 5: Commercials & Itemized Breakdown */}
            {activeSection === 'pricing' && (
              <div className="quote-section-pane">
                <div className="pane-header">
                  <h3 className="section-title">Itemized Commercial Breakdown (Indian Rupees ₹)</h3>
                  <p className="section-desc">Enter cost breakdown per engineering stage. Subtotals and grand totals update instantly in Indian Rupees.</p>
                </div>

                <div className="pricing-grid-two-col">
                  {/* Line Item Inputs */}
                  <div className="pricing-inputs-card">
                    <div className="price-input-row">
                      <label>01. PCB Bare Board Fabrication (₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={fabricationCost} 
                        onChange={(e) => setFabricationCost(e.target.value)} 
                        required 
                      />
                    </div>

                    <div className="price-input-row">
                      <label>02. SMT High-Speed Assembly Line (₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={assemblyCost} 
                        onChange={(e) => setAssemblyCost(e.target.value)} 
                      />
                    </div>

                    <div className="price-input-row">
                      <label>03. BOM Electronic Components Sourcing (₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={bomCost} 
                        onChange={(e) => setBomCost(e.target.value)} 
                      />
                    </div>

                    <div className="price-input-row">
                      <label>04. NRE Tooling, Photoplots & Laser Stencils (₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={toolingCost} 
                        onChange={(e) => setToolingCost(e.target.value)} 
                      />
                    </div>

                    <div className="price-input-row">
                      <label>05. Functional Testing & Flashing Setup (₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={testingCost} 
                        onChange={(e) => setTestingCost(e.target.value)} 
                      />
                    </div>

                    <div className="price-input-row">
                      <label>06. ESD Vacuum Packaging & Express Courier (₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={shippingCost} 
                        onChange={(e) => setShippingCost(e.target.value)} 
                      />
                    </div>

                    <div className="price-input-row discount-row">
                      <label>07. Commercial Discount / Waiver (-₹)</label>
                      <input 
                        type="number" 
                        step="1" 
                        value={discountAmount} 
                        onChange={(e) => setDiscountAmount(e.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Live Summary & Notes */}
                  <div className="pricing-summary-col">
                    <div className="total-calculation-banner">
                      <div className="calc-left">
                        <span className="calc-lbl">OFFICIAL QUOTE TOTAL (INR):</span>
                        <span className="calc-sub">Payable via Online Checkout / RTGS</span>
                      </div>
                      <div className="calc-total">{formatINR(total)}</div>
                    </div>

                    <div className="form-group" style={{ marginTop: '12px' }}>
                      <label>Admin & DFM Notes to Customer</label>
                      <textarea 
                        rows={3} 
                        value={adminNotes} 
                        onChange={(e) => setAdminNotes(e.target.value)} 
                        placeholder="Add engineering remarks, component lead time notes, or warranty terms..."
                      />
                    </div>

                    <div className="banking-preview-pill">
                      <strong>Payment Terms:</strong> 100% Advance / Net-30 approved accounts. Bank transfer via HDFC RTGS/NEFT/UPI.
                    </div>
                  </div>
                </div>

                {/* Final Actions */}
                <div className="quote-final-actions-bar">
                  <button 
                    type="button" 
                    className="btn-publish-and-pdf"
                    onClick={handleCreateAndDownloadPdf}
                    disabled={isGeneratingPdf}
                  >
                    <Download size={18} />
                    <span>{isGeneratingPdf ? 'Generating PDF...' : 'Publish & Download Branded PDF'}</span>
                  </button>

                  <button 
                    type="submit" 
                    className="btn-publish-only"
                  >
                    <CheckCircle2 size={18} />
                    <span>Publish Online to Client Portal</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </form>
      </div>
    </div>
  )
}
