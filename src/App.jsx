import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            {routes.map(({ path, screen}, index )=>(
              <Route key={index} path={path} element={screen}/>
            ))}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
