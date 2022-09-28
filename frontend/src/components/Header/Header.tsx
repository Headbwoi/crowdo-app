import Hamburger from "../../icons/Hamburger"
import Links from "./Links"
import MobileMenu from "./MobileMenu"

function Header() {
  return (
    <header className="container px-6 md:px-10 xl:px-0 relative py-7 md:py-10">
      <nav className="flex items-center justify-between">
        <div className="logo">
          <img src={"./images/logo.svg"} alt="crappo logo" />
        </div>
        {/* hamburger */}
        <div className="lg:hidden cursor-pointer">
          <Hamburger />
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          <Links name="about" color="white" font="normal" />
          <Links name="discover" color="white" font="normal" />
          <Links name="get started" color="white" font="normal" />
        </div>
      </nav>
      <div>
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
