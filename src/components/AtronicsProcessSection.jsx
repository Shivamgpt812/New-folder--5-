import React from 'react';
import { Lightbulb, Settings, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';
import './AtronicsProcessSection.css';

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand your requirements, constraints and product goals.",
    image: "/images/process-discover.webp"
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Create schematics, architecture and PCB layout.",
    image: "/images/process-design.webp"
  },
  {
    number: "03",
    title: "ENGINEER",
    description: "Optimize for performance, signal integrity and manufacturability.",
    image: "/images/process-engineer.webp"
  },
  {
    number: "04",
    title: "PROTOTYPE",
    description: "Build and validate production-ready prototypes.",
    image: "/images/process-prototype.webp"
  },
  {
    number: "05",
    title: "TEST",
    description: "Inspect, test and validate performance.",
    image: "/images/process-test.webp"
  },
  {
    number: "06",
    title: "DELIVER",
    description: "Move to reliable production and ongoing support.",
    image: "/images/process-deliver.webp"
  }
];

const processFeatures = [
  {
    icon: Lightbulb,
    title: "Engineering-Led",
    description: "Real-world design experience"
  },
  {
    icon: Settings,
    title: "Manufacturing Ready",
    description: "Optimized for production"
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "Rigorous testing & validation"
  },
  {
    icon: BarChart3,
    title: "Scalable Support",
    description: "From prototype to mass production"
  }
];

const AtronicsProcessSection = () => {
  return (
    <section className="atronics-process-section">
      <div className="process-container">
        {/* Top Intro Area */}
        <div className="process-top-area">
          <div className="process-intro">
            <div className="process-badge">
              <span className="badge-line"></span>
              <span className="badge-text">OUR PROCESS</span>
            </div>
            
            <h2 className="process-heading">
              <span className="heading-line1">From Concept</span>
              <br />
              <span className="heading-line2">to Production</span>
            </h2>
            
            <p className="process-description">
              A streamlined engineering and manufacturing process designed
              to bring your ideas to life with precision, speed and reliability.
            </p>
          </div>
          
          <div className="process-main-image">
            <img 
              src="/images/process-design-main.webp" 
              alt="PCB Design Engineering Workstation"
              loading="lazy"
            />
            <div className="image-overlay-text">
              <div className="overlay-top-text">
                <span className="overlay-label">ENGINEERING</span>
                <span className="overlay-label">A SMARTER</span>
                <span className="overlay-label">TOMORROW</span>
              </div>
              <div className="overlay-bottom-text">
                <p className="overlay-keywords">Ideas</p>
                <p className="overlay-keywords">Circuits</p>
                <p className="overlay-keywords">Real Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline and Partner Panel */}
        <div className="process-timeline-wrapper">
          <div className="process-timeline">
            <div className="timeline-line"></div>
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">
                  <span>{step.number}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-image">
                  <img 
                    src={step.image} 
                    alt={`${step.title} process`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Partner Panel */}
          <div className="partner-panel">
            <div className="partner-label">
              PARTNER THROUGH
              <br />
              EVERY STAGE
            </div>
            <h3 className="partner-heading">
              More than a
              <br />
              manufacturer —
              <br />
              a true engineering
              <br />
              partner.
            </h3>
            <button className="partner-cta">
              Start Your Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="process-feature-bar">
          {processFeatures.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="feature-item">
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
              {index < processFeatures.length - 1 && <div className="feature-separator"></div>}
            </React.Fragment>
          ))}
          
          <div className="feature-final-message">
            <div className="final-message-text">
              BUILT FOR
              <br />
              WHAT'S NEXT
            </div>
            <div className="final-message-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtronicsProcessSection;
