import React from 'react';
import { 
  Factory, 
  Car, 
  Activity, 
  Wifi, 
  Zap, 
  Cpu, 
  Settings, 
  Radio, 
  Smartphone 
} from 'lucide-react';
import LogoMarquee from './LogoMarquee';
import './IndustriesSection.css';

const industries = [
  {
    title: "Industrial Automation",
    description: "Reliable electronics for smarter industrial systems.",
    image: "/images/industries/industry-industrial-automation.webp",
    icon: Factory
  },
  {
    title: "Automotive",
    description: "High-performance electronics for next-generation mobility.",
    image: "/images/industries/industry-automotive.webp",
    icon: Car
  },
  {
    title: "Medical Devices",
    description: "Precision electronics for life-critical applications.",
    image: "/images/industries/industry-medical-devices.webp",
    icon: Activity
  },
  {
    title: "IoT & Connected Devices",
    description: "Smarter, connected hardware for a more intelligent world.",
    image: "/images/industries/industry-iot.webp",
    icon: Wifi
  },
  {
    title: "EV & Charging",
    description: "Power electronics for a cleaner, greener future.",
    image: "/images/industries/industry-ev-charging.webp",
    icon: Zap
  },
  {
    title: "Power Electronics",
    description: "Efficient, high-reliability electronics for demanding power systems.",
    image: "/images/industries/industry-power-electronics.webp",
    icon: Cpu
  },
  {
    title: "Robotics",
    description: "Advanced control electronics for intelligent machines.",
    image: "/images/industries/industry-robotics.webp",
    icon: Settings
  },
  {
    title: "Wireless & RF",
    description: "High-frequency solutions for a connected tomorrow.",
    image: "/images/industries/industry-wireless-rf.webp",
    icon: Radio
  },
  {
    title: "Consumer Electronics",
    description: "Innovative electronics for everyday products.",
    image: "/images/industries/industry-consumer-electronics.webp",
    icon: Smartphone
  }
];

const IndustriesSection = () => {
  return (
    <section className="new-industries-section">
      <div className="new-industries-container">
        <div className="new-industries-main-content">
          {/* Left Panel */}
          <div className="new-industries-left-panel">
            <div className="new-industries-left-content">
              <div className="new-industries-label-line"></div>
              <div className="new-industries-label">INDUSTRIES WE SERVE</div>
              
              <h2 className="new-industries-heading">
                Engineering<br />
                Across <span className="new-industries-heading-blue">Industries</span>
              </h2>
              
              <p className="new-industries-description">
                From industrial systems to next-generation consumer devices, we deliver electronics engineering and manufacturing solutions for the world's most innovative industries.
              </p>
              
              <div className="new-industries-earth-container">
                <img 
                  src="/images/industries/industries-global.webp" 
                  alt="Global Industries" 
                  className="new-industries-earth-image"
                />
                
                <div className="new-industries-annotation new-industries-annotation-left-top">
                  <span className="new-industries-annotation-bullet">◆</span> SMARTER<br />TECHNOLOGY
                </div>
                
                <div className="new-industries-annotation new-industries-annotation-right-top">
                  CLEANER<br />TOMORROW
                </div>
                
                <div className="new-industries-annotation new-industries-annotation-bottom">
                  <span className="new-industries-annotation-bullet">◆</span> A MORE<br />CONNECTED WORLD
                </div>
              </div>
            </div>
          </div>

          {/* Right Industry Grid */}
          <div className="new-industries-right-area">
            {/* Row 1: 4 cards */}
            <div className="new-industries-row new-industries-row-1">
              {industries.slice(0, 4).map((industry, index) => (
                <IndustryCard key={index} industry={industry} />
              ))}
            </div>
            
            {/* Row 2: 5 cards */}
            <div className="new-industries-row new-industries-row-2">
              {industries.slice(4, 9).map((industry, index) => (
                <IndustryCard key={index} industry={industry} />
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Strip */}
        <div className="new-industries-trusted-strip">
          <div className="new-industries-trusted-left">
            <div className="new-industries-trusted-line"></div>
            <div className="new-industries-trusted-text">
              TRUSTED BY INNOVATORS<br />
              ACROSS THE GLOBE
            </div>
          </div>
          
          <div className="new-industries-trusted-logos">
            <LogoMarquee speed={28} />
          </div>
          
          <div className="new-industries-trusted-right">
            <div className="new-industries-trusted-right-line"></div>
            <div className="new-industries-trusted-right-text">
              REAL<br />
              PARTNERSHIPS<br />
              REAL PROGRESS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ industry }) => {
  const IconComponent = industry.icon;
  
  return (
    <div className="new-industry-card">
      <div className="new-industry-card-image-wrapper">
        <img 
          src={industry.image} 
          alt={industry.title}
          className="new-industry-card-image"
        />
      </div>
      
      <div className="new-industry-card-content">
        <div className="new-industry-card-info">
          <IconComponent className="new-industry-card-icon" />
          <div className="new-industry-card-text">
            <h3 className="new-industry-card-title">{industry.title}</h3>
            <p className="new-industry-card-description">{industry.description}</p>
          </div>
        </div>
        <div className="new-industry-card-arrow">→</div>
      </div>
    </div>
  );
};

export default IndustriesSection;
