import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTopOnNavigation
 * Ensures that whenever a route changes or a page is opened,
 * the window and document scroll resets immediately to the top.
 */
function ScrollToTopOnNavigation() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    // Disable automatic browser scroll restoration so pages always start at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (!hash) {
      // Immediate scroll to top on page navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    } else {
      // If navigating with an explicit hash (e.g., #contact-form)
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, search, hash])

  return null
}

export default ScrollToTopOnNavigation
