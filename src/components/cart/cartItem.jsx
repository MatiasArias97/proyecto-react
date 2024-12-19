import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <li style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
      <div>
        <strong>{item.name}</strong>
      </div>
      <div>
        Cantidad: {item.quantity} | Precio unitario: ${item.price.toFixed(2)}
      </div>
      <div>
        Subtotal: ${(item.quantity * item.price).toFixed(2)}
      </div>
      <button onClick={() => onRemove(item.id)} style={{ marginTop: '0.5rem' }}>
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;
