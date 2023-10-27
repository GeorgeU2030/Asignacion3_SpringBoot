import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Welcome from './pages/Welcome'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isToken(){
  const tok = localStorage.getItem('token')
  console.log(tok)
  return tok !== null
}

const App = () => {

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' 
    element={isToken() ? <Navigate to='/welcome'></Navigate>:<LoginForm></LoginForm>}></Route>
    <Route path='/welcome' element={<Welcome></Welcome>}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  )
}

export default App