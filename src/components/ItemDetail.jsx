import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail;