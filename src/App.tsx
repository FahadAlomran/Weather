import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Get from './component/Get'
import Footer from './component/Footer'
import Nav from './component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Nav/>
    <Get/>
    
      
      <Footer/>
      
    </>
  )
}

export default App
