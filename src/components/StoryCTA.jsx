import React from 'react'
import { Play } from 'lucide-react'
import './StoryCTA.css'

const StoryCTA = () => {
  return (
    <div className="story-cta">
      <div className="story-content">
        <button className="play-button" aria-label="Play video">
          <Play size={20} fill="white" />
        </button>
        <div className="story-text">
          <div className="story-label">
            WATCH OUR STORY
            <div className="story-underline"></div>
          </div>
          <div className="story-divider"></div>
          <div className="story-tagline">
            ENGINEERING<br />
            A SMARTER TOMORROW
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryCTA
