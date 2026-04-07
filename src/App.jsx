import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import AboutUs from './pages/Aboutus'
import MainHome from './pages/MainPage'
import OldShows from './pages/OldShows'
import ShowDetails from './pages/ShowDetails'
import AppRouter from './routes'

function App() {

  return (
    // overflow-x-hidden kills horizontal scroll globally
    // Navbar is fixed/overlay so it floats above the hero automatically
    <div style={{ overflowX: "hidden" }}>
     <AppRouter/>
    </div>
  )
}

export default App
