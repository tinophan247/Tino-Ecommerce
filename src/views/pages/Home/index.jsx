import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className='w-full '>
      <Header />
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default HomePage;