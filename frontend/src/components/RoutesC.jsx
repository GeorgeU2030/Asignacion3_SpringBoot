import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from './LoginForm';
import Welcome from '../pages/Welcome';
import FilmPage from '../pages/FilmPage';
import DirectorPage from '../pages/DirectorPage';

function isToken(){
  const tok = localStorage.getItem('token')
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
        <Route path='/' element={isToken() ? <Navigate to='/welcome'></Navigate>:<LoginForm></LoginForm>}></Route>
        <Route
          path="/*"
          element={
            <ProtectedRoute
              element={<Routes>
                <Route path="/welcome" element={<Welcome></Welcome>} />
                <Route path="/films" element={<FilmPage></FilmPage>} />
                <Route path="/directors" element={<DirectorPage></DirectorPage>} />
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