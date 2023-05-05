/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchField from '../SearchField';

const Header = () => {
  return (
    <div className='w-full'>
        <div className='bg-black flex justify-end h-10 items-center'>
          <div className='mr-10 flex'>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Tài khoản</button>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Giỏ hàng</button>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Đăng nhập</button>
          </div>
      </div>
      <div className='bg-te-logo h-56 flex justify-center '>
        <div className='w-1600 items-center justify-between flex'>
          <img className='h-56' src='./images/logo.png' alt='not-found' />
          <SearchField/>
          <div className='flex'>
            <div className='w-14 h-14 bg-white flex items-center justify-center'>
              <LocalPhoneIcon />
            </div>
            <div className='w-40 h-14 bg-blue-300'>
              <div>
                <p className='flex justify-center uppercase font-semibold'>Hotline</p>
                <p className='flex justify-center font-semibold'>079-558-2457</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className='bg-black h-16 flex justify-center'>
          <div className='flex justify-between w-1500'>
          <div className='w-full flex'>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300 uppercase'>Trang chủ</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300 uppercase'>Nước hoa nam</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300 uppercase'>Nước hoa nữ</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300 uppercase'>Liên hệ</button>
          </div>
          <button className='flex justify-center group'>
            <div className='flex justify-center items-center bg-blue-300 w-16 h-16 group-hover:bg-te-facebook group-hover:text-white'>
              <ShoppingCartIcon />
            </div>
            <div className='flex justify-center items-center bg-white w-16 h-16 group-hover:bg-te-facebook group-hover:text-white text-base font-medium'>2</div>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
