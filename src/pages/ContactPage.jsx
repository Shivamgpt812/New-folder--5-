import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/ContactHero'
import ContactFormSection from '../components/ContactFormSection'
import ContactFacilities from '../components/ContactFacilities'
import ContactFAQ from '../components/ContactFAQ'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactFacilities />
      <ContactFAQ />
      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}

export default ContactPage
