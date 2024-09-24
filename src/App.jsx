import React from 'react'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/error' element={ <Error/>} />
    </Routes>
  
      
  
  )
}

export default App