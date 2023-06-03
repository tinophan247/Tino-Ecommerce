import { createSlice } from '@reduxjs/toolkit';

const initialLoginGoogleState = {
    isLoggedIn: false,
    credentials: {
        name: '',
        picture: ''
    },
    error: false
};

const loginGoogleSlice = createSlice({
    name: 'loginGoogle',
    initialState: initialLoginGoogleState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.credentials.name = action.payload.name;
            state.credentials.picture = action.payload.picture;
            state.error = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.credentials.name = '';
            state.credentials.picture = '';
        },
        loginFail(state) {
            state.error = true;
            state.isLoggedIn = false;
        }
    }
});

export const loginGoogleActions = loginGoogleSlice.actions;

export default loginGoogleSlice.reducer;