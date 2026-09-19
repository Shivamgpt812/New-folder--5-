import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  X, 
  User, 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Phone, 
  LogOut, 
  Cpu, 
  Layers, 
  Sparkles,
  ShieldAlert
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import './AuthModal.css'

const AuthModal = () => {
  const { isLoginOpen, closeLogin, initialRole, currentUser, login, logout, isAuthenticated } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const isLightMode = location.pathname === '/about' || 
                      location.pathname === '/contact' || 
                      location.pathname.startsWith('/resources') ||
                      location.pathname.startsWith('/services') ||
                      location.pathname.startsWith('/industries') ||
                      location.pathname === '/portal' ||
                      location.pathname === '/admin'
  
  const [activeTab, setActiveTab] = useState('user') // 'user', 'admin', 'register'
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // Form states
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  const [adminEmail, setAdminEmail] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [adminPin, setAdminPin] = useState('')

  // Registration state
  const [regName, setRegName] = useState('')
  const [regCompany, setRegCompany] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPhone, setRegPhone] = useState('')

  useEffect(() => {
    if (initialRole) {
      setActiveTab(initialRole)
    }
  }, [initialRole, isLoginOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLoginOpen) {
        closeLogin()
      }
    }
    if (isLoginOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      setErrorMessage('')
      setSuccessMessage('')
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLoginOpen, closeLogin])

  if (!isLoginOpen) return null

  // Quick fill demo credentials
  const fillUserDemo = () => {
    setUserEmail('client.engineer@apexrobotics.io')
    setUserPassword('AtronicsClient2026!')
    setErrorMessage('')
  }

  const fillAdminDemo = () => {
    setAdminEmail('admin.lead@atronics.com')
    setAdminPassword('AtronicsMasterKey#99')
    setAdminPin('884201')
    setErrorMessage('')
  }

  const handleUserLogin = (e) => {
    e.preventDefault()
    setErrorMessage('')
    
    if (!userEmail.trim() || !userPassword) {
      setErrorMessage('Please enter both your email and password.')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const userData = {
        role: 'user',
        name: userEmail.split('@')[0].replace('.', ' ').toUpperCase(),
        email: userEmail,
        company: 'Apex Robotics International',
        loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        accountType: 'Enterprise Client'
      }
      login(userData)
      setSuccessMessage('Client authentication successful! Loading portal...')
      setTimeout(() => {
        closeLogin()
        navigate('/portal')
      }, 500)
    }, 700)
  }

  const handleAdminLogin = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!adminEmail.trim() || !adminPassword) {
      setErrorMessage('Please enter your admin credentials and master password.')
      return
    }

    if (!adminPin || adminPin.length < 4) {
      setErrorMessage('Please enter a valid 2FA Security Clearance PIN (min 4 digits).')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const adminData = {
        role: 'admin',
        name: 'Lead DFM Admin',
        email: adminEmail,
        clearanceLevel: 'Level 4 (Full Fabrication & ERP)',
        loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        accountType: 'System Administrator'
      }
      login(adminData)
      setSuccessMessage('Admin security clearance verified! Loading ERP...')
      setTimeout(() => {
        closeLogin()
        navigate('/admin')
      }, 500)
    }, 700)
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (!regName || !regEmail || !regCompany) {
      setErrorMessage('Please fill in all required registration fields.')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSuccessMessage('Client account request submitted! An engineering manager will approve your access shortly.')
      setTimeout(() => {
        setActiveTab('user')
        setSuccessMessage('')
      }, 2500)
    }, 800)
  }

  return (
    <div className={`auth-modal-overlay ${isLightMode ? 'auth-modal-overlay-light' : ''}`} onClick={closeLogin}>
      <div 
        className={`auth-modal-card ${activeTab === 'admin' ? 'auth-card-admin' : ''} ${isLightMode ? 'auth-card-light' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background ambient glows */}
        <div className="auth-glow-top"></div>
        <div className="auth-glow-bottom"></div>

        {/* Close Button */}
        <button className="auth-close-btn" onClick={closeLogin} aria-label="Close Authentication Modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="auth-header">
          <div className="auth-logo-wrapper">
            <img 
              src={isLightMode ? "/images/logo-light.png" : "/images/logo.webp"} 
              alt="ATRONICS" 
              className="auth-logo-img" 
            />
          </div>
          <p className="auth-header-subtitle">
            {activeTab === 'admin' 
              ? 'ATRONICS FABRICATION & ADMIN CLEARANCE CONSOLE'
              : 'ENTERPRISE CLIENT & ENGINEERING PORTAL'}
          </p>
        </div>

        {/* If Authenticated: Show Dashboard Card */}
        {isAuthenticated && currentUser ? (
          <div className="auth-authenticated-view">
            <div className="auth-success-badge">
              <CheckCircle2 size={24} className="auth-success-icon" />
              <span>AUTHENTICATED SESSION ACTIVE</span>
            </div>

            <div className="auth-profile-card">
              <div className="auth-profile-avatar">
                {currentUser.role === 'admin' ? (
                  <ShieldCheck size={32} className="avatar-admin-icon" />
                ) : (
                  <User size={32} className="avatar-user-icon" />
                )}
              </div>
              <div className="auth-profile-info">
                <div className="auth-profile-name">{currentUser.name}</div>
                <div className="auth-profile-role">
                  <span className={`role-badge ${currentUser.role}`}>
                    {currentUser.role === 'admin' ? '🛡️ SYSTEM ADMIN' : '👤 ENTERPRISE CLIENT'}
                  </span>
                </div>
                <div className="auth-profile-email">{currentUser.email}</div>
              </div>
            </div>

            {/* Portal Stats Preview */}
            <div className="auth-portal-grid">
              {currentUser.role === 'admin' ? (
                <>
                  <div className="portal-stat-box">
                    <span className="stat-num">12</span>
                    <span className="stat-label">DFM Reviews Pending</span>
                  </div>
                  <div className="portal-stat-box">
                    <span className="stat-num">4 / 4</span>
                    <span className="stat-label">SMT Lines Online</span>
                  </div>
                  <div className="portal-stat-box">
                    <span className="stat-num">99.8%</span>
                    <span className="stat-label">Fab Yield Rate</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="portal-stat-box">
                    <span className="stat-num">3</span>
                    <span className="stat-label">Active PCB Builds</span>
                  </div>
                  <div className="portal-stat-box">
                    <span className="stat-num">8</span>
                    <span className="stat-label">Gerber Packages</span>
                  </div>
                  <div className="portal-stat-box">
                    <span className="stat-num">100%</span>
                    <span className="stat-label">DFM Passed</span>
                  </div>
                </>
              )}
            </div>

            <div className="auth-session-details">
              <span>Signed in at {currentUser.loginTime}</span>
              <span>256-bit TLS Encrypted</span>
            </div>

            <div className="auth-actions-group">
              <button className="auth-btn-primary" onClick={closeLogin}>
                <span>ENTER {currentUser.role === 'admin' ? 'ADMIN CONSOLE' : 'CLIENT WORKSPACE'}</span>
                <ArrowRight size={17} />
              </button>
              <button className="auth-btn-logout" onClick={logout}>
                <LogOut size={16} />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Tab Switcher */}
            <div className="auth-tab-bar">
              <button 
                type="button"
                className={`auth-tab-btn ${activeTab === 'user' ? 'active' : ''}`}
                onClick={() => { setActiveTab('user'); setErrorMessage(''); }}
              >
                <User size={16} />
                <span>Client / User</span>
              </button>

              <button 
                type="button"
                className={`auth-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
                onClick={() => { setActiveTab('admin'); setErrorMessage(''); }}
              >
                <ShieldCheck size={16} />
                <span>Admin Portal</span>
              </button>

              <button 
                type="button"
                className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => { setActiveTab('register'); setErrorMessage(''); }}
              >
                <Building2 size={16} />
                <span>New Client</span>
              </button>
            </div>

            {/* Error / Success Notifications */}
            {errorMessage && (
              <div className="auth-alert auth-alert-error">
                <AlertCircle size={17} />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="auth-alert auth-alert-success">
                <CheckCircle2 size={17} />
                <span>{successMessage}</span>
              </div>
            )}

            {/* TAB 1: CLIENT LOGIN */}
            {activeTab === 'user' && (
              <form onSubmit={handleUserLogin} className="auth-form">
                <div className="auth-field">
                  <label className="auth-label">Work Email / Client ID</label>
                  <div className="auth-input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input 
                      type="email" 
                      className="auth-input" 
                      placeholder="name@company.com" 
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <div className="auth-label-row">
                    <label className="auth-label">Password</label>
                    <a href="#forgot" className="auth-forgot-link" onClick={(e) => { e.preventDefault(); alert('Password reset instructions will be sent to your work email.'); }}>
                      Forgot Password?
                    </a>
                  </div>
                  <div className="auth-input-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="auth-input" 
                      placeholder="••••••••••••" 
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="auth-eye-btn" 
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                </div>

                <div className="auth-checkbox-row">
                  <label className="auth-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={rememberMe} 
                      onChange={(e) => setRememberMe(e.target.checked)} 
                    />
                    <span>Remember this device for 30 days</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="auth-btn-primary" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="auth-spinner"></span>
                  ) : (
                    <>
                      <span>SIGN IN TO CLIENT PORTAL</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Quick Demo Credentials */}
                <div className="auth-quick-fill">
                  <button type="button" onClick={fillUserDemo} className="quick-fill-btn">
                    <Sparkles size={14} />
                    <span>Auto-Fill Client Demo Credentials</span>
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: ADMIN / STAFF LOGIN */}
            {activeTab === 'admin' && (
              <form onSubmit={handleAdminLogin} className="auth-form auth-form-admin">
                <div className="admin-clearance-banner">
                  <ShieldAlert size={18} className="admin-badge-icon" />
                  <div>
                    <strong>RESTRICTED ACCESS AREA</strong>
                    <p>Internal Atronics engineering & operations personnel only.</p>
                  </div>
                </div>

                <div className="auth-field">
                  <label className="auth-label">Admin Username / Email</label>
                  <div className="auth-input-wrapper">
                    <User size={18} className="input-icon" />
                    <input 
                      type="email" 
                      className="auth-input" 
                      placeholder="admin@atronics.com" 
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <label className="auth-label">Master Key / Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="auth-input" 
                      placeholder="••••••••••••" 
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="auth-eye-btn" 
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                </div>

                <div className="auth-field">
                  <div className="auth-label-row">
                    <label className="auth-label">2FA Security Clearance PIN</label>
                    <span className="auth-hint">6-Digit Authenticator Token</span>
                  </div>
                  <div className="auth-input-wrapper">
                    <KeyRound size={18} className="input-icon" />
                    <input 
                      type="text" 
                      maxLength="8"
                      className="auth-input auth-pin-input" 
                      placeholder="884201" 
                      value={adminPin}
                      onChange={(e) => setAdminPin(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="auth-btn-admin" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="auth-spinner"></span>
                  ) : (
                    <>
                      <ShieldCheck size={18} />
                      <span>AUTHORIZE ADMIN CLEARANCE</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Quick Demo Credentials */}
                <div className="auth-quick-fill">
                  <button type="button" onClick={fillAdminDemo} className="quick-fill-btn quick-fill-admin">
                    <Sparkles size={14} />
                    <span>Auto-Fill Admin Demo Credentials</span>
                  </button>
                </div>
              </form>
            )}

            {/* TAB 3: REGISTER NEW CLIENT */}
            {activeTab === 'register' && (
              <form onSubmit={handleRegisterSubmit} className="auth-form">
                <p className="auth-form-desc">
                  Request an enterprise client workspace to upload Gerber packages, manage BOM components, and get live fabrication status.
                </p>

                <div className="auth-field-grid">
                  <div className="auth-field">
                    <label className="auth-label">Full Name *</label>
                    <div className="auth-input-wrapper">
                      <User size={18} className="input-icon" />
                      <input 
                        type="text" 
                        className="auth-input" 
                        placeholder="John Doe" 
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="auth-field">
                    <label className="auth-label">Company / Entity *</label>
                    <div className="auth-input-wrapper">
                      <Building2 size={18} className="input-icon" />
                      <input 
                        type="text" 
                        className="auth-input" 
                        placeholder="Acme Hardware Corp" 
                        value={regCompany}
                        onChange={(e) => setRegCompany(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="auth-field">
                  <label className="auth-label">Corporate Email *</label>
                  <div className="auth-input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input 
                      type="email" 
                      className="auth-input" 
                      placeholder="engineering@company.com" 
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <label className="auth-label">Phone / WhatsApp (Optional)</label>
                  <div className="auth-input-wrapper">
                    <Phone size={18} className="input-icon" />
                    <input 
                      type="tel" 
                      className="auth-input" 
                      placeholder="+1 (555) 000-0000" 
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="auth-btn-primary" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="auth-spinner"></span>
                  ) : (
                    <>
                      <span>REQUEST CLIENT WORKSPACE</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Footer Trust Indicators */}
            <div className="auth-modal-footer">
              <div className="auth-trust-item">
                <Lock size={13} />
                <span>256-Bit Encrypted</span>
              </div>
              <div className="auth-trust-item">
                <Cpu size={13} />
                <span>Direct SMT & DFM Link</span>
              </div>
              <div className="auth-trust-item">
                <Layers size={13} />
                <span>NDA Protected</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AuthModal
