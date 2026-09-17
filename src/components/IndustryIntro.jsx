import React from 'react'
import './IndustryIntro.css'

const IndustryIntro = () => {
  return (
    <div className="industry-intro">
      <h2 className="industry-intro__heading">
        <span className="industry-intro__heading-line">Engineering</span>
        <span className="industry-intro__heading-line">Across</span>
        <span className="industry-intro__heading-line industry-intro__heading-line--blue">Industries</span>
      </h2>
      <div className="industry-intro__description-wrapper">
        <div className="industry-intro__description-accent"></div>
        <p className="industry-intro__description">
          Our PCB design and manufacturing expertise powers innovation across a wide range of industries, helping businesses bring intelligent hardware to life.
        </p>
      </div>
    </div>
  )
}

export default IndustryIntro
