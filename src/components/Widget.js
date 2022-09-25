import React, { useState, useEffect } from 'react';

export default function Widget({ title }) {
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState(200);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  }, [range]);
  return (
    <>
      <h1>{title}</h1>
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
                    <div className="title">Rs.3000</div>
                    <div>MRP including all taxes</div>
                  </a>
                  <button>ADD TO BAG</button>
                </div>
              );
            }
          })}
      </div>
    </>
  );
}
