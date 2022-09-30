import Links from "./Links"
import { motion } from "framer-motion"
const menuVariant = {
  show: {
    y: [100, 0],
    x: "-50%",
    opacity: [0, 1],
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: [1, 0],
    y: [0, 100],
    transition: { duration: 0.5 },
  },
}
const MobileMenu = () => {
  return (
    <motion.div
      className="absolute top-20 left-1/2 -translate-x-1/2 bg-white rounded-lg h-56 mobile"
      initial={{ opacity: 0, x: "-50%" }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <div className="flex flex-col items-start justify-between h-full w-full">
        <li className="list-none h-[70px] flex items-center px-6 border-b border-dark_Gray w-full ">
          <Links name="about" color="black" font="medium" />
        </li>
        <li className="list-none h-[70px] flex items-center px-6 border-b border-dark_Gray w-full ">
          <Links name="discover" color="black" font="medium" />
        </li>
        <li className="list-none h-[70px] flex items-center px-6  w-full ">
          <Links name="get started" color="black" font="medium" />
        </li>
      </div>
    </motion.div>
  )
}

export default MobileMenu
