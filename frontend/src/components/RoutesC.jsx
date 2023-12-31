import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from './LoginForm';
import Welcome from '../pages/Welcome';
import FilmPage from '../pages/FilmPage';
import DirectorPage from '../pages/DirectorPage';
import DirectorFormPage from '../pages/DirectorFormPage';
import FilmFormPage from '../pages/FilmFormPage';

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
                <Route path="/newFilm" element={<FilmFormPage></FilmFormPage>} />
                <Route path="/film/:id" element={<FilmFormPage></FilmFormPage>} />
                <Route path="/directors" element={<DirectorPage></DirectorPage>} />
                <Route path="/newdirector" element={<DirectorFormPage></DirectorFormPage>} />
                <Route path="/newfilm" element={<FilmFormPage></FilmFormPage>} />
                <Route path='/director/:id' element={<DirectorFormPage></DirectorFormPage>} />
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