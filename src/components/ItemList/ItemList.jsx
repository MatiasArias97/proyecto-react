import React from 'react';
import Item from './Item';
import './itemList.css';

const ItemList = ({ products, onAddToCart }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ItemList;
