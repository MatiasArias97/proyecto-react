import React, { useState } from 'react';
import { useCart } from './CartContext';  // Para acceder al carrito

function ItemCount({ product, stock }) {
  const [count, setCount] = useState(1);  // Estado para la cantidad
  const { addToCart } = useCart();  // Acceder a la función addToCart desde el contexto

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);  // Incrementar la cantidad si hay stock
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);  // Disminuir la cantidad
  };

  const handleAddToCart = () => {
    addToCart(product, count);  // Agregar el producto al carrito con la cantidad seleccionada
    alert(`${count} ${product.name} agregado(s) al carrito.`);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;