import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
export default function Search({ category }) {
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);
  const Products = ({ products }) => {
    return (
      <div>
        <div className="products">
          {products &&
            products.length > 0 &&
            products.map((item) => {
              while (item.id < 10) {
                return (
                  <div className="product_item">
                    <a href={`./products/${item.id}`}>
                      <div>
                        <img
                          src={item.thumbnailUrl}
                          width={range}
                          height={range}
                        />
                      </div>
                      <div className="title">{item.title}</div>
                    </a>
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="search">
        <div className="tabs">
          {category.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
        <input type="search" placeholder="Enter Search Terms" />
        <div>785 RESULTS IN WOMAN</div>
      </div>
      <Products products={products} />
      <Widget title="COMPLETE YOUR LOOK" />
      <Footer />
    </div>
  );
}
