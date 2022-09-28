import Links from "./Links"

const MobileMenu = () => {
  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white rounded-lg h-56 mobile">
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
    </div>
  )
}

export default MobileMenu
