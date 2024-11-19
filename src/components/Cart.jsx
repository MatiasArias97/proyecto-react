import React from 'react';
import { useCart } from './CartContext';  // Usamos el contexto del carrito

function Cart() {
  const { cart } = useCart();  // Obtenemos los productos del carrito

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
    </div>
  );
}

export default Cart;