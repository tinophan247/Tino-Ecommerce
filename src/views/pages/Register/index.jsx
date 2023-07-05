import React, { useState } from 'react';
import TextFields from '../../components/TextField';
import { Divider } from '@mui/material';
import FacebookLogo from '../../components/Icons/Facebook';
import TextFieldPassword from '../../components/TextFieldPassword';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import { register } from '../../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.auth); 
  const [confirmPassword , setConfirmPassword ] = useState("");
  const [formState, setFormState] = useState({
    fullName: "",
    name: "",
    phoneNumber: "",
    email: "",
    password: ""
  });

  const handleCheckingPass = () => {
    if (confirmPassword !== "") {
      if (confirmPassword !== formState.password){
        return <p className="text-red-500 text-base">Mật khẩu không trùng khớp</p>
      }
    }
  };

  const handleRegister = (e) => {
    if (e) {
      e.preventDefault();
    }
    const newData = {
      name: formState.fullName,
      phoneNumber: formState.phoneNumber,
      email: formState.email,
      password: formState.password,
    }; 
   
    dispatch(register(newData));
    console.log(newData);
    
  };

  if(isSuccess){
    setTimeout(() => {
      window.location.href = '/login'
    },1000)
  }

  return (
    <div className='w-full'>
      <div className='w-full flex justify-around'>
        <div className='flex'>
          <img className='h-24' src='./images/logo2.png' alt='not-found' />
          <p className='flex items-center text-2xl font-medium ml-2'>Đăng ký</p>
        </div>
        <div className='w-40' />
      </div>
      <div className='h-600 bg-te-logo'>
        <div className='w-full flex justify-around'>
          <img src='./images/logo.png' alt='not-found' />
          <form className='flex items-center mt-10'>
            <div className='bg-white rounded-lg w-520 h-520'>
              <p className='flex justify-center mt-3 font-semibold text-2xl '>Tạo Tài Khoản</p>
              <div className='flex justify-center'>
                <div>
                  <TextFields
                    label='Họ Và Tên'
                    width='450px' 
                    value={formState.fullName}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        fullName: event.target.value,
                      });
                    }}
                  />
                  <TextFields
                    label='Số Điện Thoại'
                    width='450px' 
                    value={formState.phoneNumber}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        phoneNumber: event.target.value,
                      });
                    }}
                  />
                  <TextFields
                    label='Email'
                    width='450px' 
                    value={formState.email}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        email: event.target.value,
                      });
                    }}
                  />
                  <TextFieldPassword
                    label='Mật Khẩu'
                    width='450px' 
                    value={formState.password}
                    onChange={(event) => {
                      setFormState({       
                        ...formState,
                        password: event.target.value,
                      });
                    }}
                  />
                  <TextFieldPassword
                    label='Xác Nhận Mật Khẩu'
                    width='450px' 
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                  />
                  {handleCheckingPass()}
                  <button className='uppercase w-450 h-10 mt-5 bg-te-blue text-white rounded-md'
                    type='submit'
                    onClick={handleRegister}
                  >
                    Đăng Ký
                  </button>
                  <Divider sx={{ marginTop: '16px' }}>Hoặc</Divider>
                  <div className='flex justify-around mt-4'>
                    <button className='flex justify-around bg-te-facebook mb-2 w-200 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white'>
                      <FacebookLogo />
                      Login Facebook
                    </button>
                    <button className='mb-2'>
                      <GoogleLoginButton width={200}/>
                    </button> 
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
