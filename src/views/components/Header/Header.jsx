import React, { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchField from '../SearchField';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogleActions } from '../../../slices/loginGoogleSlice';

const Header = () => {
  const { isLoggedIn, credentials } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const toggleLogout = () => {
    setIsLogoutVisible((prevState) => !prevState);
  };

  const handleLogOut = async () => {
    dispatch(loginGoogleActions.logout());
    localStorage.clear();
  };

  return (
    <div className='w-full'>
      <div className='bg-black flex justify-end h-10 items-center'>
        <div className='mr-10 flex gap-20'>
          {isLoggedIn ? (
            <div className='flex items-center justify-center h-10 text-white hover:text-te-logo'>
              <h2 className='text-center mr-4'>Hi, {credentials.name}</h2>
              <div className='relative items-center'>
                <div className='flex items-center'>
                  <img
                    src={credentials.picture}
                    alt=''
                    className='h-7 rounded-2xl relative cursor-pointer'
                    onClick={toggleLogout}
                  />
                </div>
                {isLogoutVisible && (
                  <div id='submenu' className='absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-1'>
                    <button
                      className='block px-4 py-2 text-gray-800'
                      onClick={handleLogOut}
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-center h-10 text-white hover:text-te-logo'>
              <NavLink to='/register' className='mt-5 mr-4 h-10 text-white hover:text-te-logo'>
                Đăng ký
              </NavLink>
              <NavLink to='/login' className='mt-5 h-10 text-white hover:text-te-logo'>
                Đăng nhập
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className='bg-te-logo h-56 flex justify-center '>
        <div className='w-1600 md:w-1200 items-center justify-between flex'>
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
          <div className='flex justify-between w-1500 md:w-1200'>
            <div className='w-full flex'>
              <button className='w-40 h-16 text-white hover:text-te-logo uppercase'>Trang chủ</button>
              <button className='w-40 h-16 text-white hover:text-te-logo uppercase'>Nước hoa nam</button>
              <button className='w-40 h-16 text-white hover:text-te-logo uppercase'>Nước hoa nữ</button>
              <button className='w-40 h-16 text-white hover:text-te-logo uppercase'>Liên hệ</button>
            </div>
            <button className='flex justify-center group'>
              <div className='w-16 h-16 flex justify-center items-center text-white group-hover:text-te-logo'>
                <ShoppingBasketIcon />
              </div>
              <p className='h-16 flex justify-center items-center text-white text-base font-medium group-hover:text-te-logo'>(2)</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
