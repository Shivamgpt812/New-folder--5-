import React from 'react'
import './CapabilitiesPCB.css'

const CapabilitiesPCB = () => {
  return (
    <div className="capabilities-pcb">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="capabilities-pcb__video"
        title="PCB layers exploding visualization"
      >
        <source src="/videos/PCB_layers_exploding_visualization_20260916220158.webm" type="video/webm" />
        <source src="/videos/PCB_layers_exploding_visualization_20260916220158.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default CapabilitiesPCB
