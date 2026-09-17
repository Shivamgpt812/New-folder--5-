import React from 'react'
import { Layers, Gauge, Radio, Settings } from 'lucide-react'
import './CapabilityFeatureGrid.css'

const capabilities = [
  {
    icon: Layers,
    title: '2–16 Layers',
    description: 'Rigid, Flex & Rigid-Flex'
  },
  {
    icon: Gauge,
    title: 'High-Speed Design',
    description: 'DDR, PCIe, USB, HDMI'
  },
  {
    icon: Radio,
    title: 'RF & Microwave',
    description: 'High-frequency solutions'
  },
  {
    icon: Settings,
    title: 'DFM Optimization',
    description: 'Higher yield, lower cost'
  }
]

const CapabilityFeatureGrid = () => {
  return (
    <div className="capability-feature-grid">
      {capabilities.map((capability, index) => (
        <div key={index} className="capability-feature">
          <div className="capability-feature__icon-container">
            <capability.icon className="capability-feature__icon" />
          </div>
          <div className="capability-feature__content">
            <h3 className="capability-feature__title">{capability.title}</h3>
            <p className="capability-feature__subtitle">{capability.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CapabilityFeatureGrid
