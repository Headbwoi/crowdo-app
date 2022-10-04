import { motion } from "framer-motion"
import { toggleVariant } from "../../variants/toggleVariant"
type Props = {
  completed?: string
  value: string
  handleModalToggle: () => void
  handleSuccessModal: () => void
}

const ModalPledgeInput = ({
  completed,
  value,
  handleModalToggle,
  handleSuccessModal,
}: Props) => {
  const handleSubmit = () => {
    handleModalToggle()
    handleSuccessModal()
  }
  return (
    <>
      <motion.div
        className="pt-6 md:pt-5 border-t border-dark_Gray/30 px-5 md:px-7 flex items-center justify-between flex-col md:flex-row"
        initial={{ opacity: 0 }}
        variants={toggleVariant}
        whileInView={"show"}
        exit={"exit"}
      >
        <p className="text-dark_Gray font-medium text-sm mb-5 md:mb-0">
          Enter your pledge
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-[6.25rem] h-12 px-5 rounded-full border-dark_Gray/30 border flex items-center cursor-pointer hover:border-moderate_Cyan focus:border-moderate_Cyan ">
            <span className="text-dark_Gray mr-2 font-medium text-sm">$</span>
            <input
              type={"number"}
              className=" placeholder:text-dark_Gray text-black text-sm w-10 font-bold outline-none"
              value={value}
            />
          </div>
          <button
            className={`text-white text-sm rounded-full h-12 w-28 duration-200 cursor-pointer"
            aria-label="Select Reward ${
              completed ? "bg-dark_Gray" : "bg-moderate_Cyan hover:bg-darkCyan"
            }`}
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default ModalPledgeInput
