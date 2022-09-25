import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
export default function Category() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <div>
        <span>CART()</span>
        <span>FAVOURITES()</span>
      </div>
      <div>
        Items in the basket are not reserved until completing the purchase.
      </div>
      <Widget title="COMPLETE YOUR LOOK" />
      <Footer />
    </div>
  );
}
