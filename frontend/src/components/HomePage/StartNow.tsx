import Button from "../Button/Button"

function StartNow() {
  return (
    <section className="container px-5 xl:px-0 py-20">
      <div className="bg-black/60 px-5 md:px-10 py-10 md:py-20 rounded-lg flex items-center justify-between flex-col md:flex-row gap-14">
        <div className="">
          <p className="text-darkCyan text-2xl md:text-4xl text-center md:text-start">
            Ready to get started? join others today.
          </p>
        </div>
        <div className="flex items-center gap-5 px-10">
          <Button name="Get Started" />
          <Button name="How It Works" />
        </div>
      </div>
    </section>
  )
}

export default StartNow
