import { useEffect } from 'react'

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -8% 0px',
  threshold: 0.16,
}

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!elements.length) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

export default useScrollReveal
