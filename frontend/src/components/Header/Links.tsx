type Props = {
  name: string
  color: string
  font: string
}
const Links = ({ name, color, font }: Props) => {
  return (
    <a
      href={`/${name}`}
      className={`text-${color} text-base font-${font} capitalize hover:text-${color}/80`}
    >
      {name}
    </a>
  )
}

export default Links
