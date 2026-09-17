import React from 'react'
import { 
  Layout, 
  Cpu, 
  Wrench, 
  Package, 
  Zap, 
  Radio, 
  BatteryCharging, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react'
import { useQuote } from '../context/QuoteContext'
import './AboutWhatWeDo.css'

function AboutWhatWeDo() {
  const { openQuoteModal } = useQuote()

  const capabilities = [
    {
      icon: Layout,
      tag: 'DESIGN & CAD',
      title: 'High-Speed & Multi-Layer PCB',
      description: 'Controlled impedance, blind/buried microvias, high-density interconnect (HDI) & flex circuits.',
      serviceName: 'High-Speed / RF Layout'
    },
    {
      icon: Cpu,
      tag: 'FABRICATION',
      title: 'Precision Board Fabrication',
      description: '2 to 16+ layer rapid turn & volume production using standard FR4, Rogers, and polyimide flex.',
      serviceName: 'Multi-Layer Fabrication'
    },
    {
      icon: Wrench,
      tag: 'ASSEMBLY',
      title: 'Automated SMT & THT Assembly',
      description: 'High-speed automated pick-and-place lines supporting 0201 passives, 0.4mm pitch BGA & Box Build.',
      serviceName: 'Turnkey PCB Assembly'
    },
    {
      icon: Package,
      tag: 'SUPPLY CHAIN',
      title: 'BOM Sourcing & Optimization',
      description: '100% traceable franchised supply chains, alternate sourcing, and lifecycle obsolescence management.',
      serviceName: 'Turnkey PCB Assembly'
    },
    {
      icon: Zap,
      tag: 'EMBEDDED',
      title: 'Embedded Hardware & Firmware',
      description: 'Microcontroller architecture (ARM Cortex, STM32, ESP32), RTOS integration, and IoT sensor nodes.',
      serviceName: 'Box Build & Testing'
    },
    {
      icon: Radio,
      tag: 'WIRELESS',
      title: 'RF & High-Frequency Systems',
      description: 'Antenna matching, wireless protocol integration (BLE, Wi-Fi, LoRa, Cellular) & EMI compliance.',
      serviceName: 'High-Speed / RF Layout'
    },
    {
      icon: BatteryCharging,
      tag: 'POWER',
      title: 'Power Electronics & BMS',
      description: 'High-efficiency buck/boost converters, battery management, thermal simulation, and inverter circuits.',
      serviceName: 'High-Speed / RF Layout'
    },
    {
      icon: ShieldCheck,
      tag: 'VALIDATION',
      title: 'Testing, AOI & IPC QA',
      description: 'Automated optical inspection (AOI), 3D X-Ray, flying probe, and IPC-A-610 Class 3 inspection.',
      serviceName: 'Box Build & Testing'
    }
  ]

  return (
    <section className="about-what-section" id="capabilities">
      <div className="what-bg-pattern"></div>

      <div className="what-container">
        
        {/* Header Block */}
        <div className="what-header">
          <div className="what-section-badge">
            <span className="what-badge-line"></span>
            <span className="what-badge-text">WHAT WE DO</span>
          </div>
          
          <h2 className="what-main-heading">
            Complete Electronics<br />
            <span className="what-heading-accent">Engineering Capabilities</span>
          </h2>

          <div className="what-handwritten-note">
            <span>End-to-end hardware development lifecycle</span>
            <svg width="140" height="12" viewBox="0 0 140 12" fill="none">
              <path d="M2 9.5C40 2 100 2 138 9.5" stroke="#087BFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="what-header-desc">
            From initial schematic design to high-volume PCB manufacturing and turnkey box builds, ATRONICS provides complete, precision-engineered solutions under one roof.
          </p>
        </div>

        {/* Capabilities Grid (4x2 on desktop) */}
        <div className="what-cards-grid">
          {capabilities.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div 
                key={index} 
                className="what-cap-card"
                onClick={() => openQuoteModal(item.serviceName)}
                role="button"
                tabIndex={0}
              >
                <div className="what-card-top-row">
                  <div className="what-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <span className="what-tag-pill">{item.tag}</span>
                </div>

                <div className="what-card-body">
                  <h3 className="what-card-title">{item.title}</h3>
                  <p className="what-card-desc">{item.description}</p>
                </div>

                <div className="what-card-footer">
                  <span className="what-link-text">Inquire Capabilities</span>
                  <ChevronRight size={15} className="what-arrow-icon" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AboutWhatWeDo
