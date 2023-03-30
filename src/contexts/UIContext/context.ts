import React from 'react'

export interface UIProps {
  showSidebar: boolean
  setShowSidebar: (show: boolean) => void
}

export const UIContext = React.createContext<UIProps>({
  showSidebar: false,
  setShowSidebar: () => undefined,
})
