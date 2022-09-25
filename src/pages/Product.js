import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Widget from '../components/Widget';
import Newsletter from '../components/Newsletter';
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
      });
  }, [product]);
  const desc = `MATERIALS, CARE AND ORIGIN
  ORIGIN
  We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals. 
  
  Thanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.
  Made in China
  CARE
  Caring for your clothes is caring for the environment.
  To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. This process is more gentle on fabrics and also reduces water and energy consumption when washing.
  [car]8
  Hand wash at max. 30ºC/86ºF
  [car]14
  Do not use bleach
  [car]18
  Iron at a maximum of 110ºC/230ºF
  [car]28
  Do not dry clean
  [car]35
  Do not tumble dry
  MATERIALS
  We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.
  
  To assess compliance, we have developed a programme of audits and continuous improvement plans.
  OUTER SHELL
  66% polyester · 31% viscose · 3% elastane
  LINING
  100% polyester`;
  const shortdesc =
    'Long collared blazer with a V-neckline and long sleeves. Front flap pockets. Button-up front.';
  return (
    <div>
      {/* <Header /> */}
      <div
        className="product-detail"
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <div>{desc}</div>
        <div className="product-images">
          <div className="main">
            <img
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
          </div>
          <div className="sub">
            <img
              style={{ width: 50, height: 50 }}
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
            <img
              style={{ width: 50, height: 50 }}
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
            <img
              style={{ width: 50, height: 50 }}
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
            <img
              style={{ width: 50, height: 50 }}
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
            <img
              style={{ width: 50, height: 50 }}
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
            <img
              style={{ width: 50, height: 50 }}
              src={product && product.thumbnailUrl ? product.thumbnailUrl : ''}
            />
          </div>
        </div>
        <div>
          <div>{product && product.title ? <h1>{product.title}</h1> : ''}</div>
          <div>{shortdesc}</div>
        </div>
      </div>
      <Widget title="MATCH WITH" />
      <Widget title="SIMILAR ITEMS" />
      <Newsletter />
      <Footer />
    </div>
  );
}
