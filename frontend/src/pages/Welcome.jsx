import React from 'react'
import Nav from '../components/Nav';
import Carrusel from '../components/Carousel';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Welcome = () => {

  const isTokenAvailable = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div style={{ height: '100vh' }}>
        <Nav></Nav>
        <Carousel></Carousel>
        <Footer></Footer> 
    </div>
  )
}

export default Welcome