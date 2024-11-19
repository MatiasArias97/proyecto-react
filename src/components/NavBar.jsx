import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      {/* Enlaces a las categorías */}
      <Link to="/category/remeras">Remeras</Link>
      <Link to="/category/pantalones">Pantalones</Link>
      <Link to="/category/gorras">Gorras</Link>

      {/* Enlace al carrito */}
      <Link to="/cart">Carrito</Link>
    </nav>
  );
}

export default NavBar;