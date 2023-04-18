 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default Router;