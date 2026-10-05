import { Card, Button } from 'react-bootstrap';

function CarritoItem({ producto, sacarProducto }) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={producto.imagen} width={"100px"} height={"150px"} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
            Precio: ${producto.precio}
        </Card.Text>
        <Button variant="primary" onClick={() => sacarProducto(producto)}>Eliminar del Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CarritoItem;