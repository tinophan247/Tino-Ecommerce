import React from 'react';
import GoogleLogo from '../Icons/Google';
import FacebookLogo from '../Icons/Facebook';
import TextFields from '../TextField';
import Divider from '@mui/material';

const LayoutLoginRegister = ({ children, name }) => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-around bg-white'>
        <div className='flex'>
          <img className=' h-20' src='./images/logo2.png' alt='not-found' />
          <p className='flex items-center text-2xl font-medium ml-2'>ĐĂNG NHẬP</p>
        </div>
        <div className='w-40' />
      </div>
      <div className=' h-600 bg-te-logo'>
        <div className='w-full flex justify-around'>
          <img src='./images/logo.png' alt='not-found' />
          <form className='flex items-center'>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LayoutLoginRegister;
