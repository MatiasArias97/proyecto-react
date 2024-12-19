import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { db, addDoc, collection } from '../firebase'; 
import { Link } from 'react-router-dom';  // Importamos Link para redirigir

const Cart = () => {
  const { cartItems, clearCart, getCartTotal, removeFromCart } = useCart();
  const [userInfo, setUserInfo] = useState({ name: '', address: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Función para manejar el formulario de la compra
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple de los datos del usuario
    if (userInfo.name && userInfo.address && userInfo.phone && userInfo.email) {
      try {
        // Registrar la compra en Firestore
        await addDoc(collection(db, 'ordenes'), {
          user: userInfo,
          items: cartItems,
          total: getCartTotal(),
          date: new Date(),
        });

        // Limpiar el carrito tras la compra
        clearCart();
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error al registrar la compra en Firestore: ', error);
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <p>Tu carrito está vacío.</p>
        <p>¿Quieres agregar productos a tu carrito? 
          <Link to="/">Haz clic aquí para ver los productos</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${getCartTotal().toFixed(2)}</p>

      {/* Mostrar formulario de compra si el carrito tiene productos */}
      <h3>Datos de Envío</h3>
      {isSubmitted ? (
        <p>¡Compra realizada exitosamente!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              value={userInfo.address}
              onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              required
            />
          </div>
          <button type="submit">Confirmar Compra</button>
        </form>
      )}
      
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
