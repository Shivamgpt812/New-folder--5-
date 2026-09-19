import React, { useState } from 'react'
import { 
  X, 
  RotateCcw, 
  Layers, 
  Sparkles, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  Calendar,
  Truck
} from 'lucide-react'
import { usePortalData, formatINR } from '../../context/PortalDataContext'
import './ReorderBatchModal.css'

export default function ReorderBatchModal({ order, onClose, onSuccess }) {
  const { reorderPCB } = usePortalData()
  const [scaledQuantity, setScaledQuantity] = useState(order?.quantity ? order.quantity * 2 : 500)
  const [leadTimeOption, setLeadTimeOption] = useState('7-10 Days (Standard Volume)')

  if (!order) return null

  // Volume discount calculation
  const originalQty = order.quantity || 100
  const originalAmount = order.amount || 150000
  const unitPriceOriginal = originalAmount / originalQty

  // Dynamic volume discount rate
  const discountPct = scaledQuantity >= 1000 ? 0.20 : scaledQuantity >= 500 ? 0.15 : scaledQuantity >= 250 ? 0.10 : 0.05
  const scaledUnitRate = unitPriceOriginal * (1 - discountPct)
  const estimatedTotal = Math.round(scaledQuantity * scaledUnitRate)

  const handleReorderSubmit = (e) => {
    e.preventDefault()
    const newOrder = reorderPCB(order.id, scaledQuantity, leadTimeOption, estimatedTotal)
    if (onSuccess) onSuccess(newOrder)
    onClose()
  }

  return (
    <div className="reorder-modal-overlay" onClick={onClose}>
      <div className="reorder-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="reorder-close-btn" onClick={onClose} aria-label="Close Re-order Dialog">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="reorder-header">
          <div className="reorder-badge-top">
            <RotateCcw size={14} />
            <span>INSTANT BATCH RE-ORDER & TOOLING REUSE</span>
          </div>
          <h2 className="reorder-title">Re-Order & Scale Batch Production</h2>
          <p className="reorder-subtitle">
            Scale unit quantities for <strong>{order.projectName}</strong> ({order.layerCount}, {order.dimensions}) with zero tooling fees.
          </p>
        </div>

        <form onSubmit={handleReorderSubmit} className="reorder-form">
          {/* Quick Volume Preset Chips */}
          <div className="reorder-presets-box">
            <div className="preset-label">QUICK BATCH SCALE PRESETS:</div>
            <div className="preset-buttons-row">
              {[originalQty, originalQty * 2, originalQty * 5, 1000, 2500].map((qtyVal) => (
                <button
                  key={qtyVal}
                  type="button"
                  className={`preset-btn ${scaledQuantity === qtyVal ? 'active' : ''}`}
                  onClick={() => setScaledQuantity(qtyVal)}
                >
                  <span>{qtyVal} Units</span>
                  {qtyVal >= originalQty * 2 && (
                    <span className="discount-tag">Save {qtyVal >= 1000 ? '20%' : qtyVal >= 500 ? '15%' : '10%'}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="reorder-inputs-grid">
            <div className="form-group">
              <label>Target Production Quantity (Units)</label>
              <input 
                type="number" 
                min="10" 
                max="50000"
                value={scaledQuantity} 
                onChange={(e) => setScaledQuantity(Number(e.target.value))}
                required 
              />
            </div>

            <div className="form-group">
              <label>Target Turnaround & Logistics</label>
              <select value={leadTimeOption} onChange={(e) => setLeadTimeOption(e.target.value)}>
                <option value="5 Days (Fast-Track Express)">5 Days (Fast-Track Express)</option>
                <option value="7-10 Days (Standard Volume)">7-10 Days (Standard Volume)</option>
                <option value="15 Days (Economy Mass Run)">15 Days (Economy Mass Run)</option>
              </select>
            </div>
          </div>

          {/* Pricing Economics Banner */}
          <div className="reorder-economics-card">
            <div className="eco-row">
              <div className="eco-item">
                <span className="eco-lbl">Base Unit Cost:</span>
                <span className="eco-val-struck">{formatINR(Math.round(unitPriceOriginal))} / unit</span>
              </div>
              <div className="eco-item">
                <span className="eco-lbl">Scaled Unit Rate:</span>
                <span className="eco-val-highlight">{formatINR(Math.round(scaledUnitRate))} / unit</span>
              </div>
              <div className="eco-item">
                <span className="eco-lbl">NRE Tooling Fee:</span>
                <span className="eco-val-free">WAIVED (₹0)</span>
              </div>
            </div>

            <div className="eco-total-banner">
              <div className="eco-left">
                <span className="eco-total-lbl">ESTIMATED RE-ORDER VALUE (INR):</span>
                <span className="eco-total-sub">Includes 18% volume pricing tier waiver</span>
              </div>
              <div className="eco-total-amount">{formatINR(estimatedTotal)}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="reorder-actions-row">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="btn-confirm-reorder">
              <Sparkles size={16} />
              <span>Queue Scaled Production Run ({scaledQuantity} pcs)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
