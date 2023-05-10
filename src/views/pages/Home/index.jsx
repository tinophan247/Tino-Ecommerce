import React from 'react';
import Header from '../../components/Header/Header';
<<<<<<< HEAD
import Productlist from '../../components/Product/Productlist';
import { bestSellerProduct, newProduct, saleProduct } from '../../../constant';
=======
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
>>>>>>> te-11

const HomePage = () => {
  return (
    <div className='w-full '>
      <Header />
<<<<<<< HEAD
      <Productlist title='Sản phẩm mới' productData={newProduct}/>
      <Productlist title='Đang bán chạy' productData={bestSellerProduct}/>
      <Productlist title='Đang giảm giá' productData={saleProduct}/>
=======
      <Carousel/>
      <Footer/>
>>>>>>> te-11
    </div>
  );
};

export default HomePage;
