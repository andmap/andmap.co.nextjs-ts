import { useState, createContext, FunctionComponent } from 'react'

interface IDropdownContext {
  isOpen: boolean
  toggle: (v: any) => void
}

const initContext: IDropdownContext = {
  isOpen: false,
  toggle: (v: any) => {},
}

export const DropdownContext = createContext<IDropdownContext>(initContext)

export const DropdownContextProvider: FunctionComponent = ({ children }) => {
  const [dropdownOpen, toggleDropdown] = useState(false)

  const toggleHandler = () => {
    toggleDropdown((state) => {
      return !state
    })
  }

  const value = {
    isOpen: dropdownOpen,
    toggle: toggleHandler,
  }

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  )
}
