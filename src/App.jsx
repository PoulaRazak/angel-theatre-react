import './App.css'
import Navbar from './components/Navbar'
import MainHome from './pages/MainPage'

function App() {

  return (
    // overflow-x-hidden kills horizontal scroll globally
    // Navbar is fixed/overlay so it floats above the hero automatically
    <div style={{ minHeight: "200vh", overflowX: "hidden" }}>
      <Navbar />
      <MainHome />
    </div>
  )
}

export default App
