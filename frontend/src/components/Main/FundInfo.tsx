import Divider from "../Divider"

const FundInfo = () => {
  return (
    <section className="px-6 md:px-10 lg:px-12 bg-white rounded-lg w-full py-9 md:py-11 mt-[10.3125rem] md:mt-[12.5rem] shadow-xl relative">
      <h2 className="sr-only">Statistics About the project</h2>

      <div className="flex items-center flex-col md:flex-row md:space-x-11">
        <div className="text-center md:text-left flex items-center md:items-baseline flex-col md:flex-row">
          <p className="text-4xl text-black font-bold mb-2.5">$89,914</p>
          <p className="text-base text-dark_Gray font-normal mb-5">
            of $100,000 backed
          </p>
          <Divider />
        </div>
      </div>
    </section>
  )
}

export default FundInfo
