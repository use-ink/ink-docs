import React from 'react'
import { WindowContext } from './context'

export const WindowProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [scrollY, setOffset] = React.useState(0)

  const handleScroll = () => {
    setOffset(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { capture: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return <WindowContext.Provider value={{ ...{ scrollY } }}>{children}</WindowContext.Provider>
}
