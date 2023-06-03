import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import persistStore from 'redux-persist/es/persistStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <GoogleOAuthProvider clientId='175155271790-6lq44qndvcpif8foa740mom3rffc13pa.apps.googleusercontent.com'>
                <App />
            </GoogleOAuthProvider>
        </PersistGate>
    </Provider>
);

