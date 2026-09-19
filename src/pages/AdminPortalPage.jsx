import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Layers, 
  FileText, 
  MessageSquare, 
  Users, 
  Activity, 
  DollarSign, 
  Plus, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Truck, 
  Edit3, 
  Eye, 
  ChevronRight, 
  ArrowUpRight, 
  RefreshCw, 
  UserCheck, 
  Building2, 
  FileCheck,
  Flame,
  Target,
  Shield,
  Cpu,
  Calculator,
  Download,
  BarChart3,
  TrendingUp,
  Lock,
  Sliders,
  Sparkles
} from 'lucide-react'
import Navbar from '../components/Navbar'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import TicketThreadModal from '../components/portal/TicketThreadModal'
import AdminQuoteCreatorModal from '../components/portal/AdminQuoteCreatorModal'
import AdminMarginEstimatorModal from '../components/portal/AdminMarginEstimatorModal'
import AuditLogViewerModal from '../components/portal/AuditLogViewerModal'
import { generateQuotationPDF } from '../utils/quotationPdfGenerator'
import { usePortalData, MANUFACTURING_STAGES, formatINR } from '../context/PortalDataContext'
import { useAuth } from '../context/AuthContext'
import './AdminPortalPage.css'

export default function AdminPortalPage() {
  const { 
    orders, 
    quotes, 
    tickets, 
    users, 
    auditLogs,
    updateOrderStage, 
    updateTicketStatus 
  } = usePortalData()
  const { currentUser, openLogin } = useAuth()

  // Tab: 'overview', 'orders', 'quotes', 'tickets', 'users', 'analytics', 'audit'
  const [activeTab, setActiveTab] = useState('overview')

  // Modals & Active selections
  const [isQuoteCreatorOpen, setIsQuoteCreatorOpen] = useState(false)
  const [isMarginEstimatorOpen, setIsMarginEstimatorOpen] = useState(false)
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)
  const [activeTicketThread, setActiveTicketThread] = useState(null)
  const [selectedOrderForStageUpdate, setSelectedOrderForStageUpdate] = useState(null)
  const [newStageId, setNewStageId] = useState('smt')
  const [adminStageNote, setAdminStageNote] = useState('')
  const [adminTrackingNumber, setAdminTrackingNumber] = useState('')

  // Filters
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    document.title = 'ATRONICS Master Admin & ERP Portal'
  }, [])

  // Calculations in INR
  const totalRevenue = orders.reduce((sum, o) => sum + (o.paymentStatus === 'Paid' ? o.amount : 0), 0)
  const activeProductionRuns = orders.filter(o => o.currentStageId !== 'shipped').length
  const pendingQuotesCount = quotes.filter(q => q.status === 'Pending Approval' || q.status === 'Revision Requested').length
  const openTicketsCount = tickets.filter(t => t.status === 'Open' || t.status === 'In Progress').length

  // Handlers
  const handleOpenStageUpdate = (order) => {
    setSelectedOrderForStageUpdate(order)
    setNewStageId(order.currentStageId || 'intake')
    setAdminStageNote(order.notes || '')
    setAdminTrackingNumber(order.trackingNumber || '')
  }

  const handleSaveStageUpdate = (e) => {
    e.preventDefault()
    if (selectedOrderForStageUpdate && newStageId) {
      updateOrderStage(
        selectedOrderForStageUpdate.id,
        newStageId,
        adminStageNote.trim(),
        adminTrackingNumber.trim()
      )
      setSelectedOrderForStageUpdate(null)
    }
  }

  const [downloadingQuoteId, setDownloadingQuoteId] = useState(null)

  const handleDownloadQuotePDF = async (quote) => {
    try {
      setDownloadingQuoteId(quote.id)
      await generateQuotationPDF(quote)
    } finally {
      setDownloadingQuoteId(null)
    }
  }

  // Filtered lists
  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.projectName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          o.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    if (filterStatus === 'all') return matchesSearch
    if (filterStatus === 'active') return matchesSearch && o.currentStageId !== 'shipped'
    if (filterStatus === 'shipped') return matchesSearch && o.currentStageId === 'shipped'
    return matchesSearch
  })

  const filteredQuotes = quotes.filter(q => {
    const matchesSearch = q.projectName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const filteredTickets = tickets.filter(t => {
    const matchesSearch = t.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="admin-page-wrapper">
      <Navbar />

      <main className="admin-main-container">
        {/* Top Admin Header Strip */}
        <header className="admin-top-banner">
          <div className="admin-banner-left">
            <div className="admin-badge-clearance">
              <ShieldCheck size={14} />
              <span>LEVEL 4 ADMIN & DFM OPERATIONS DESK</span>
            </div>
            <h1 className="admin-welcome-heading">
              ATRONICS Global Production & Engineering ERP
            </h1>
            <p className="admin-subtitle">
              Manage client quotations in INR, advance manufacturing pipeline stages, resolve technical tickets, and audit client telemetry in real time.
            </p>
          </div>

          <div className="admin-banner-right">
            <button 
              className="btn-admin-sec"
              onClick={() => setIsMarginEstimatorOpen(true)}
              title="CAM Cost Estimator & Margin Pricing Engine"
            >
              <Sliders size={15} />
              <span>Margin Engine</span>
            </button>

            <button 
              className="btn-admin-sec"
              onClick={() => setIsAuditModalOpen(true)}
              title="Compliance Audit Trail"
            >
              <Lock size={15} />
              <span>Audit Log</span>
            </button>

            <button 
              className="btn-admin-create-quote"
              onClick={() => setIsQuoteCreatorOpen(true)}
            >
              <Plus size={16} />
              <span>New Quotation</span>
            </button>

            <button 
              className="btn-switch-client"
              onClick={() => openLogin('user')}
              title="Switch to Client View"
            >
              <Users size={14} />
              <span>Client View</span>
            </button>
          </div>
        </header>

        {/* Layout Grid: Left Sidebar & Right Content */}
        <div className="admin-layout-grid">
          {/* Admin Sidebar Navigation */}
          <aside className="admin-sidebar-nav">
            <div className="admin-menu-group">
              <button 
                className={`admin-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <Activity size={18} />
                <span>Executive Overview</span>
              </button>

              <button 
                className={`admin-nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <Layers size={18} />
                <span>PCB Production Manager</span>
                <span className="admin-count-badge count-blue">{activeProductionRuns}</span>
              </button>

              <button 
                className={`admin-nav-btn ${activeTab === 'quotes' ? 'active' : ''}`}
                onClick={() => setActiveTab('quotes')}
              >
                <Calculator size={18} />
                <span>Quotation & RFQ Desk</span>
                {pendingQuotesCount > 0 && (
                  <span className="admin-count-badge count-amber">{pendingQuotesCount}</span>
                )}
              </button>

              <button 
                className={`admin-nav-btn ${activeTab === 'tickets' ? 'active' : ''}`}
                onClick={() => setActiveTab('tickets')}
              >
                <MessageSquare size={18} />
                <span>Engineering Ticket Desk</span>
                {openTicketsCount > 0 && (
                  <span className="admin-count-badge count-red">{openTicketsCount}</span>
                )}
              </button>

              <button 
                className={`admin-nav-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                <BarChart3 size={18} />
                <span>Analytics & Client LTV</span>
              </button>

              <button 
                className={`admin-nav-btn ${activeTab === 'audit' ? 'active' : ''}`}
                onClick={() => setActiveTab('audit')}
              >
                <Lock size={18} />
                <span>Audit & Compliance Log</span>
              </button>

              <button 
                className={`admin-nav-btn ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                <Users size={18} />
                <span>Client Accounts ({users.length})</span>
              </button>
            </div>
          </aside>

          {/* Right Main Admin Content */}
          <section className="admin-content-view">
            
            {/* ================= 1. TAB: OVERVIEW ================= */}
            {activeTab === 'overview' && (
              <div className="admin-tab-container">
                {/* 4 Stat Metrics */}
                <div className="admin-metrics-grid">
                  <div className="admin-metric-card" onClick={() => setActiveTab('orders')}>
                    <div className="metric-icon-wrap icon-blue">
                      <Layers size={22} />
                    </div>
                    <div className="metric-info">
                      <div className="metric-num">{activeProductionRuns}</div>
                      <div className="metric-lbl">Active Fabrication Runs</div>
                    </div>
                    <ChevronRight size={16} className="metric-arrow" />
                  </div>

                  <div className="admin-metric-card" onClick={() => setActiveTab('quotes')}>
                    <div className="metric-icon-wrap icon-amber">
                      <Calculator size={22} />
                    </div>
                    <div className="metric-info">
                      <div className="metric-num">{pendingQuotesCount}</div>
                      <div className="metric-lbl">Pending Quotation Approvals</div>
                    </div>
                    <ChevronRight size={16} className="metric-arrow" />
                  </div>

                  <div className="admin-metric-card" onClick={() => setActiveTab('tickets')}>
                    <div className="metric-icon-wrap icon-red">
                      <MessageSquare size={22} />
                    </div>
                    <div className="metric-info">
                      <div className="metric-num">{openTicketsCount}</div>
                      <div className="metric-lbl">Open Customer Tickets</div>
                    </div>
                    <ChevronRight size={16} className="metric-arrow" />
                  </div>

                  <div className="admin-metric-card" onClick={() => setActiveTab('users')}>
                    <div className="metric-icon-wrap icon-emerald">
                      <span style={{ fontSize: '20px', fontWeight: '900' }}>₹</span>
                    </div>
                    <div className="metric-info">
                      <div className="metric-num">{formatINR(totalRevenue)}</div>
                      <div className="metric-lbl">Total Production Value</div>
                    </div>
                    <ChevronRight size={16} className="metric-arrow" />
                  </div>
                </div>

                {/* Active Production Pipeline Queue */}
                <div className="admin-panel-card">
                  <div className="panel-card-header">
                    <div>
                      <h2 className="panel-title">Active PCB Production Queue</h2>
                      <p className="panel-subtitle">Real-time status of all client boards currently passing through manufacturing cells.</p>
                    </div>
                    <button className="btn-table-action" onClick={() => setActiveTab('orders')}>
                      <span>View All ({orders.length})</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  <div className="admin-table-wrapper">
                    <table className="admin-data-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Client Account</th>
                          <th>Project Title</th>
                          <th>Layer Stack</th>
                          <th>Qty</th>
                          <th>Current Stage</th>
                          <th>Estimated Delivery</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.slice(0, 4).map(order => {
                          const stageIndex = order.currentStageIndex !== undefined 
                            ? order.currentStageIndex 
                            : MANUFACTURING_STAGES.findIndex(s => s.id === order.currentStageId)
                          const stageObj = MANUFACTURING_STAGES[stageIndex] || MANUFACTURING_STAGES[0]

                          return (
                            <tr key={order.id}>
                              <td>
                                <span className="table-order-id">{order.id}</span>
                              </td>
                              <td>
                                <div className="table-client-name">{order.clientName}</div>
                                <div className="table-client-sub">{order.clientEmail}</div>
                              </td>
                              <td>
                                <div className="table-proj-name">{order.projectName}</div>
                              </td>
                              <td>
                                <span className="table-spec-tag">{order.layerCount}</span>
                              </td>
                              <td>
                                <strong>{order.quantity} pcs</strong>
                              </td>
                              <td>
                                <div className="table-stage-pill">
                                  <span className="stage-step-num">Step {stageIndex + 1}:</span>
                                  <span className="stage-name-text">{stageObj.name}</span>
                                </div>
                              </td>
                              <td>
                                <div className="table-delivery-date">{order.estimatedDelivery}</div>
                              </td>
                              <td>
                                <button 
                                  className="btn-update-stage"
                                  onClick={() => handleOpenStageUpdate(order)}
                                >
                                  <Edit3 size={13} />
                                  <span>Update Stage</span>
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Dual Split: Pending Quotation Revisions & Urgent Inquiries */}
                <div className="admin-dual-grid">
                  {/* Quotes Box */}
                  <div className="admin-panel-card">
                    <div className="panel-card-header">
                      <h3 className="panel-subheading">
                        <Calculator size={18} />
                        <span>Quotations Requiring Attention</span>
                      </h3>
                      <button className="btn-table-action" onClick={() => setIsQuoteCreatorOpen(true)}>
                        <Plus size={14} />
                        <span>New Quote</span>
                      </button>
                    </div>

                    <div className="admin-mini-list">
                      {quotes.map(quote => (
                        <div key={quote.id} className="admin-mini-item">
                          <div className="mini-item-left">
                            <div className="mini-item-top">
                              <span className="mini-id">{quote.id}</span>
                              <span className={`quote-status-badge status-${quote.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                                {quote.status}
                              </span>
                            </div>
                            <div className="mini-title">{quote.projectName}</div>
                            <div className="mini-client">{quote.clientName} • {quote.layerCount}</div>
                            {quote.revisionNotes && (
                              <div className="mini-revision-note">
                                <strong>Client Note:</strong> {quote.revisionNotes}
                              </div>
                            )}
                          </div>

                          <div className="mini-item-right">
                            <div className="mini-price">{formatINR(quote.pricing?.total || 0)}</div>
                            <button 
                              className="btn-mini-action"
                              onClick={() => setActiveTab('quotes')}
                            >
                              <span>Review</span>
                              <ChevronRight size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tickets Box */}
                  <div className="admin-panel-card">
                    <div className="panel-card-header">
                      <h3 className="panel-subheading">
                        <MessageSquare size={18} />
                        <span>Engineering Inquiries & Tickets</span>
                      </h3>
                      <button className="btn-table-action" onClick={() => setActiveTab('tickets')}>
                        <span>All Tickets ({tickets.length})</span>
                      </button>
                    </div>

                    <div className="admin-mini-list">
                      {tickets.slice(0, 3).map(ticket => (
                        <div 
                          key={ticket.id} 
                          className="admin-mini-item clickable"
                          onClick={() => setActiveTicketThread(ticket)}
                        >
                          <div className="mini-item-left">
                            <div className="mini-item-top">
                              <span className="mini-id">{ticket.id}</span>
                              <span className={`t-priority-tag priority-${ticket.priority?.toLowerCase()}`}>
                                {ticket.priority}
                              </span>
                              <span className={`t-status-badge status-${ticket.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                                {ticket.status}
                              </span>
                            </div>
                            <div className="mini-title">{ticket.subject}</div>
                            <div className="mini-client">{ticket.clientName} • {ticket.category}</div>
                          </div>

                          <div className="mini-item-right">
                            <div className="mini-time">{ticket.lastUpdated}</div>
                            <span className="btn-mini-reply">
                              <span>Reply</span>
                              <ChevronRight size={13} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= 2. TAB: PCB PRODUCTION MANAGER ================= */}
            {activeTab === 'orders' && (
              <div className="admin-tab-container">
                <div className="admin-tab-header">
                  <div>
                    <h2 className="admin-tab-title">PCB Manufacturing Process Manager</h2>
                    <p className="admin-tab-subtitle">
                      Control real-time manufacturing progression, upload test certificates, and set courier tracking details for every client project.
                    </p>
                  </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="admin-filter-bar">
                  <div className="search-input-wrap">
                    <Search size={16} />
                    <input 
                      type="text" 
                      placeholder="Search by order ID, project name, or client company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="filter-select-group">
                    <label>Filter:</label>
                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                      <option value="all">All Orders</option>
                      <option value="active">In Production</option>
                      <option value="shipped">Completed & Shipped</option>
                    </select>
                  </div>
                </div>

                {/* Orders Data Table */}
                <div className="admin-panel-card">
                  <div className="admin-table-wrapper">
                    <table className="admin-data-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Client Account</th>
                          <th>Project Title & Specs</th>
                          <th>Quantity</th>
                          <th>Order Value</th>
                          <th>Current Stage</th>
                          <th>Tracking #</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders.map(order => {
                          const stageIndex = order.currentStageIndex !== undefined 
                            ? order.currentStageIndex 
                            : MANUFACTURING_STAGES.findIndex(s => s.id === order.currentStageId)
                          const stageObj = MANUFACTURING_STAGES[stageIndex] || MANUFACTURING_STAGES[0]

                          return (
                            <tr key={order.id}>
                              <td>
                                <span className="table-order-id">{order.id}</span>
                              </td>
                              <td>
                                <div className="table-client-name">{order.clientName}</div>
                                <div className="table-client-sub">{order.clientEmail}</div>
                              </td>
                              <td>
                                <div className="table-proj-name">{order.projectName}</div>
                                <div className="table-proj-specs">
                                  {order.layerCount} • {order.dimensions} • {order.surfaceFinish}
                                </div>
                              </td>
                              <td>
                                <strong>{order.quantity} pcs</strong>
                              </td>
                              <td>
                                <span className="table-price-tag">{formatINR(order.amount)}</span>
                              </td>
                              <td>
                                <div className="table-stage-pill">
                                  <span className="stage-step-num">Step {stageIndex + 1}:</span>
                                  <span className="stage-name-text">{stageObj.name}</span>
                                </div>
                              </td>
                              <td>
                                <span className="table-tracking-val">{order.trackingNumber || 'Processing'}</span>
                              </td>
                              <td>
                                <button 
                                  className="btn-update-stage"
                                  onClick={() => handleOpenStageUpdate(order)}
                                >
                                  <Edit3 size={13} />
                                  <span>Advance Stage</span>
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ================= 3. TAB: QUOTATIONS & RFQ DESK ================= */}
            {activeTab === 'quotes' && (
              <div className="admin-tab-container">
                <div className="admin-tab-header">
                  <div>
                    <h2 className="admin-tab-title">Commercial Quotations & RFQ Manager</h2>
                    <p className="admin-tab-subtitle">
                      Generate official engineering quotes in Indian Rupees (INR), calculate multi-layer BOM/SMT pricing, and respond to revision requests.
                    </p>
                  </div>

                  <button 
                    className="btn-action-primary"
                    onClick={() => setIsQuoteCreatorOpen(true)}
                  >
                    <Plus size={16} />
                    <span>Create New Quotation</span>
                  </button>
                </div>

                <div className="admin-panel-card">
                  <div className="admin-table-wrapper">
                    <table className="admin-data-table">
                      <thead>
                        <tr>
                          <th>Quote ID</th>
                          <th>Target Client</th>
                          <th>Board Title</th>
                          <th>Specs</th>
                          <th>Qty & Lead Time</th>
                          <th>Itemized Total</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredQuotes.map(quote => (
                          <tr key={quote.id}>
                            <td>
                              <span className="table-order-id">{quote.id}</span>
                            </td>
                            <td>
                              <div className="table-client-name">{quote.clientName}</div>
                              <div className="table-client-sub">{quote.clientEmail}</div>
                            </td>
                            <td>
                              <div className="table-proj-name">{quote.projectName}</div>
                              <div className="table-proj-specs">{quote.serviceType}</div>
                            </td>
                            <td>
                              <span className="table-spec-tag">{quote.layerCount}</span>
                            </td>
                            <td>
                              <div>{quote.quantity} units</div>
                              <div className="table-client-sub">{quote.leadTime}</div>
                            </td>
                            <td>
                              <strong className="table-price-tag">{formatINR(quote.pricing?.total || 0)}</strong>
                            </td>
                            <td>
                              <span className={`quote-status-badge status-${quote.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                                {quote.status}
                              </span>
                            </td>
                            <td>
                              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <button 
                                  className="btn-update-stage"
                                  onClick={() => handleDownloadQuotePDF(quote)}
                                  disabled={downloadingQuoteId === quote.id}
                                  title="Download Official PDF Quotation"
                                  style={{ background: '#EFF6FF', color: '#087BFF', borderColor: '#BFDBFE' }}
                                >
                                  <Download size={13} />
                                  <span>{downloadingQuoteId === quote.id ? 'Saving...' : 'PDF'}</span>
                                </button>
                                <button 
                                  className="btn-update-stage"
                                  onClick={() => setIsQuoteCreatorOpen(true)}
                                  title="Edit Quotation Specifications"
                                >
                                  <Edit3 size={13} />
                                  <span>Edit</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ================= 4. TAB: SUPPORT TICKETS DESK ================= */}
            {activeTab === 'tickets' && (
              <div className="admin-tab-container">
                <div className="admin-tab-header">
                  <div>
                    <h2 className="admin-tab-title">Engineering Tickets & DFM Desk</h2>
                    <p className="admin-tab-subtitle">
                      Collaborate directly with client engineering teams on DFM clarifications, impedance stackups, and delivery schedules.
                    </p>
                  </div>
                </div>

                <div className="admin-panel-card">
                  <div className="admin-table-wrapper">
                    <table className="admin-data-table">
                      <thead>
                        <tr>
                          <th>Ticket ID</th>
                          <th>Client Account</th>
                          <th>Subject</th>
                          <th>Category</th>
                          <th>Priority</th>
                          <th>Status</th>
                          <th>Assigned Lead</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTickets.map(ticket => (
                          <tr key={ticket.id} className="clickable-row" onClick={() => setActiveTicketThread(ticket)}>
                            <td>
                              <span className="t-id-badge">{ticket.id}</span>
                            </td>
                            <td>
                              <div className="table-client-name">{ticket.clientName}</div>
                            </td>
                            <td>
                              <div className="table-proj-name">{ticket.subject}</div>
                            </td>
                            <td>
                              <span className="t-cat-tag">{ticket.category}</span>
                            </td>
                            <td>
                              <span className={`t-priority-tag priority-${ticket.priority?.toLowerCase()}`}>
                                {ticket.priority}
                              </span>
                            </td>
                            <td>
                              <span className={`t-status-badge status-${ticket.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                                {ticket.status}
                              </span>
                            </td>
                            <td>
                              <span className="table-client-sub">{ticket.assignedTo}</span>
                            </td>
                            <td>
                              <button className="btn-action-reply">
                                <span>Open Thread</span>
                                <ChevronRight size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ================= 5. TAB: CLIENT DIRECTORY ================= */}
            {activeTab === 'users' && (
              <div className="admin-tab-container">
                <div className="admin-tab-header">
                  <div>
                    <h2 className="admin-tab-title">Enterprise Client Directory</h2>
                    <p className="admin-tab-subtitle">
                      Complete list of verified OEM and hardware corporate accounts with historical spend in Rupees and active project statistics.
                    </p>
                  </div>
                </div>

                <div className="users-directory-grid">
                  {users.map(user => (
                    <div key={user.id} className="user-profile-card">
                      <div className="user-card-header">
                        <div className="user-avatar-box">
                          <Building2 size={24} />
                        </div>
                        <div className="user-title-info">
                          <h3 className="user-company-name">{user.company}</h3>
                          <div className="user-tier-badge">{user.tier}</div>
                        </div>
                      </div>

                      <div className="user-details-list">
                        <div className="u-row">
                          <span className="u-lbl">Contact Person:</span>
                          <span className="u-val">{user.name}</span>
                        </div>
                        <div className="u-row">
                          <span className="u-lbl">Email:</span>
                          <span className="u-val">{user.email}</span>
                        </div>
                        <div className="u-row">
                          <span className="u-lbl">Phone:</span>
                          <span className="u-val">{user.phone}</span>
                        </div>
                        <div className="u-row">
                          <span className="u-lbl">Address:</span>
                          <span className="u-val">{user.address}</span>
                        </div>
                      </div>

                      <div className="user-financials-bar">
                        <div className="fin-box">
                          <span className="fin-lbl">TOTAL SPENT</span>
                          <span className="fin-val">{formatINR(user.totalSpent)}</span>
                        </div>
                        <div className="fin-box">
                          <span className="fin-lbl">BATCH ORDERS</span>
                          <span className="fin-val">{user.ordersCount}</span>
                        </div>
                        <div className="fin-box">
                          <span className="fin-lbl">STATUS</span>
                          <span className="fin-val status-active">Verified</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= 6. TAB: FINANCIAL ANALYTICS & LTV ================= */}
            {activeTab === 'analytics' && (
              <div className="admin-tab-container">
                <div className="admin-tab-header">
                  <div>
                    <h2 className="admin-tab-title">Executive Revenue, Margins & Client Lifetime Value (LTV)</h2>
                    <p className="admin-tab-subtitle">
                      Real-time revenue telemetry in Indian Rupees (₹), gross margin distribution, and customer retention metrics.
                    </p>
                  </div>
                </div>

                {/* Top Metrics Grid */}
                <div className="admin-metrics-grid">
                  <div className="admin-stat-card">
                    <div className="stat-card-top">
                      <span className="stat-card-title">Total Platform Gross Revenue</span>
                      <div className="stat-card-icon icon-emerald">
                        <TrendingUp size={18} />
                      </div>
                    </div>
                    <div className="stat-card-value">₹84,65,000</div>
                    <div className="stat-card-trend trend-up">
                      <span>↑ 24.8% YoY growth</span>
                    </div>
                  </div>

                  <div className="admin-stat-card">
                    <div className="stat-card-top">
                      <span className="stat-card-title">Average Order Value (AOV)</span>
                      <div className="stat-card-icon icon-blue">
                        <Calculator size={18} />
                      </div>
                    </div>
                    <div className="stat-card-value">₹2,45,000</div>
                    <div className="stat-card-trend trend-up">
                      <span>↑ 12% across 32 active runs</span>
                    </div>
                  </div>

                  <div className="admin-stat-card">
                    <div className="stat-card-top">
                      <span className="stat-card-title">Repeat Client Retention</span>
                      <div className="stat-card-icon icon-purple">
                        <Sparkles size={18} />
                      </div>
                    </div>
                    <div className="stat-card-value">84.2%</div>
                    <div className="stat-card-trend trend-up">
                      <span>Zero tooling churn</span>
                    </div>
                  </div>

                  <div className="admin-stat-card">
                    <div className="stat-card-top">
                      <span className="stat-card-title">Average Gross Margin</span>
                      <div className="stat-card-icon icon-amber">
                        <Sliders size={18} />
                      </div>
                    </div>
                    <div className="stat-card-value">36.4%</div>
                    <div className="stat-card-trend trend-up">
                      <span>Balanced Turnkey & HDI</span>
                    </div>
                  </div>
                </div>

                {/* Client LTV Leaderboard Table */}
                <div className="admin-panel-card">
                  <div className="panel-card-header">
                    <div>
                      <h3 className="panel-subheading">
                        <Users size={18} />
                        <span>Client Lifetime Value (LTV) Leaderboard</span>
                      </h3>
                      <p className="panel-subtitle">Total historical spend, active volume contracts, and on-time payment track record.</p>
                    </div>
                  </div>

                  <div className="admin-table-wrapper">
                    <table className="admin-data-table">
                      <thead>
                        <tr>
                          <th>CLIENT / OEM ACCOUNT</th>
                          <th>INDUSTRY SECTOR</th>
                          <th>BATCHES RUN</th>
                          <th>HISTORICAL LTV (INR)</th>
                          <th>AVG BATCH VALUE</th>
                          <th>ON-TIME PAYMENT</th>
                          <th>TIER</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-client-name">Apex Robotics International LLC</div>
                            <div className="table-client-sub">client.engineer@apexrobotics.io</div>
                          </td>
                          <td>Autonomous Robotics & Drones</td>
                          <td>8 Runs</td>
                          <td><strong className="table-price-tag">₹34,85,000</strong></td>
                          <td>₹4,35,625</td>
                          <td><span className="pill-paid">100% On-Time</span></td>
                          <td><span className="tier-pill tier-gold">Tier 1 Strategic</span></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-client-name">CardioPulse Medical Dynamics Ltd</div>
                            <div className="table-client-sub">harper.eng@cardiopulse.com</div>
                          </td>
                          <td>Medical Devices (ISO 13485)</td>
                          <td>5 Runs</td>
                          <td><strong className="table-price-tag">₹28,40,000</strong></td>
                          <td>₹5,68,000</td>
                          <td><span className="pill-paid">100% On-Time</span></td>
                          <td><span className="tier-pill tier-blue">Medical Enterprise</span></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-client-name">QuantumCore IoT Systems Pvt Ltd</div>
                            <div className="table-client-sub">iot.leads@quantumcore.tech</div>
                          </td>
                          <td>Smart Grid & Industrial IoT</td>
                          <td>4 Runs</td>
                          <td><strong className="table-price-tag">₹12,65,000</strong></td>
                          <td>₹3,16,250</td>
                          <td><span className="pill-paid">Net-30 Compliant</span></td>
                          <td><span className="tier-pill tier-green">Growth Partner</span></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-client-name">AeroSpace Dynamics India</div>
                            <div className="table-client-sub">defense.procure@aerospaceindia.in</div>
                          </td>
                          <td>Aerospace & High-Rel Defense</td>
                          <td>2 Runs</td>
                          <td><strong className="table-price-tag">₹9,20,000</strong></td>
                          <td>₹4,60,000</td>
                          <td><span className="pill-paid">100% On-Time</span></td>
                          <td><span className="tier-pill tier-gold">Class 3 High-Rel</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ================= 7. TAB: AUDIT & COMPLIANCE LOG ================= */}
            {activeTab === 'audit' && (
              <div className="admin-tab-container">
                <div className="admin-tab-header">
                  <div>
                    <h2 className="admin-tab-title">Platform Audit Log & Digital Compliance Ledger</h2>
                    <p className="admin-tab-subtitle">
                      Immutable ISO 9001:2015 & IPC-A-610 record of all system events, stage advancements, and transactions.
                    </p>
                  </div>
                  <button className="btn-action-primary" onClick={() => setIsAuditModalOpen(true)}>
                    <Lock size={16} />
                    <span>Open Full Audit Ledger</span>
                  </button>
                </div>

                <div className="admin-panel-card">
                  <div className="admin-table-wrapper">
                    <table className="admin-data-table">
                      <thead>
                        <tr>
                          <th>EVENT ID</th>
                          <th>TIMESTAMP</th>
                          <th>ACTOR</th>
                          <th>ACTION</th>
                          <th>TARGET ENTITY</th>
                          <th>COMPLIANCE REF</th>
                          <th>VERIFICATION HASH</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(auditLogs || []).slice(0, 10).map(log => (
                          <tr key={log.id}>
                            <td>
                              <span className="table-order-id">{log.id}</span>
                            </td>
                            <td>
                              <span className="table-client-sub">{log.timestamp}</span>
                            </td>
                            <td>
                              <div className="table-client-name">{log.actor}</div>
                              <div className="table-client-sub">{log.ip}</div>
                            </td>
                            <td>
                              <span className="table-spec-tag">{log.action}</span>
                            </td>
                            <td>
                              <div className="table-proj-name">{log.entity}</div>
                              <div className="table-client-sub">{log.details}</div>
                            </td>
                            <td>
                              <span style={{ color: '#059669', fontWeight: 700, fontSize: '11px' }}>{log.compliance}</span>
                            </td>
                            <td>
                              <code style={{ fontSize: '10.5px', background: '#F8FAFC', padding: '2px 6px', borderRadius: '4px' }}>{log.hash}</code>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* ================= MODALS ================= */}

      {/* 1. Admin Quote Creator Modal */}
      {isQuoteCreatorOpen && (
        <AdminQuoteCreatorModal 
          onClose={() => setIsQuoteCreatorOpen(false)}
          onSuccess={() => {
            setActiveTab('quotes')
          }}
        />
      )}

      {/* 2. Margin Pricing Engine Modal */}
      {isMarginEstimatorOpen && (
        <AdminMarginEstimatorModal 
          onClose={() => setIsMarginEstimatorOpen(false)}
          onApplyToQuote={() => {
            setIsQuoteCreatorOpen(true)
          }}
        />
      )}

      {/* 3. Audit Log Viewer Modal */}
      {isAuditModalOpen && (
        <AuditLogViewerModal 
          onClose={() => setIsAuditModalOpen(false)}
        />
      )}

      {/* 2. Ticket Thread Modal (Admin mode) */}
      {activeTicketThread && (
        <TicketThreadModal 
          ticket={activeTicketThread}
          isAdmin={true}
          onClose={() => setActiveTicketThread(null)}
        />
      )}

      {/* 3. Update Order Stage Modal */}
      {selectedOrderForStageUpdate && (
        <div className="portal-modal-overlay" onClick={() => setSelectedOrderForStageUpdate(null)}>
          <div className="portal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="p-modal-header">
              <h2 className="p-modal-title">
                Advance PCB Production Stage ({selectedOrderForStageUpdate.id})
              </h2>
              <button className="p-modal-close" onClick={() => setSelectedOrderForStageUpdate(null)}>
                <span style={{ fontSize: '18px' }}>✕</span>
              </button>
            </div>

            <form onSubmit={handleSaveStageUpdate} className="p-modal-form">
              <div className="p-form-group">
                <label>Target Manufacturing Cell / Stage</label>
                <select value={newStageId} onChange={(e) => setNewStageId(e.target.value)}>
                  {MANUFACTURING_STAGES.map((s, idx) => (
                    <option key={s.id} value={s.id}>
                      Step {s.step}: {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-form-group">
                <label>Carrier Tracking Number / Dispatch Note</label>
                <input 
                  type="text" 
                  value={adminTrackingNumber} 
                  onChange={(e) => setAdminTrackingNumber(e.target.value)} 
                  placeholder="e.g. BLUEDART-8829104812IN"
                />
              </div>

              <div className="p-form-group">
                <label>QC Inspector Notes & Milestone Log</label>
                <textarea 
                  rows={3} 
                  value={adminStageNote} 
                  onChange={(e) => setAdminStageNote(e.target.value)} 
                  placeholder="e.g. 100% 3D AOI inspection passed. Reflow thermal profile confirmed."
                  required 
                />
              </div>

              <div className="p-modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setSelectedOrderForStageUpdate(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit-primary">
                  Update Stage & Notify Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}
