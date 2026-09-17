import React from 'react'
import ServicesBadge from './ServicesBadge'
import ServiceCard from './ServiceCard'
import ExplodedPCB from './ExplodedPCB'
import PCBInfoCard from './PCBInfoCard'
import ServicesStats from './ServicesStats'
import ServicesCTA from './ServicesCTA'
import ProcessCTA from './ProcessCTA'
import { Settings, Factory, Cpu, Package, TrendingUp, Shield, Zap } from 'lucide-react'
import './AtronicsServicesSection.css'

const AtronicsServicesSection = () => {
  const services = [
    {
      icon: <Settings />,
      iconBg: 'rgba(230, 242, 255, 0.9)',
      iconColor: '#087BFF',
      accentColor: '#087BFF',
      title: 'PCB Design',
      description: 'Schematic, layout, signal integrity & DFM optimization.'
    },
    {
      icon: <Factory />,
      iconBg: 'rgba(228, 248, 242, 0.9)',
      iconColor: '#18B889',
      accentColor: '#18B889',
      title: 'PCB Fabrication',
      description: 'High-quality, scalable manufacturing with global standards.'
    },
    {
      icon: <Cpu />,
      iconBg: 'rgba(240, 235, 250, 0.9)',
      iconColor: '#7B35E8',
      accentColor: '#7B35E8',
      title: 'PCB Assembly',
      description: 'Turnkey assembly, BGA/QFN, functional testing and more.'
    },
    {
      icon: <Package />,
      iconBg: 'rgba(255, 240, 230, 0.9)',
      iconColor: '#FF7800',
      accentColor: '#FF7800',
      title: 'Component Sourcing',
      description: 'Original components, cost optimization and global supply network.'
    }
  ]

  return (
    <section className="services-section">
      {/* Background shapes */}
      <div className="services-bg-shape services-bg-shape-1"></div>
      <div className="services-bg-shape services-bg-shape-2"></div>
      <div className="services-bg-pattern"></div>
      
      <div className="services-container">
        <div className="services-main">
          {/* Left content */}
          <div className="services-left">
            <ServicesBadge />
            
            <h2 className="services-heading">
              End-to-End<br />
              <span className="services-heading-blue">PCB</span> Solutions
            </h2>
            
            <p className="services-description">
              From concept to mass production, we provide reliable, high-performance
              PCB design and manufacturing services tailored to your industry needs.
            </p>
            
            <div className="services-cards">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 0.1} />
              ))}
            </div>
          </div>
          
          {/* Right PCB visual */}
          <div className="services-right">
            <ExplodedPCB />
            
            {/* Floating info cards */}
            <PCBInfoCard
              icon={<TrendingUp />}
              title="Higher Performance"
              description="Optimized for real-world impact"
              position="1"
            />
            
            <PCBInfoCard
              icon={<Shield />}
              title="Reliable Manufacturing"
              description="Quality you can trust"
              position="2"
            />
            
            <PCBInfoCard
              icon={<Zap />}
              title="Faster Time to Market"
              description="From prototype to production"
              position="3"
            />
          </div>
        </div>
        
        {/* Bottom stats/CTA bar */}
        <div className="services-bottom-bar">
          <ServicesStats />
          
          <div className="services-bottom-right">
            <ServicesCTA />
            <ProcessCTA />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AtronicsServicesSection
