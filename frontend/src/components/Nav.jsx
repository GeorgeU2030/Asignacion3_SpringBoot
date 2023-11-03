import React from 'react'

const Nav = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/'; 
  };

  const username = localStorage.getItem('user');

  return (
    <>
    <nav className='bg-primary h-16'>
      <div className='flex justify-between items-center'>
        <h1 className='ml-16 mt-4 text-white text-2xl'>Welcome {username}</h1>
        <div className='text-end mr-16 mt-4'>
        <button onClick={handleLogout} className='bg-second py-2 px-4 text-white rounded-md hover:bg-third mr-5'>Movies</button>
        <button onClick={handleLogout} className='bg-second py-2 px-4 text-white rounded-md hover:bg-third mr-5'>Directors</button>
          <button onClick={handleLogout} className='bg-second py-2 px-4 text-white rounded-md hover:bg-third '>Cerrar Sesion</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav