import { Button, Header } from "./components"

function App() {
  return (
    <>
      <main className="bg-background_home w-full min-h-screen">
        <Header />

        <section className="flex items-center flex-col font-commissioner container  text-center gap-20 px-5 pt-14 md:pt-20 lg:w-3/4">
          <div>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white text-center leading-normal">
              Want To <span className="text-green_Text">Fund</span> Something
              But Short on Funds?
            </h1>
          </div>
          <div className="lg:w-3/4">
            <p className="text-xl md:text-3xl text-light_Text font-semibold leading-normal">
              We got you covered. Show what you want to be funded and let the
              generous public fund you
            </p>
          </div>

          <div className="flex items-center gap-6 mb-10">
            <Button name="Get Started" />
            <Button name="Explore" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
