const FundHeader = () => {
  return (
    <section className="px-6 md:px-10 bg-white rounded-lg w-full py-9 mt-[10.3125rem] md:mt-[12.5rem] shadow-xl relative">
      <h1 className="sr-only">Name of Ptoject that Needs Funding</h1>
      <img
        src="/images/logo-mastercraft.svg"
        alt="Company's Logo"
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-14 w-14 -mt-7"
      />
      <div className="content text-center mt-5 mb-6">
        <h2 className="text-black text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-5">
          Mastercraft Bamboo Monitor Riser
        </h2>
        <p className="text-dark_Gray text-base font-normal">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      {/* buttons */}
      <div className="flex items-center justify-between">
        <button
          className="w-52 h-14 text-white text-lg font-medium bg-moderate_Cyan grid place-items-center rounded-full hover:bg-darkCyan duration-200"
          aria-label="Back this project"
        >
          Back this project
        </button>
        <button
          className="h-14 w-14 md:w-52 text-white text-lg font-medium bg-light_Gray grid place-items-center rounded-full hover:bg-darkCyan duration-200"
          aria-label="Bookmark"
        >
          Bookmark
        </button>
      </div>
    </section>
  )
}

export default FundHeader
