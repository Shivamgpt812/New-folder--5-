import React from 'react'
import { 
  CheckCircle2, 
  Clock, 
  Circle, 
  FileCode, 
  Search, 
  Layers, 
  Flame, 
  Target, 
  Shield, 
  Cpu, 
  Eye, 
  Truck, 
  Download, 
  Calendar, 
  FileCheck
} from 'lucide-react'
import { MANUFACTURING_STAGES } from '../../context/PortalDataContext'
import './PCBProcessTracker.css'

const iconMap = {
  FileCode,
  Search,
  Layers,
  Flame,
  Target,
  Shield,
  Cpu,
  Eye,
  CheckCircle2,
  Truck
}

export default function PCBProcessTracker({ 
  order, 
  onOpenDFM, 
  onOpenGallery, 
  onOpenTracking, 
  onOpenRevisions, 
  onOpenReorder 
}) {
  if (!order) return null

  const currentIdx = order.currentStageIndex !== undefined 
    ? order.currentStageIndex 
    : MANUFACTURING_STAGES.findIndex(s => s.id === order.currentStageId)

  const progressPercent = Math.min(100, Math.round(((currentIdx + 1) / MANUFACTURING_STAGES.length) * 100))

  return (
    <div className="pcb-tracker-wrapper">
      {/* Top Banner Status */}
      <div className="pcb-tracker-header">
        <div className="tracker-header-left">
          <div className="tracker-order-id-row">
            <span className="tracker-order-id">{order.id}</span>
            <span className={`tracker-payment-badge ${order.paymentStatus === 'Paid' ? 'badge-paid' : 'badge-pending'}`}>
              {order.paymentStatus === 'Paid' ? 'Payment Verified' : 'Payment Required'}
            </span>
            <span className="tracker-category-badge">{order.category}</span>
          </div>
          <h2 className="tracker-project-title">{order.projectName}</h2>
          <div className="tracker-meta-grid">
            <div className="meta-pill">
              <span className="meta-label">Layers:</span>
              <span className="meta-value">{order.layerCount}</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">Quantity:</span>
              <span className="meta-value">{order.quantity} pcs</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">Dimensions:</span>
              <span className="meta-value">{order.dimensions}</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">Finish:</span>
              <span className="meta-value">{order.surfaceFinish}</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">Copper:</span>
              <span className="meta-value">{order.copperWeight}</span>
            </div>
          </div>
        </div>

        <div className="tracker-header-right">
          <div className="delivery-countdown-card">
            <div className="delivery-icon-box">
              <Calendar size={20} />
            </div>
            <div className="delivery-info">
              <div className="delivery-label">ESTIMATED DISPATCH</div>
              <div className="delivery-date">{order.estimatedDelivery}</div>
              <div className="carrier-badge">
                <Truck size={13} />
                <span>{order.carrier}</span>
              </div>
            </div>
          </div>
          {order.trackingNumber && order.trackingNumber !== 'Pending Dispatch' && (
            <div className="tracking-number-box">
              <span className="track-lbl">Tracking #:</span>
              <span className="track-num">{order.trackingNumber}</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Metric Bar */}
      <div className="tracker-progress-bar-container">
        <div className="progress-bar-header">
          <div className="progress-status-text">
            <span className="current-stage-prefix">CURRENT STAGE ({currentIdx + 1}/{MANUFACTURING_STAGES.length}):</span>
            <span className="current-stage-title">{MANUFACTURING_STAGES[currentIdx]?.name || 'Manufacturing Pipeline'}</span>
          </div>
          <div className="progress-percent-badge">{progressPercent}% Completed</div>
        </div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Enterprise Feature Quick-Action Toolbar */}
      <div className="tracker-quick-actions-toolbar">
        {onOpenDFM && (
          <button type="button" className="toolbar-btn btn-dfm" onClick={() => onOpenDFM(order)}>
            <Shield size={14} />
            <span>DFM Report ({order.dfmReport?.score || '98.4'}%)</span>
          </button>
        )}

        {onOpenGallery && (
          <button type="button" className="toolbar-btn btn-gallery" onClick={() => onOpenGallery(order)}>
            <Eye size={14} />
            <span>Factory Floor Photos</span>
          </button>
        )}

        {onOpenTracking && (
          <button type="button" className="toolbar-btn btn-tracking" onClick={() => onOpenTracking(order)}>
            <Truck size={14} />
            <span>Live GPS Courier Telemetry</span>
          </button>
        )}

        {onOpenRevisions && (
          <button type="button" className="toolbar-btn btn-revisions" onClick={() => onOpenRevisions(order)}>
            <FileCode size={14} />
            <span>Hardware Revisions (Rev C)</span>
          </button>
        )}

        {onOpenReorder && (
          <button type="button" className="toolbar-btn btn-reorder" onClick={() => onOpenReorder(order)}>
            <CheckCircle2 size={14} />
            <span>Repeat Re-Order & Scale</span>
          </button>
        )}
      </div>

      {/* 10-Stage Pipeline Horizontal Grid */}
      <div className="pipeline-steps-grid">
        {MANUFACTURING_STAGES.map((stage, idx) => {
          const IconComponent = iconMap[stage.icon] || CheckCircle2
          const isDone = idx < currentIdx
          const isCurrent = idx === currentIdx
          const isPending = idx > currentIdx

          return (
            <div 
              key={stage.id} 
              className={`pipeline-step-item ${isDone ? 'step-done' : ''} ${isCurrent ? 'step-current' : ''} ${isPending ? 'step-pending' : ''}`}
            >
              <div className="step-connector"></div>
              <div className="step-icon-circle">
                {isDone ? (
                  <CheckCircle2 size={18} className="icon-done" />
                ) : isCurrent ? (
                  <IconComponent size={18} className="icon-current" />
                ) : (
                  <Circle size={16} className="icon-pending" />
                )}
                <span className="step-num">{stage.step}</span>
              </div>
              <div className="step-text-content">
                <div className="step-title">{stage.name}</div>
                <div className="step-desc">{stage.shortDesc}</div>
                {isCurrent && (
                  <span className="step-live-pill">IN PRODUCTION</span>
                )}
                {isDone && (
                  <span className="step-cleared-pill">PASSED QC</span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Engineering Notes & Stage History */}
      <div className="tracker-bottom-split">
        <div className="tracker-history-card">
          <h3 className="card-subheading">
            <Clock size={16} />
            <span>Manufacturing Timeline & Inspector Log</span>
          </h3>
          <div className="history-timeline-list">
            {order.history && order.history.length > 0 ? (
              order.history.map((item, idx) => (
                <div key={idx} className="timeline-entry">
                  <div className="entry-dot"></div>
                  <div className="entry-body">
                    <div className="entry-header">
                      <span className="entry-stage-name">{item.stage}</span>
                      <span className="entry-time">{item.timestamp}</span>
                    </div>
                    <p className="entry-note">{item.note}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-history-text">No stage milestones logged yet.</p>
            )}
          </div>
        </div>

        <div className="tracker-files-card">
          <h3 className="card-subheading">
            <FileCheck size={16} />
            <span>Production Datapack & Certificates</span>
          </h3>
          
          <div className="downloads-group">
            <div className="downloads-label">SUBMITTED ENGINEERING FILES</div>
            <div className="file-items-list">
              {order.files && order.files.map((file, idx) => (
                <div key={idx} className="file-download-row">
                  <div className="file-info-col">
                    <FileCode size={16} className="file-icon" />
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{file.size}</span>
                  </div>
                  <button className="file-action-btn" title="Download CAD Gerber file">
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>

            {order.certificates && order.certificates.length > 0 && (
              <>
                <div className="downloads-label" style={{ marginTop: '16px' }}>QUALITY & COMPLIANCE CERTIFICATES</div>
                <div className="file-items-list">
                  {order.certificates.map((cert, idx) => (
                    <div key={idx} className="file-download-row cert-row">
                      <div className="file-info-col">
                        <FileCheck size={16} className="cert-icon" />
                        <span className="file-name">{cert.name}</span>
                        <span className="file-size">Signed {cert.date}</span>
                      </div>
                      <button className="file-action-btn" title="Download Official Certificate">
                        <Download size={14} />
                        <span>PDF CoC</span>
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
