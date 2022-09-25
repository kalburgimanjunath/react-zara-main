import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addproducts: (state, action) => {
      return { products: [...state.products, action.payload] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addproducts } = productSlice.actions;

export default productSlice.reducer;
