import { useState } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import './App.css'

import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400 */}
      <div
        class="
      antialiased
    " >
        {/* header */}
        <Header />
        <div class="px-">
          {/* main */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
