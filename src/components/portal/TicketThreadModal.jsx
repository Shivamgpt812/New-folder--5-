import React, { useState } from 'react'
import { 
  X, 
  Send, 
  Paperclip, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  User, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Tag
} from 'lucide-react'
import { usePortalData } from '../../context/PortalDataContext'
import './TicketThreadModal.css'

export default function TicketThreadModal({ ticket, onClose, isAdmin = false }) {
  const { replyToTicket, updateTicketStatus } = usePortalData()
  const [replyText, setReplyText] = useState('')
  const [ticketStatus, setTicketStatus] = useState(ticket?.status || 'Open')
  const [ticketPriority, setTicketPriority] = useState(ticket?.priority || 'Medium')

  if (!ticket) return null

  const handleSendReply = (e) => {
    e.preventDefault()
    if (!replyText.trim()) return

    replyToTicket(ticket.id, {
      text: replyText.trim(),
      sender: isAdmin ? 'admin' : 'user',
      senderName: isAdmin ? 'Sarah Chen (Lead DFM Engineer)' : 'Apex Robotics Engineer',
      attachments: []
    })
    setReplyText('')
  }

  const handleStatusChange = (newStatus) => {
    setTicketStatus(newStatus)
    updateTicketStatus(ticket.id, newStatus, ticketPriority)
  }

  const handlePriorityChange = (newPriority) => {
    setTicketPriority(newPriority)
    updateTicketStatus(ticket.id, ticketStatus, newPriority)
  }

  return (
    <div className="ticket-modal-overlay" onClick={onClose}>
      <div className="ticket-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="ticket-close-btn" onClick={onClose} aria-label="Close Ticket Thread">
          <X size={20} />
        </button>

        {/* Top Header */}
        <div className="ticket-modal-header">
          <div className="ticket-header-top-row">
            <span className="ticket-id-badge">{ticket.id}</span>
            <span className="ticket-category-tag">{ticket.category}</span>
            <span className={`ticket-priority-pill priority-${ticket.priority?.toLowerCase()}`}>
              {ticket.priority} Priority
            </span>
            <span className={`ticket-status-pill status-${ticket.status?.toLowerCase().replace(/\s+/g, '-')}`}>
              {ticket.status}
            </span>
          </div>

          <h2 className="ticket-subject-title">{ticket.subject}</h2>

          <div className="ticket-meta-bar">
            <div className="meta-item">
              <span className="lbl">Client:</span>
              <span className="val">{ticket.clientName}</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Related Ref:</span>
              <span className="val">{ticket.relatedOrderId}</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Assigned:</span>
              <span className="val">{ticket.assignedTo || 'ATRONICS Engineering Desk'}</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Opened:</span>
              <span className="val">{ticket.createdDate}</span>
            </div>
          </div>
        </div>

        {/* Admin Quick Controls */}
        {isAdmin && (
          <div className="admin-ticket-controls">
            <div className="admin-ctrl-group">
              <label>Update Status:</label>
              <select value={ticketStatus} onChange={(e) => handleStatusChange(e.target.value)}>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Awaiting Client">Awaiting Client</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            <div className="admin-ctrl-group">
              <label>Priority:</label>
              <select value={ticketPriority} onChange={(e) => handlePriorityChange(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>
        )}

        {/* Conversation Messages Stream */}
        <div className="ticket-messages-stream">
          {ticket.messages && ticket.messages.map((msg, idx) => {
            const isUserMsg = msg.sender === 'user'

            return (
              <div 
                key={msg.id || idx} 
                className={`message-bubble-row ${isUserMsg ? 'from-user' : 'from-admin'}`}
              >
                <div className="message-avatar">
                  {isUserMsg ? <User size={16} /> : <ShieldCheck size={16} />}
                </div>

                <div className="message-content-wrapper">
                  <div className="message-header-line">
                    <span className="msg-sender-name">{msg.senderName}</span>
                    <span className="msg-role-tag">{isUserMsg ? 'Client' : 'ATRONICS Engineer'}</span>
                    <span className="msg-time">{msg.timestamp}</span>
                  </div>

                  <div className="message-body-text">
                    {msg.text}
                  </div>

                  {msg.attachments && msg.attachments.length > 0 && (
                    <div className="message-attachments-list">
                      {msg.attachments.map((att, attIdx) => (
                        <div key={attIdx} className="att-pill">
                          <FileText size={13} />
                          <span>{att}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Reply Box */}
        <form onSubmit={handleSendReply} className="ticket-reply-form">
          <div className="reply-input-box">
            <textarea
              placeholder={isAdmin ? "Type your engineering response to the client..." : "Type your question or clarification for the engineering team..."}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={3}
              required
            ></textarea>

            <div className="reply-actions-bar">
              <button type="button" className="btn-attach" title="Attach file">
                <Paperclip size={16} />
                <span>Attach Files</span>
              </button>

              <button type="submit" className="btn-send-reply">
                <span>Send Response</span>
                <Send size={15} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
