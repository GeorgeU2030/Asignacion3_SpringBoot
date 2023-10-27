import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'

function isToken(){
  const tok = localStorage.getItem('token')
  console.log(tok)
  return tok !== null
}


const App = () => {

  const isTokenAvailable = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    // Elimina el token del Local Storage
    localStorage.removeItem('token');

    // Redirige al usuario a la página de inicio de sesión u otra página deseada
    window.location.href = '/'; // Cambia '/login' a la ruta que prefieras
  };

  return (
    <div>
      {isTokenAvailable && (
        <button onClick={handleLogout}>Cerrar Sesión</button>
      )}
    <BrowserRouter>
    <Routes>
    <Route path='/' 
    element={isToken() ? <Navigate to='/welcome'></Navigate>:<LoginForm></LoginForm>}></Route>
    <Route path='/welcome' element={<Welcome></Welcome>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App