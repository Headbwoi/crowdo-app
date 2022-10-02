import FundHeader from "./FundHeader"
import FundInfo from "./FundInfo"

const MainSection = () => {
  return (
    <main className="relative w-full md:w-[45.625rem] mx-auto px-6 space-y-8">
      <FundHeader />
      <FundInfo />
    </main>
  )
}

export default MainSection
