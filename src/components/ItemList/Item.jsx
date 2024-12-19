import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, price, image }) => {
    return (
        <div className="item">
            <img src={image} alt={name} className="item-image" />
            <h3 className="item-title">{name}</h3>
            <p className="item-price">Precio: ${price}</p>
            <Link to={`/item/${id}`} className="item-detail-link">
                Ver detalles
            </Link>
        </div>
    );
};

export default Item;
