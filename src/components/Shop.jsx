import React from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  // Example array of image paths
  const images = [
    './images/image 1.png',
    './images/image 2.png',
    // Add more image paths as needed
  ];

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="product-list">
        {images.map((image, index) => (
          <ProductCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
