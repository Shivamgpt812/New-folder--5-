import React from 'react'
import ManufacturingBadge from './ManufacturingBadge'
import ManufacturingIntro from './ManufacturingIntro'
import ManufacturingFeatures from './ManufacturingFeatures'
import ManufacturingCTA from './ManufacturingCTA'
import ManufacturingVisual from './ManufacturingVisual'
import ManufacturingStatsBar from './ManufacturingStatsBar'
import './AtronicsManufacturingSection.css'

const AtronicsManufacturingSection = () => {
  return (
    <section className="manufacturing-section">
      <div className="manufacturing-section__container">
        <div className="manufacturing-main">
          {/* LEFT CONTENT */}
          <div className="manufacturing-content">
            <ManufacturingBadge />
            <ManufacturingIntro />
            <ManufacturingFeatures />
            <ManufacturingCTA />
          </div>

          {/* RIGHT VISUAL */}
          <ManufacturingVisual />
        </div>

        {/* BOTTOM STATISTICS BAR */}
        <ManufacturingStatsBar />
      </div>
    </section>
  )
}

export default AtronicsManufacturingSection
