import React, {useEffect, useState, useMemo} from 'react'

//https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
export default function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])

  useEffect(() => {
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}