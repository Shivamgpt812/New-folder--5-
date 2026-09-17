import React from 'react'
import { Settings, Zap, ShieldCheck } from 'lucide-react'
import './IndustryHighlights.css'

const industryHighlights = [
  {
    icon: Settings,
    title: "Custom",
    subtitle: "Solutions",
    description: "Tailored to industry needs"
  },
  {
    icon: Zap,
    title: "Faster",
    subtitle: "Time to Market",
    description: "From concept to production"
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    subtitle: "& Scalable",
    description: "Built for real world performance"
  }
]

const IndustryHighlights = () => {
  return (
    <div className="industry-highlights">
      {industryHighlights.map((highlight, index) => {
        const IconComponent = highlight.icon
        return (
          <React.Fragment key={index}>
            {index > 0 && <div className="industry-highlights__separator"></div>}
            <div className="industry-highlights__item">
              <div className="industry-highlights__icon">
                <IconComponent size={20} strokeWidth={2} />
              </div>
              <div className="industry-highlights__content">
                <div className="industry-highlights__title">
                  {highlight.title}
                </div>
                <div className="industry-highlights__subtitle">
                  {highlight.subtitle}
                </div>
                <div className="industry-highlights__description">
                  {highlight.description}
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default IndustryHighlights
