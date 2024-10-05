
import Footer from "./components/footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Outlet />
      
    </main>
    <Footer />
  </div>

  )
}

export default App
