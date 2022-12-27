import { Header } from "./components"
import { GettingStarted, HeroSection } from "./components/HomePage"

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-background">
        <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-[url('/images/hero-image.svg')] before:md:bg-[url('/images/hero-image-desktop.svg')] before:bg-no-repeat before:bg-cover before:bg-center before:-z-10 opacity-20 "></div>
        <Header />
        <HeroSection />
      </div>

      <GettingStarted />
    </>
  )
}

export default App
