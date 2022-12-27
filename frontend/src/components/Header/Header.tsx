import { useState } from "react"
import { CloseIcon } from "../../icons/CloseIcon"
import Hamburger from "../../icons/Hamburger"
import Links from "./Links"
import MobileMenu from "./MobileMenu"
import { AnimatePresence } from "framer-motion"

const navItems: string[] = ["home", "about", "discover", "get started"]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="flex items-center justify-center  w-full h-16 md:h-20 lg:h-[5rem] bg-body/80 -mb-[1px] fixed top-0 left-0 z-50 shadow-lg px-6 md:px-10 lg:px-14 backdrop-blur-lg">
      <nav className=" w-full flex items-center justify-between">
        <div className="logo">
          <img src="/icons/logo.svg" alt="logo" className="h-20 w-36" />
        </div>
        {/* hamburger */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon /> : <Hamburger />}
        </div>
        <div className="hidden lg:flex items-center space-x-10 text-white">
          {navItems.map((item) => (
            <Links name={item} color="white" font="normal" />
          ))}
        </div>
      </nav>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && <MobileMenu />}
      </AnimatePresence>
    </header>
  )
}

export default Header
