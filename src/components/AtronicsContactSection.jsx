import { useState } from 'react'
import { Zap, Users, FileCheck, BarChart3, Upload, Lock } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import './AtronicsContactSection.css'

export default function AtronicsContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    quantity: '',
    timeline: '',
    message: ''
  })
  const [files, setFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFileChange = (e) => {
    setFiles(prev => [...prev, ...Array.from(e.target.files)])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.projectType) newErrors.projectType = 'Project type is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => {
        setFormData({ fullName: '', company: '', email: '', phone: '', projectType: '', quantity: '', timeline: '', message: '' })
        setFiles([])
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  const features = [
    { icon: Zap, title: 'Quick Response', description: 'Get a reply within 24 hours' },
    { icon: Users, title: 'Talk to Experts', description: 'Directly with our engineers' },
    { icon: FileCheck, title: 'Confidential', description: 'Your data is always safe' },
    { icon: BarChart3, title: 'From Prototype to Production', description: 'Support at every stage' }
  ]

  return (
    <section className="contact-section">
      <div className="contact-decoration-left"></div>
      <div className="contact-decoration-glow"></div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-label">
            <span className="contact-label-line"></span>
            <span className="contact-label-text">LET'S BUILD TOGETHER</span>
          </div>
          <h2 className="contact-heading">
            <span className="contact-heading-white">Have a PCB</span><br />
            <span className="contact-heading-blue">project in mind?</span>
          </h2>
          <p className="contact-description">
            Tell us what you're building and our engineering team will help you find the right path — from design to production.
          </p>
          <div className="contact-features">
            {features.map((feature, index) => (
              <div key={index} className="contact-feature">
                <div className="contact-feature-icon"><feature.icon size={25} /></div>
                <div className="contact-feature-text">
                  <div className="contact-feature-title">{feature.title}</div>
                  <div className="contact-feature-desc">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-tagline">
            IDEAS <span className="contact-tagline-arrow">→</span> CIRCUITS <span className="contact-tagline-arrow">→</span> REAL SOLUTIONS
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-header">
              <div className="contact-form-header-left">
                <span className="contact-form-header-line"></span>
                <span className="contact-form-header-title">REQUEST A QUOTE</span>
              </div>
              <div className="contact-form-header-divider"></div>
              <div className="contact-form-header-right">OUR TEAM WILL GET BACK TO YOU WITH<br />A DETAILED RESPONSE.</div>
            </div>
            {submitStatus === 'success' ? (
              <div className="contact-form-success">
                <div className="contact-form-success-title">REQUEST RECEIVED</div>
                <div className="contact-form-success-message">Thank you. Our engineering team will review your project and get back to you shortly.</div>
              </div>
            ) : (
              <>
                <div className="contact-form-grid">
                  <div className="contact-form-field">
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className={errors.fullName ? 'error' : ''} />
                    {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="company">Company *</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className={errors.company ? 'error' : ''} />
                    {errors.company && <span className="field-error">{errors.company}</span>}
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="email">Work Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={errors.email ? 'error' : ''} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={errors.phone ? 'error' : ''} />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={errors.projectType ? 'error' : ''}>
                      <option value="">Select project type</option>
                      <option value="pcb-design">PCB Design</option>
                      <option value="pcb-fabrication">PCB Fabrication</option>
                      <option value="pcb-assembly">PCB Assembly</option>
                      <option value="component-sourcing">Component Sourcing</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <span className="field-error">{errors.projectType}</span>}
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 100, 500, 1000" />
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="timeline">Required Timeline</label>
                    <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                      <option value="">Select timeline</option>
                      <option value="1-2-weeks">1–2 Weeks</option>
                      <option value="2-4-weeks">2–4 Weeks</option>
                      <option value="1-2-months">1–2 Months</option>
                      <option value="3-plus-months">3+ Months</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>
                  <div className="contact-form-field contact-form-field-full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows="3"></textarea>
                  </div>
                </div>
                <div className="contact-form-upload">
                  <input type="file" id="fileUpload" multiple accept=".zip,.rar,.gerber,.gbr,.pdf,.xls,.xlsx,.csv" onChange={handleFileChange} style={{ display: 'none' }} />
                  <label htmlFor="fileUpload" className="contact-form-upload-area">
                    <div className="contact-form-upload-content">
                      <Upload size={24} />
                      <div className="contact-form-upload-text">
                        <div className="contact-form-upload-title">Upload Gerber / BOM / Project Files</div>
                        <div className="contact-form-upload-subtitle">Drag and drop files here, or click to browse</div>
                      </div>
                    </div>
                    <div className="contact-form-upload-info">
                      <div>Supports: .zip, .rar, .gerber, .pdf, .xls, .csv</div>
                      <div>Max size: 50 MB</div>
                    </div>
                  </label>
                  {files.length > 0 && (
                    <div className="contact-form-files">
                      {files.map((file, index) => (
                        <div key={index} className="contact-form-file">
                          <span>{file.name}</span>
                          <button type="button" onClick={() => removeFile(index)}>×</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button type="submit" className="contact-form-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'SUBMITTING...' : 'REQUEST A QUOTE →'}
                </button>
                <div className="contact-form-security">
                  <Lock size={12} /> Your information is secure and will only be used for your project inquiry.
                </div>
              </>
            )}
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-right-decoration">
            <svg className="contact-pcb-pattern" viewBox="0 0 300 500">
              <line x1="50" y1="50" x2="250" y2="50" stroke="rgba(36,155,255,0.25)" strokeWidth="2" />
              <line x1="50" y1="80" x2="150" y2="80" stroke="rgba(36,155,255,0.25)" strokeWidth="2" />
              <line x1="50" y1="120" x2="200" y2="120" stroke="rgba(36,155,255,0.25)" strokeWidth="2" />
              <line x1="100" y1="50" x2="100" y2="200" stroke="rgba(36,155,255,0.25)" strokeWidth="2" />
              <line x1="150" y1="80" x2="150" y2="180" stroke="rgba(36,155,255,0.25)" strokeWidth="2" />
              <line x1="200" y1="120" x2="200" y2="250" stroke="rgba(36,155,255,0.25)" strokeWidth="2" />
              <circle cx="100" cy="50" r="4" fill="#1EA0FF" />
              <circle cx="150" cy="80" r="4" fill="#1EA0FF" />
              <circle cx="200" cy="120" r="4" fill="#1EA0FF" />
              <circle cx="100" cy="200" r="4" fill="#1EA0FF" />
              <circle cx="150" cy="180" r="4" fill="#1EA0FF" />
              <rect x="80" y="150" width="40" height="40" fill="rgba(8,123,255,0.15)" stroke="rgba(36,155,255,0.3)" strokeWidth="1" />
              <rect x="180" y="200" width="35" height="35" fill="rgba(8,123,255,0.15)" stroke="rgba(36,155,255,0.3)" strokeWidth="1" />
              <line x1="50" y1="300" x2="250" y2="300" stroke="rgba(36,155,255,0.2)" strokeWidth="2" />
              <line x1="120" y1="250" x2="120" y2="350" stroke="rgba(36,155,255,0.2)" strokeWidth="2" />
              <circle cx="120" cy="300" r="3" fill="#087BFF" opacity="0.6" />
              <circle cx="180" cy="300" r="3" fill="#087BFF" opacity="0.6" />
            </svg>
          </div>
          <div className="contact-right-text">TURNING<br />IDEAS INTO<br />INTELLIGENT<br />HARDWARE</div>
          <div className="contact-right-line"></div>
          <div className="contact-right-stats">
            <div className="contact-right-stat">
              <div className="contact-right-stat-number"><AnimatedCounter value="500+" /></div>
              <div className="contact-right-stat-label">Projects Delivered</div>
            </div>
            <div className="contact-right-stat-divider"></div>
            <div className="contact-right-stat">
              <div className="contact-right-stat-number"><AnimatedCounter value="99%" /></div>
              <div className="contact-right-stat-label">Client Satisfaction</div>
            </div>
            <div className="contact-right-stat-divider"></div>
            <div className="contact-right-stat">
              <div className="contact-right-stat-number"><AnimatedCounter value="10+" /></div>
              <div className="contact-right-stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
