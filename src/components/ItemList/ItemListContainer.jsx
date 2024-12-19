import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemList from '../ItemList/ItemList';
import mockProducts from '../data/mockProducts'; // Importar el archivo con los productos simulados
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Filtra productos por categoría si hay un parámetro en la URL
    const filteredProducts = categoryId
      ? mockProducts.filter((product) => product.category === categoryId)
      : mockProducts;

    setProducts(filteredProducts);
  }, [categoryId]);

  const handleAddToCart = (product) => {
    addToCart(product, 1); // Agrega una unidad del producto al carrito
  };

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <ItemList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ItemListContainer;
﻿
