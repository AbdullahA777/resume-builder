import AboutApp from "./components/About"
import BuildCV from "./components/BuildCV"
import Footer from "./components/footer"
import Header from "./components/Header"


function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <AboutApp />
      <BuildCV />
    </main>
    <Footer />
  </div>

  )
}

export default App
