import React from 'react'
import { Network, Package, TrendingUp, Globe } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import './IndustryStatsBar.css'

const industryStats = [
  {
    icon: Network,
    value: "50+",
    label: "Industries Served"
  },
  {
    icon: Package,
    value: "500+",
    label: "Projects Delivered"
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "On-Time Delivery"
  },
  {
    icon: Globe,
    value: "Global",
    label: "Client Network"
  }
]

const IndustryStatsBar = () => {
  return (
    <div className="industry-stats-bar">
      <div className="industry-stats-bar__container">
        <div className="industry-stats-bar__stats">
          {industryStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <React.Fragment key={index}>
                {index > 0 && <div className="industry-stats-bar__separator"></div>}
                <div className="industry-stats-bar__stat">
                  <div className="industry-stats-bar__icon">
                    <IconComponent size={20} strokeWidth={2} />
                  </div>
                  <div className="industry-stats-bar__content">
                    <div className="industry-stats-bar__value">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="industry-stats-bar__label">{stat.label}</div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
        <div className="industry-stats-bar__message">
          <div className="industry-stats-bar__message-line"></div>
          <div className="industry-stats-bar__message-text">
            BUILT FOR<br />A SMARTER TOMORROW
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryStatsBar
