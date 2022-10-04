import { useState } from "react"
import Modal from "../Modals/Modal"
import { SuccessModal } from "../Modals/SuccessModal"
import AboutFund from "./AboutFund"
import FundHeader from "./FundHeader"
import FundInfo from "./FundInfo"
import { AnimatePresence } from "framer-motion"

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
    <main className=" w-full md:w-[45.625rem] mx-auto px-6 space-y-8  pb-10">
      <FundHeader handleModalToggle={handleModalToggle} />
      <FundInfo pledged={89914} total={100000} />
      <AboutFund handleModalToggle={handleModalToggle} />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        <Modal
          isModalOpen={isModalOpen}
          handleModalToggle={handleModalToggle}
          handleSuccessModal={handleSuccessModal}
        />
      </AnimatePresence>
      <SuccessModal
        SuccessModalOpen={SuccessModalOpen}
        handleSuccessModal={handleSuccessModal}
      />
    </main>
  )
}

export default MainSection
