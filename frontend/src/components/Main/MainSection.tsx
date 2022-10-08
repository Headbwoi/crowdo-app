import Modal from "../Modals/Modal"
import { SuccessModal } from "../Modals/SuccessModal"
import AboutFund from "./AboutFund"
import FundHeader from "./FundHeader"
import FundInfo from "./FundInfo"
import { AnimatePresence } from "framer-motion"

const MainSection = () => {
  return (
    <main className=" w-full md:w-[45.625rem] mx-auto px-6 space-y-8  pb-10">
      <FundHeader />
      <FundInfo pledged={89914} total={100000} />
      <AboutFund />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        <Modal />
      </AnimatePresence>
      <SuccessModal />
    </main>
  )
}

export default MainSection
