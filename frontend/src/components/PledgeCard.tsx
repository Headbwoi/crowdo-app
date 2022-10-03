type Props = {
  pledgeHeading: string
  pledgeAmount: string
  aboutPledge: string
  stockLeft: string
  completed?: boolean
}

const PledgeCard = ({
  pledgeHeading,
  pledgeAmount,
  aboutPledge,
  stockLeft,
  completed,
}: Props) => {
  stockLeft == "0" ? (completed = true) : (completed = false)
  return (
    <div
      className={`rounded-lg border border-dark_Gray/30 w-full p-5 md:p-7 hover:border-dark_Gray/70 duration-300 ${
        completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex md:items-center flex-col md:flex-row md:justify-between mb-5 md:mb-7">
        <p
          className="heading text-black text-lg font-bold"
          aria-label="pledge title: Bamboo Stand"
        >
          {pledgeHeading}
        </p>
        <p
          className="heading text-moderate_Cyan font-medium text-sm"
          aria-label="pledge amount: Pledge $25 or more"
        >
          Pledge {`$${pledgeAmount}`} or more
        </p>
      </div>
      <p className="mb-6 md:mb-7 text-dark_Gray font-medium text-sm">
        {aboutPledge}
      </p>
      <div className="flex md:items-center flex-col md:flex-row md:justify-between">
        <div className="flex items-center space-x-2 mb-5 md:mb-0">
          <p className="text-black text-2xl font-bold">{stockLeft}</p>
          <span className="text-dark_Gray text-xs font-medium">left</span>
        </div>
        <button
          className={`text-white text-sm rounded-full h-12 w-40 duration-200 cursor-pointer"
          aria-label="Select Reward ${
            completed ? "bg-dark_Gray" : "bg-moderate_Cyan hover:bg-darkCyan"
          }`}
        >
          {`${completed ? "Out Of Stock" : "Select Reward"}`}
        </button>
      </div>
    </div>
  )
}

export default PledgeCard
