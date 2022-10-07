import { motion } from "framer-motion"
import { showVariant } from "../../variants/showVariant"
import { popVariant } from "../../variants/popvariant"
import { useContext } from "react"
import { AppContext } from "../Main/MainSection"

export const SuccessModal = () => {
  //@ts-ignore
  const { SuccessModalOpen, handleSuccessModal } = useContext(AppContext)
  return (
    <>
      {SuccessModalOpen && (
        <motion.div
          className="w-full min-h-full backdrop-brightness-50 fixed -top-8 left-0 "
          initial={{ opacity: 0 }}
          variants={showVariant}
          whileInView={"show"}
          exit={"exit"}
        >
          <motion.div
            className="modal md:w-[33.75rem] bg-white rounded-lg px-6 py-8 md:p-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            variants={popVariant}
            whileInView={"show"}
            exit={"exit"}
          >
            <div className="mb-6 md:mb-11">
              <img
                src="/images/icon-check.svg"
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-black font-bold text-xl md:text-2xl mb-6">
                Thanks for your support!
              </p>
              <p className="text-sm md:text-base text-dark_Gray font-medium mb-7">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <button
                className="h-12 w-28 bg-moderate_Cyan grid place-items-center hover:bg-darkCyan duration-300 text-sm text-white rounded-full mx-auto"
                onClick={handleSuccessModal}
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
