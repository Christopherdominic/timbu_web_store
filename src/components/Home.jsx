import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Amiable Store</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
