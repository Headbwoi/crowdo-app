import { useAuthContext } from "../../hooks/useAuthContext"
import LogOut from "../Button/LogOut"
import Links from "./Links"
import { motion } from "framer-motion"
const menuVariant = {
  show: {
    y: [-100, 0],
    x: "-50%",
    opacity: [0, 1],
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: [1, 0],
    y: [0, -100],
    transition: { duration: 0.5 },
  },
}

const navItems: string[] = ["home", "about", "discover", "get started"]

const MobileMenu = () => {
  const { state } = useAuthContext()
  return (
    <motion.div
      className="absolute top-20 left-1/2 -translate-x-1/2 bg-white rounded-lg h-56 mobile z-30 shadow-2xl"
      initial={{ opacity: 0, x: "-50%" }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <div className="flex flex-col items-start justify-between h-full w-full">
        {navItems.map((item) => (
          <li
            className="list-none h-[70px] flex items-center px-6 border-b border-dark_Gray w-full hover:bg-dark_Gray/10"
            key={item}
          >
            <Links name={item} color="black" font="medium" />
          </li>
        ))}
        <div className="px-6">
          {!state.user?.token ? "" : <LogOut color="blaxk" width="full" />}
        </div>
      </div>
    </motion.div>
  )
}

export default MobileMenu
