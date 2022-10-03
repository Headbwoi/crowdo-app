type Props = {
  completed?: string
}

const ModalPledgeInput = ({ completed }: Props) => {
  return (
    <>
      <div className="pt-6 md:pt-5 border-t border-dark_Gray/30 px-5 md:px-7 flex items-center justify-between flex-col md:flex-row">
        <p className="text-dark_Gray font-medium text-sm mb-5 md:mb-0">
          Enter your pledge
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-[6.25rem] h-12 px-5 rounded-full border-dark_Gray/30 border flex items-center cursor-pointer hover:border-moderate_Cyan focus:border-moderate_Cyan ">
            <span className="text-dark_Gray mr-2 font-medium text-sm">$</span>
            <input
              type={"number"}
              className=" placeholder:text-dark_Gray text-black text-sm w-10 font-bold outline-none"
              value={25}
            />
          </div>
          <button
            className={`text-white text-sm rounded-full h-12 w-28 duration-200 cursor-pointer"
            aria-label="Select Reward ${
              completed ? "bg-dark_Gray" : "bg-moderate_Cyan hover:bg-darkCyan"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalPledgeInput
