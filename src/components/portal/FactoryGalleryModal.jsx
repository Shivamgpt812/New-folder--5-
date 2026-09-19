import React, { useState } from 'react'
import { 
  X, 
  Camera, 
  Clock, 
  User, 
  Cpu, 
  CheckCircle2, 
  ChevronRight, 
  Maximize2,
  Calendar
} from 'lucide-react'
import './FactoryGalleryModal.css'

export default function FactoryGalleryModal({ order, onClose }) {
  if (!order) return null

  const gallery = order.factoryGallery || [
    {
      id: 'gal-1',
      title: 'Laser Direct Imaging (LDI) Inner Layer Patterning',
      stage: 'Photolithography & Etch',
      timestamp: '2026-09-14 10:45 AM',
      machine: 'Orbotech Diamond 8 LDI System',
      operator: 'Cell Lead: Rajesh K.',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
      caption: 'High-definition 12µm trace exposure on Layer 3 inner core.'
    },
    {
      id: 'gal-2',
      title: 'High-Speed CNC Mechanical & Laser Micro-Drill',
      stage: 'Drilling & Microvias',
      timestamp: '2026-09-16 09:30 AM',
      machine: 'Schmoll Dual-Spindle Laser Drill',
      operator: 'Operator: A. Sharma',
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
      caption: '0.15mm blind laser microvias drilling with optical fiducial alignment.'
    },
    {
      id: 'gal-3',
      title: 'Yamaha YSM20R SMT Pick & Place Placement',
      stage: 'Automated SMT Assembly',
      timestamp: '2026-09-18 09:15 AM',
      machine: 'Yamaha YSM20R (90,000 CPH)',
      operator: 'SMT Line Eng: Priya V.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      caption: 'Precision mounting of 0201 passives and 0.4mm pitch BGA processors.'
    },
    {
      id: 'gal-4',
      title: 'Koh Young 3D AOI Solder Meniscus Inspection',
      stage: 'Automated Optical Inspection',
      timestamp: '2026-09-18 03:30 PM',
      machine: 'Koh Young Zenith 3D AOI',
      operator: 'QA Lead: Suresh N.',
      imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
      caption: 'True 3D height profiling and volume verification with 100% pass yield.'
    }
  ]

  const [selectedPhoto, setSelectedPhoto] = useState(gallery[0])

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close-btn" onClick={onClose} aria-label="Close Factory Gallery">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-badge-top">
            <Camera size={14} />
            <span>LIVE FACTORY FLOOR TELEMETRY & QC SNAPSHOTS</span>
          </div>
          <h2 className="gallery-title">Factory Floor & Inspection Photo Gallery</h2>
          <p className="gallery-subtitle">
            Direct visual audit trail from cleanroom cells for <strong>{order.projectName}</strong> ({order.id})
          </p>
        </div>

        {/* Main Split Viewer */}
        <div className="gallery-layout-grid">
          {/* Large Preview */}
          <div className="gallery-main-view">
            <div className="main-image-wrapper">
              <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} className="main-img" />
              <div className="image-overlay-pill">
                <CheckCircle2 size={14} />
                <span>Verified QC Pass</span>
              </div>
            </div>

            <div className="photo-details-box">
              <div className="photo-stage-tag">{selectedPhoto.stage}</div>
              <h3 className="photo-title">{selectedPhoto.title}</h3>
              <p className="photo-caption">{selectedPhoto.caption}</p>

              <div className="photo-meta-grid">
                <div className="p-meta-item">
                  <span className="p-lbl">Machine Cell:</span>
                  <strong className="p-val">{selectedPhoto.machine}</strong>
                </div>
                <div className="p-meta-item">
                  <span className="p-lbl">Operator:</span>
                  <strong className="p-val">{selectedPhoto.operator}</strong>
                </div>
                <div className="p-meta-item">
                  <span className="p-lbl">Captured:</span>
                  <span className="p-val">{selectedPhoto.timestamp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="gallery-thumbnails-sidebar">
            <h4 className="thumbnails-title">PRODUCTION CELL TIMELINE ({gallery.length})</h4>
            <div className="thumbnails-list">
              {gallery.map((item) => (
                <div 
                  key={item.id}
                  className={`thumbnail-item ${selectedPhoto.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img src={item.imageUrl} alt={item.title} className="thumb-img" />
                  <div className="thumb-info">
                    <div className="thumb-stage">{item.stage}</div>
                    <div className="thumb-title">{item.title}</div>
                    <div className="thumb-time">{item.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
