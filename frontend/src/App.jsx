import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginForm></LoginForm>}></Route>
    <Route path='/welcome' element={<Welcome></Welcome>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App