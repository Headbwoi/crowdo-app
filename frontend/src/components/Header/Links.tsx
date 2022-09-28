type Props = {
  name: string
}
const Links = ({ name }: Props) => {
  return (
    <a
      href={`/${name}`}
      className="text-white text-base font-normal capitalize"
    >
      {name}
    </a>
  )
}

export default Links
