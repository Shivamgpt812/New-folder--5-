import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Youtube, Twitter, Instagram, ArrowRight } from 'lucide-react'
import './AtronicsFooter.css'

function AtronicsFooter() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter submission
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const companyLinks = [
    { text: 'About Us', to: '/about' },
    { text: 'Resources', to: '/resources' },
    { text: 'Capabilities', href: '#capabilities' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', to: '/contact' }
  ]

  const serviceLinks = [
    { text: 'PCB Design', href: '#pcb-design' },
    { text: 'PCB Fabrication', href: '#pcb-fabrication' },
    { text: 'PCB Assembly', href: '#pcb-assembly' },
    { text: 'Component Sourcing', href: '#component-sourcing' }
  ]

  const engineeringLinks = [
    { text: 'High-Speed PCB', to: '/resources/controlled-impedance-high-speed-pcb' },
    { text: 'RF & Microwave', to: '/resources/rf-microwave-pcb-design-guide' },
    { text: 'Power Electronics', to: '/resources/thermal-management-power-pcb' },
    { text: 'DFM / DFA', to: '/resources/pcb-design-guidelines-dfm' },
    { text: 'EMI / EMC', to: '/resources/designing-for-emi-emc' }
  ]

  const industryLinks = [
    { text: 'Automotive', href: '#automotive' },
    { text: 'Medical', href: '#medical' },
    { text: 'Industrial', href: '#industrial' },
    { text: 'IoT', href: '#iot' },
    { text: 'Robotics', href: '#robotics' },
    { text: 'EV & Charging', href: '#ev-charging' }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ]

  return (
    <footer className="atronics-footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.webp" alt="ATRONICS Logo" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              Advanced electronics engineering and manufacturing
              solutions for the products of tomorrow.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">COMPANY</h3>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link to={link.to}>{link.text}</Link>
                  ) : (
                    <a href={link.href}>{link.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">SERVICES</h3>
            <ul className="footer-links">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">ENGINEERING</h3>
            <ul className="footer-links">
              {engineeringLinks.map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link to={link.to}>{link.text}</Link>
                  ) : (
                    <a href={link.href}>{link.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">INDUSTRIES</h3>
            <ul className="footer-links">
              {industryLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-newsletter">
            <h3 className="footer-column-title">Stay Updated</h3>
            <p className="footer-newsletter-description">
              Get the latest insights, case studies and
              engineering updates.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            © 2026 ATRONICS. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AtronicsFooter
