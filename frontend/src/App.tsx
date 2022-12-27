import { Header } from "./components"
import {
  Footer,
  GettingStarted,
  HeroSection,
  SecurityTrust,
  StartNow,
} from "./components/HomePage"

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-background overflow-hidden">
        <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-[url('/images/hero-image.svg')] before:md:bg-[url('/images/hero-image-desktop.svg')] before:bg-no-repeat before:bg-cover before:bg-center before:-z-10 opacity-20 "></div>
        <Header />
        <HeroSection />
      </div>

      <GettingStarted />
      <SecurityTrust />
      <StartNow />
      <Footer />
    </>
  )
}

export default App
