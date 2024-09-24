import React from 'react'
import Home from './pages/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/NotFound.tsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/error' element={ <Error/>} />
    </Routes>
  
      
  
  )
}

export default App