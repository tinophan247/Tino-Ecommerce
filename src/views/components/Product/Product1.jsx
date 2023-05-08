import React from 'react';

const Product = ({item}) => {
  return (
    <div className='group relative'>
      <div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          src={item.img}
          alt="Front of men's Basic Tee in black."
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex'>
        <div>
          <h3 className='text-2xl font-medium text-gray-700 h-16'>
            <div>
              <span aria-hidden='true' className=' absolute inset-0' />
              {item.name}
            </div>
          </h3>
          <div className='flex items-center'>
            <p className='text-3xl font-bold text-red-500'>{item.salePrice !== null ? item.salePrice : item.oldPrice}đ</p>
            <h1 className='text-xl font-medium text-gray-400 line-through justify-center ml-5 '>{item.salePrice !== null ? `${item.oldPrice}đ` : ''}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
