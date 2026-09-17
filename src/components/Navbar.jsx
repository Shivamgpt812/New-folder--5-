import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  User,
  LogIn,
  ChevronDown, 
  ArrowRight, 
  X, 
  Layers, 
  Factory, 
  Cpu, 
  ShieldCheck, 
  Car, 
  Activity, 
  Wifi, 
  FileText, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle,
  ChevronRight
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useQuote } from '../context/QuoteContext'
import './Navbar.css'

const servicesDropdown = [
  {
    icon: Layers,
    title: 'PCB Design & Layout',
    desc: 'High-speed, RF, multi-layer & flex layout',
    link: '#services'
  },
  {
    icon: Factory,
    title: 'Precision Fabrication',
    desc: '2–16+ layer rapid turn & mass production',
    link: '#capabilities'
  },
  {
    icon: Cpu,
    title: 'SMT & Turnkey Assembly',
    desc: 'Automated Pick & Place with AOI / X-Ray',
    link: '#manufacturing'
  },
  {
    icon: ShieldCheck,
    title: 'Component Sourcing & QA',
    desc: 'Traceable components & BOM optimization',
    link: '#process'
  }
]

const industriesDropdown = [
  {
    icon: Factory,
    title: 'Industrial Automation',
    desc: 'Rugged controllers & smart factory robotics',
    link: '#industries'
  },
  {
    icon: Car,
    title: 'Automotive & EV Mobility',
    desc: 'High-reliability power & battery systems',
    link: '#industries'
  },
  {
    icon: Activity,
    title: 'Medical Devices',
    desc: 'Life-critical precision & diagnostic hardware',
    link: '#industries'
  },
  {
    icon: Wifi,
    title: 'IoT & Wireless Systems',
    desc: 'Connected hardware, sensors & RF electronics',
    link: '#industries'
  }
]

const resourcesDropdown = [
  {
    icon: FileText,
    title: 'DESIGN GUIDELINES',
    desc: 'Stackups, impedance rules & spacing specs',
    link: '/resources/pcb-design-guidelines-dfm'
  },
  {
    icon: CheckCircle2,
    title: 'GERBER FILE GUIDE',
    desc: 'Layer export formats & submission checklist',
    link: '/resources/gerber-file-preparation-guide'
  },
  {
    icon: BookOpen,
    title: 'ENGINEERING INSIGHTS',
    desc: 'Hardware case studies & technical articles',
    link: '/resources/controlled-impedance-high-speed-pcb'
  },
  {
    icon: HelpCircle,
    title: 'CAPABILITY SPECS & FAQ',
    desc: 'Tolerances, lead times & manufacturing limits',
    link: '/resources/pcb-manufacturing-capabilities'
  }
]

