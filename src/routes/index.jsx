 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/pages/Home';
import Register from '../views/pages/Register';
import ProductDetail from '../views/pages/Product/productDetail';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/product/id' element={<ProductDetail />} /> 
    </Routes>
  );
}

export default Router;