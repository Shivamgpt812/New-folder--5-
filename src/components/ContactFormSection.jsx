import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  UploadCloud, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  FileText, 
  Cpu, 
  Building2, 
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react'
import './ContactFormSection.css'

function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectScope: 'Prototype Fabrication',
    layerCount: '2-4 Layers',
    estimatedQuantity: '1 - 10 pcs (Prototype)',
    message: '',
    hasNda: false
  })

  const [selectedFile, setSelectedFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const scopes = [
    'PCB Design & Layout',
    'Prototype Fabrication',
    'SMT Assembly & Sourcing',
    'Full Turnkey Production',
    'DFM Review & Optimization'
  ]

  const quantities = [
    '1 - 10 pcs (Prototype)',
    '10 - 100 pcs (Pilot Run)',
    '100 - 1,000 pcs (Production)',
    '1,000+ pcs (Mass Scale)'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate instant form submission & verification
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  const resetForm = () => {
    setSubmitted(false)
    setSelectedFile(null)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      projectScope: 'Prototype Fabrication',
      layerCount: '2-4 Layers',
      estimatedQuantity: '1 - 10 pcs (Prototype)',
      message: '',
      hasNda: false
    })
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-container">
        
        {/* Section Header */}
        <div className="contact-form-header">
          <div className="contact-form-badge">
            <span className="contact-badge-line"></span>
            <span className="contact-badge-text">PROJECT INQUIRY & QUOTATION</span>
          </div>
          <h2 className="contact-form-title">
            Tell Us About <span className="contact-title-accent">Your Next Project</span>
          </h2>
          <p className="contact-form-subtitle">
            Upload your Gerber archives or send design requirements. Our engineering team reviews all technical packages under strict NDA and returns an initial DFM report within 24 hours.
          </p>
        </div>

        {/* 2-Column Main Layout: Form on Left + Channels on Right */}
        <div className="contact-main-grid">
          
          {/* LEFT: INTERACTIVE QUOTATION & CONTACT FORM */}
          <div className="contact-card-wrapper">
            {submitted ? (
              <div className="contact-success-card">
                <div className="success-icon-badge">
                  <CheckCircle2 size={48} className="success-icon" />
                </div>
                <h3 className="success-title">Inquiry Received Successfully!</h3>
                <p className="success-text">
                  Thank you, <strong>{formData.fullName || 'Innovator'}</strong>. Your project specifications for <strong>{formData.projectScope}</strong> have been securely routed to our lead DFM engineering team.
                </p>
                <div className="success-details-box">
                  <div className="success-detail-row">
                    <span>Reference ID:</span>
                    <strong>ATR-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</strong>
                  </div>
                  <div className="success-detail-row">
                    <span>Guaranteed SLA:</span>
                    <strong className="sla-accent">Within 24 Business Hours</strong>
                  </div>
                  {selectedFile && (
                    <div className="success-detail-row">
                      <span>Attached Archive:</span>
                      <strong>{selectedFile.name}</strong>
                    </div>
                  )}
                </div>
                <button className="contact-btn-reset" onClick={resetForm}>
                  <span>Submit Another Inquiry</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form className="contact-form-card" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      placeholder="e.g. David Vance" 
                      className="form-input"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Corporate Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="e.g. d.vance@company.com" 
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Company / Organization *</label>
                    <input 
                      type="text" 
                      name="company" 
                      required 
                      placeholder="e.g. Apex Hardware Labs" 
                      className="form-input"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp (Optional)</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+1 (555) 019-2834" 
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Project Scope Selection */}
                <div className="form-group">
                  <label className="form-label">Primary Service Required</label>
                  <div className="scope-pills-wrap">
                    {scopes.map((scope, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={`scope-pill-btn ${formData.projectScope === scope ? 'active' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, projectScope: scope }))}
                      >
                        {scope}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Quantity */}
                <div className="form-group">
                  <label className="form-label">Estimated Volume / Target Batch</label>
                  <div className="quantity-select-grid">
                    {quantities.map((qty, idx) => (
                      <label key={idx} className={`qty-radio-label ${formData.estimatedQuantity === qty ? 'checked' : ''}`}>
                        <input 
                          type="radio" 
                          name="estimatedQuantity" 
                          value={qty}
                          checked={formData.estimatedQuantity === qty}
                          onChange={handleInputChange}
                        />
                        <span>{qty}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Drag & Drop File Upload Zone */}
                <div className="form-group">
                  <label className="form-label">
                    <span>Gerber Files / BOM Package / CAD Drawings</span>
                    <span className="form-label-hint">.ZIP, .RAR, .ODB++, .PDF up to 50MB</span>
                  </label>
                  <div className="file-dropzone">
                    <input 
                      type="file" 
                      id="gerber-file" 
                      className="file-hidden-input" 
                      onChange={handleFileChange}
                      accept=".zip,.rar,.7z,.tar,.gz,.pdf,.xlsx,.csv,.kicad_pcb,.brd"
                    />
                    <label htmlFor="gerber-file" className="dropzone-inner">
                      <UploadCloud size={32} className="dropzone-icon" />
                      {selectedFile ? (
                        <div className="dropzone-file-selected">
                          <FileText size={18} className="file-badge-icon" />
                          <span className="file-name">{selectedFile.name}</span>
                          <span className="file-size">({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                        </div>
                      ) : (
                        <div className="dropzone-text-group">
                          <strong>Click to upload or drag & drop files here</strong>
                          <span>Gerber RS-274X, Drill files, BOM or PDF schematic</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div className="form-group">
                  <label className="form-label">Project Details & Technical Requirements</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    placeholder="Provide details on layer count, copper weight, surface finish (ENIG/HASL), impedance requirements, or special component lead times..." 
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* NDA Protection Checkbox */}
                <div className="form-checkbox-row">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      name="hasNda" 
                      checked={formData.hasNda}
                      onChange={handleInputChange}
                    />
                    <span>Request a mutual Non-Disclosure Agreement (NDA) before proceeding</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="submit-spinner"></span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY & GET DFM QUOTE</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: DIRECT CHANNELS, FAST SLA & HQ CARDS */}
          <div className="contact-info-column">
            
            {/* 24H SLA Card */}
            <div className="contact-sla-card">
              <div className="sla-card-icon-box">
                <Clock size={24} />
              </div>
              <div className="sla-card-content">
                <h3 className="sla-title">24-Hour Engineering Turnaround</h3>
                <p className="sla-desc">
                  Our dedicated DFM engineers assess your stackup, design rules, and BOM availability with comprehensive feedback in one business day.
                </p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="contact-channels-card">
              <h3 className="channels-card-title">Direct Engineering Channels</h3>
              
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Mail size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Technical RFPs & Gerber Submissions</span>
                  <a href="mailto:engineering@atronics.in" className="channel-link">engineering@atronics.in</a>
                  <a href="mailto:sales@atronics.in" className="channel-sublink">sales@atronics.in</a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <Phone size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Direct Engineering Desk & WhatsApp</span>
                  <a href="tel:+918049283000" className="channel-link">+91 (0) 80 4928 3000</a>
                  <span className="channel-subtext">Mon – Sat: 8:30 AM – 7:30 PM IST</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">IP & Confidentiality Guarantee</span>
                  <strong className="channel-strong">Strict NDA Protected Workflow</strong>
                  <span className="channel-subtext">Zero third-party data disclosure</span>
                </div>
              </div>
            </div>

            {/* Facility Hubs Card */}
            <div className="contact-facility-card">
              <h3 className="channels-card-title">Facility & Office Locations</h3>

              <div className="facility-item">
                <div className="facility-dot"></div>
                <div className="facility-info">
                  <strong>Global Engineering & R&D Hub</strong>
                  <p>Electronic City Phase 1, Bengaluru, Karnataka 560100, India</p>
                </div>
              </div>

              <div className="facility-item">
                <div className="facility-dot dot-cyan"></div>
                <div className="facility-info">
                  <strong>Precision SMT & Mass Assembly Plant</strong>
                  <p>SIPCOT Industrial Park, Sriperumbudur, Tamil Nadu 602105, India</p>
                </div>
              </div>

              <div className="facility-item">
                <div className="facility-dot dot-orange"></div>
                <div className="facility-info">
                  <strong>Americas Client Liaison Desk</strong>
                  <p>North 1st Street, Silicon Valley, San Jose, CA 95134, USA</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactFormSection
