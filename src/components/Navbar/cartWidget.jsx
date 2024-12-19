import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Suma de todos los productos

  return (
    <div className="cart-widget">
      <span role="img" aria-label="Carrito">
        🛒
      </span>
      {totalItems > 0 && <span>{totalItems}</span>} {/* Muestra la cantidad si hay productos */}
    </div>
  );
};

export default CartWidget;
