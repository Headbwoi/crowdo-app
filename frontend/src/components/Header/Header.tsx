import { useState } from "react"
import { CloseIcon } from "../../icons/CloseIcon"
import Hamburger from "../../icons/Hamburger"
import Links from "./Links"
import MobileMenu from "./MobileMenu"
import { AnimatePresence } from "framer-motion"
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="container px-6 md:px-10 xl:px-0 relative py-7 md:py-10">
      <nav className="flex items-center justify-between">
        <div className="logo">
          <img src="/icons/Logo.svg" alt="logo" className="h-20 w-36" />
        </div>
        {/* hamburger */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon /> : <Hamburger />}
        </div>
        <div className="hidden lg:flex items-center space-x-10 text-white">
          <Links name="about" color="white" font="normal" />
          <Links name="discover" color="white" font="normal" />
          <Links name="get started" color="white" font="normal" />
        </div>
      </nav>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && <MobileMenu />}
      </AnimatePresence>
    </header>
  )
}

export default Header
