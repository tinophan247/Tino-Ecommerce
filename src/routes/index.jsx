import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/pages/Home';
import Register from '../views/pages/Register';
import Login from '../views/pages/Login'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register name='Đăng ký'/>} />
      <Route path='/login' element={<Login name='Đăng nhập'/>} />
    </Routes>
  );
}

export default Router;