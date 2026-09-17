import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ResourceDetailTemplate from '../components/resources/ResourceDetailTemplate'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import { getResourceBySlug } from '../data/resources'
import './ResourceDetailPage.css'

function ResourceDetailPage() {
  const { slug } = useParams()
  const resource = getResourceBySlug(slug)

  // Dynamic SEO Page Title & Meta
  useEffect(() => {
    if (resource) {
      document.title = `${resource.title} | ATRONICS Engineering Resources`
    } else {
      document.title = 'Resource Not Found | ATRONICS'
    }
  }, [resource])

  return (
    <div className="resource-detail-page-wrapper">
      <Navbar />
      <ResourceDetailTemplate />
      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}

export default ResourceDetailPage
