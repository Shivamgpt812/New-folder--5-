import React from 'react'
import './ExplodedPCB.css'
import pcbStackImg from './pcb-stack.webp'

const ExplodedPCB = () => {
  return (
    <div className="exploded-pcb-container">
      <img 
        src={pcbStackImg} 
        alt="Multilayer PCB" 
        className="exploded-pcb"
      />
    </div>
  )
}

export default ExplodedPCB
