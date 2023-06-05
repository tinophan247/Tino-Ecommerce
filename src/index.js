import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store';
import { clientId } from './constant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId[0].clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);

