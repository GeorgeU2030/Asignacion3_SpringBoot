import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderApp = ({ headerTitle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const backMenu = () => {
    navigate('/welcome');
  };

  const createdirector = () => {
    navigate('/newdirector');
  };

  const backDirectors=()=>{
    navigate('/directors')
  }

  return (
    <>
      <nav className='bg-second h-16'>
        <div className='flex justify-between items-center'>
          {headerTitle === 'ListDirector' && (
          <>
          <h1
            className='ml-16 mt-4 text-white text-2xl cursor-pointer hover:mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
            onClick={backMenu}
          >
            ⟵Menu
          </h1>
          </>
          )}
          {headerTitle === 'ReadDirector' && (
          <>
          <h1
            className='ml-16 mt-4 text-white text-2xl cursor-pointer hover:mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
            onClick={backDirectors}
          >
            ⟵Directors
          </h1>
          </>
          )}
          <div className='text-end mr-16 mt-4'>
            {headerTitle === 'ListDirector' && (
              <>
                <button
                  onClick={createdirector}
                  className='bg-alter py-2 px-4 text-white rounded-md hover:bg-alter mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                >
                  Add Director
                </button>
                <button
                  onClick={handleLogout}
                  className='bg-second py-2 px-4 text-white rounded-md hover:bg-second transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                >
                  Cerrar Sesion
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderApp;
