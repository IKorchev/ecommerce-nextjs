import { useState, useEffect } from "react"
import { debounce } from "lodash"

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    const debouncedResize = debounce(handleResize, 500)
    // Add event listener
    window.addEventListener("resize", debouncedResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", debouncedResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default useWindowSize
