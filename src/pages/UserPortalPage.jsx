import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Layers, 
  Activity, 
  FileText, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  CreditCard, 
  Plus, 
  Download, 
  RefreshCw, 
  ChevronRight, 
  Search, 
  ShieldCheck, 
  Cpu, 
  Truck, 
  Building2, 
  Settings, 
  LogOut, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Edit3,
  Archive,
  User
} from 'lucide-react'
import Navbar from '../components/Navbar'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import PCBProcessTracker from '../components/portal/PCBProcessTracker'
import QuotePaymentModal from '../components/portal/QuotePaymentModal'
import TicketThreadModal from '../components/portal/TicketThreadModal'
import DFMReportModal from '../components/portal/DFMReportModal'
import FactoryGalleryModal from '../components/portal/FactoryGalleryModal'
import ReorderBatchModal from '../components/portal/ReorderBatchModal'
import LiveTrackingModal from '../components/portal/LiveTrackingModal'
import RevisionDiffModal from '../components/portal/RevisionDiffModal'
import { generateQuotationPDF } from '../utils/quotationPdfGenerator'
import { usePortalData, formatINR } from '../context/PortalDataContext'
import { useAuth } from '../context/AuthContext'
import './UserPortalPage.css'

export default function UserPortalPage() {
  const { 
    orders, 
    quotes, 
    tickets, 
    raiseTicket, 
    requestQuoteRevision, 
    approveQuotation, 
    reorderPCB 
  } = usePortalData()
  const { currentUser, logout, openLogin } = useAuth()

  // Tab State: 'overview', 'tracker', 'quotes', 'tickets', 'history', 'profile'
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedOrderId, setSelectedOrderId] = useState(orders[0]?.id || '')

  // Modals
  const [paymentQuote, setPaymentQuote] = useState(null)
  const [activeTicketThread, setActiveTicketThread] = useState(null)
  const [isRaiseTicketOpen, setIsRaiseTicketOpen] = useState(false)
  const [isRevisionModalOpen, setIsRevisionModalOpen] = useState(false)
  const [revisionQuote, setRevisionQuote] = useState(null)
  const [revisionNote, setRevisionNote] = useState('')

  // Enterprise Feature Modals
  const [activeDFMOrder, setActiveDFMOrder] = useState(null)
  const [activeGalleryOrder, setActiveGalleryOrder] = useState(null)
  const [activeTrackingOrder, setActiveTrackingOrder] = useState(null)
  const [activeRevisionOrder, setActiveRevisionOrder] = useState(null)
  const [activeReorderBatchOrder, setActiveReorderBatchOrder] = useState(null)

  // Raise ticket form
  const [newTicketSubject, setNewTicketSubject] = useState('')
  const [newTicketCategory, setNewTicketCategory] = useState('DFM & Engineering')
  const [newTicketPriority, setNewTicketPriority] = useState('Medium')
  const [newTicketOrderId, setNewTicketOrderId] = useState('')
  const [newTicketMessage, setNewTicketMessage] = useState('')

  // Re-order modal
  const [reorderItem, setReorderItem] = useState(null)
  const [reorderQty, setReorderQty] = useState(100)

  // Dynamic document title
  useEffect(() => {
    document.title = 'Client Engineering Portal | ATRONICS'
  }, [])

  // Filter client data (Apex Robotics by default for demo)
  const clientEmail = currentUser?.email || 'client.engineer@apexrobotics.io'
  const clientCompany = currentUser?.company || 'Apex Robotics International LLC'

  const clientOrders = orders.filter(o => o.clientEmail === clientEmail || o.userId === 'user_apex')
  const clientQuotes = quotes.filter(q => q.clientEmail === clientEmail || q.userId === 'user_apex')
  const clientTickets = tickets.filter(t => t.clientEmail === clientEmail || t.userId === 'user_apex')

  const activeOrder = clientOrders.find(o => o.id === selectedOrderId) || clientOrders[0]

  // Counts
  const activeOrdersCount = clientOrders.filter(o => o.currentStageId !== 'shipped').length
  const pendingQuotesCount = clientQuotes.filter(q => q.status !== 'Paid / In Production').length
  const openTicketsCount = clientTickets.filter(t => t.status !== 'Resolved').length

  const [downloadingQuoteId, setDownloadingQuoteId] = useState(null)

  const handleDownloadQuotePDF = async (quote) => {
    try {
      setDownloadingQuoteId(quote.id)
      await generateQuotationPDF(quote)
    } finally {
      setDownloadingQuoteId(null)
    }
  }

  // Handlers
  const handleRaiseTicketSubmit = (e) => {
    e.preventDefault()
    if (!newTicketSubject.trim() || !newTicketMessage.trim()) return

    const created = raiseTicket({
      subject: newTicketSubject,
      category: newTicketCategory,
      priority: newTicketPriority,
      relatedOrderId: newTicketOrderId || 'General Inquiry',
      message: newTicketMessage,
      clientName: currentUser?.name || 'Apex Robotics Engineer',
      clientEmail
    })

    setIsRaiseTicketOpen(false)
    setNewTicketSubject('')
    setNewTicketMessage('')
    setActiveTicketThread(created)
  }

  const handleOpenRevision = (quote) => {
    setRevisionQuote(quote)
    setRevisionNote('')
    setIsRevisionModalOpen(true)
  }

  const handleRevisionSubmit = (e) => {
    e.preventDefault()
    if (revisionQuote && revisionNote.trim()) {
      requestQuoteRevision(revisionQuote.id, revisionNote.trim())
      setIsRevisionModalOpen(false)
      setRevisionQuote(null)
    }
  }

  const handleReorderSubmit = (e) => {
    e.preventDefault()
    if (reorderItem) {
      const created = reorderPCB(reorderItem.id, Number(reorderQty))
      setReorderItem(null)
      if (created) {
        setSelectedOrderId(created.id)
        setActiveTab('tracker')
      }
    }
  }

  return (
    <div className="portal-page-wrapper">
      <Navbar />

      {/* Main Container */}
      <main className="portal-main-container">
        {/* Top Portal Header Strip */}
        <header className="portal-top-banner">
          <div className="portal-banner-left">
            <div className="portal-client-badge">
              <span className="client-badge-dot"></span>
              <span>CLIENT HARDWARE PORTAL</span>
            </div>
            <h1 className="portal-welcome-heading">
              Welcome back, <span className="client-name-highlight">{clientCompany}</span>
            </h1>
            <p className="portal-subtitle">
              Live manufacturing tracking, engineering ticket desk, official quotation approval, and direct INR payment checkout.
            </p>
          </div>

          <div className="portal-banner-right">
            <div className="role-switch-box">
              <div className="role-info">
                <span className="role-title">Logged in as Client</span>
                <span className="role-email">{clientEmail}</span>
              </div>
              <button 
                className="btn-switch-role" 
                onClick={() => openLogin('admin')}
                title="Switch to Admin Dashboard"
              >
                <ShieldCheck size={14} />
                <span>Switch to Admin View</span>
              </button>
            </div>
          </div>
        </header>

        {/* Layout Grid: Left Nav Sidebar & Right Main Panel */}
        <div className="portal-layout-grid">
          {/* Left Navigation Sidebar */}
          <aside className="portal-sidebar-nav">
            <div className="sidebar-menu-group">
              <button 
                className={`sidebar-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <Activity size={18} />
                <span>Dashboard Overview</span>
              </button>

              <button 
                className={`sidebar-nav-btn ${activeTab === 'tracker' ? 'active' : ''}`}
                onClick={() => setActiveTab('tracker')}
              >
                <Layers size={18} />
                <span>Live PCB Tracker</span>
                {activeOrdersCount > 0 && (
                  <span className="sidebar-count-badge">{activeOrdersCount}</span>
                )}
              </button>

              <button 
                className={`sidebar-nav-btn ${activeTab === 'quotes' ? 'active' : ''}`}
                onClick={() => setActiveTab('quotes')}
              >
                <CreditCard size={18} />
                <span>Quotations & Checkout</span>
                {pendingQuotesCount > 0 && (
                  <span className="sidebar-count-badge alert-badge">{pendingQuotesCount}</span>
                )}
              </button>

              <button 
                className={`sidebar-nav-btn ${activeTab === 'tickets' ? 'active' : ''}`}
                onClick={() => setActiveTab('tickets')}
              >
                <MessageSquare size={18} />
                <span>Support & DFM Tickets</span>
                {openTicketsCount > 0 && (
                  <span className="sidebar-count-badge">{openTicketsCount}</span>
                )}
              </button>

              <button 
                className={`sidebar-nav-btn ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                <Archive size={18} />
                <span>Purchased PCB Archive</span>
              </button>

              <button 
                className={`sidebar-nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <Building2 size={18} />
                <span>Company & Billing</span>
              </button>
            </div>

            {/* Quick Support Card */}
            <div className="sidebar-quick-help-card">
              <div className="quick-help-title">Need Urgent DFM Help?</div>
              <p className="quick-help-desc">Our lead engineers are online to review stackup tolerances & BOM availability.</p>
              <button className="btn-sidebar-ticket" onClick={() => setIsRaiseTicketOpen(true)}>
                <Plus size={14} />
                <span>Raise Engineering Ticket</span>
              </button>
            </div>
          </aside>

          {/* Right Main Content Area */}
          <section className="portal-content-view">
            
            {/* ================= 1. TAB: OVERVIEW ================= */}
            {activeTab === 'overview' && (
              <div className="tab-view-container">
                {/* 4 Key Metric Cards */}
                <div className="portal-metrics-grid">
                  <div className="metric-stat-box" onClick={() => setActiveTab('tracker')}>
                    <div className="stat-icon-wrap icon-blue">
                      <Layers size={22} />
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">{activeOrdersCount}</div>
                      <div className="stat-label">PCBs In Active Production</div>
                    </div>
                    <ChevronRight size={16} className="stat-arrow" />
                  </div>

                  <div className="metric-stat-box" onClick={() => setActiveTab('quotes')}>
                    <div className="stat-icon-wrap icon-amber">
                      <CreditCard size={22} />
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">{pendingQuotesCount}</div>
                      <div className="stat-label">Engineering Quotes Ready</div>
                    </div>
                    <ChevronRight size={16} className="stat-arrow" />
                  </div>

                  <div className="metric-stat-box" onClick={() => setActiveTab('tickets')}>
                    <div className="stat-icon-wrap icon-emerald">
                      <MessageSquare size={22} />
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">{openTicketsCount}</div>
                      <div className="stat-label">Open Support Inquiries</div>
                    </div>
                    <ChevronRight size={16} className="stat-arrow" />
                  </div>

                  <div className="metric-stat-box" onClick={() => setActiveTab('history')}>
                    <div className="stat-icon-wrap icon-purple">
                      <Archive size={22} />
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">{clientOrders.length}</div>
                      <div className="stat-label">Total PCB Runs Completed</div>
                    </div>
                    <ChevronRight size={16} className="stat-arrow" />
                  </div>
                </div>

                {/* Live Process Tracker Spotlight */}
                <div className="section-block-card">
                  <div className="section-block-header">
                    <div className="block-title-group">
                      <span className="live-indicator-dot"></span>
                      <h2 className="block-title">Current Manufacturing Spotlight</h2>
                    </div>
                    <button className="btn-view-all-link" onClick={() => setActiveTab('tracker')}>
                      <span>View All Active Orders ({clientOrders.length})</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {activeOrder ? (
                    <PCBProcessTracker 
                      order={activeOrder} 
                      onOpenDFM={setActiveDFMOrder}
                      onOpenGallery={setActiveGalleryOrder}
                      onOpenTracking={setActiveTrackingOrder}
                      onOpenRevisions={setActiveRevisionOrder}
                      onOpenReorder={setActiveReorderBatchOrder}
                    />
                  ) : (
                    <p className="empty-state-text">No active PCB orders found in production.</p>
                  )}
                </div>

                {/* Split: Quotations Pending Checkout & Open Tickets */}
                <div className="overview-dual-split">
                  {/* Quotes Box */}
                  <div className="section-block-card">
                    <div className="section-block-header">
                      <h3 className="block-subheading">
                        <CreditCard size={18} />
                        <span>Ready for Payment & Production</span>
                      </h3>
                      <button className="btn-view-all-link" onClick={() => setActiveTab('quotes')}>
                        <span>All Quotes</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    <div className="quick-quotes-list">
                      {clientQuotes.map((q) => (
                        <div key={q.id} className="quick-quote-item">
                          <div className="q-info">
                            <div className="q-top">
                              <span className="q-id">{q.id}</span>
                              <span className={`q-status-badge status-${q.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                                {q.status}
                              </span>
                            </div>
                            <div className="q-title">{q.projectName}</div>
                            <div className="q-specs">{q.layerCount} • {q.quantity} pcs • {q.leadTime}</div>
                          </div>

                          <div className="q-action-col">
                            <div className="q-price">{formatINR(q.pricing?.total || 0)}</div>
                            {q.status !== 'Paid / In Production' && (
                              <button 
                                className="btn-quick-pay"
                                onClick={() => setPaymentQuote(q)}
                              >
                                <span>Pay Now</span>
                                <ArrowRight size={14} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tickets Box */}
                  <div className="section-block-card">
                    <div className="section-block-header">
                      <h3 className="block-subheading">
                        <MessageSquare size={18} />
                        <span>Recent Engineering Inquiries</span>
                      </h3>
                      <button className="btn-view-all-link" onClick={() => setIsRaiseTicketOpen(true)}>
                        <Plus size={14} />
                        <span>New Ticket</span>
                      </button>
                    </div>

                    <div className="quick-tickets-list">
                      {clientTickets.slice(0, 3).map((t) => (
                        <div 
                          key={t.id} 
                          className="quick-ticket-item"
                          onClick={() => setActiveTicketThread(t)}
                        >
                          <div className="t-top-row">
                            <span className="t-id">{t.id}</span>
                            <span className={`t-priority-tag priority-${t.priority?.toLowerCase()}`}>
                              {t.priority}
                            </span>
                            <span className={`t-status-badge status-${t.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                              {t.status}
                            </span>
                          </div>
                          <div className="t-subject">{t.subject}</div>
                          <div className="t-footer">
                            <span className="t-assigned">{t.assignedTo}</span>
                            <span className="t-updated">{t.lastUpdated}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= 2. TAB: LIVE TRACKER ================= */}
            {activeTab === 'tracker' && (
              <div className="tab-view-container">
                <div className="tab-header-row">
                  <div>
                    <h2 className="tab-main-title">Live PCB Manufacturing Pipeline</h2>
                    <p className="tab-main-desc">
                      Real-time stage-by-stage progression from Gerber intake to SMT reflow & courier dispatch.
                    </p>
                  </div>

                  {/* Order Selector Dropdown */}
                  <div className="order-selector-box">
                    <label>Select Project to Track:</label>
                    <select 
                      value={selectedOrderId} 
                      onChange={(e) => setSelectedOrderId(e.target.value)}
                    >
                      {clientOrders.map(o => (
                        <option key={o.id} value={o.id}>
                          {o.id} - {o.projectName} ({o.layerCount})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {activeOrder ? (
                  <PCBProcessTracker 
                    order={activeOrder} 
                    onOpenDFM={setActiveDFMOrder}
                    onOpenGallery={setActiveGalleryOrder}
                    onOpenTracking={setActiveTrackingOrder}
                    onOpenRevisions={setActiveRevisionOrder}
                    onOpenReorder={setActiveReorderBatchOrder}
                  />
                ) : (
                  <div className="empty-state-box">
                    <p>No active manufacturing runs found for your account.</p>
                  </div>
                )}
              </div>
            )}

            {/* ================= 3. TAB: QUOTATIONS & CHECKOUT ================= */}
            {activeTab === 'quotes' && (
              <div className="tab-view-container">
                <div className="tab-header-row">
                  <div>
                    <h2 className="tab-main-title">Quotations & Commercial Approvals</h2>
                    <p className="tab-main-desc">
                      Review itemized engineering costs in Rupees (INR), request revisions, and complete payment directly to trigger immediate fabrication.
                    </p>
                  </div>
                </div>

                <div className="quotes-full-grid">
                  {clientQuotes.map(quote => (
                    <div key={quote.id} className="quote-detailed-card">
                      <div className="quote-card-header">
                        <div>
                          <div className="quote-id-row">
                            <span className="quote-id-tag">{quote.id}</span>
                            <span className={`quote-status-badge status-${quote.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                              {quote.status}
                            </span>
                            <span className="quote-service-tag">{quote.serviceType}</span>
                          </div>
                          <h3 className="quote-project-name">{quote.projectName}</h3>
                          <div className="quote-dates">
                            <span>Created: {quote.createdDate}</span> • <span>Valid Until: {quote.validUntil}</span>
                          </div>
                        </div>

                        <div className="quote-total-display">
                          <span className="total-title">TOTAL AMOUNT (INR)</span>
                          <span className="total-val">{formatINR(quote.pricing?.total || 0)}</span>
                        </div>
                      </div>

                      {/* Technical Specs Breakdown */}
                      <div className="quote-specs-grid">
                        <div className="spec-card-item">
                          <span className="s-lbl">Layer Count</span>
                          <span className="s-val">{quote.layerCount}</span>
                        </div>
                        <div className="spec-card-item">
                          <span className="s-lbl">Quantity</span>
                          <span className="s-val">{quote.quantity} Units</span>
                        </div>
                        <div className="spec-card-item">
                          <span className="s-lbl">Dimensions</span>
                          <span className="s-val">{quote.dimensions}</span>
                        </div>
                        <div className="spec-card-item">
                          <span className="s-lbl">Lead Time</span>
                          <span className="s-val">{quote.leadTime}</span>
                        </div>
                        <div className="spec-card-item">
                          <span className="s-lbl">Material</span>
                          <span className="s-val">{quote.specs?.material || 'FR4 TG170'}</span>
                        </div>
                        <div className="spec-card-item">
                          <span className="s-lbl">Surface Finish</span>
                          <span className="s-val">{quote.specs?.surfaceFinish || 'ENIG'}</span>
                        </div>
                      </div>

                      {/* Itemized Pricing Table */}
                      {quote.pricing && (
                        <div className="quote-pricing-table">
                          <div className="pricing-row">
                            <span>PCB Fabrication:</span>
                            <strong>{formatINR(quote.pricing.fabrication)}</strong>
                          </div>
                          {quote.pricing.smtAssembly > 0 && (
                            <div className="pricing-row">
                              <span>SMT Line Assembly:</span>
                              <strong>{formatINR(quote.pricing.smtAssembly)}</strong>
                            </div>
                          )}
                          {quote.pricing.bomComponents > 0 && (
                            <div className="pricing-row">
                              <span>BOM Component Sourcing:</span>
                              <strong>{formatINR(quote.pricing.bomComponents)}</strong>
                            </div>
                          )}
                          <div className="pricing-row">
                            <span>Tooling & NRE Stencil:</span>
                            <strong>{formatINR(quote.pricing.toolingNRE)}</strong>
                          </div>
                          <div className="pricing-row">
                            <span>Express Shipping:</span>
                            <strong>{formatINR(quote.pricing.shipping)}</strong>
                          </div>
                          {quote.pricing.discount > 0 && (
                            <div className="pricing-row discount-row">
                              <span>Commercial Discount:</span>
                              <strong>-{formatINR(quote.pricing.discount)}</strong>
                            </div>
                          )}
                        </div>
                      )}

                      {quote.revisionNotes && (
                        <div className="quote-revision-alert">
                          <AlertCircle size={16} />
                          <div>
                            <strong>Revision Requested:</strong> {quote.revisionNotes}
                          </div>
                        </div>
                      )}

                      {/* Action Bar */}
                      <div className="quote-actions-footer">
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          <button 
                            className="btn-quote-sec"
                            onClick={() => handleDownloadQuotePDF(quote)}
                            disabled={downloadingQuoteId === quote.id}
                            title="Download Official Branded PDF"
                            style={{ background: '#EFF6FF', color: '#087BFF', borderColor: '#BFDBFE' }}
                          >
                            <Download size={15} />
                            <span>{downloadingQuoteId === quote.id ? 'Generating PDF...' : 'Download Official PDF'}</span>
                          </button>

                          <button 
                            className="btn-quote-sec"
                            onClick={() => handleOpenRevision(quote)}
                          >
                            <Edit3 size={15} />
                            <span>Request Revision</span>
                          </button>
                        </div>

                        <div className="footer-right-actions">
                          {quote.status !== 'Paid / In Production' ? (
                            <button 
                              className="btn-quote-primary"
                              onClick={() => setPaymentQuote(quote)}
                            >
                              <CreditCard size={16} />
                              <span>Pay {formatINR(quote.pricing?.total || 0)} & Start Production</span>
                            </button>
                          ) : (
                            <span className="paid-confirmed-badge">
                              <CheckCircle2 size={16} />
                              <span>Paid & In Production</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= 4. TAB: TICKETS ================= */}
            {activeTab === 'tickets' && (
              <div className="tab-view-container">
                <div className="tab-header-row">
                  <div>
                    <h2 className="tab-main-title">Engineering & Support Tickets</h2>
                    <p className="tab-main-desc">
                      Direct collaboration desk with ATRONICS CAM engineers, DFM specialists, and production managers.
                    </p>
                  </div>

                  <button className="btn-action-primary" onClick={() => setIsRaiseTicketOpen(true)}>
                    <Plus size={16} />
                    <span>Raise New Ticket</span>
                  </button>
                </div>

                <div className="tickets-list-container">
                  {clientTickets.map(ticket => (
                    <div 
                      key={ticket.id} 
                      className="ticket-row-card"
                      onClick={() => setActiveTicketThread(ticket)}
                    >
                      <div className="ticket-row-left">
                        <div className="ticket-meta-top">
                          <span className="t-id-badge">{ticket.id}</span>
                          <span className="t-cat-tag">{ticket.category}</span>
                          <span className={`t-p-pill priority-${ticket.priority?.toLowerCase()}`}>
                            {ticket.priority} Priority
                          </span>
                          <span className={`t-s-pill status-${ticket.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                            {ticket.status}
                          </span>
                        </div>
                        <h3 className="ticket-row-subject">{ticket.subject}</h3>
                        <p className="ticket-row-preview">
                          {ticket.messages?.[ticket.messages.length - 1]?.text?.slice(0, 120)}...
                        </p>
                      </div>

                      <div className="ticket-row-right">
                        <div className="t-assignee-col">
                          <span className="t-assign-lbl">Assigned Engineer:</span>
                          <span className="t-assign-name">{ticket.assignedTo}</span>
                        </div>
                        <div className="t-time-col">
                          <Clock size={13} />
                          <span>{ticket.lastUpdated}</span>
                        </div>
                        <ChevronRight size={18} className="ticket-chevron" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= 5. TAB: ARCHIVE & REORDERS ================= */}
            {activeTab === 'history' && (
              <div className="tab-view-container">
                <div className="tab-header-row">
                  <div>
                    <h2 className="tab-main-title">Purchased PCB Archive & Repeat Orders</h2>
                    <p className="tab-main-desc">
                      Access CAD production files, signed Certificates of Conformance (CoC), and launch 1-click repeat production batches.
                    </p>
                  </div>
                </div>

                <div className="archive-orders-grid">
                  {clientOrders.map(order => (
                    <div key={order.id} className="archive-order-card">
                      <div className="archive-card-top">
                        <div className="archive-id-badge">{order.id}</div>
                        <div className="archive-date">Ordered {order.placedDate}</div>
                      </div>

                      <h3 className="archive-title">{order.projectName}</h3>
                      <div className="archive-specs-list">
                        <span>{order.layerCount}</span> • <span>{order.quantity} pcs</span> • <span>{order.surfaceFinish}</span>
                      </div>

                      <div className="archive-pricing-row">
                        <span className="archive-lbl">Total Paid:</span>
                        <span className="archive-val">{formatINR(order.amount)}</span>
                      </div>

                      <div className="archive-actions-row">
                        <button 
                          className="btn-archive-reorder"
                          onClick={() => setActiveReorderBatchOrder(order)}
                        >
                          <RefreshCw size={14} />
                          <span>Re-Order & Scale Batch</span>
                        </button>

                        <button 
                          className="btn-archive-view"
                          onClick={() => {
                            setSelectedOrderId(order.id)
                            setActiveTab('tracker')
                          }}
                        >
                          <span>View Pipeline</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= 6. TAB: PROFILE & BILLING ================= */}
            {activeTab === 'profile' && (
              <div className="tab-view-container">
                <div className="tab-header-row">
                  <div>
                    <h2 className="tab-main-title">Company Profile & Enterprise Billing</h2>
                    <p className="tab-main-desc">
                      Manage corporate procurement information, shipping docks, and engineering team access.
                    </p>
                  </div>
                </div>

                <div className="profile-details-grid">
                  <div className="profile-card">
                    <h3 className="profile-section-title">
                      <Building2 size={18} />
                      <span>Company Information</span>
                    </h3>

                    <div className="profile-form-grid">
                      <div className="p-group">
                        <label>Company Legal Name</label>
                        <input type="text" defaultValue={clientCompany} readOnly />
                      </div>
                      <div className="p-group">
                        <label>Corporate Account Tier</label>
                        <input type="text" defaultValue="Enterprise VIP (Net-30 Pre-Approved)" readOnly />
                      </div>
                      <div className="p-group">
                        <label>Primary Technical Email</label>
                        <input type="email" defaultValue={clientEmail} readOnly />
                      </div>
                      <div className="p-group">
                        <label>Engineering Phone</label>
                        <input type="text" defaultValue="+91 98765 43210" readOnly />
                      </div>
                    </div>
                  </div>

                  <div className="profile-card">
                    <h3 className="profile-section-title">
                      <Truck size={18} />
                      <span>Primary Shipping & Dock Address</span>
                    </h3>

                    <div className="profile-form-grid">
                      <div className="p-group full-width">
                        <label>Delivery Address</label>
                        <input type="text" defaultValue="Plot 45, Electronic City Phase 1 (Receiving Dock B)" readOnly />
                      </div>
                      <div className="p-group">
                        <label>City & State</label>
                        <input type="text" defaultValue="Bengaluru, Karnataka" readOnly />
                      </div>
                      <div className="p-group">
                        <label>Pincode & Country</label>
                        <input type="text" defaultValue="560100, India" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* ================= MODALS ================= */}

      {/* 1. Payment Modal */}
      {paymentQuote && (
        <QuotePaymentModal 
          quote={paymentQuote}
          onClose={() => setPaymentQuote(null)}
          onSuccess={(newOrder) => {
            if (newOrder) setSelectedOrderId(newOrder.id)
          }}
        />
      )}

      {/* 2. Ticket Thread Modal */}
      {activeTicketThread && (
        <TicketThreadModal 
          ticket={activeTicketThread}
          isAdmin={false}
          onClose={() => setActiveTicketThread(null)}
        />
      )}

      {/* 3. Raise Ticket Modal */}
      {isRaiseTicketOpen && (
        <div className="portal-modal-overlay" onClick={() => setIsRaiseTicketOpen(false)}>
          <div className="portal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="p-modal-header">
              <h2 className="p-modal-title">Raise Engineering Support Ticket</h2>
              <button className="p-modal-close" onClick={() => setIsRaiseTicketOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleRaiseTicketSubmit} className="p-modal-form">
              <div className="p-form-group">
                <label>Subject / Problem Summary</label>
                <input 
                  type="text" 
                  placeholder="e.g. Impedance stackup tolerance clarification for PCIe bus"
                  value={newTicketSubject}
                  onChange={(e) => setNewTicketSubject(e.target.value)}
                  required 
                />
              </div>

              <div className="p-form-row-2">
                <div className="p-form-group">
                  <label>Inquiry Category</label>
                  <select value={newTicketCategory} onChange={(e) => setNewTicketCategory(e.target.value)}>
                    <option value="DFM & Engineering">DFM & Engineering</option>
                    <option value="Production Status">Production Status</option>
                    <option value="Quotation & Pricing">Quotation & Pricing</option>
                    <option value="Component Sourcing">Component Sourcing</option>
                    <option value="Quality & Inspection">Quality & Inspection</option>
                    <option value="Shipping & Logistics">Shipping & Logistics</option>
                  </select>
                </div>

                <div className="p-form-group">
                  <label>Priority</label>
                  <select value={newTicketPriority} onChange={(e) => setNewTicketPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="p-form-group">
                <label>Related Order / Quotation Reference (Optional)</label>
                <select value={newTicketOrderId} onChange={(e) => setNewTicketOrderId(e.target.value)}>
                  <option value="">General Engineering Inquiry</option>
                  {clientOrders.map(o => (
                    <option key={o.id} value={o.id}>{o.id} - {o.projectName}</option>
                  ))}
                  {clientQuotes.map(q => (
                    <option key={q.id} value={q.id}>{q.id} - {q.projectName}</option>
                  ))}
                </select>
              </div>

              <div className="p-form-group">
                <label>Message / Detailed Description</label>
                <textarea 
                  rows={4} 
                  placeholder="Please describe your technical query, layer requirements, or testing specifications..."
                  value={newTicketMessage}
                  onChange={(e) => setNewTicketMessage(e.target.value)}
                  required 
                />
              </div>

              <div className="p-modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsRaiseTicketOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit-primary">
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Request Quote Revision Modal */}
      {isRevisionModalOpen && revisionQuote && (
        <div className="portal-modal-overlay" onClick={() => setIsRevisionModalOpen(false)}>
          <div className="portal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="p-modal-header">
              <h2 className="p-modal-title">Request Quotation Revision ({revisionQuote.id})</h2>
              <button className="p-modal-close" onClick={() => setIsRevisionModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleRevisionSubmit} className="p-modal-form">
              <p className="revision-instructions">
                Specify changes needed for <strong>{revisionQuote.projectName}</strong> (e.g. quantity changes, expedited lead time, surface finish alteration, or panelization specs):
              </p>

              <div className="p-form-group">
                <label>Revision Notes & Engineering Requirements</label>
                <textarea 
                  rows={4} 
                  placeholder="e.g. Please recalculate price for 300 units with 5-day expedited lead time and ENIG gold finish..."
                  value={revisionNote}
                  onChange={(e) => setRevisionNote(e.target.value)}
                  required 
                />
              </div>

              <div className="p-modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsRevisionModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit-primary">
                  Send Revision Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Enterprise Feature Modals */}
      {activeDFMOrder && (
        <DFMReportModal order={activeDFMOrder} onClose={() => setActiveDFMOrder(null)} />
      )}

      {activeGalleryOrder && (
        <FactoryGalleryModal order={activeGalleryOrder} onClose={() => setActiveGalleryOrder(null)} />
      )}

      {activeTrackingOrder && (
        <LiveTrackingModal order={activeTrackingOrder} onClose={() => setActiveTrackingOrder(null)} />
      )}

      {activeRevisionOrder && (
        <RevisionDiffModal order={activeRevisionOrder} onClose={() => setActiveRevisionOrder(null)} />
      )}

      {activeReorderBatchOrder && (
        <ReorderBatchModal 
          order={activeReorderBatchOrder} 
          onClose={() => setActiveReorderBatchOrder(null)}
          onSuccess={(newOrder) => setSelectedOrderId(newOrder.id)}
        />
      )}

      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}
