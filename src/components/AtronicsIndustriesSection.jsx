import React from 'react'
import { Factory, Activity, Wifi, Zap } from 'lucide-react'
import IndustriesBadge from './IndustriesBadge'
import IndustryIntro from './IndustryIntro'
import IndustryCTA from './IndustryCTA'
import IndustryStatsBar from './IndustryStatsBar'
import './AtronicsIndustriesSection.css'

const mobileIndustries = [
  {
    icon: Factory,
    title: "Industrial Automation",
    subtitle: "Smart factories & robotics"
  },
  {
    icon: Activity,
    title: "Medical Devices",
    subtitle: "Life-critical precision"
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    subtitle: "Connected smart hardware"
  },
  {
    icon: Zap,
    title: "Power Electronics",
    subtitle: "High-efficiency systems"
  }
]

const AtronicsIndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="industries-section__container">
        <div className="industries-section__content">
          <IndustriesBadge />
          <IndustryIntro />
          
          {/* Mobile Industry Cards - Visible only on mobile/tablet */}
          <div className="mobile-industries-grid">
            {mobileIndustries.map((item, index) => {
              const IconComp = item.icon
              return (
                <div key={index} className="mobile-industry-card">
                  <div className="mobile-industry-card__icon-box">
                    <IconComp size={18} />
                  </div>
                  <div className="mobile-industry-card__info">
                    <div className="mobile-industry-card__title">{item.title}</div>
                    <div className="mobile-industry-card__subtitle">{item.subtitle}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <IndustryCTA />
        </div>
      </div>
      <IndustryStatsBar />
    </section>
  )
}

export default AtronicsIndustriesSection
