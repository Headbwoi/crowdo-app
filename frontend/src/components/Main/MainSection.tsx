import React, { useState } from "react"
import Modal from "../Modals/Modal"
import { SuccessModal } from "../Modals/SuccessModal"
import AboutFund from "./AboutFund"
import FundHeader from "./FundHeader"
import FundInfo from "./FundInfo"
import { AnimatePresence } from "framer-motion"

type AppContextType = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  SuccessModalOpen: boolean
  setSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleModalToggle: () => void
  handleSuccessModal: () => void
}
export const AppContext = React.createContext<AppContextType | null>(null)

const MainSection = () => {
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
      <main className=" w-full md:w-[45.625rem] mx-auto px-6 space-y-8  pb-10">
        <FundHeader />
        <FundInfo pledged={89914} total={100000} />
        <AboutFund />
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          <Modal />
        </AnimatePresence>
        <SuccessModal />
      </main>
    </AppContext.Provider>
  )
}

export default MainSection
