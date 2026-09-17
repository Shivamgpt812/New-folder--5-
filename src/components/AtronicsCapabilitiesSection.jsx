import React from 'react'
import CapabilitiesBadge from './CapabilitiesBadge'
import CapabilitiesIntro from './CapabilitiesIntro'
import CapabilityFeatureGrid from './CapabilityFeatureGrid'
import CapabilitiesQuote from './CapabilitiesQuote'
import CapabilitiesPCB from './CapabilitiesPCB'
import TechnicalCapabilitiesPanel from './TechnicalCapabilitiesPanel'
import CapabilitiesSupportBar from './CapabilitiesSupportBar'
import './AtronicsCapabilitiesSection.css'

const AtronicsCapabilitiesSection = () => {
  return (
    <section className="capabilities-section">
      <div className="capabilities-section__container">
        <div className="capabilities-section__main-grid">
          {/* LEFT COLUMN */}
          <div className="capabilities-section__left">
            <CapabilitiesBadge />
            <CapabilitiesIntro />
            <CapabilityFeatureGrid />
            <CapabilitiesQuote />
          </div>

          {/* CENTER COLUMN - PCB Visual */}
          <div className="capabilities-section__center">
            <CapabilitiesPCB />
          </div>

          {/* RIGHT COLUMN - Technical Table */}
          <div className="capabilities-section__right">
            <TechnicalCapabilitiesPanel />
          </div>
        </div>

        {/* BOTTOM SUPPORT BAR */}
        <CapabilitiesSupportBar />
      </div>
    </section>
  )
}

export default AtronicsCapabilitiesSection
