import React from 'react';
import TextFields from '../../components/TextField';
import { Divider } from '@mui/material';
import FacebookLogo from '../../components/Icons/Facebook';
import GoogleLogo from '../../components/Icons/Google';

const Register = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-around'>
        <div className='flex'>
          <img className='h-24' src='./images/logo2.png' alt='not-found' />
          <p className='flex items-center text-2xl font-medium ml-2'>Đăng ký</p>
        </div>
        <div className='w-40'/>
      </div>
      <div className='h-600 bg-te-logo'>
        <div className='w-full flex justify-around'>
          <img src='./images/logo.png' alt='not-found' />
          <form className='flex items-center mt-10'>
            <div className='bg-white rounded-lg w-520 h-520'>
              <p className='flex justify-center mt-3 font-semibold text-2xl '>Tạo Tài Khoản</p>
              <div className='flex justify-center'>
                <div>
                  <TextFields placeholder='Họ Và Tên' required={true} width='450px' />
                  <TextFields placeholder='Số Điện Thoại' required={true} width='450px' type='tel' />
                  <TextFields placeholder='Email' required={true} width='450px' type='email' />
                  <TextFields placeholder='Mật Khẩu' required={true} width='450px' type='password' />
                  <TextFields placeholder='Xác Nhận Mật Khẩu' required={true} width='450px' type='password' />
                  <button type='submit' className='uppercase w-450 h-10 mt-5 bg-te-blue text-white rounded-md'>
                    Đăng Ký
                  </button>
                  <Divider sx={{ marginTop: '16px' }}>Hoặc</Divider>
                  <div className='flex justify-around mt-4'>
                    <button className='flex justify-around bg-te-facebook mb-2 w-200 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white'>
                      <FacebookLogo />
                      Login Facebook
                    </button>
                    <button className='flex justify-around bg-te-google mb-2 w-200 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white'>
                      <GoogleLogo />
                      Login Google
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
