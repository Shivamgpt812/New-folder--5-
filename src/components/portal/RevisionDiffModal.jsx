import React, { useState } from 'react'
import { 
  X, 
  GitBranch, 
  GitCommit, 
  Calendar, 
  User, 
  FileCode, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react'
import './RevisionDiffModal.css'

export default function RevisionDiffModal({ order, onClose }) {
  if (!order) return null

  const revisions = order.revisions || [
    {
      revision: 'Rev C (Current Production)',
      date: '2026-09-12',
      author: 'Apex Hardware Team (Eng. Alex Chen)',
      changes: 'Migrated BGA decoupling capacitors to 0201 packages. Optimized 50Ω RF coplanar waveguide ground clearances.',
      status: 'Active Build',
      specs: {
        layerCount: '6 Layers',
        copperWeight: '2.0 oz Outer / 1.0 oz Inner',
        surfaceFinish: 'ENIG',
        impedance: 'Controlled Single 50Ω & Diff 90Ω (±5%)',
        bomParts: '142 unique components'
      }
    },
    {
      revision: 'Rev B',
      date: '2026-08-15',
      author: 'Apex Hardware Team',
      changes: 'Swapped LDO regulator to higher-efficiency Buck converter. Added TVS ESD suppression diodes on CAN-FD port.',
      status: 'Archived',
      specs: {
        layerCount: '6 Layers',
        copperWeight: '1.0 oz Outer / 1.0 oz Inner',
        surfaceFinish: 'ENIG',
        impedance: 'Single 50Ω Only',
        bomParts: '138 unique components'
      }
    },
    {
      revision: 'Rev A (Initial Prototype)',
      date: '2026-07-01',
      author: 'Apex Hardware Team',
      changes: 'Initial breadboard validation and prototype spin.',
      status: 'Archived',
      specs: {
        layerCount: '4 Layers',
        copperWeight: '1.0 oz Outer',
        surfaceFinish: 'HASL Lead-Free',
        impedance: 'Standard',
        bomParts: '124 unique components'
      }
    }
  ]

  const [selectedRevIndex, setSelectedRevIndex] = useState(0)
  const currentRev = revisions[selectedRevIndex]

  return (
    <div className="revision-modal-overlay" onClick={onClose}>
      <div className="revision-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="revision-close-btn" onClick={onClose} aria-label="Close Revision Diff">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="revision-header">
          <div className="revision-badge-top">
            <GitBranch size={14} />
            <span>ENGINEERING REVISION COMPARATOR & CAD DIFF</span>
          </div>
          <h2 className="revision-title">Hardware Revision Diff & Version History</h2>
          <p className="revision-subtitle">
            Compare CAM stackups, layer modifications, and BOM ECO changes for <strong>{order.projectName}</strong>
          </p>
        </div>

        {/* Revision Timeline Grid */}
        <div className="revision-layout-grid">
          {/* Left Timeline Selector */}
          <div className="rev-timeline-col">
            <h4 className="rev-col-title">HARDWARE RELEASES ({revisions.length})</h4>
            <div className="rev-timeline-list">
              {revisions.map((rev, idx) => (
                <div 
                  key={idx}
                  className={`rev-item-card ${selectedRevIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedRevIndex(idx)}
                >
                  <div className="rev-item-top">
                    <span className="rev-name">{rev.revision}</span>
                    <span className={`rev-status-pill ${rev.status === 'Active Build' ? 'active' : ''}`}>
                      {rev.status}
                    </span>
                  </div>
                  <div className="rev-item-meta">
                    <span>{rev.date}</span> • <span>{rev.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Diff Details */}
          <div className="rev-diff-details-col">
            <div className="rev-details-card">
              <div className="rev-details-header">
                <div>
                  <div className="rev-highlight-title">{currentRev.revision}</div>
                  <div className="rev-author-sub">Released on {currentRev.date} by {currentRev.author}</div>
                </div>
              </div>

              <div className="eco-change-box">
                <div className="eco-label">ENGINEERING CHANGE ORDER (ECO) SUMMARY:</div>
                <p className="eco-text">{currentRev.changes}</p>
              </div>

              {currentRev.specs && (
                <div className="rev-specs-table-wrapper">
                  <div className="eco-label" style={{ marginBottom: '8px' }}>SPECIFICATION STACKUP MATRIX:</div>
                  <table className="rev-specs-table">
                    <tbody>
                      <tr>
                        <td>Layer Count:</td>
                        <td><strong>{currentRev.specs.layerCount}</strong></td>
                        <td>Copper Weight:</td>
                        <td><strong>{currentRev.specs.copperWeight}</strong></td>
                      </tr>
                      <tr>
                        <td>Surface Finish:</td>
                        <td><strong>{currentRev.specs.surfaceFinish}</strong></td>
                        <td>Impedance:</td>
                        <td><strong>{currentRev.specs.impedance}</strong></td>
                      </tr>
                      <tr>
                        <td>BOM Line Items:</td>
                        <td colSpan={3}><strong>{currentRev.specs.bomParts}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
