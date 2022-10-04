import React from "react"

type Props = {
  progress: number
}

const ProgressBar = ({ progress }: Props) => {
  // const Parentdiv = {
  //   height: height,
  //   width: "100%",
  //   backgroundColor: "light_Gray",
  //   borderRadius: 40,
  //   margin: 50,
  // }

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "moderate_Cyan",
    borderRadius: 32,
    textAlign: "right",
  }

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
