type Props = {
  name: string
  color: string
  font: string
}
const Links = ({ name, color, font }: Props) => {
  return (
    <a
      href={`${name == "home" ? "/" : name.toLowerCase().replace(" ", "")}`}
      className={`text-${color} text-base font-${font} capitalize hover:opacity-70 duration-150 cursor-pointer`}
    >
      {name}
    </a>
  )
}

export default Links
