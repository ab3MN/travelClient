import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserWithToken } from '../../types/userTypes';
import { userLogIn, userSignUp, userAuth, userLogOut } from './userServices';

interface UserState {
  user: null | IUser;
  refreshToken: null | string;
  isLoading: boolean;
  auth: boolean;
  error: null | string;
}

const INITIAL_STATE: UserState = {
  user: null,
  refreshToken: null,
  isLoading: false,
  auth: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    /* ==================== LOG IN ==================== */
    [userLogIn.pending.type]: state => {
      state.isLoading = true;
    },
    [userLogIn.fulfilled.type]: (
      state,
      action: PayloadAction<IUserWithToken>,
    ) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.refreshToken = action.payload.refreshToken;
    },
    [userLogIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /* ==================== SIGN UP ==================== */
    [userSignUp.pending.type]: state => {
      state.isLoading = true;
    },
    [userSignUp.fulfilled.type]: (
      state,
      action: PayloadAction<IUserWithToken>,
    ) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.refreshToken = action.payload.refreshToken;
    },
    [userSignUp.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /* ==================== AUTH UP ==================== */
    [userAuth.pending.type]: state => {
      state.isLoading = true;
    },
    [userAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [userAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /* ==================== LOG OUT ==================== */
    [userLogOut.pending.type]: () => {},
    [userLogOut.fulfilled.type]: state => {
      state.isLoading = false;
      state.refreshToken = null;
      state.user = null;
    },
    [userLogOut.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
