import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogleActions } from '../../../slices/loginGoogleSlice';

const clientId = '175155271790-6lq44qndvcpif8foa740mom3rffc13pa.apps.googleusercontent.com';

const GoogleLoginButton = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    const userProfile = { name: decoded.name, picture: decoded.picture };
    dispatch(loginGoogleActions.login(userProfile))
  };

  const onError = () => {
    dispatch(loginGoogleActions.loginFail());
  };

  return (
    <div>
      <GoogleLogin className=' uppercase'
        clientId={clientId}
        onSuccess={onSuccess}
        onError={onError}
        width='150'
        text='signin'
        theme='outline'
        type='standard'
      />
      {isLoggedIn && <Navigate to='/' />}
    </div>
  );
};

export default GoogleLoginButton;