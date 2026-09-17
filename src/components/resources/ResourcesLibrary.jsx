import React from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowRight, Clock, Calendar, MessageSquare, BookOpen } from 'lucide-react'
import { RESOURCE_CATEGORIES, filterResources } from '../../data/resources'
import './ResourcesLibrary.css'

function ResourcesLibrary({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory 
}) {
  const filteredList = filterResources(searchQuery, selectedCategory)

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <section className="resources-library-section" id="resource-library">
      <div className="resources-library-container">
        
        {/* Header Block */}
        <div className="library-header">
          <div className="library-eyebrow">
            <span className="library-eyebrow-line"></span>
            <span className="library-eyebrow-text">RESOURCE LIBRARY</span>
          </div>
          
          <h2 className="library-main-heading">
            Latest from ATRONICS
          </h2>
          
          <p className="library-subheading">
            Explore practical engineering resources created to help you move from concept to production.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="library-controls-wrap">
          
          {/* Search Bar */}
          <div className="library-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              className="search-input"
              placeholder="Search engineering resources (e.g., Gerber, Impedance, Stackup, DFM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={clearSearch} aria-label="Clear search query">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="library-filter-pills-bar">
            {RESOURCE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  type="button"
                  key={cat.id}
                  className={`library-filter-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.name}</span>
                </button>
              )
            })}
          </div>

        </div>

        {/* Resource Grid / Empty State */}
        {filteredList.length === 0 ? (
          <div className="library-empty-state">
            <div className="empty-icon-wrap">
              <BookOpen size={36} />
            </div>
            <h3 className="empty-title">No Engineering Resources Found</h3>
            <p className="empty-desc">
              We couldn't find any resources matching "{searchQuery}". Try searching for another topic or get in touch with our engineering desk.
            </p>
            <div className="empty-actions">
              <button 
                type="button" 
                className="empty-btn-reset"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              >
                Clear Search & Filters
              </button>
              <Link to="/contact" className="empty-btn-contact">
                <MessageSquare size={16} />
                <span>Talk to an Engineer</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="library-editorial-grid">
            {filteredList.map((resource, index) => {
              // Asymmetric card sizing for visual editorial interest
              const isLargeCard = index === 0 || index === 7
              return (
                <article 
                  key={resource.slug} 
                  className={`library-resource-card ${isLargeCard ? 'is-featured-span' : ''}`}
                >
                  <Link to={`/resources/${resource.slug}`} className="resource-card-link-wrapper">
                    
                    {/* Real Image */}
                    <div className="resource-card-image-wrap">
                      <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="resource-card-img"
                        loading="lazy"
                      />
                      <div className="resource-card-img-overlay"></div>
                      <span className="resource-card-category-badge">
                        {resource.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="resource-card-body">
                      <div className="resource-card-meta">
                        <span className="meta-read-time">
                          <Clock size={12} />
                          <span>{resource.readTime}</span>
                        </span>
                        <span className="meta-dot">•</span>
                        <span className="meta-date">
                          <Calendar size={12} />
                          <span>{resource.publishedAt}</span>
                        </span>
                      </div>

                      <h3 className="resource-card-title">
                        {resource.title}
                      </h3>

                      <p className="resource-card-desc">
                        {resource.description}
                      </p>

                      <div className="resource-card-footer">
                        <span className="resource-read-more-text">READ MORE</span>
                        <ArrowRight size={15} className="resource-arrow-icon" />
                      </div>
                    </div>

                  </Link>
                </article>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}

export default ResourcesLibrary
