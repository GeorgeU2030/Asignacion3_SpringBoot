import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {

    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/auth', {
    username: 'user',
    password: '12345'
    })
    .then(response => {
  console.log('Respuesta del servidor:', response.data);
  navigate('/welcome')
    })
    .catch(error => {
  console.error('Error:', error);
});
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
