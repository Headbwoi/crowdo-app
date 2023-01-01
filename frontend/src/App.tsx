import Layout from "./Layout/Layout"
import {
  GettingStarted,
  HeroSection,
  SecurityTrust,
  StartNow,
} from "./components/HomePage"

function App() {
  return (
    <>
      <Layout>
        <div className="relative min-h-screen w-full bg-background overflow-hidden">
          <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-[url('/images/hero-image.svg')] before:md:bg-[url('/images/hero-image-desktop.svg')] before:bg-no-repeat before:bg-cover before:bg-center before:-z-10 opacity-20 "></div>
          <HeroSection />
        </div>

        <GettingStarted />
        <SecurityTrust />
        <StartNow />
      </Layout>
    </>
  )
}

export default App
