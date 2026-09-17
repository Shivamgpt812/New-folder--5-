import React, { createContext, useContext, useState, useEffect } from 'react'

const QuoteContext = createContext(null)

export const QuoteProvider = ({ children }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [initialService, setInitialService] = useState('Turnkey PCB Assembly')

  // Listen to hash changes for #quote
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#quote' || window.location.hash === '#get-a-quote') {
        setIsQuoteOpen(true)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const openQuoteModal = (service = 'Turnkey PCB Assembly') => {
    setInitialService(service)
    setIsQuoteOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteOpen(false)
    if (window.location.hash === '#quote' || window.location.hash === '#get-a-quote') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <QuoteContext.Provider
      value={{
        isQuoteOpen,
        openQuoteModal,
        closeQuoteModal,
        initialService
      }}
    >
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuote = () => {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider')
  }
  return context
}
