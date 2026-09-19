import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ServicePageTemplate from '../components/services/ServicePageTemplate'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import { getServiceBySlug } from '../data/services'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import './ServiceDetailPage.css'

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = getServiceBySlug(serviceSlug)

  // Dynamic SEO title
  useEffect(() => {
    if (service) {
      document.title = `${service.title} | ATRONICS Electronics Engineering`
    } else {
      document.title = 'Service Not Found | ATRONICS'
    }
  }, [service])

  if (!service) {
    return (
      <div className="service-detail-wrapper">
        <Navbar />
        <div className="service-not-found-container">
          <div className="service-not-found-card">
            <AlertCircle size={48} className="not-found-icon" />
            <h1 className="not-found-title">Engineering Service Not Found</h1>
            <p className="not-found-desc">
              The requested service offering (<code>{serviceSlug}</code>) could not be located.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="not-found-btn-primary">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
        <AtronicsFooter />
      </div>
    )
  }

  return (
    <div className="service-detail-wrapper">
      <Navbar />
      <ServicePageTemplate service={service} />
      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}

export default ServiceDetailPage
