import React from 'react'
import {useNavigate} from 'react-router-dom'

const HeaderAppFilms = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/'; 
  };

  const backMenu = () => {
    navigate('/welcome')
  }

  const createFilm = () => {
    navigate('/newdirector')
  }

  return (
    <>
    <nav className='bg-primary h-16'>
      <div className='flex justify-between items-center'>
        <h1 className='ml-16 mt-4 text-white text-2xl cursor-pointer' onClick={backMenu}>Menu</h1>
        <div className='text-end mr-16 mt-4'>
        <button onClick={createFilm} className='bg-second py-2 px-4 text-white rounded-md hover:bg-alter mr-5'>Add Film</button>

        <button onClick={handleLogout} className='bg-second py-2 px-4 text-white rounded-md hover:bg-alter '>Cerrar Sesion</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default HeaderAppFilms