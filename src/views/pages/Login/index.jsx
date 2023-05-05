import React from 'react';
import TextFields from '../../components/TextField';
import { Divider } from '@mui/material';
import FacebookLogo from '../../components/Icons/Facebook';
import GoogleLogo from '../../components/Icons/Google';
import LayoutLoginRegister from '../../components/LayoutLoginRegister';
import TextFieldPassword from '../../components/TextFieldPassword';

const Login = () => {
  return (
    <LayoutLoginRegister name='Đăng Nhập'>
      <div className='bg-white rounded-md w-[400px] 100vh mt-6'>
        <p className='flex justify-center mt-5 font-semibold text-2xl '>Đăng nhập</p>
        <div className='flex justify-center'>
          <div>
            <div>
              <div className='mb-3 block justify-center'>
                <TextFields label='Email' width='340px' type='email' />
              </div>
              <div className='mb-3 block justify-center'>
                <TextFieldPassword label='Mật Khẩu' width='340px' type='password' />
              </div>
            </div>
            <div className='flex justify-center relative'>
              <button type='button' className=' uppercase w-[340px] h-10 mt-5 bg-te-blue text-white rounded-sm'>
                Đăng Nhập
              </button>
            </div>
            <div className='absolute text-blue-700 my-2'>
              <a href='#!' className='text-xs transition duration-150'>
                Quên mật khẩu
              </a>
            </div>
            <Divider className=' opacity-60 text-xs' sx={{ marginTop: '30px' }}>
              HOẶC
            </Divider>
            <div className='flex justify-around my-5'>
              <button className='flex justify-around bg-te-facebook mb-2 w-[150px] rounded px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white'>
                <FacebookLogo />
                Login Facebook
              </button>
              <button className='flex justify-around bg-te-google mb-2 w-[150px] rounded px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white'>
                <GoogleLogo />
                Login Google
              </button>
            </div>
            <p className=' text-gray-400 pt-2 pb-8 pb text-center text-sm'>
              Bạn mới biết đến TinoPerfume?
              <a href=' ./Register ' className='text-red-600'>
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </div>
    </LayoutLoginRegister>
  );
};

export default Login;
