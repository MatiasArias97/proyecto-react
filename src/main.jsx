// Importaciones necesarias
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Estilos globales
import { CartProvider } from './components/context/CartContext';

// Renderizado de la aplicación en el elemento raíz del HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Proveedor del contexto del carrito */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
