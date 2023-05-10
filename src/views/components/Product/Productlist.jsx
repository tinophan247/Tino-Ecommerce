import React from 'react';
import Product from './Product1';

const Productlist = ({title, productData}) => {
  
    const newProductData = productData.slice(0,4);

  return (
    <div className='bg-white h-520 mb-12'>
      <div className='flex mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900 uppercase overline'>{title}</h2>
          <div className='mt-6 grid grid-cols-4 gap-x-6 gap-y-10  xl:gap-x-8'>
            {
              productData.length > 0 && newProductData.map((item,index)=>{
                return <Product item={item} key={index}/>
              })
            }
          </div>
        </div>     
      </div>
    </div>
  );
};

export default Productlist;