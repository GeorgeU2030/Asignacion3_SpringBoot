import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from './LoginForm';
import Welcome from '../pages/Welcome';

function isToken(){
  const tok = localStorage.getItem('token')
  console.log(tok)
  return tok !== null
}

const ProtectedRoute = ({ element }) => {
  return isToken() ? element : <Navigate to="/login" />;
};

const RoutesC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm></LoginForm>} />
        <Route
          path="/*"
          element={
            <ProtectedRoute
              element={<Routes>
                <Route path="/welcome" element={<Welcome></Welcome>} />
              </Routes>}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default RoutesC;