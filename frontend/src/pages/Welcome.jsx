import React from 'react'
import Nav from '../components/Nav';

const Welcome = () => {

  const isTokenAvailable = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  return (
    <div>
        <Nav></Nav>
    </div>
  )
}

export default Welcome