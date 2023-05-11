import React from 'react';
import Header from '../../components/Header/Header';
import Productlist from '../../components/Product/Productlist';
import { bestSellerProduct, newProduct, saleProduct } from '../../../constant';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className='w-full '>
      <Header />
      <Carousel/>
      <Productlist title='Sản phẩm mới' productData={newProduct}/>
      <Productlist title='Đang bán chạy' productData={bestSellerProduct}/>
      <Productlist title='Đang giảm giá' productData={saleProduct}/>
      <Footer/>
    </div>
  );
};

export default HomePage;