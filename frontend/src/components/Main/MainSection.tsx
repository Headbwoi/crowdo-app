import Modal from "../Modals/Modal"
import { SuccessModal } from "../Modals/SuccessModal"
import AboutFund from "./AboutFund"
import FundHeader from "./FundHeader"
import FundInfo from "./FundInfo"

const MainSection = () => {
  return (
    <main className=" w-full md:w-[45.625rem] mx-auto px-6 space-y-8  mb-10">
      <FundHeader />
      <FundInfo />
      <AboutFund />
      {/* <Modal /> */}
      <SuccessModal />
    </main>
  )
}

export default MainSection
