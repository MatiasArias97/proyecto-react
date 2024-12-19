import React from 'react';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (quantity) => {
    if (quantity > product.stock) {
      alert('No hay suficiente stock');
      return;
    }
    addToCart(product, quantity);
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} className="item-detail-image" />
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p className="item-detail-price">Precio: ${product.price}</p>
        <p className="item-detail-description">{product.description}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
