type Step = {
  digit: number
}
type Heading = {
  content: string
}

function GettingStarted() {
  return (
    <section className="bg-background py-16 px-5">
      <div className="container">
        <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-10 md:mb-16">
          How To Get Started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* first one */}
          <div className="">
            <Step digit={1} />
            <Heading content="start with the basics" />
            <Body content="sign up with your name, email and location" />
          </div>
          {/* second one */}
          <div className="">
            <Step digit={2} />
            <Heading content="Tell us your Story" />
            <Body content="so we can help with tips  along the way" />
          </div>
          <div className="">
            <Step digit={3} />
            <Heading content="Share with friends and family" />
            <Body content="People are willing to help you" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted

function Step({ digit }: Step) {
  return (
    <div className="w-10 h-10 rounded-full bg-darkCyan text-white grid place-items-center mb-4">
      {digit}
    </div>
  )
}

function Heading({ content }: Heading) {
  return (
    <p className="text-moderate_Cyan text-lg md:text-xl capitalize font-semibold mb-3">
      {content}
    </p>
  )
}
function Body({ content }: Heading) {
  return (
    <p className="text-light_Text text-base md:text-lg font-normal">
      {content}
    </p>
  )
}
