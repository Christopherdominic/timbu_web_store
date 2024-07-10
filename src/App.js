import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import Faq from './components/Faq';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
