import React from 'react'
import { Factory, Box, Settings, Globe } from 'lucide-react'
import ManufacturingStat from './ManufacturingStat'
import './ManufacturingStatsBar.css'

const manufacturingStats = [
  {
    icon: Factory,
    value: "99.8%",
    label: "Production Yield"
  },
  {
    icon: Box,
    value: "2–4 Weeks",
    label: "Typical Lead Time"
  },
  {
    icon: Settings,
    value: "100%",
    label: "Tested & Inspected"
  },
  {
    icon: Globe,
    value: "Global",
    label: "Supply Chain Support"
  }
]

const ManufacturingStatsBar = () => {
  return (
    <div className="manufacturing-stats-bar">
      <div className="manufacturing-stats-bar__content">
        <div className="manufacturing-stats-bar__stats">
          {manufacturingStats.map((stat, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="manufacturing-stats-bar__separator" />}
              <ManufacturingStat {...stat} />
            </React.Fragment>
          ))}
        </div>
        
        <div className="manufacturing-stats-bar__message">
          <div className="manufacturing-stats-bar__message-line"></div>
          <div className="manufacturing-stats-bar__message-text">
            <span>MANUFACTURING</span>
            <span>A SMARTER TOMORROW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufacturingStatsBar
