import axios from 'axios';
import { IUserWithToken } from '../../types/userTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, clearToken } from '../../helpers/token';

type userData = {
  name?: string;
  fullName?: string;
  email: string;
  password: string;
};

export const userLogIn = createAsyncThunk(
  'user/login',
  async (userData: userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<IUserWithToken>(
        'http://localhost:5000/users/login',
        userData,
      );
      setToken(data.refreshToken);
      return data;
    } catch (e) {
      return rejectWithValue('Log In User with Error');
    }
  },
);

export const userSignUp = createAsyncThunk(
  'user/signup',
  async (userData: userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<IUserWithToken>(
        'http://localhost:5000/users/signup',
        userData,
      );
      setToken(data.refreshToken);
      return data;
    } catch (e) {
      return rejectWithValue('Sign Up User with Error');
    }
  },
);

export const userAuth = createAsyncThunk(
  'user/auth',
  async (token: { refreshToken: string }, { rejectWithValue }) => {
    try {
      setToken(token.refreshToken);

      const { data } = await axios.get<IUserWithToken>(
        'http://localhost:5000/users/auth',
      );

      clearToken();

      return data;
    } catch (e) {
      return rejectWithValue('Auth User with Error');
    }
  },
);

export const userLogOut = createAsyncThunk(
  'user/logout',
  async (token: { refreshToken: string }, { rejectWithValue }) => {
    try {
      setToken(token.refreshToken);
      await axios.get('http://localhost:5000/users/logout');
      clearToken();
    } catch (e) {
      return rejectWithValue('Log Out User with Error');
    }
  },
);
