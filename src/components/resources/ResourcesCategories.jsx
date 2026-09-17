import React from 'react'
import { BookOpen, Zap, Sliders, HelpCircle, ArrowRight } from 'lucide-react'
import './ResourcesCategories.css'

function ResourcesCategories({ activeCategory, onSelectCategory }) {
  const categories = [
    {
      id: 'engineering-guides',
      num: '01',
      title: 'ENGINEERING GUIDES',
      desc: 'Practical engineering documentation, stackups & design guidance.',
      icon: BookOpen
    },
    {
      id: 'engineering-insights',
      num: '02',
      title: 'ENGINEERING INSIGHTS',
      desc: 'Technical articles, high-speed knowledge & industry perspectives.',
      icon: Zap
    },
    {
      id: 'technical-specs',
      num: '03',
      title: 'TECHNICAL SPECS',
      desc: 'PCB capabilities, manufacturing limits, tolerances & specifications.',
      icon: Sliders
    },
    {
      id: 'faq',
      num: '04',
      title: 'FAQ',
      desc: 'Answers to common PCB design, manufacturing & assembly questions.',
      icon: HelpCircle
    }
  ]

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId)
    const libraryEl = document.getElementById('resource-library')
    if (libraryEl) {
      libraryEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="resources-categories-section">
      <div className="resources-categories-container">
        
        <div className="categories-header">
          <div className="categories-eyebrow">
            <span className="categories-eyebrow-line"></span>
            <span className="categories-eyebrow-text">RESOURCE DIRECTORY</span>
          </div>
          <h2 className="categories-main-heading">
            Explore Engineering Resources
          </h2>
        </div>

        {/* 4 Large Horizontal Category Blocks */}
        <div className="categories-horizontal-grid">
          {categories.map((cat) => {
            const IconComponent = cat.icon
            const isSelected = activeCategory === cat.id
            return (
              <div 
                key={cat.id} 
                className={`category-block-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
                role="button"
                tabIndex={0}
              >
                <div className="category-block-top">
                  <span className="category-block-num">{cat.num}</span>
                  <div className="category-block-icon">
                    <IconComponent size={22} />
                  </div>
                </div>

                <div className="category-block-info">
                  <h3 className="category-block-title">{cat.title}</h3>
                  <p className="category-block-desc">{cat.desc}</p>
                </div>

                <div className="category-block-footer">
                  <span className="category-explore-text">Browse Section</span>
                  <div className="category-arrow-wrap">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <div className="category-hover-line"></div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ResourcesCategories
