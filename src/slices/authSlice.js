import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiAuthGateWay from "../services/api.authGateWay";

export const login = createAsyncThunk("login", async (payload) => {
  const response = await ApiAuthGateWay.login(payload);
  localStorage.setItem("name", response.fullName);
  localStorage.setItem("picture", response.avatar);
  localStorage.setItem('token', response.token);
  return response;
});

export const register = createAsyncThunk("register", async (payload) => {
  const response = await ApiAuthGateWay.register(payload);
  return response;
}); 

const initialAuthState = {
  isLoading: false,
  isSuccess: false,
  isLoggedIn: false,
  credentials: {
    name: "", 
    picture: "",
  },
  error: false,
  message: "",
  userList: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: () => initialAuthState
    ,
    destroyerror: (state) => {
      state.error = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //request pending
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Đăng ký thành công";
    });
    //reject
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    // Start login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    // Request successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = false;
      state.errorMessage = "";
      state.isLoading = false;
      state.isLoggedIn = true;
      state.credentials = {
        name: action.payload.fullName, 
        picture: action.payload.avatar,
      };
    });
    // Request error
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.error.message; 
    }); 
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;