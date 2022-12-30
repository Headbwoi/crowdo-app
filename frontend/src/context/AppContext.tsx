import { useState, createContext } from "react"

type AppContextType = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  SuccessModalOpen: boolean
  setSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleModalToggle: () => void
  handleSuccessModal: () => void
}

type AppContextProviderType = {
  children: React.ReactNode
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({ children }: AppContextProviderType) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [SuccessModalOpen, setSuccessModalOpen] = useState(false)
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev)
    isModalOpen ? window.scrollTo(0, 0) : window.scrollTo(50, 50)
  }
  const handleSuccessModal = () => {
    setSuccessModalOpen((prev) => !prev)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        SuccessModalOpen,
        setSuccessModalOpen,
        handleModalToggle,
        handleSuccessModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
