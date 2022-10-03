import Divider from "../Divider"
import ProgressBar from "../ProgressBar"

const FundInfo = () => {
  return (
    <section className="px-6 md:px-10 lg:px-12 bg-white rounded-lg w-full py-9 md:py-11 shadow-xl relative">
      <h2 className="sr-only">Statistics About the project</h2>

      <div className="flex items-center flex-col space-y-11 md:space-y-0 md:flex-row md:space-x-11  mb-6 md:mb-10">
        <div className="text-center md:text-left flex items-center flex-col md:flex-row">
          <div>
            <p className="text-4xl text-black font-bold mb-2.5">$89,914</p>
            <p className="text-base text-dark_Gray font-medium mb-5 md:mb-0 md:mr-11">
              of $100,000 backed
            </p>
          </div>
          <Divider />
        </div>
        <div className="text-center md:text-left flex items-center flex-col md:flex-row">
          <div>
            <p className="text-4xl text-black font-bold mb-2.5 block">5,007</p>
            <p className="text-base text-dark_Gray font-medium mb-5 md:mb-0 md:mr-11">
              total backers
            </p>
          </div>
          <Divider />
        </div>
        <div className="text-center md:text-left flex items-center flex-col md:flex-row">
          <div>
            <p className="text-4xl text-black font-bold mb-2.5">56</p>
            <p className="text-base text-dark_Gray font-medium mb-5 md:mb-0 md:mr-11">
              days left
            </p>
          </div>
        </div>
      </div>
      <ProgressBar progress="70" />
    </section>
  )
}

export default FundInfo
