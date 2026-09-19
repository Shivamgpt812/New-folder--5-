import React from 'react'
import { 
  X, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Radio, 
  ExternalLink, 
  PackageCheck,
  ShieldCheck,
  PhoneCall
} from 'lucide-react'
import './LiveTrackingModal.css'

export default function LiveTrackingModal({ order, onClose }) {
  if (!order) return null

  const tracking = order.trackingData || {
    carrier: 'BlueDart Express Priority Air',
    awb: order.trackingNumber || 'BLUEDART-8829104812IN',
    origin: 'Bengaluru Electronics City Hub, KA',
    destination: order.clientName || 'Apex Robotics Labs, Mumbai, MH',
    status: 'In Transit / Dispatched',
    estimatedDelivery: order.estimatedDelivery || 'Sept 26, 2026 by 02:00 PM',
    weight: '4.8 kg (ESD Packaged)',
    checkpoints: [
      { title: 'Gerber Intake & SMT Production Staged', location: 'Bengaluru Plant', time: 'Sept 12, 09:30 AM', completed: true },
      { title: 'CAM DFM Verification Passed', location: 'DFM Lab Cell 2', time: 'Sept 13, 02:15 PM', completed: true },
      { title: 'Multi-Layer Lamination & CNC Drilling', location: 'Fab Cleanroom B', time: 'Sept 16, 10:20 AM', completed: true },
      { title: 'High-Speed SMT Pick & Place Running', location: 'SMT Line 3', time: 'Sept 18, 09:15 AM', completed: true },
      { title: '3D AOI & X-Ray Quality Inspection', location: 'QA Bay 1', time: 'Sept 22, 04:00 PM', completed: false },
      { title: 'Handed Over to BlueDart Courier Air', location: 'Bengaluru BLR Hub', time: 'Sept 24, 11:30 AM', completed: false },
      { title: 'Out for Doorstep Delivery', location: 'Destination Sort Facility', time: 'Sept 26, 09:00 AM', completed: false }
    ]
  }

  return (
    <div className="tracking-modal-overlay" onClick={onClose}>
      <div className="tracking-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="tracking-close-btn" onClick={onClose} aria-label="Close Live Tracking">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="tracking-header">
          <div className="tracking-badge-top">
            <Radio size={14} className="pulse-icon" />
            <span>LIVE CARRIER TELEMETRY & GPS ROUTING</span>
          </div>
          <h2 className="tracking-title">Live Courier & Transit Telemetry</h2>
          <p className="tracking-subtitle">
            Real-time logistics tracker for <strong>{order.projectName}</strong> ({order.id})
          </p>
        </div>

        {/* Status Spotlight Banner */}
        <div className="tracking-hero-card">
          <div className="hero-left">
            <div className="awb-row">
              <span className="carrier-name">{tracking.carrier}</span>
              <span className="awb-num">AWB: {tracking.awb}</span>
            </div>
            <div className="hero-status-heading">{tracking.status}</div>
            <div className="route-endpoints">
              <span>{tracking.origin}</span>
              <span className="route-arrow">➔</span>
              <span>{tracking.destination}</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="eta-badge">
              <Clock size={16} />
              <div>
                <div className="eta-lbl">ESTIMATED ARRIVAL</div>
                <div className="eta-val">{tracking.estimatedDelivery}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Map Simulation */}
        <div className="interactive-map-simulation">
          <div className="map-grid-bg">
            <div className="map-route-line"></div>
            
            <div className="map-pin pin-origin active">
              <div className="pin-circle">
                <MapPin size={16} />
              </div>
              <div className="pin-label">BLR Plant</div>
            </div>

            <div className="map-pin pin-mid active">
              <div className="pin-pulse"></div>
              <div className="pin-circle pin-truck">
                <Truck size={16} />
              </div>
              <div className="pin-label">In Transit Hub</div>
            </div>

            <div className="map-pin pin-dest">
              <div className="pin-circle">
                <PackageCheck size={16} />
              </div>
              <div className="pin-label">Client Facility</div>
            </div>
          </div>

          <div className="map-bottom-strip">
            <span>Package: <strong>{tracking.weight}</strong></span>
            <span>Tamper Evident Seal: <strong>ATR-SEAL-89201Pass</strong></span>
            <span>Support: <strong>+91 (80) 4129-8900</strong></span>
          </div>
        </div>

        {/* Vertical Timeline Checkpoints */}
        <div className="checkpoints-section">
          <h4 className="checkpoints-title">TRANSIT MILESTONES & DISPATCH TELEMETRY</h4>
          <div className="checkpoints-list">
            {tracking.checkpoints.map((cp, idx) => (
              <div key={idx} className={`checkpoint-step ${cp.completed ? 'completed' : 'pending'}`}>
                <div className="step-marker">
                  {cp.completed ? <CheckCircle2 size={16} /> : <div className="dot-pending"></div>}
                </div>
                <div className="step-content">
                  <div className="step-title-row">
                    <strong className="step-title">{cp.title}</strong>
                    <span className="step-time">{cp.time}</span>
                  </div>
                  <div className="step-location">{cp.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
