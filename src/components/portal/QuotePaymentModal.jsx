import React, { useState } from 'react'
import { 
  X, 
  CreditCard, 
  Building, 
  FileText, 
  QrCode, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  Layers,
  Sparkles,
  AlertCircle
} from 'lucide-react'
import { usePortalData, formatINR } from '../../context/PortalDataContext'
import { generateQuotationPDF } from '../../utils/quotationPdfGenerator'
import './QuotePaymentModal.css'

export default function QuotePaymentModal({ quote, onClose, onSuccess }) {
  const { processPayment } = usePortalData()
  const [paymentMethod, setPaymentMethod] = useState('upi') // 'upi', 'card', 'wire', 'po'
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [createdOrder, setCreatedOrder] = useState(null)

  // Form fields
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242')
  const [cardExpiry, setCardExpiry] = useState('08/29')
  const [cardCvc, setCardCvc] = useState('892')
  const [cardName, setCardName] = useState('Apex Robotics Procurement')

  const [poNumber, setPoNumber] = useState('PO-APEX-2026-991')
  const [vpaId, setVpaId] = useState('apexrobotics@okaxis')

  if (!quote) return null

  const totalAmount = quote.pricing?.total || quote.amount || 120000.00

  const handlePay = (e) => {
    e.preventDefault()
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      const methodName = paymentMethod === 'upi'
        ? `UPI Fast Pay (${vpaId})`
        : paymentMethod === 'card' 
        ? 'Credit / Debit Card'
        : paymentMethod === 'wire'
        ? 'Bank Wire / RTGS / NEFT'
        : `Purchase Order (${poNumber})`

      const order = processPayment(quote, methodName, {
        cardName,
        poNumber,
        vpaId,
        date: new Date().toISOString()
      })
      setCreatedOrder(order)
      setIsCompleted(true)
      if (onSuccess) onSuccess(order)
    }, 1200)
  }

  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

  const printInvoice = async () => {
    setIsGeneratingPdf(true)
    await generateQuotationPDF(quote)
    setIsGeneratingPdf(false)
  }

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div className="payment-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="payment-close-btn" onClick={onClose} aria-label="Close Payment Modal">
          <X size={20} />
        </button>

        {!isCompleted ? (
          <div className="payment-modal-content">
            {/* Header */}
            <div className="payment-modal-header">
              <div className="payment-badge-secure">
                <Lock size={13} />
                <span>256-BIT ENCRYPTED PAYMENT GATEWAY</span>
              </div>
              <h2 className="payment-title">Complete Payment & Start Production</h2>
              <p className="payment-subtitle">
                Authorize fabrication for <strong>{quote.projectName}</strong> ({quote.id})
              </p>
            </div>

            <div className="payment-body-grid">
              {/* Left: Summary Breakdown */}
              <div className="payment-summary-column">
                <div className="summary-box">
                  <div className="summary-box-title">ORDER COST SUMMARY (INR)</div>
                  
                  <div className="summary-spec-row">
                    <span className="spec-lbl">Category:</span>
                    <span className="spec-val">{quote.serviceType || quote.category || 'PCB Manufacturing'}</span>
                  </div>
                  <div className="summary-spec-row">
                    <span className="spec-lbl">Layer Count:</span>
                    <span className="spec-val">{quote.layerCount}</span>
                  </div>
                  <div className="summary-spec-row">
                    <span className="spec-lbl">Quantity:</span>
                    <span className="spec-val">{quote.quantity} units</span>
                  </div>
                  <div className="summary-spec-row">
                    <span className="spec-lbl">Lead Time:</span>
                    <span className="spec-val">{quote.leadTime || '5-7 Days'}</span>
                  </div>

                  <div className="summary-divider"></div>

                  {quote.pricing && (
                    <div className="pricing-items-list">
                      <div className="price-line">
                        <span>PCB Fabrication</span>
                        <span>{formatINR(quote.pricing.fabrication)}</span>
                      </div>
                      {quote.pricing.smtAssembly > 0 && (
                        <div className="price-line">
                          <span>SMT Assembly</span>
                          <span>{formatINR(quote.pricing.smtAssembly)}</span>
                        </div>
                      )}
                      {quote.pricing.bomComponents > 0 && (
                        <div className="price-line">
                          <span>BOM Sourcing</span>
                          <span>{formatINR(quote.pricing.bomComponents)}</span>
                        </div>
                      )}
                      <div className="price-line">
                        <span>NRE & Stencil Tooling</span>
                        <span>{formatINR(quote.pricing.toolingNRE)}</span>
                      </div>
                      <div className="price-line">
                        <span>Express Courier Shipping</span>
                        <span>{formatINR(quote.pricing.shipping)}</span>
                      </div>
                      {quote.pricing.discount > 0 && (
                        <div className="price-line price-discount">
                          <span>Volume Discount</span>
                          <span>-{formatINR(quote.pricing.discount)}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="summary-total-row">
                    <span className="total-label">TOTAL PAYABLE:</span>
                    <span className="total-amount">{formatINR(totalAmount)}</span>
                  </div>

                  <button type="button" className="btn-download-proforma" onClick={printInvoice} disabled={isGeneratingPdf}>
                    <Download size={14} />
                    <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download Pro-Forma Invoice (INR)'}</span>
                  </button>
                </div>
              </div>

              {/* Right: Payment Method Selector & Form */}
              <div className="payment-form-column">
                <div className="method-tabs-row">
                  <button 
                    type="button" 
                    className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <QrCode size={16} />
                    <span>UPI / QR</span>
                  </button>

                  <button 
                    type="button" 
                    className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <CreditCard size={16} />
                    <span>Card</span>
                  </button>

                  <button 
                    type="button" 
                    className={`method-tab ${paymentMethod === 'wire' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('wire')}
                  >
                    <Building size={16} />
                    <span>NEFT / RTGS</span>
                  </button>

                  <button 
                    type="button" 
                    className={`method-tab ${paymentMethod === 'po' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('po')}
                  >
                    <FileText size={16} />
                    <span>Net-30 PO</span>
                  </button>
                </div>

                <form onSubmit={handlePay} className="payment-active-form">
                  {paymentMethod === 'upi' && (
                    <div className="upi-content-box">
                      <div className="qr-box-mock">
                        <QrCode size={110} />
                        <span className="qr-scan-hint">Scan with GPay, PhonePe, Paytm, BHIM or any Banking App</span>
                      </div>
                      <div className="form-group" style={{ marginTop: '12px' }}>
                        <label>Virtual Payment Address (VPA / UPI ID)</label>
                        <input 
                          type="text" 
                          value={vpaId} 
                          onChange={(e) => setVpaId(e.target.value)} 
                          placeholder="company@upi" 
                          required 
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="form-fields-stack">
                      <div className="form-group">
                        <label>Name on Card</label>
                        <input 
                          type="text" 
                          value={cardName} 
                          onChange={(e) => setCardName(e.target.value)} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label>Card Number</label>
                        <input 
                          type="text" 
                          value={cardNumber} 
                          onChange={(e) => setCardNumber(e.target.value)} 
                          required 
                        />
                      </div>
                      <div className="form-row-2">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input 
                            type="text" 
                            value={cardExpiry} 
                            onChange={(e) => setCardExpiry(e.target.value)} 
                            placeholder="MM/YY" 
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>CVV</label>
                          <input 
                            type="text" 
                            value={cardCvc} 
                            onChange={(e) => setCardCvc(e.target.value)} 
                            placeholder="CVV" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'wire' && (
                    <div className="wire-instructions-card">
                      <div className="wire-title">Direct RTGS / NEFT / IMPS Bank Transfer</div>
                      <div className="wire-details-grid">
                        <div className="wire-row">
                          <span className="w-lbl">Bank Name:</span>
                          <span className="w-val">HDFC Bank Ltd (Corporate Banking)</span>
                        </div>
                        <div className="wire-row">
                          <span className="w-lbl">Account Name:</span>
                          <span className="w-val">ATRONICS Electronics Technologies Pvt Ltd</span>
                        </div>
                        <div className="wire-row">
                          <span className="w-lbl">Account Number:</span>
                          <span className="w-val">50200088991234</span>
                        </div>
                        <div className="wire-row">
                          <span className="w-lbl">IFSC Code:</span>
                          <span className="w-val">HDFC0000240</span>
                        </div>
                        <div className="wire-row">
                          <span className="w-lbl">Branch:</span>
                          <span className="w-val">Koramangala Industrial Area, Bengaluru</span>
                        </div>
                        <div className="wire-row">
                          <span className="w-lbl">Payment Reference:</span>
                          <span className="w-val ref-highlight">{quote.id}</span>
                        </div>
                      </div>
                      <p className="wire-hint">
                        Production commences immediately upon payment reference verification.
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'po' && (
                    <div className="form-fields-stack">
                      <div className="form-group">
                        <label>Corporate Purchase Order (PO) Number</label>
                        <input 
                          type="text" 
                          value={poNumber} 
                          onChange={(e) => setPoNumber(e.target.value)} 
                          placeholder="e.g. PO-2026-8841" 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label>Attach Signed PO Document (PDF / DOCX)</label>
                        <div className="po-upload-box">
                          <FileText size={28} className="upload-icon" />
                          <div className="upload-text">
                            <span>Drag & drop signed PO file or click to browse</span>
                            <span className="upload-note">Pre-approved for Enterprise Net-30 accounts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="payment-security-note">
                    <ShieldCheck size={16} />
                    <span>GST Tax Invoice with Input Tax Credit (ITC) eligibility included.</span>
                  </div>

                  <button 
                    type="submit" 
                    className="payment-submit-btn" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <span>Verifying & Queuing Fabrication...</span>
                    ) : (
                      <>
                        <span>PAY {formatINR(totalAmount)} & START FABRICATION</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* Payment Success Confirmation */
          <div className="payment-success-card">
            <div className="success-icon-circle">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="success-heading">Payment Confirmed!</h2>
            <p className="success-subtext">
              Your PCB project <strong>{createdOrder?.projectName}</strong> has been transferred directly into the automated CAM & DFM fabrication pipeline.
            </p>

            <div className="success-order-box">
              <div className="s-row">
                <span className="s-lbl">Manufacturing Order ID:</span>
                <span className="s-val highlight-order">{createdOrder?.id}</span>
              </div>
              <div className="s-row">
                <span className="s-lbl">Amount Paid:</span>
                <span className="s-val">{formatINR(totalAmount)}</span>
              </div>
              <div className="s-row">
                <span className="s-lbl">Estimated Dispatch Date:</span>
                <span className="s-val">{createdOrder?.estimatedDelivery}</span>
              </div>
              <div className="s-row">
                <span className="s-lbl">Status:</span>
                <span className="s-val badge-production">Live in CAM Queue</span>
              </div>
            </div>

            <div className="success-actions-row">
              <button className="btn-view-tracker" onClick={onClose}>
                <span>Track PCB in Live Pipeline</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
