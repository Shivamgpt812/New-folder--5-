import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import IndustryPageTemplate from '../components/industries/IndustryPageTemplate'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import { getIndustryBySlug } from '../data/industries'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import './IndustryDetailPage.css'

function IndustryDetailPage() {
  const { industrySlug } = useParams()
  const industry = getIndustryBySlug(industrySlug)

  // Dynamic SEO title
  useEffect(() => {
    if (industry) {
      document.title = `${industry.title} | ATRONICS Industry Solutions`
    } else {
      document.title = 'Industry Not Found | ATRONICS'
    }
  }, [industry])

  if (!industry) {
    return (
      <div className="industry-detail-wrapper">
        <Navbar />
        <div className="industry-not-found-container">
          <div className="industry-not-found-card">
            <AlertCircle size={48} className="not-found-icon" />
            <h1 className="not-found-title">Industry Sector Not Found</h1>
            <p className="not-found-desc">
              The requested industry sector (<code>{industrySlug}</code>) could not be located.
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
    <div className="industry-detail-wrapper">
      <Navbar />
      <IndustryPageTemplate industry={industry} />
      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}

export default IndustryDetailPage
