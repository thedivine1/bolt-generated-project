import * as React from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const onChange = () => {
      setMatches(mediaQuery.matches)
    }
    
    // Set initial value
    setMatches(mediaQuery.matches)
    
    // Listen for changes
    mediaQuery.addEventListener("change", onChange)
    
    // Cleanup
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [query])

  return matches
}

export const useIsMobile = () => {
  return useMediaQuery("(max-width: 768px)")
}
