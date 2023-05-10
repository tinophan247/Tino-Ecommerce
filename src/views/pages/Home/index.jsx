import React from 'react';
import Header from '../../components/Header/Header';
import Productlist from '../../components/Product/Productlist';
import { bestSellerProduct, newProduct, saleProduct } from '../../../constant';


const HomePage = () => {
  return (
    <div className='w-full '>
      <Header />
      <Productlist title='Sản phẩm mới' productData={newProduct}/>
      <Productlist title='Đang bán chạy' productData={bestSellerProduct}/>
      <Productlist title='Đang giảm giá' productData={saleProduct}/>

    </div>
  );
};

export default HomePage;
