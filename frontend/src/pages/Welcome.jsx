import React from 'react'
import Nav from '../components/Nav';
import Carrusel from '../components/Carousel';
import Carousel from '../components/Carousel';

const Welcome = () => {

  const isTokenAvailable = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
        <Nav></Nav>
        <Carousel></Carousel> 
    </div>
  )
}

export default Welcome