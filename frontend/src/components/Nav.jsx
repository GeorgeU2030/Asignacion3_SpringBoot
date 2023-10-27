import React from 'react'

const Nav = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <>
    <nav className='bg-primary h-16'>
      <div className='flex justify-between items-center'>
        <h1 className='ml-16 mt-4 text-white text-2xl'>Welcome</h1>
        <div className='text-end mr-16 mt-4'>
          <button onClick={handleLogout} className='bg-second py-2 px-4 text-white rounded-md hover:bg-third '>Cerrar Sesion</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav