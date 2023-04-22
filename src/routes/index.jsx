 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/pages/Home';
import Register from '../views/pages/Register';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default Router;