import React from 'react'
import { Zap, Layers, Cpu, Settings } from 'lucide-react'
import './FeatureHighlights.css'

const features = [
  {
    icon: <Zap size={20} />,
    title: 'High-Speed',
    subtitle: 'Design'
  },
  {
    icon: <Layers size={20} />,
    title: 'Multilayer',
    subtitle: 'PCBs'
  },
  {
    icon: <Cpu size={20} />,
    title: 'RF & Power',
    subtitle: 'Electronics'
  },
  {
    icon: <Settings size={20} />,
    title: 'Embedded',
    subtitle: 'Systems'
  }
]

const FeatureHighlights = () => {
  return (
    <div className="feature-highlights">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-icon">
            {feature.icon}
          </div>
          <div className="feature-text">
            <div className="feature-title">{feature.title}</div>
            <div className="feature-subtitle">{feature.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureHighlights
