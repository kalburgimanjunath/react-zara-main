import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    adduser: (state, action) => {
      return { user: [...state.user, action.payload] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { adduser } = userSlice.actions;

export default userSlice.reducer;
