import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductoCard({ producto, listaProductos, alHacerClick }) {
    const prodcutoEnCarrito = listaProductos.find(p => p.id == producto.id)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} height={"350px"}/>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Card.Text>
          Precio: ${producto.precio}
        </Card.Text>
        <Card.Text>
            Categorias: {producto.categoria.map(
                c => c + ' '
            )}
        </Card.Text>
        <Link to={`/producto/${producto.id}`}>
          <Button variant="primary">Ver Detalles</Button>
        </Link>
        <Button 
            className={`${producto.stock ? '' : 'opacity-50'}`} 
            onClick={() => {
                if (producto.stock && !prodcutoEnCarrito)  {
                alHacerClick(producto);
                }
                else if (prodcutoEnCarrito){
                    alert("El producto ya se encuentra en el carrito")
                }
                else{
                    alert("El producto se encuentra sin stock")
                }
        }} variant={producto.stock ? (!prodcutoEnCarrito ? "success" : "danger") : "secondary"}>
          {producto.stock ? (
            !prodcutoEnCarrito ? "Agregar al Carrito" : "En Carrito") : "Sin Stock"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;