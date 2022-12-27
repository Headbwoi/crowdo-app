import { Link } from "react-router-dom"
import { linksOne, linksThree, linksTwo } from "./helper"

type LinkEl = {
  name: string
}
function Footer() {
  return (
    <footer className="">
      <section className="flex flex-col md:flex-row items-center md:items-start container px-5 md:px-0">
        {/* logo */}
        <div className="w-56 mb-10">
          <img src="/icons/logo.svg" alt="logo" className="w-full h-full" />
        </div>
        {/* links */}
        <div className="mb-5 md:mb-0">
          <p className="text-darkCyan mb-4">Fundraise for</p>
          <div className="flex flex-col gap-1">
            {linksOne.map((item) => (
              <LinkEl name={item} key={item} />
            ))}
          </div>
        </div>

        {/* links two */}
        <div className="mb-5 md:mb-0">
          <p className="text-darkCyan mb-4 text-center">Learn More</p>
          <div className="flex flex-col gap-1">
            {linksTwo.map((item) => (
              <LinkEl name={item} key={item} />
            ))}
          </div>
        </div>

        {/* links three */}
        <div className="mb-5 md:mb-0">
          <p className="text-darkCyan mb-4 text-center">Resources</p>
          <div className="flex flex-col gap-1">
            {linksThree.map((item) => (
              <LinkEl name={item} key={item} />
            ))}
          </div>
        </div>
      </section>
      <span className="block w-full h-[2px] bg-dark_Gray/20 my-7"></span>
      <section className="container px-5 lg:px-0 flex items-center justify-between flex-col md:flex-row gap-5 pb-5">
        <div className="flex items-center flex-col md:flex-row gap-2 text-light_Text">
          <p>Copyright © 2022 Xeux. </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-2 text-light_Text">
          <p>Terms of Use </p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer

function LinkEl({ name }: LinkEl) {
  return (
    <Link to={"/"} className="text-light_Gray text-center md:text-start">
      {name}
    </Link>
  )
}
