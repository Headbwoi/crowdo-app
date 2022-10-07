import { useContext } from "react"
import { AppContext } from "./MainSection"
const FundHeader = () => {
  //@ts-ignore
  const { handleModalToggle } = useContext(AppContext)
  return (
    <section className="px-6 md:px-10 lg:px-12 bg-white rounded-lg w-full py-9 mt-[10.3125rem] md:mt-[12.5rem] shadow-sm relative">
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
      <div className="flex items-center justify-between mb-3">
        <button
          className="w-52 h-14 text-white text-lg font-medium bg-moderate_Cyan grid place-items-center rounded-full hover:bg-darkCyan duration-200"
          aria-label="Back this project"
          onClick={handleModalToggle}
        >
          Back this project
        </button>
        <button
          className="h-14 w-14 md:w-48 bg-light_Gray  rounded-full duration-200 flex items-center hover:opacity-70"
          aria-label="Bookmark this project"
        >
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span className="hidden md:grid place-items-center text-lg text-dark_Gray font-bold ml-4">
            Bookmark
          </span>
        </button>
      </div>
    </section>
  )
}

export default FundHeader
