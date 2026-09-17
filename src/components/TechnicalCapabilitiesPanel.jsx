import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import './TechnicalCapabilitiesPanel.css'

const technicalCapabilities = [
  '2 – 16 Layers',
  'HDI PCB',
  'BGA / Fine Pitch',
  'Controlled Impedance',
  'Differential Pair Routing',
  'DDR Routing',
  'USB 2.0 / 3.0 / Type-C',
  'PCIe / SATA / HDMI',
  'Ethernet',
  'RF / Microwave PCB',
  'Rigid-Flex PCB',
  'Flex PCB',
  'Power Electronics PCB',
  'EMI / EMC Optimization',
  'Thermal Management',
  'Prototype to Production'
]

const TechnicalCapabilitiesPanel = () => {
  return (
    <div className="technical-capabilities-panel">
      <div className="technical-capabilities-panel__header">
        <h3 className="technical-capabilities-panel__title">TECHNICAL CAPABILITIES</h3>
        <a href="#specs" className="technical-capabilities-panel__link">
          View Full Specs
          <ArrowRight className="technical-capabilities-panel__link-icon" />
        </a>
      </div>

      <div className="technical-capabilities-panel__table-wrapper">
        <table className="technical-capabilities-table">
          <thead>
            <tr>
              <th>FEATURE</th>
              <th>SUPPORT</th>
            </tr>
          </thead>
          <tbody>
            {technicalCapabilities.map((capability, index) => (
              <tr key={index}>
                <td>{capability}</td>
                <td>
                  <CheckCircle2 className="technical-capabilities-table__check" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TechnicalCapabilitiesPanel
