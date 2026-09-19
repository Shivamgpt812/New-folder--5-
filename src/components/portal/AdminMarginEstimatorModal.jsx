import React, { useState } from 'react'
import { 
  X, 
  Calculator, 
  Percent, 
  TrendingUp, 
  Layers, 
  DollarSign, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Sliders,
  Cpu
} from 'lucide-react'
import { formatINR } from '../../context/PortalDataContext'
import './AdminMarginEstimatorModal.css'

export default function AdminMarginEstimatorModal({ onClose, onApplyToQuote }) {
  // Inputs
  const [boardLength, setBoardLength] = useState(120) // mm
  const [boardWidth, setBoardWidth] = useState(85)   // mm
  const [layers, setLayers] = useState(6)
  const [quantity, setQuantity] = useState(250)
  const [substrateType, setSubstrateType] = useState('FR4_TG170') // 'FR4_TG140', 'FR4_TG170', 'Rogers'
  const [smdPadsCount, setSmdPadsCount] = useState(180) // pads per board
  const [thtPinsCount, setThtPinsCount] = useState(16)
  const [targetMarginPct, setTargetMarginPct] = useState(35) // 35% margin

  // Calculation Engine
  const areaSqM = ((boardLength * boardWidth) / 1000000) * quantity
  const laminateBaseRate = substrateType === 'Rogers' ? 18000 : substrateType === 'FR4_TG170' ? 4200 : 2800 // per sq.m per layer
  const rawMaterialCost = Math.round(areaSqM * layers * laminateBaseRate * 0.4)
  const drillingEtchCost = Math.round(quantity * (layers * 85 + 220))
  const bareFabCost = rawMaterialCost + drillingEtchCost

  const smtSetupFee = 12000
  const smtPlacementCost = Math.round(quantity * (smdPadsCount * 0.45 + thtPinsCount * 1.2)) + smtSetupFee
  const bomEstimatedCost = Math.round(quantity * 480) // average components
  const nreToolingCost = 14000
  const factoryTestingCost = Math.round(quantity * 35) + 5000

  const totalFactoryDirectCost = bareFabCost + smtPlacementCost + bomEstimatedCost + nreToolingCost + factoryTestingCost

  // Margin Pricing
  const marginMultiplier = 1 / (1 - (targetMarginPct / 100))
  const suggestedSellingPrice = Math.round(totalFactoryDirectCost * marginMultiplier)
  const grossProfitINR = suggestedSellingPrice - totalFactoryDirectCost

  const handleApply = () => {
    if (onApplyToQuote) {
      onApplyToQuote({
        projectName: `Custom Engineered Run (${layers}L, ${boardLength}x${boardWidth}mm)`,
        quantity,
        dimensions: `${boardLength}mm x ${boardWidth}mm`,
        layerCount: `${layers} Layers`,
        pricing: {
          fabrication: Math.round(bareFabCost * marginMultiplier),
          smtAssembly: Math.round(smtPlacementCost * marginMultiplier),
          bomComponents: Math.round(bomEstimatedCost * 1.08), // 8% handling
          toolingNRE: nreToolingCost,
          testing: factoryTestingCost,
          shipping: 6500,
          discount: 0,
          total: suggestedSellingPrice
        }
      })
    }
    onClose()
  }

  return (
    <div className="margin-modal-overlay" onClick={onClose}>
      <div className="margin-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="margin-close-btn" onClick={onClose} aria-label="Close Margin Estimator">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="margin-header">
          <div className="margin-badge-top">
            <Calculator size={14} />
            <span>CAM COST ESTIMATION & GROSS MARGIN PRICING ENGINE</span>
          </div>
          <h2 className="margin-title">Automated Cost Estimator & Margin Builder</h2>
          <p className="margin-subtitle">
            Calculate precise factory production costs, configure target gross margin %, and generate profitable customer pricing in INR.
          </p>
        </div>

        <div className="margin-grid-two-col">
          {/* Left Inputs */}
          <div className="margin-inputs-col">
            <h4 className="m-section-title">1. PCB GEOMETRY & SMT METRICS</h4>

            <div className="m-form-row-2">
              <div className="m-form-group">
                <label>Board Dimensions (mm)</label>
                <div className="dim-inputs">
                  <input 
                    type="number" 
                    value={boardLength} 
                    onChange={(e) => setBoardLength(Number(e.target.value))} 
                    placeholder="Length"
                  />
                  <span>×</span>
                  <input 
                    type="number" 
                    value={boardWidth} 
                    onChange={(e) => setBoardWidth(Number(e.target.value))} 
                    placeholder="Width"
                  />
                </div>
              </div>

              <div className="m-form-group">
                <label>Layer Stackup</label>
                <select value={layers} onChange={(e) => setLayers(Number(e.target.value))}>
                  <option value={2}>2 Layers</option>
                  <option value={4}>4 Layers</option>
                  <option value={6}>6 Layers</option>
                  <option value={8}>8 Layers HDI</option>
                  <option value={10}>10 Layers</option>
                  <option value={12}>12 Layers Any-Layer</option>
                </select>
              </div>
            </div>

            <div className="m-form-row-2">
              <div className="m-form-group">
                <label>Production Quantity (Pcs)</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))} 
                />
              </div>

              <div className="m-form-group">
                <label>Base Substrate</label>
                <select value={substrateType} onChange={(e) => setSubstrateType(e.target.value)}>
                  <option value="FR4_TG140">FR4 TG140 Standard</option>
                  <option value="FR4_TG170">FR4 TG170 High-Tg (Shengyi S1000-2M)</option>
                  <option value="Rogers">Rogers RO4350B (High Frequency)</option>
                </select>
              </div>
            </div>

            <div className="m-form-row-2">
              <div className="m-form-group">
                <label>SMD Pads / Component Points</label>
                <input 
                  type="number" 
                  value={smdPadsCount} 
                  onChange={(e) => setSmdPadsCount(Number(e.target.value))} 
                />
              </div>

              <div className="m-form-group">
                <label>Through-Hole THT Pins</label>
                <input 
                  type="number" 
                  value={thtPinsCount} 
                  onChange={(e) => setThtPinsCount(Number(e.target.value))} 
                />
              </div>
            </div>

            <div className="margin-slider-box">
              <div className="slider-header">
                <label>Target Gross Margin %:</label>
                <span className="margin-pct-tag">{targetMarginPct}%</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="65" 
                step="1"
                value={targetMarginPct} 
                onChange={(e) => setTargetMarginPct(Number(e.target.value))} 
                className="margin-range-slider"
              />
              <div className="slider-limits">
                <span>15% (Competitive Volume)</span>
                <span>35% (Standard Industrial)</span>
                <span>65% (Fast-Track Niche)</span>
              </div>
            </div>
          </div>

          {/* Right Live Cost Breakdown */}
          <div className="margin-breakdown-col">
            <h4 className="m-section-title">2. FACTORY COST BREAKDOWN</h4>

            <div className="factory-cost-card">
              <div className="cost-row">
                <span>Bare PCB Fabrication (Materials + CNC):</span>
                <strong>{formatINR(bareFabCost)}</strong>
              </div>
              <div className="cost-row">
                <span>SMT Pick & Place Setup & Placement:</span>
                <strong>{formatINR(smtPlacementCost)}</strong>
              </div>
              <div className="cost-row">
                <span>BOM Component Procurement:</span>
                <strong>{formatINR(bomEstimatedCost)}</strong>
              </div>
              <div className="cost-row">
                <span>NRE Tooling & Laser Stencils:</span>
                <strong>{formatINR(nreToolingCost)}</strong>
              </div>
              <div className="cost-row">
                <span>3D AOI & E-Test Verification:</span>
                <strong>{formatINR(factoryTestingCost)}</strong>
              </div>

              <div className="factory-cost-total-strip">
                <span>TOTAL DIRECT FACTORY COST:</span>
                <span>{formatINR(totalFactoryDirectCost)}</span>
              </div>
            </div>

            {/* Selling Price Card */}
            <div className="selling-price-banner">
              <div className="sp-top">
                <span className="sp-label">SUGGESTED CLIENT SELLING PRICE (INR):</span>
                <span className="sp-sub">{targetMarginPct}% Gross Margin Built-in</span>
              </div>
              <div className="sp-amount">{formatINR(suggestedSellingPrice)}</div>
              <div className="sp-profit">
                Gross Profit Contribution: <strong>+{formatINR(grossProfitINR)}</strong>
              </div>
            </div>

            <button type="button" className="btn-apply-to-quote" onClick={handleApply}>
              <Sparkles size={16} />
              <span>Apply Pricing to Quotation Builder</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
