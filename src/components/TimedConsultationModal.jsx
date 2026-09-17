import React, { useState, useEffect } from 'react'
import { X, CheckCircle2, Send, Sparkles, ShieldCheck, Upload, FileCode } from 'lucide-react'
import './TimedConsultationModal.css'

const TimedConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'PCB Design & Prototyping',
    timeline: 'Within 2–4 Weeks',
    notes: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    // Check if user has already dismissed or interacted with modal in this session
    const hasSeenModal = sessionStorage.getItem('atronics_consultation_modal_seen')
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('atronics_consultation_modal_seen', 'true')
      }, 15000) // 15 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  // Handle ESC key press & scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const removeFile = (e) => {
    e.stopPropagation()
    setFile(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate fast quote/consultation dispatch
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Auto close after success
      setTimeout(() => {
        closeModal()
      }, 3200)
    }, 1200)
  }

  if (!isOpen) return null

  return (
    <div className="consultation-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
      <div 
        className="consultation-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          className="consultation-modal-close" 
          onClick={closeModal}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="consultation-modal-success">
            <div className="consultation-success-icon-wrap">
              <CheckCircle2 size={54} className="consultation-success-icon" />
            </div>
            <h3 className="consultation-success-title">Consultation Requested!</h3>
            <p className="consultation-success-desc">
              Thank you, <strong>{formData.fullName}</strong>. Our hardware engineering team has received your project details and will follow up with an initial review within 24 hours.
            </p>
            <div className="consultation-success-badge">
              <ShieldCheck size={16} /> 100% Confidential & NDA Protected
            </div>
          </div>
        ) : (
          <div className="consultation-modal-content">
            {/* Header */}
            <div className="consultation-modal-header">
              <div className="consultation-pill-badge">
                <Sparkles size={13} className="consultation-pill-icon" />
                <span>EXPERT HARDWARE CONSULTATION</span>
              </div>
              
              <h2 className="consultation-modal-title">
                Planning a PCB or <span className="consultation-highlight">Hardware Project?</span>
              </h2>
              
              <p className="consultation-modal-subtitle">
                Get direct DFM feedback, component optimization tips, and rapid turnaround estimation from our engineering team.
              </p>
            </div>

            {/* Form */}
            <form className="consultation-modal-form" onSubmit={handleSubmit}>
              <div className="consultation-form-row">
                <div className="consultation-form-group">
                  <label htmlFor="modal-fullName">Your Name *</label>
                  <input
                    type="text"
                    id="modal-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={errors.fullName ? 'has-error' : ''}
                  />
                  {errors.fullName && <span className="modal-error-text">{errors.fullName}</span>}
                </div>

                <div className="consultation-form-group">
                  <label htmlFor="modal-email">Work Email *</label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <span className="modal-error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="consultation-form-row">
                <div className="consultation-form-group">
                  <label htmlFor="modal-projectType">Service Requirement</label>
                  <select
                    id="modal-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="PCB Design & Prototyping">PCB Design & Prototyping</option>
                    <option value="High-Speed Multi-Layer Fabrication">High-Speed Multi-Layer Fabrication</option>
                    <option value="SMT & Full Turnkey Assembly">SMT & Full Turnkey Assembly</option>
                    <option value="Component Sourcing & BOM Optimization">Component Sourcing & BOM Optimization</option>
                    <option value="Embedded Firmware & Testing">Embedded Firmware & Testing</option>
                  </select>
                </div>

                <div className="consultation-form-group">
                  <label htmlFor="modal-timeline">Target Timeline</label>
                  <select
                    id="modal-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="Urgent (1–2 Weeks)">Urgent (1–2 Weeks)</option>
                    <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                    <option value="1–2 Months">1–2 Months</option>
                    <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                  </select>
                </div>
              </div>

              <div className="consultation-form-group">
                <label htmlFor="modal-notes">Brief Project Goals / Notes (Optional)</label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Layer count, target volume, or specific technical questions..."
                  rows="2"
                />
              </div>

              {/* Optional Gerber / CAD Upload */}
              <div className="consultation-file-group">
                <input
                  type="file"
                  id="modal-gerber-upload"
                  accept=".zip,.rar,.gerber,.gbr,.pdf,.xls,.xlsx,.csv,.7z,.tar"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                
                {file ? (
                  <div className="consultation-file-selected">
                    <div className="consultation-file-info">
                      <FileCode size={18} className="consultation-file-icon" />
                      <span className="consultation-file-name">{file.name}</span>
                      <span className="consultation-file-size">({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                    </div>
                    <button 
                      type="button" 
                      className="consultation-file-remove" 
                      onClick={removeFile}
                      aria-label="Remove uploaded file"
                    >
                      <X size={15} />
                    </button>
                  </div>
                ) : (
                  <label htmlFor="modal-gerber-upload" className="consultation-file-upload-btn">
                    <Upload size={15} className="consultation-upload-icon" />
                    <span>Attach Gerber / BOM / Specs <span className="consultation-file-optional">(Optional)</span></span>
                  </label>
                )}
              </div>

              {/* Submit & Trust Indicators */}
              <div className="consultation-modal-footer">
                <button 
                  type="submit" 
                  className="consultation-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="consultation-btn-loading">
                      <span className="consultation-spinner" /> Reviewing Details...
                    </span>
                  ) : (
                    <>
                      <span>Get Free Engineering Review</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <div className="consultation-trust-bar">
                  <span className="trust-item">⚡ 24h Response SLA</span>
                  <span className="trust-dot">•</span>
                  <span className="trust-item">🔒 Strict NDA Protection</span>
                  <span className="trust-dot">•</span>
                  <span className="trust-item">🛠️ Direct Engineer Access</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default TimedConsultationModal