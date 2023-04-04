import React from 'react'
import { UIContext } from './context'

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false)

  return <UIContext.Provider value={{ showSidebar, setShowSidebar }}>{children}</UIContext.Provider>
}
