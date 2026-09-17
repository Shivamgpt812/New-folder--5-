import React from 'react'
import { Cpu, Shield, Globe, Headphones } from 'lucide-react'
import SupportFeature from './SupportFeature'
import CapabilitiesCTA from './CapabilitiesCTA'
import './CapabilitiesSupportBar.css'

const supportFeatures = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    subtitle: 'Latest tools & processes'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    subtitle: 'IPC standards compliant'
  },
  {
    icon: Globe,
    title: 'Global Support',
    subtitle: 'From prototype to mass production'
  },
  {
    icon: Headphones,
    title: 'Expert Engineering',
    subtitle: 'Dedicated technical support'
  }
]

const CapabilitiesSupportBar = () => {
  return (
    <div className="capabilities-support-bar">
      <div className="capabilities-support-bar__features">
        {supportFeatures.map((feature, index) => (
          <React.Fragment key={index}>
            <SupportFeature
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
            />
            {index < supportFeatures.length - 1 && (
              <div className="capabilities-support-bar__separator"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="capabilities-support-bar__cta">
        <CapabilitiesCTA />
      </div>
    </div>
  )
}

export default CapabilitiesSupportBar
