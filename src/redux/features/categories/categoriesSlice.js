import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [] };

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    status: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },
});

export default categoriesSlice.reducer;
export const { status } = categoriesSlice.actions;
