/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material';

function Header() {
  return (
    <div className='w-full'>
      <div>
        <div className='bg-black flex justify-end h-10 items-center'>
          <div className='mr-10 flex'>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Tài khoản</button>
            <Divider sx={{marginright:'20px'}} arientation="vertical" flexItem/>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Giỏ hàng</button>
            <Divider sx={{marginright:'20px'}} arientation="vertical" flexItem/>
            <button className='mr-20 h-10 text-white hover:text-gray-400 hover:bg-gray-300'>Đăng nhập</button>
            <Divider sx={{marginright:'20px'}} arientation="vertical" flexItem/>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-[#D2ECED] flex justify-normal h-56 items-start'>
          <div>
            <img
              className='h-56'
              src='https://raw.githubusercontent.com/tinophan247/Tino-Ecommerce/2537a9043cacddbf03b0f4b35773742ddf111f62/public/images/logo.png'
            />{' '}
          </div>
          <div className='ml-96 mt-20'>
            
          </div>
          <div className='flex ml-96 mt-20'>
          <div className='search-box flex '>
              <input className='search-box_input type-text w-96 h-12'></input>
               <button className=' bg-blue-300 h-12 w-12 hover:text-blue-900 justify-center'>
                <SearchIcon sx={{ width: '40px', height: '40px' }} />
              </button>
            </div>
            <div className='w-12 h-12 ml-100 bg-white flex items-center justify-center'>
              <LocalPhoneIcon />
            </div>
            <div className='w-40 h-12 bg-blue-300'>
              <div>
                <p className='flex justify-center'>CALL ME US</p>
                <p className='flex justify-center'>079-558-2457</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-black flex justify-start h-16 items-center'>
          <div className='w-full flex'>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300'>NƯỚC HOA NAM</button>
            <button className='w-40 h-16 text-white hover:text-gray-400 hover:bg-gray-300'>NƯỚC HOA NỮ</button>
         
          </div>
          <div className='flex justify-center mr-40'>
            <button className='bg-red-500 w-16 h-16 hover:text-white'>
              <ShoppingCartIcon />
            </button>
            <button className='bg-red-800 w-16 h-16 hover:text-white'>2</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
