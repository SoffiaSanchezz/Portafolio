import { useState } from 'react'

import Landing from './Pages/Landing'
import About from './Pages/About'
import Portafolio from './Pages/Portafolio'
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/portafolio' element={<Portafolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
