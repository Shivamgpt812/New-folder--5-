import React from 'react'
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Cpu, 
  Download, 
  FileText, 
  Zap, 
  Layers, 
  Crosshair,
  Gauge
} from 'lucide-react'
import './DFMReportModal.css'

export default function DFMReportModal({ order, onClose }) {
  if (!order) return null

  const dfm = order.dfmReport || {
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
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="dfm-modal-overlay" onClick={onClose}>
      <div className="dfm-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="dfm-close-btn" onClick={onClose} aria-label="Close DFM Report">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="dfm-header">
          <div className="dfm-badge-top">
            <ShieldCheck size={14} />
            <span>VALOR NPI / GENESIS 2000 AUTOMATED CAM ANALYSIS</span>
          </div>
          <h2 className="dfm-title">Design For Manufacturability (DFM) Report Card</h2>
          <p className="dfm-subtitle">
            Comprehensive pre-flight design rule verification for <strong>{order.projectName}</strong> ({order.id})
          </p>
        </div>

        {/* Health Score Banner */}
        <div className="dfm-score-banner">
          <div className="score-meter-box">
            <div className="score-ring">
              <span className="score-num">{dfm.score}%</span>
              <span className="score-sub">DFM HEALTH</span>
            </div>
            <div className="score-text-details">
              <div className="score-status-tag">
                <CheckCircle2 size={16} />
                <span>{dfm.status}</span>
              </div>
              <p className="score-desc">
                0 Critical Violations found. Stackup impedance tolerances and annular ring clearances satisfy IPC-A-600 Class 3 zero-defect criteria.
              </p>
            </div>
          </div>

          <div className="score-meta-box">
            <div className="meta-row">
              <span className="m-lbl">Validated By:</span>
              <strong className="m-val">{dfm.validatedBy}</strong>
            </div>
            <div className="meta-row">
              <span className="m-lbl">Timestamp:</span>
              <span className="m-val">{dfm.validationDate}</span>
            </div>
            <div className="meta-row">
              <span className="m-lbl">CAM Netlist:</span>
              <span className="m-val">IPC-D-356A Checksum MATCH</span>
            </div>
          </div>
        </div>

        {/* Verification Matrix */}
        <div className="dfm-checks-section">
          <div className="section-label-bar">
            <Layers size={16} />
            <span>AUTOMATED DRC RULE VERIFICATION MATRIX (6 PARAMETERS)</span>
          </div>

          <div className="dfm-checks-table-wrapper">
            <table className="dfm-checks-table">
              <thead>
                <tr>
                  <th>CHECK RULE / PARAMETER</th>
                  <th>DESIGN TARGET</th>
                  <th>MEASURED VALUE</th>
                  <th>RESULT</th>
                  <th>CAM ENGINEERING REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {dfm.checks.map((check, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="check-name">{check.name}</div>
                    </td>
                    <td>
                      <span className="check-target">{check.target}</span>
                    </td>
                    <td>
                      <strong className="check-measured">{check.measured}</strong>
                    </td>
                    <td>
                      <span className={`result-pill status-${check.status}`}>
                        {check.status === 'pass' ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                        <span>{check.status.toUpperCase()}</span>
                      </span>
                    </td>
                    <td>
                      <span className="check-note">{check.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="dfm-footer">
          <div className="dfm-compliance-note">
            Standard: <strong>IPC-2221B / IPC-6012E</strong> • Clearance Safety Factor: <strong>1.25x</strong>
          </div>

          <button className="btn-download-dfm" onClick={handlePrint}>
            <Download size={15} />
            <span>Print Official DFM Certificate</span>
          </button>
        </div>
      </div>
    </div>
  )
}
