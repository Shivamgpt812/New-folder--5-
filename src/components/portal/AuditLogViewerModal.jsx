import React, { useState } from 'react'
import { 
  X, 
  ShieldCheck, 
  Search, 
  Filter, 
  Clock, 
  FileCheck, 
  User, 
  Terminal, 
  Download,
  Lock,
  CheckCircle2
} from 'lucide-react'
import { usePortalData } from '../../context/PortalDataContext'
import './AuditLogViewerModal.css'

export default function AuditLogViewerModal({ onClose }) {
  const { auditLogs } = usePortalData()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterAction, setFilterAction] = useState('all')

  const filteredLogs = (auditLogs || []).filter(log => {
    const matchesSearch = log.actor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.entity?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.id?.toLowerCase().includes(searchTerm.toLowerCase())
    if (filterAction === 'all') return matchesSearch
    return matchesSearch && log.action === filterAction
  })

  const exportAuditCSV = () => {
    const headers = 'Audit ID,Timestamp,Actor,Action,Entity,Details,Compliance Standard,IP Address,Hash\n'
    const rows = filteredLogs.map(l => 
      `"${l.id}","${l.timestamp}","${l.actor}","${l.action}","${l.entity}","${l.details.replace(/"/g, '""')}","${l.compliance}","${l.ip}","${l.hash}"`
    ).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Atronics_Compliance_Audit_Log_${Date.now()}.csv`
    a.click()
  }

  return (
    <div className="audit-modal-overlay" onClick={onClose}>
      <div className="audit-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="audit-close-btn" onClick={onClose} aria-label="Close Audit Log">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="audit-header">
          <div className="audit-badge-top">
            <Lock size={13} />
            <span>IMMUTABLE ISO 9001 / IPC-A-610 COMPLIANCE TRAIL</span>
          </div>
          <div className="header-split">
            <div>
              <h2 className="audit-title">Digital Audit Log & Compliance Ledger</h2>
              <p className="audit-subtitle">
                Cryptographically hashed audit records for all quotations, DFM validations, stage advancements, and transactions.
              </p>
            </div>

            <button type="button" className="btn-export-csv" onClick={exportAuditCSV}>
              <Download size={14} />
              <span>Export CSV Audit Ledger</span>
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="audit-filter-bar">
          <div className="search-input-wrap">
            <Search size={15} />
            <input 
              type="text" 
              placeholder="Search by actor, entity ID, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select value={filterAction} onChange={(e) => setFilterAction(e.target.value)}>
            <option value="all">All Event Actions ({auditLogs?.length || 0})</option>
            <option value="QUOTATION_GENERATED">Quotation Generated</option>
            <option value="PAYMENT_AUTHORIZED">Payment Authorized</option>
            <option value="PRODUCTION_STAGE_ADVANCED">Stage Advanced</option>
            <option value="DFM_RULE_CHECK_PASSED">DFM Check Passed</option>
            <option value="TICKET_RAISED">Ticket Raised</option>
          </select>
        </div>

        {/* Table View */}
        <div className="audit-table-wrapper">
          <table className="audit-table">
            <thead>
              <tr>
                <th>EVENT ID</th>
                <th>TIMESTAMP</th>
                <th>ACTOR / ROLE</th>
                <th>ACTION TYPE</th>
                <th>ENTITY TARGET</th>
                <th>COMPLIANCE REF</th>
                <th>VERIFIED HASH</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <span className="log-id-badge">{log.id}</span>
                  </td>
                  <td>
                    <span className="log-time">{log.timestamp}</span>
                  </td>
                  <td>
                    <div className="log-actor">{log.actor}</div>
                    <div className="log-ip">{log.ip}</div>
                  </td>
                  <td>
                    <span className={`log-action-tag action-${log.action?.toLowerCase()}`}>
                      {log.action}
                    </span>
                  </td>
                  <td>
                    <div className="log-entity">{log.entity}</div>
                    <div className="log-details">{log.details}</div>
                  </td>
                  <td>
                    <span className="log-compliance">{log.compliance}</span>
                  </td>
                  <td>
                    <code className="log-hash">{log.hash}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
