import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function Category() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  }, [range]);
  const Products = ({ products }) => {
    return (
      <div>
        <>
          <input
            type="range"
            value={range}
            min="50"
            max="500"
            onChange={(e) => setRange(e.target.value)}
          />
          <div style={{ display: 'none' }}>
            <div>Filter</div>
            <div>
              COLOUR FIT TYPE OF PRODUCT TYPE OF SLEEVE LENGTH SIZE SIZES
              FOOTWEAR/ACCESSORIES MATERIALS COLLECTION PRICE ₹ 790.00 ₹
              22,000.00 JOIN LIFE VIEW RESULTS 592 CLEAR
            </div>
          </div>
        </>
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
      Category:{id}
      <Products products={products} />
    </div>
  );
}
