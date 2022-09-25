import React from 'react';
import './style.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Search from './pages/Search';
import { useEarthoOne } from '@eartho/one-client-react';
import Header from './components/Header';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const category = ['zara original', 'men', 'women', 'kids'];
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  if (isConnected) {
    dispatch({ type: 'user/adduser', payload: user.user });
    return (
      <div>
        <Header {...user} />

        <Routes>
          <Route
            path="/category/:id"
            element={<Category category={category} />}
          />
          <Route
            path="/products/:id"
            element={<Product category={category} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search category={category} />} />
          <Route path="/*" element={<Home category={category} />} exact />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="login">
        <h4>Please login to start adding your ideas</h4>
        <div>
          <button
            className="btn btn-outline-success"
            id="login"
            onClick={() =>
              connectWithPopup({ access_id: 'ydAkmDOshDul1JpijYXw' })
            }
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}
