type Props = {
  progress: number
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className={`h-4 w-full bg-light_Gray rounded-full `}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "hsl(176, 50%, 47%)",
          borderRadius: "9999px",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  )
}

export default ProgressBar