const Navbar = () => {
  const { openLogin, isAuthenticated, currentUser } = useAuth()
  const { openQuoteModal } = useQuote()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  
  // Determine if we're on light theme pages (About, Contact, Resources)
  const isLightNav = location.pathname === '/about' || location.pathname === '/contact' || location.pathname.startsWith('/resources')

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileExpanded(null)
  }

  const toggleMobileAccordion = (key, e) => {
    e.preventDefault()
    setMobileExpanded(prev => prev === key ? null : key)
  }

  return (
    <nav className={`navbar ${isLightNav ? 'navbar-light' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="ATRONICS Home">
          <img 
            src={isLightNav ? "/images/logo-light.png" : "/images/logo.webp"} 
            alt="ATRONICS Logo" 
            className="navbar-logo-img" 
          />
        </Link>
        
        {/* Navigation Links with Hover Dropdowns */}
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>

          {/* Services with Dropdown */}
          <li className="nav-item has-dropdown">
            <a href="#services" className="nav-link-dropdown">
              <span>Services</span>
              <ChevronDown size={14} className="nav-chevron" />
            </a>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-grid">
                {servicesDropdown.map((item, index) => {
                  const IconComp = item.icon
                  return (
                    <a key={index} href={item.link} className="nav-dropdown-item">
                      <div className="nav-dropdown-icon">
                        <IconComp size={18} />
                      </div>
                      <div className="nav-dropdown-info">
                        <div className="nav-dropdown-title">{item.title}</div>
                        <div className="nav-dropdown-desc">{item.desc}</div>
                      </div>
                      <ChevronRight size={14} className="nav-dropdown-arrow" />
                    </a>
                  )
                })}
              </div>
            </div>
          </li>

          {/* Industries with Dropdown */}
          <li className="nav-item has-dropdown">
            <a href="#industries" className="nav-link-dropdown">
              <span>Industries</span>
              <ChevronDown size={14} className="nav-chevron" />
            </a>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-grid">
                {industriesDropdown.map((item, index) => {
                  const IconComp = item.icon
                  return (
                    <a key={index} href={item.link} className="nav-dropdown-item">
                      <div className="nav-dropdown-icon">
                        <IconComp size={18} />
                      </div>
                      <div className="nav-dropdown-info">
                        <div className="nav-dropdown-title">{item.title}</div>
                        <div className="nav-dropdown-desc">{item.desc}</div>
                      </div>
                      <ChevronRight size={14} className="nav-dropdown-arrow" />
                    </a>
                  )
                })}
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a href="#portfolio">Portfolio</a>
          </li>

          {/* Resources with Dropdown */}
          <li className={`nav-item has-dropdown ${location.pathname.startsWith('/resources') ? 'active' : ''}`}>
            <Link to="/resources" className="nav-link-dropdown">
              <span>Resources</span>
              <ChevronDown size={14} className="nav-chevron" />
            </Link>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-grid">
                {resourcesDropdown.map((item, index) => {
                  const IconComp = item.icon
                  return (
                    <Link key={index} to={item.link} className="nav-dropdown-item">
                      <div className="nav-dropdown-icon">
                        <IconComp size={18} />
                      </div>
                      <div className="nav-dropdown-info">
                        <div className="nav-dropdown-title">{item.title}</div>
                        <div className="nav-dropdown-desc">{item.desc}</div>
                      </div>
                      <ChevronRight size={14} className="nav-dropdown-arrow" />
                    </Link>
                  )
                })}
              </div>
              <div className="nav-dropdown-footer">
                <Link to="/resources" className="nav-dropdown-view-all">
                  <span>VIEW ALL RESOURCES</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </li>

          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        
        {/* Right Actions */}
        <div className="navbar-actions">
          <button 
            className={`nav-login-btn ${isAuthenticated ? 'logged-in' : ''} ${currentUser?.role === 'admin' ? 'is-admin' : ''}`}
            onClick={() => openLogin(currentUser ? currentUser.role : 'user')}
            aria-label="User and Admin Login"
          >
            {currentUser?.role === 'admin' ? (
              <ShieldCheck size={16} className="nav-login-icon" />
            ) : (
              <User size={16} className="nav-login-icon" />
            )}
            <span className="nav-login-label">
              {isAuthenticated 
                ? (currentUser?.role === 'admin' ? 'Admin Portal' : 'Client Portal') 
                : 'Login'}
            </span>
          </button>
          <button className="quote-button" onClick={() => openQuoteModal()}>
            GET A QUOTE
            <ArrowRight size={18} />
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <img 
              src={isLightNav ? "/images/logo-light.png" : "/images/logo.webp"} 
              alt="ATRONICS Logo" 
              className="navbar-logo-img" 
            />
          </div>
        </div>

        <ul className="mobile-nav-list">
          <li className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>

          {/* Mobile Services Accordion */}
          <li className="mobile-nav-item">
            <a 
              href="#services" 
              onClick={(e) => toggleMobileAccordion('services', e)}
              className={mobileExpanded === 'services' ? 'is-expanded' : ''}
            >
              <span>Services</span>
              <ChevronDown size={16} className={`mobile-chevron ${mobileExpanded === 'services' ? 'rotated' : ''}`} />
            </a>
            {mobileExpanded === 'services' && (
              <div className="mobile-subnav">
                {servicesDropdown.map((sub, i) => (
                  <a key={i} href={sub.link} onClick={closeMobileMenu} className="mobile-subnav-item">
                    <sub.icon size={15} />
                    <span>{sub.title}</span>
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Mobile Industries Accordion */}
          <li className="mobile-nav-item">
            <a 
              href="#industries" 
              onClick={(e) => toggleMobileAccordion('industries', e)}
              className={mobileExpanded === 'industries' ? 'is-expanded' : ''}
            >
              <span>Industries</span>
              <ChevronDown size={16} className={`mobile-chevron ${mobileExpanded === 'industries' ? 'rotated' : ''}`} />
            </a>
            {mobileExpanded === 'industries' && (
              <div className="mobile-subnav">
                {industriesDropdown.map((sub, i) => (
                  <a key={i} href={sub.link} onClick={closeMobileMenu} className="mobile-subnav-item">
                    <sub.icon size={15} />
                    <span>{sub.title}</span>
                  </a>
                ))}
              </div>
            )}
          </li>

          <li className="mobile-nav-item">
            <a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a>
          </li>

          {/* Mobile Resources Accordion */}
          <li className={`mobile-nav-item ${location.pathname.startsWith('/resources') ? 'active' : ''}`}>
            <a 
              href="#resources" 
              onClick={(e) => toggleMobileAccordion('resources', e)}
              className={mobileExpanded === 'resources' ? 'is-expanded' : ''}
            >
              <span>Resources</span>
              <ChevronDown size={16} className={`mobile-chevron ${mobileExpanded === 'resources' ? 'rotated' : ''}`} />
            </a>
            {mobileExpanded === 'resources' && (
              <div className="mobile-subnav">
                {resourcesDropdown.map((sub, i) => (
                  <Link key={i} to={sub.link} onClick={closeMobileMenu} className="mobile-subnav-item">
                    <sub.icon size={15} />
                    <span>{sub.title}</span>
                  </Link>
                ))}
                <Link to="/resources" onClick={closeMobileMenu} className="mobile-subnav-item mobile-subnav-view-all">
                  <span>VIEW ALL RESOURCES →</span>
                </Link>
              </div>
            )}
          </li>

          <li className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <button 
            className={`mobile-login-btn ${isAuthenticated ? 'logged-in' : ''} ${currentUser?.role === 'admin' ? 'is-admin' : ''}`}
            onClick={() => { closeMobileMenu(); openLogin(currentUser ? currentUser.role : 'user'); }}
          >
            {currentUser?.role === 'admin' ? (
              <ShieldCheck size={17} />
            ) : (
              <User size={17} />
            )}
            <span>
              {isAuthenticated 
                ? (currentUser?.role === 'admin' ? 'Admin Portal' : 'Client Portal') 
                : 'Sign In (Client / Admin)'}
            </span>
          </button>
          <button 
            className="mobile-quote-button" 
            onClick={() => { closeMobileMenu(); openQuoteModal(); }}
          >
            GET A QUOTE
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  )
}

export default Navbar
