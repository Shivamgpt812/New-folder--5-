import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [initialRole, setInitialRole] = useState('user') // 'user' or 'admin'
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('atronics_auth_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  // Listen to hash changes for #login
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#login') {
        setIsLoginOpen(true)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const openLogin = (role = 'user') => {
    setInitialRole(role)
    setIsLoginOpen(true)
  }

  const closeLogin = () => {
    setIsLoginOpen(false)
    if (window.location.hash === '#login') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  const login = (userData) => {
    setCurrentUser(userData)
    try {
      localStorage.setItem('atronics_auth_user', JSON.stringify(userData))
    } catch (e) {
      console.error(e)
    }
  }

  const logout = () => {
    setCurrentUser(null)
    try {
      localStorage.removeItem('atronics_auth_user')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoginOpen,
        openLogin,
        closeLogin,
        initialRole,
        currentUser,
        login,
        logout,
        isAuthenticated: !!currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
