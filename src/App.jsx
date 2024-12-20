import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import Cart from './components/cart/cart';
import NavBar from './components/Navbar/navBar';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Bienvenido a la tienda de reliquias de futbol</h2>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
