import Header from "./components/Header/Header"
import MainSection from "./components/Main/MainSection"
import { AppContextProvider } from "./components/context/AppContext"

function App() {
  return (
    <>
      <Header />
      <div className="bg-light_Gray">
        <AppContextProvider>
          <MainSection />
        </AppContextProvider>
      </div>
    </>
  )
}

export default App
