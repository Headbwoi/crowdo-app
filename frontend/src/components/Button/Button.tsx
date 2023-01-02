import { Link } from "react-router-dom"

type Button = {
  name: string
  link?: string
  width?: string
  lgwidth?: string
}

const Button = ({ name, link, width, lgwidth }: Button) => {
  return (
    <button
      className={`${width ? width : "w-32"} h-12 ${
        lgwidth ? lgwidth : "lg:w-40"
      } lg:h-14 rounded-full bg-darkCyan text-white font-semibold text-sm md:text-lg hover:bg-moderate_Cyan duration-300`}
    >
      <Link
        to={`/${link ?? name.toString().replace(" ", "").trim().toLowerCase()}`}
      >
        {name}
      </Link>
    </button>
  )
}

export default Button
