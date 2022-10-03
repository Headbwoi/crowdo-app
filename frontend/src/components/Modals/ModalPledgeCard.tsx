type Props = {
  pledgeHeading: string
  pledgeAmount: string
  aboutPledge: string
  stockLeft: string
  completed?: boolean
}

const ModalPledgeCard = ({
  pledgeHeading,
  pledgeAmount,
  aboutPledge,
  stockLeft,
  completed,
}: Props) => {
  return (
    <div
      className={`rounded-lg border border-dark_Gray/30 w-full py-5 md:py-7 hover:border-dark_Gray/70 duration-300 relative ${
        completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex md:items-center mb-5 md:mb-7 group cursor-pointer px-5 md:px-7">
        <div className="flex items-center  space-x-4">
          <div className="grid place-items-center w-7 h-7 rounded-full border border-dark_Gray/30">
            <div className="w-4 h-4 rounded-full bg-white group-hover:bg-moderate_Cyan duration-200 group-focus:bg-moderate_Cyan"></div>
          </div>
          <div className="md:flex md:items-center md:space-x-4">
            <p
              className="heading text-black text-lg font-bold group-hover:text-moderate_Cyan duration-200"
              aria-label="pledge title: Bamboo Stand"
            >
              {pledgeHeading}
            </p>
            <p
              className="heading text-moderate_Cyan font-bold text-sm"
              aria-label="pledge amount: Pledge $25 or more"
            >
              Pledge {`$${pledgeAmount}`} or more
            </p>
          </div>
        </div>
      </div>
      <p className="mb-6 md:mb-7 text-dark_Gray font-medium text-sm md:pl-[4.4rem] px-5 md:pr-7">
        {aboutPledge}
      </p>
      <div className="flex md:items-center flex-col md:flex-row md:justify-between">
        <div className="flex items-center space-x-2 mb-5 md:mb-0 md:absolute md:top-6 md:right-5 px-5 md:px-7">
          <p className="text-black text-xl font-bold">{stockLeft}</p>
          <span className="text-dark_Gray text-xs font-medium">left</span>
        </div>

        <span className="block h-[1px] w-full bg-dark_Gray/30"></span>
      </div>
    </div>
  )
}

//   <button
//           className={`text-white text-sm rounded-full h-12 w-40 duration-200 cursor-pointer"
//             aria-label="Select Reward ${
//               completed ? "bg-dark_Gray" : "bg-moderate_Cyan hover:bg-darkCyan"
//             }`}
//         >
//           {`${completed ? "Out Of Stock" : "Select Reward"}`}
//         </button>

export default ModalPledgeCard
