import { Header, HeroSection } from "./components"

function App() {
  return (
    <>
      <main className="relative w-full min-h-screen bg-background">
        <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-[url('/images/hero-image.svg')] before:md:bg-[url('/images/hero-image-desktop.svg')] before:bg-no-repeat before:bg-cover before:bg-center before:-z-10 opacity-20 "></div>
        <Header />
        <HeroSection />
      </main>
    </>
  )
}

export default App
