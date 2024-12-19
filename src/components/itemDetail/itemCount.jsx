import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button onClick={handleDecrease} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handleIncrease} disabled={count >= stock}>
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        disabled={stock === 0 || count > stock}
        className="add-to-cart"
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
      {count > stock && <p className="error-message">No hay suficiente stock</p>}
    </div>
  );
};

export default ItemCount;
