import React, { useState } from 'react'
import { ChevronDown, HelpCircle, FileCheck, Shield, Clock, Layers } from 'lucide-react'
import './ContactFAQ.css'

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What file formats are required for an engineering review & DFM quote?',
      answer: 'We recommend submitting standard Gerber RS-274X or ODB++ archives along with NC Excellon drill files, IPC-D-356 netlist, and a structured Excel/CSV Bill of Materials (BOM) with manufacturer part numbers (MPNs). We also accept native KiCad, Altium Designer, and Eagle project files.'
    },
    {
      question: 'How quickly will I receive my initial DFM assessment and formal quotation?',
      answer: 'Our dedicated DFM engineering team guarantees an initial technical review and comprehensive price breakdown within 24 business hours. For complex high-layer count (10+ layers) or custom impedance-controlled stackups, we may schedule a brief technical alignment call.'
    },
    {
      question: 'Is our intellectual property and proprietary schematic protected under NDA?',
      answer: 'Absolutely. We treat all client Gerber packages, schematics, firmware, and mechanical enclosures with bank-grade confidentiality. We are happy to execute your corporate NDA or provide our standard mutual NDA before file transmission.'
    },
    {
      question: 'Can ATRONICS assist with hard-to-find components and active BOM optimization?',
      answer: 'Yes. Our sourcing engineers integrate directly with authorized global distributor APIs (DigiKey, Mouser, Arrow, Future) to monitor real-time stock, find drop-in replacements for obsolete or long-lead ICs, and optimize unit manufacturing costs.'
    },
    {
      question: 'What are typical lead times for rapid prototype PCB assembly?',
      answer: 'Quick-turn bare PCB fabrication can be completed in as fast as 24 to 48 hours. Turnkey SMT assembly with sourced components typically takes 3 to 7 business days depending on BOM complexity and testing requirements.'
    }
  ]

  const toggleAccordion = (idx) => {
    setOpenIndex(prev => prev === idx ? -1 : idx)
  }

  return (
    <section className="contact-faq-section">
      <div className="contact-faq-container">
        
        {/* Header */}
        <div className="contact-faq-header">
          <div className="contact-faq-badge">
            <span className="contact-badge-line"></span>
            <span className="contact-badge-text">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="contact-faq-title">
            Everything You Need to Know <span className="contact-title-accent">Before Submitting</span>
          </h2>
          <p className="contact-faq-subtitle">
            Common questions regarding quotation turnaround, technical package formats, NDA security, and turnkey assembly timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="contact-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question-row">
                  <div className="faq-question-left">
                    <span className="faq-num">0{index + 1}</span>
                    <h3 className="faq-question-text">{faq.question}</h3>
                  </div>
                  <button className="faq-toggle-btn" aria-label="Toggle answer">
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                </div>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ContactFAQ
