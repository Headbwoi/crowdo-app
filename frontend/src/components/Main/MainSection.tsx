import { useState } from "react"
import Modal from "../Modals/Modal"
import { SuccessModal } from "../Modals/SuccessModal"
import AboutFund from "./AboutFund"
import FundHeader from "./FundHeader"
import FundInfo from "./FundInfo"

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev)
    isModalOpen ? window.scrollTo(0, 0) : window.scrollTo(50, 50)
  }
  return (
    <main className=" w-full md:w-[45.625rem] mx-auto px-6 space-y-8  pb-10">
      <FundHeader handleModalToggle={handleModalToggle} />
      <FundInfo />
      <AboutFund handleModalToggle={handleModalToggle} />
      <Modal isModalOpen={isModalOpen} handleModalToggle={handleModalToggle} />
      {/* <SuccessModal /> */}
    </main>
  )
}

export default MainSection
