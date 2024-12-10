import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes'
import Footer from './Components/Footer'
import Book from './Screens/Book'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            {routes.map(({ path, screen}, index )=>(
              <Route key={index} path={path} element={screen}/>
            ))}
              <Route path='/product/:id' element={<Book />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
