import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { QuoteProvider } from './context/QuoteContext'
import { PortalDataProvider } from './context/PortalDataContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResourcesPage from './pages/ResourcesPage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import IndustryDetailPage from './pages/IndustryDetailPage'
import UserPortalPage from './pages/UserPortalPage'
import AdminPortalPage from './pages/AdminPortalPage'
import { Navigate } from 'react-router-dom'
import AuthModal from './components/AuthModal'
import QuoteModal from './components/QuoteModal'
import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation'
import './App.css'
import './microinteractions.css'

function App() {
  return (
    <AuthProvider>
      <QuoteProvider>
        <PortalDataProvider>
          <Router>
            <ScrollToTopOnNavigation />
            <div className="App">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/:slug" element={<ResourceDetailPage />} />
                <Route path="/services" element={<Navigate to="/services/pcb-design" replace />} />
                <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
                <Route path="/industries" element={<Navigate to="/industries/industrial-automation" replace />} />
                <Route path="/industries/:industrySlug" element={<IndustryDetailPage />} />
                <Route path="/portal" element={<UserPortalPage />} />
                <Route path="/admin" element={<AdminPortalPage />} />
              </Routes>
              <AuthModal />
              <QuoteModal />
            </div>
          </Router>
        </PortalDataProvider>
      </QuoteProvider>
    </AuthProvider>
  )
}

export default App

