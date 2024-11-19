import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Importamos el contexto del carrito

function ItemDetailContainer() {
  const { itemId } = useParams();  // Obtener el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();  // Usamos la función del contexto para agregar al carrito

  useEffect(() => {
    // Aquí buscamos el producto por ID
    const foundProduct = mockProducts.find(product => product.id === parseInt(itemId));
    setProduct(foundProduct);
  }, [itemId]);

  if (!product) return <p>Cargando producto...</p>;

  const handleAddToCart = () => {
    addToCart(product, 1);  // Agregar una unidad del producto al carrito
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>  {/* Botón para agregar al carrito */}
    </div>
  );
}

export default ItemDetailContainer;