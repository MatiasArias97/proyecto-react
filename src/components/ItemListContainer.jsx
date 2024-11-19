import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Importamos el contexto del carrito

function ItemListContainer() {
  const mockProducts = [
    { id: 1, name: 'Camiseta Fútbol A', price: 20, category: 'remeras', stock: 10 },
    { id: 2, name: 'Camiseta Fútbol B', price: 25, category: 'remeras', stock: 5 },
    { id: 3, name: 'Pantalón Fútbol A', price: 30, category: 'pantalones', stock: 8 },
    { id: 4, name: 'Pantalón Fútbol B', price: 35, category: 'pantalones', stock: 3 },
    { id: 5, name: 'Gorra Fútbol A', price: 15, category: 'gorras', stock: 15 },
    { id: 6, name: 'Gorra Fútbol B', price: 18, category: 'gorras', stock: 12 },
  ];

  const { categoryId } = useParams();  // Obtener la categoría de la URL
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado
  const { addToCart } = useCart();  // Usamos la función del contexto para agregar al carrito

  useEffect(() => {
    // Si hay un categoryId, filtramos los productos según la categoría
    if (categoryId) {
      const filteredProducts = mockProducts.filter(product => product.category === categoryId);
      setProducts(filteredProducts);
    } else {
      // Si no hay un categoryId, mostramos todos los productos
      setProducts(mockProducts);
    }
  }, [categoryId]);  // Se vuelve a ejecutar cuando cambia la categoría

  const handleAddToCart = (product) => {
    addToCart(product, 1);  // Agregar una unidad del producto al carrito
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);  // Mostrar los detalles del producto seleccionado
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);  // Cerrar el detalle del producto
  };

  return (
    <div>
      <h2>Productos</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>  
            <button onClick={() => handleViewDetails(product)}>Ver detalles</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Detalle del Producto</h3>
          <p><strong>Nombre:</strong> {selectedProduct.name}</p>
          <p><strong>Precio:</strong> ${selectedProduct.price}</p>
          <p><strong>Stock:</strong> {selectedProduct.stock}</p>
          <button onClick={() => handleAddToCart(selectedProduct)}>Agregar al carrito</button>
          <button onClick={handleCloseDetails}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;