import React from 'react'
import { FileText, Users, Globe, Package } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import './ServicesStats.css'

const ServicesStats = () => {
  const stats = [
    { icon: <FileText size={18} />, number: '500+', label: 'Projects Delivered' },
    { icon: <Users size={18} />, number: '99%', label: 'On-Time Delivery' },
    { icon: <Globe size={18} />, number: '50+', label: 'Global Clients' },
    { icon: <Package size={18} />, number: '10+', label: 'Industries Served' }
  ]

  return (
    <div className="services-stats">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="services-stats-separator" />}
          <div className="services-stat">
            <div className="services-stat-icon">
              {stat.icon}
            </div>
            <div className="services-stat-content">
              <div className="services-stat-number">
                <AnimatedCounter value={stat.number} duration={1800} />
              </div>
              <div className="services-stat-label">{stat.label}</div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default ServicesStats
