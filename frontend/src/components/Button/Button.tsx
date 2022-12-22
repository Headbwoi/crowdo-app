import { Link } from "react-router-dom"

type Button = {
  name: string
}

const Button = ({ name }: Button) => {
  return (
    <button className="w-36 h-12 lg:w-40 lg:h-14 rounded-full bg-darkCyan text-white font-semibold text-base md:text-lg hover:bg-moderate_Cyan duration-300">
      <Link to={`/${name.toString().replace(" ", "").trim().toLowerCase()}`}>
        {name}
      </Link>
    </button>
  )
}

export default Button
