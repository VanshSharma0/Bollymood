import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Buttons/>
      <Footer/>
    </>
  )
}

export default App
