import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const goPage = (num) => {
    if (num === 1) {
      navigate('/films');
    } else if (num === 2) {
      navigate('/directors');
    }
  };

  const username = localStorage.getItem('user');

  return (
    <>
      <nav className="bg-primary h-16">
        <div className="flex justify-between items-center">
          <h1 className="ml-16 mt-4 text-white text-2xl">
            
            Welcome {username}
          </h1>
          <div className="text-end mr-16 mt-4">
            <button
              onClick={() => goPage(1)}
              className="bg-second py-2 px-4 text-white rounded-md hover:bg-third mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Movies
            </button>
            <button
              onClick={() => goPage(2)}
              className="bg-second py-2 px-4 text-white rounded-md hover:bg-third mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Directors
            </button>
            <button
              onClick={handleLogout}
              className="bg-second py-2 px-4 text-white rounded-md hover:bg-third transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Cerrar Sesion
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;