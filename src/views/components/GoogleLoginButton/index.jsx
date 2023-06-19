import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogleActions } from '../../../slices/loginGoogleSlice';

const GoogleLoginButton = ({ width }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    const userProfile = { name: decoded.name, picture: decoded.picture };
    dispatch(loginGoogleActions.login(userProfile));
    localStorage.setItem('token', res.credential);
  };

  const onError = () => {
    dispatch(loginGoogleActions.loginFail());
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        width={width}
        text='signin'
        theme='outline'
      />
      {isLoggedIn && <Navigate to='/' />}
    </div>
  );
};

export default GoogleLoginButton;