type Button = {
  name: string
}

const Button = ({ name }: Button) => {
  return (
    <button className="w-36 h-12 lg:w-52 lg:h-20 rounded-full bg-darkCyan text-white font-semibold text-base md:text-2xl">
      {name}
    </button>
  )
}

export default Button
