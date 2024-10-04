import React, { createContext, useState, useContext, useEffect } from 'react'

type SidebarContextType = {
  isOpen: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sidebarIsOpen')
      return stored !== null ? JSON.parse(stored) : true
    }
    return true
  })

  useEffect(() => {
    localStorage.setItem('sidebarIsOpen', JSON.stringify(isOpen))
  }, [isOpen])

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}