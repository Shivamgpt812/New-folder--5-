import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { QuoteProvider } from './context/QuoteContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResourcesPage from './pages/ResourcesPage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import AuthModal from './components/AuthModal'
import QuoteModal from './components/QuoteModal'
import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation'
import './App.css'
import './microinteractions.css'

function App() {
  return (
    <AuthProvider>
      <QuoteProvider>
        <Router>
          <ScrollToTopOnNavigation />
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/:slug" element={<ResourceDetailPage />} />
            </Routes>
            <AuthModal />
            <QuoteModal />
          </div>
        </Router>
      </QuoteProvider>
    </AuthProvider>
  )
}

export default App

