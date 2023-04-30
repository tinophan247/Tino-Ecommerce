/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Header() {
  return (
    <div className='w-full'>
      <div>
        <div className='bg-black flex justify-end h-10 items-center'>
          <div className='mr-10 flex'>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Tài khoản</button>

            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Giỏ hàng</button>

            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Đăng nhập</button>
          </div>
        </div>
      </div>

      <div className='bg-[#D2ECED] flex h-56 items-start'>
        <div>
          <div className='flex justify-start'>
            <img
              className='h-56'
              src='https://raw.githubusercontent.com/tinophan247/Tino-Ecommerce/2537a9043cacddbf03b0f4b35773742ddf111f62/public/images/logo.png'
            />{' '}
          </div>
        </div>
        <div>
          <div className='search-box flex justify-center mt-20 ml-16'>
            <input className='search-box_input type-text w-100 h-14'></input>
            <button className=' bg-blue-300 h-14 w-12 hover:text-blue-900 justify-center'>
              <SearchIcon/>
            </button>
          </div>
        </div>
        <div className='flex ml-64 mt-20'>
        <div className='w-12 h-14 ml-100 bg-white flex items-center justify-center'>
              <LocalPhoneIcon />
            </div>
            <div className='w-40 h-14 bg-blue-300'>
              <div>
                <p className='flex justify-center'>CALL ME US</p>
                <p className='flex justify-center'>079-558-2457</p>
              </div>
            </div>
        </div>
      </div>

      <div>
        <div className='bg-black flex justify-start h-16 items-center'>
          <div className='w-full flex'>
          <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300'>TRANG CHỦ</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300'>NƯỚC HOA NAM</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300'>NƯỚC HOA NỮ</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300'>LIÊN HỆ</button>
          </div>
          <div className='flex justify-center mr-40'>
            <button className='bg-blue-300 w-16 h-16 hover:text-white'>
              <ShoppingCartIcon />
            </button>
            <button className='bg-white w-16 h-16 hover:text-white'>2</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
