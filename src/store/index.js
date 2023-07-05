import { configureStore } from '@reduxjs/toolkit';
import authReducer from './../slices/authSlice';
// import authReducer from './../slices/loginGoogleSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // loginGoogle: loginGoogleReducer,
  },
});

export default store;