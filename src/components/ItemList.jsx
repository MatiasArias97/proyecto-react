import { Link } from 'react-router-dom';

function ItemList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;