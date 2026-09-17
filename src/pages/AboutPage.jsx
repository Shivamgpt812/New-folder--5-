import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import AboutFounder from '../components/AboutFounder'
import AboutOurPurpose from '../components/AboutOurPurpose'
import AboutWhoWeAre from '../components/AboutWhoWeAre'
import AboutWhatWeDo from '../components/AboutWhatWeDo'
import AboutOurApproach from '../components/AboutOurApproach'
import AboutEngineeringManufacturing from '../components/AboutEngineeringManufacturing'
import AboutCompanyValues from '../components/AboutCompanyValues'
import AboutFinalCTA from '../components/AboutFinalCTA'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />
      <AboutFounder />
      <AboutOurPurpose />
      <AboutWhoWeAre />
      <AboutWhatWeDo />
      <AboutOurApproach />
      <AboutEngineeringManufacturing />
      <AboutCompanyValues />
      <AboutFinalCTA />
      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}

export default AboutPage
