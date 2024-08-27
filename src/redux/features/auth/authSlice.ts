import { createSlice } from '@reduxjs/toolkit'

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    }
  },
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer