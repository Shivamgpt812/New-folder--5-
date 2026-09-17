import React from 'react'
import { Settings, Clock, ShieldCheck } from 'lucide-react'
import ManufacturingFeature from './ManufacturingFeature'
import './ManufacturingFeatures.css'

const manufacturingFeatures = [
  {
    icon: Settings,
    title: "High Precision",
    description: "Advanced equipment & process control"
  },
  {
    icon: Clock,
    title: "Faster Turnaround",
    description: "From prototype to volume production"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous testing at every stage"
  }
]

const ManufacturingFeatures = () => {
  return (
    <div className="manufacturing-features">
      {manufacturingFeatures.map((feature, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="manufacturing-features__separator" />}
          <ManufacturingFeature {...feature} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default ManufacturingFeatures
