import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  X, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
  Send, 
  Sparkles, 
  Layers, 
  Cpu, 
  Zap, 
  Boxes, 
  FileCheck, 
  Trash2,
  Phone,
  Mail,
  Building2,
  User
} from 'lucide-react'
import { useQuote } from '../context/QuoteContext'
import './QuoteModal.css'

const SERVICES = [
  { id: 'Turnkey PCB Assembly', label: 'Turnkey Assembly', icon: Cpu, desc: 'SMT, THT, AOI & X-Ray Testing' },
  { id: 'Multi-Layer Fabrication', label: 'PCB Fabrication', icon: Layers, desc: '2–16+ Layers & Rigid-Flex' },
  { id: 'High-Speed / RF Layout', label: 'Hardware & RF Layout', icon: Zap, desc: 'High-Speed, Impedance & DFM' },
  { id: 'Box Build & Testing', label: 'Box Build & Enclosure', icon: Boxes, desc: 'Full System Integration & Testing' }
]

const VOLUMES = [
  { id: 'Prototype (1-10 pcs)', label: 'Prototype', qty: '1–10 pcs' },
  { id: 'Small Batch (10-100 pcs)', label: 'Small Batch', qty: '10–100 pcs' },
  { id: 'Production (500+ pcs)', label: 'Mass Production', qty: '500+ pcs' }
]

const TIMELINES = [
  { id: 'Standard (5-7 Days)', label: 'Standard', time: '5–7 Days' },
  { id: 'Fast Track (48-72h)', label: 'Fast Track', time: '48–72h' },
  { id: 'Critical Express (24h)', label: 'Critical Express', time: '24h Turn' }
]

const QuoteModal = () => {
  const { isQuoteOpen, closeQuoteModal, initialService } = useQuote()
  const location = useLocation()
  const isLightMode = location.pathname === '/about' || location.pathname === '/contact' || location.pathname.startsWith('/resources')

  const [service, setService] = useState('Turnkey PCB Assembly')
  const [volume, setVolume] = useState('Prototype (1-10 pcs)')
  const [timeline, setTimeline] = useState('Standard (5-7 Days)')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [ndaRequired, setNdaRequired] = useState(true)
  
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [inquiryId, setInquiryId] = useState('')

  const fileInputRef = useRef(null)

  useEffect(() => {
    if (initialService) {
      setService(initialService)
    }
  }, [initialService, isQuoteOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isQuoteOpen) {
        closeQuoteModal()
      }
    }
    if (isQuoteOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      // Reset status after modal fully closed
      setTimeout(() => {
        setIsSuccess(false)
        setErrorMessage('')
      }, 300)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isQuoteOpen, closeQuoteModal])

  if (!isQuoteOpen) return null

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(Array.from(e.dataTransfer.files))
    }
  }

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(Array.from(e.target.files))
    }
  }

  const handleFileSelection = (newFiles) => {
    setFiles(prev => [...prev, ...newFiles])
    setErrorMessage('')
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!name.trim() || !email.trim() || !company.trim()) {
      setErrorMessage('Please fill in your name, work email, and company name.')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const randomCode = Math.floor(1000 + Math.random() * 9000)
      setInquiryId(`ATR-Q-2026-${randomCode}`)
      setIsSuccess(true)
    }, 1000)
  }

  const resetAndClose = () => {
    closeQuoteModal()
  }

  return (
    <div 
      className={`quote-modal-overlay ${isLightMode ? 'quote-modal-light' : ''}`}
      onClick={closeQuoteModal}
    >
      <div 
        className="quote-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Ambient Glows */}
        <div className="quote-glow-top"></div>
        <div className="quote-glow-bottom"></div>

        {/* Close Button */}
        <button 
          className="quote-close-button" 
          onClick={closeQuoteModal}
          aria-label="Close Quote Modal"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="quote-success-view">
            <div className="quote-success-icon-wrap">
              <CheckCircle2 size={44} className="quote-success-icon" />
            </div>

            <span className="quote-success-badge">REQUEST RECEIVED & QUEUED</span>
            <h2 className="quote-success-title">Thank You, {name.split(' ')[0]}!</h2>
            <p className="quote-success-desc">
              Your inquiry has been routed to our Lead DFM & SMT Engineering Desk. A formal proposal and DFM review will be delivered to <strong>{email}</strong> within 24 hours.
            </p>

            <div className="quote-summary-card">
              <div className="quote-summary-row">
                <span className="summary-label">Inquiry Reference ID</span>
                <span className="summary-value highlight-id">{inquiryId}</span>
              </div>
              <div className="quote-summary-row">
                <span className="summary-label">Selected Scope</span>
                <span className="summary-value">{service}</span>
              </div>
              <div className="quote-summary-row">
                <span className="summary-label">Target Volume</span>
                <span className="summary-value">{volume}</span>
              </div>
              <div className="quote-summary-row">
                <span className="summary-label">Estimated Turnaround</span>
                <span className="summary-value">{timeline}</span>
              </div>
              {files.length > 0 && (
                <div className="quote-summary-row">
                  <span className="summary-label">Attached Files</span>
                  <span className="summary-value">{files.length} package(s) uploaded</span>
                </div>
              )}
            </div>

            <div className="quote-sla-strip">
              <div className="quote-sla-item">
                <Clock size={16} />
                <span>24-Hour DFM Turnaround SLA</span>
              </div>
              <div className="quote-sla-item">
                <ShieldCheck size={16} />
                <span>NDA & IP Protected</span>
              </div>
            </div>

            <div className="quote-success-actions">
              <button className="quote-btn-finish" onClick={resetAndClose}>
                <span>Close Window</span>
              </button>
            </div>
          </div>
        ) : (
          /* FORM STATE */
          <form onSubmit={handleSubmit} className="quote-form-content">
            {/* Modal Header */}
            <div className="quote-header">
              <div className="quote-header-badge">
                <Sparkles size={14} />
                <span>FAST DFM & FABRICATION QUOTE</span>
              </div>
              <h2 className="quote-title">Request a Project Quote</h2>
              <p className="quote-subtitle">
                Submit your project specifications or Gerber files. Our engineers deliver custom pricing and DFM feedback within 24 hours.
              </p>
            </div>

            {/* Error Notification */}
            {errorMessage && (
              <div className="quote-alert quote-alert-error">
                <AlertCircle size={17} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Step 1: Service Selection */}
            <div className="quote-section">
              <label className="quote-section-label">1. Select Project Scope</label>
              <div className="quote-service-grid">
                {SERVICES.map((s) => {
                  const Icon = s.icon
                  const isSelected = service === s.id
                  return (
                    <button
                      type="button"
                      key={s.id}
                      className={`quote-service-card ${isSelected ? 'active' : ''}`}
                      onClick={() => setService(s.id)}
                    >
                      <div className="service-card-icon">
                        <Icon size={18} />
                      </div>
                      <div className="service-card-info">
                        <div className="service-card-title">{s.label}</div>
                        <div className="service-card-desc">{s.desc}</div>
                      </div>
                      <div className={`service-radio-pill ${isSelected ? 'checked' : ''}`}></div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Volume & Turnaround */}
            <div className="quote-dual-row">
              <div className="quote-field-col">
                <label className="quote-section-label">2. Production Volume</label>
                <div className="quote-pill-group">
                  {VOLUMES.map((v) => (
                    <button
                      type="button"
                      key={v.id}
                      className={`quote-pill-btn ${volume === v.id ? 'active' : ''}`}
                      onClick={() => setVolume(v.id)}
                    >
                      <span>{v.label}</span>
                      <small>{v.qty}</small>
                    </button>
                  ))}
                </div>
              </div>

              <div className="quote-field-col">
                <label className="quote-section-label">3. Turnaround Target</label>
                <div className="quote-pill-group">
                  {TIMELINES.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      className={`quote-pill-btn ${timeline === t.id ? 'active' : ''}`}
                      onClick={() => setTimeline(t.id)}
                    >
                      <span>{t.label}</span>
                      <small>{t.time}</small>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="quote-section">
              <label className="quote-section-label">4. Your Engineering Contact Details</label>
              <div className="quote-inputs-grid">
                <div className="quote-input-group">
                  <div className="quote-input-icon">
                    <User size={16} />
                  </div>
                  <input 
                    type="text"
                    className="quote-text-input"
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="quote-input-group">
                  <div className="quote-input-icon">
                    <Mail size={16} />
                  </div>
                  <input 
                    type="email"
                    className="quote-text-input"
                    placeholder="Work Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="quote-input-group">
                  <div className="quote-input-icon">
                    <Building2 size={16} />
                  </div>
                  <input 
                    type="text"
                    className="quote-text-input"
                    placeholder="Company / Organization *"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>

                <div className="quote-input-group">
                  <div className="quote-input-icon">
                    <Phone size={16} />
                  </div>
                  <input 
                    type="tel"
                    className="quote-text-input"
                    placeholder="Phone / WhatsApp (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Step 4: File Upload (Gerber, BOM, CAD) */}
            <div className="quote-section">
              <div className="quote-section-header-flex">
                <label className="quote-section-label">5. Upload Gerber / BOM / CAD Files (Optional)</label>
                <span className="quote-nda-tag">
                  <ShieldCheck size={14} />
                  <span>Encrypted & NDA Protected</span>
                </span>
              </div>

              <div 
                className={`quote-dropzone ${isDragging ? 'dragging' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileInputChange} 
                  multiple 
                  style={{ display: 'none' }}
                  accept=".zip,.rar,.7z,.gerber,.gbr,.kicad_pcb,.brd,.pdf,.csv,.xlsx,.xls"
                />
                <div className="dropzone-icon">
                  <UploadCloud size={28} />
                </div>
                <div className="dropzone-text">
                  <span className="dropzone-main">Click to upload or drag & drop</span>
                  <span className="dropzone-sub">ZIP, Gerber (.gbr), BOM (.xlsx / .csv), KiCad, Altium, EAGLE (Max 50MB)</span>
                </div>
              </div>

              {files.length > 0 && (
                <div className="quote-files-list">
                  {files.map((file, idx) => (
                    <div key={idx} className="quote-file-chip">
                      <FileCheck size={15} className="file-chip-icon" />
                      <span className="file-chip-name">{file.name}</span>
                      <span className="file-chip-size">({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                      <button 
                        type="button" 
                        className="file-remove-btn" 
                        onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                        aria-label="Remove file"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 5: Technical Notes */}
            <div className="quote-section">
              <label className="quote-section-label">6. Technical Notes & Requirements</label>
              <textarea 
                className="quote-textarea"
                rows={3}
                placeholder="Specify layer count, board thickness, copper weight, surface finish (ENIG, HASL), impedance control, or assembly requirements..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* NDA Checkbox & Trust */}
            <div className="quote-nda-row">
              <label className="quote-checkbox-label">
                <input 
                  type="checkbox"
                  checked={ndaRequired}
                  onChange={(e) => setNdaRequired(e.target.checked)}
                />
                <span>Execute Mutual Non-Disclosure Agreement (NDA) prior to quote confirmation</span>
              </label>
            </div>

            {/* Submit Action */}
            <div className="quote-submit-row">
              <button 
                type="submit" 
                className="quote-submit-btn" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="quote-spinner"></span>
                ) : (
                  <>
                    <span>SUBMIT QUOTE REQUEST</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <div className="quote-footer-guarantee">
                <Clock size={14} />
                <span>Guaranteed 24-Hour DFM & Price Turnaround</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuoteModal
