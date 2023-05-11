import React from 'react';
import { convertNumberToVND } from '../../utils/helper';

const Product = ({ item }) => {
  return (
    <div className='group relative'>
      <div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img src={item.img} alt='not-found' className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
      </div>
      <div className='mt-4 flex'>
        <div>
          <h3 className='text-2xl font-medium text-gray-700 h-16'>
            <div>
              <span className=' absolute inset-0' />
              {item.name}
            </div>
          </h3>
          <h1 className='text-base font-medium text-gray-400 line-through justify-center'>
            {item.salePrice !== null ? `${convertNumberToVND(item.oldPrice)}` : ''}
          </h1>
          <p className='text-xl font-bold text-red-500'>{convertNumberToVND(item.salePrice !== null ? item.salePrice : item.oldPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
