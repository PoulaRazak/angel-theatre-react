import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MainHome from './pages/MainPage'
import OldShows from './pages/OldShows'

function App() {

  return (
    // overflow-x-hidden kills horizontal scroll globally
    // Navbar is fixed/overlay so it floats above the hero automatically
    <div style={{ overflowX: "hidden" }}>
      {/* <Navbar />
      <MainHome />
      <Footer/> */}
      <OldShows/>
    </div>
  )
}

export default App
