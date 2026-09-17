import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import './HeroStats.css'

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '99%', label: 'On-Time Delivery' },
  { value: '50+', label: 'Global Clients' },
  { value: '10+', label: 'Industries Served' }
]

const HeroStats = () => {
  return (
    <div className="hero-stats">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="stat-item">
            <div className="stat-value">
              <AnimatedCounter value={stat.value} duration={1800} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
          {index < stats.length - 1 && <div className="stat-divider" />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default HeroStats
