import { configureStore } from '@reduxjs/toolkit';
import authReducer from './../slices/loginGoogleSlice';

const store = configureStore({
reducer: {
auth : authReducer
},
})

export default store;