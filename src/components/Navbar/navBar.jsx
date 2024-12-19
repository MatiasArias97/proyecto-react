import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 
import './NavBar.css';


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo o título del sitio */}
        <Link to="/">IndumentariaR18</Link>
      </div>

      {/* Enlaces a las categorías */}
      <ul className="navbar-links">
        <li>
          <Link to="/category/remeras">Camisetas Retro</Link>
        </li>
        <li>
          <Link to="/category/pantalones">Pantalones</Link>
        </li>
        <li>
          <Link to="/category/gorras">Buzos</Link>
        </li>
      </ul>

      {/* Enlace al carrito */}
      <div className="navbar-cart">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
