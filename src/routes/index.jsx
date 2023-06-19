import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/pages/Home';
import Register from '../views/pages/Register';
import ProductDetail from '../views/pages/Product/productDetail';
import Login from '../views/pages/Login'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductDetail />} /> 
      <Route path='/register' element={<Register name='Đăng ký'/>} />
      <Route path='/login' element={<Login name='Đăng nhập'/>} />
    </Routes>
  );
}

export default Router;