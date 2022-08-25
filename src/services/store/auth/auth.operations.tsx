import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResponseError } from '@typings/common.d';

// axios.defaults.baseURL = CONFIG.apiURL;

const TOKEN = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login');
      TOKEN.set(response.data.accessToken);
      return response.data;
    } catch (err) {
      const error = err as IResponseError;
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
