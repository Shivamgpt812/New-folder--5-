import React from 'react'
import { Quote } from 'lucide-react'
import './CapabilitiesQuote.css'

const CapabilitiesQuote = () => {
  return (
    <div className="capabilities-quote">
      <div className="capabilities-quote__content">
        <Quote className="capabilities-quote__icon" />
        <div className="capabilities-quote__text-wrapper">
          <p className="capabilities-quote__text">
            Engineering precision at every layer, from concept to production.
          </p>
          <p className="capabilities-quote__attribution">— ATRONICS</p>
        </div>
      </div>
    </div>
  )
}

export default CapabilitiesQuote
