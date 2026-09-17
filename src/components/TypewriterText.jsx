import React, { useState, useEffect } from 'react'
import './TypewriterText.css'

const TypewriterText = ({
  words = ['Intelligent', 'High-Speed', 'Reliable', 'Production-Ready', 'Scalable', 'Next-Gen'],
  typingSpeed = 95,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = 'gradient-text'
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const fullWord = words[currentWordIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < fullWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished typing word, pause before deleting
        setIsPaused(true)
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="typewriter-container">
      <span className={className}>{currentText}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  )
}

export default TypewriterText