type Props = {
  pledgeHeading: string
  pledgeAmount: string
  aboutPledge: string
  stockLeft: string
}

const PledgeCard = ({
  pledgeHeading,
  pledgeAmount,
  aboutPledge,
  stockLeft,
}: Props) => {
  return (
    <div className="rounded-lg border border-dark_Gray/30 w-full p-5 md:p-7 hover:border-dark_Gray/70 duration-300 ">
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
          <span className="text-dark_Gray text-xs">left</span>
        </div>
        <button
          className="bg-moderate_Cyan text-white text-sm rounded-full h-12 w-40 hover:bg-darkCyan duration-200 cursor-pointer"
          aria-label="Select Reward"
        >
          Select Reward
        </button>
      </div>
    </div>
  )
}

export default PledgeCard
