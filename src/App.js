import React from 'react';
import './style.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import { useEarthoOne } from '@eartho/one-client-react';
export default function App() {
  const category = ['zara original', 'men', 'women', 'kids'];
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  if (isConnected) {
    return (
      <div>
        <div className="header-text">Hello, {user.user.displayName}</div>
        <img src={user.user.photoURL} width={50} height={50} />
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <Routes>
          <Route
            path="/category/:id"
            element={<Category category={category} />}
          />
          <Route
            path="/products/:id"
            element={<Product category={category} />}
          />
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
