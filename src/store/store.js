import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import userReducer from './reducers/userSlice';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default configureStore(
  {
    reducer: { productReducer, userReducer },
  },
  composedEnhancer
);
