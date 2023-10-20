import './App.css'
import AppRoutes from "./routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='container'>
          <div className='obj-comp'>
            <AppRoutes />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default App