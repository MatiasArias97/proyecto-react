import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Importa el contexto del carrito
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>  {/* Envuelve la app con el contexto del carrito */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />  {/* Filtrar por categoría */}
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />  {/* Detalle de producto */}
          <Route path="/cart" element={<Cart />} />  {/* Vista del carrito */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;