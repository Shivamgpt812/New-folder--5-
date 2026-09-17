import React from 'react'
import Navbar from '../components/Navbar'
import AtronicsHero from '../components/AtronicsHero'
import AtronicsServicesSection from '../components/AtronicsServicesSection'
import AtronicsIndustriesSection from '../components/AtronicsIndustriesSection'
import AtronicsCapabilitiesSection from '../components/AtronicsCapabilitiesSection'
import AtronicsManufacturingSection from '../components/AtronicsManufacturingSection'
import AtronicsProcessSection from '../components/AtronicsProcessSection'
import IndustriesSection from '../components/IndustriesSection'
import AtronicsContactSection from '../components/AtronicsContactSection'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import TimedConsultationModal from '../components/TimedConsultationModal'

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <AtronicsHero />
      <AtronicsServicesSection />
      <AtronicsIndustriesSection />
      <AtronicsCapabilitiesSection />
      <AtronicsManufacturingSection />
      <AtronicsProcessSection />
      <IndustriesSection />
      <AtronicsContactSection />
      <AtronicsFooter />
      <ScrollToTop />
      <TimedConsultationModal />
    </div>
  )
}

export default HomePage
