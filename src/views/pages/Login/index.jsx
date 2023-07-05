import React, { useState } from 'react';
import TextFields from '../../components/TextField';
import { Divider } from '@mui/material';
import FacebookLogo from '../../components/Icons/Facebook';
import LayoutLoginRegister from '../../components/LayoutLoginRegister';
import TextFieldPassword from '../../components/TextFieldPassword';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../slices/authSlice'; 

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
 
  const handleLogin = (e) => {
    if (e) {
      e.preventDefault();
    }
    const newData = {
      email: formState.email,
      password: formState.password,
    };

    dispatch(login(newData)); 
  }; 

  return (
    <LayoutLoginRegister name='Đăng Nhập'>
      <form className='bg-white rounded-md w-[400px] 100vh mt-6'>
        <p className='flex justify-center mt-5 font-semibold text-2xl'>Đăng nhập</p>
        <div className='flex justify-center'>
          <div>
            <div>
              <div className='mb-3 block justify-center'>
                <TextFields
                  label='Email'
                  width='340px'
                  type='email'
                  value={formState.email}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      email: event.target.value,
                    });
                  }} />
              </div>
              <div className='mb-3 block justify-center'>
                <TextFieldPassword
                  label='Mật Khẩu'
                  width='340px'
                  type='password'
                  value={formState.password}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      password: event.target.value,
                    });
                  }} />
              </div>
            </div>
            <div className='flex justify-center relative'>
              <button
                type='submit'
                className=' uppercase w-[340px] h-10 mt-5 bg-te-blue text-white rounded-sm'
                onClick={handleLogin}
              // onSubmit={handleLogin}
              >
                Đăng Nhập
              </button>
              {isLoggedIn && <Navigate to='/' />}
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
              <button className='flex justify-around bg-te-facebook mb-2 w-150 rounded px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white'>
                <FacebookLogo />
                Login Facebook
              </button>
              <button className='flex justify-around w-150'>
                <GoogleLoginButton width={150} />
              </button>
            </div>
            <p className=' text-gray-400 pt-2 pb-8 pb text-center text-sm'>
              Bạn mới biết đến TinoPerfume?
              <a href='./Register' className='text-red-600'>
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </form>
    </LayoutLoginRegister>
  );
};

export default Login;
