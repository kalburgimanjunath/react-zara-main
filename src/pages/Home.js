import React from 'react';
import Header from '../components/Header';
import Carousal from '../components/Carousal';
export default function Home({ category }) {
  return (
    <div>
      <Header />
      <Carousal category={category} />
    </div>
  );
}
