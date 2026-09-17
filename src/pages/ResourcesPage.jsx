import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ResourcesHero from '../components/resources/ResourcesHero'
import ResourcesFeatured from '../components/resources/ResourcesFeatured'
import ResourcesCategories from '../components/resources/ResourcesCategories'
import ResourcesLibrary from '../components/resources/ResourcesLibrary'
import ResourcesSpotlight from '../components/resources/ResourcesSpotlight'
import ResourcesExpertHelp from '../components/resources/ResourcesExpertHelp'
import ResourcesFinalCTA from '../components/resources/ResourcesFinalCTA'
import AtronicsFooter from '../components/AtronicsFooter'
import ScrollToTop from '../components/ScrollToTop'
import './ResourcesPage.css'

function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Set document title for SEO
  useEffect(() => {
    document.title = 'Engineering Resources & Knowledge Hub | ATRONICS'
  }, [])

  return (
    <div className="resources-page">
      <Navbar />
      
      {/* 01. Hero */}
      <ResourcesHero />

      {/* 02. Featured Resource */}
      <ResourcesFeatured />

      {/* 03. Resource Categories */}
      <ResourcesCategories 
        activeCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      {/* 04. Resource Library (Search & Filters) */}
      <ResourcesLibrary 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 05. Engineering Spotlight (High-Speed Signal Integrity) */}
      <ResourcesSpotlight />

      {/* 06. Need Expert Help */}
      <ResourcesExpertHelp />

      {/* 07. Final Resource CTA */}
      <ResourcesFinalCTA />

      <AtronicsFooter />
      <ScrollToTop />
    </div>
  )
}

export default ResourcesPage
