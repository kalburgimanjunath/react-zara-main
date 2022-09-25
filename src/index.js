import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { EarthoOneProvider } from '@eartho/one-client-react';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import store from './store/store';
import { Provider } from 'react-redux';
import axios from 'axios';
// Write a function that has `dispatch` and `getState` as arguments
const fetchSomeData = (dispatch, getState) => {
  // // Make an async HTTP request
  axios.get('https://jsonplaceholder.typicode.com/photos').then((product) => {
    // Dispatch an action with the todos we received
    dispatch({ type: 'product/addproducts', payload: product.data });
    // Check the updated store state after dispatching
    const allProducts = getState().products;
    console.log('Number of todos after loading: ', allProducts.length);
  });
};

// Pass the _function_ we wrote to `dispatch`
store.dispatch(fetchSomeData);

root.render(
  <StrictMode>
    <Router>
      <EarthoOneProvider clientId="V6v26m8FcByNbaUhAg22">
        <Provider store={store}>
          <App />
        </Provider>
      </EarthoOneProvider>
    </Router>
  </StrictMode>
);
