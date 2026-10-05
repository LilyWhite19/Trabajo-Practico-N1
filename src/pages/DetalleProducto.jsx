import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import productos from '../data/productos';
import { useParams, Link } from 'react-router-dom';

function DetalleProducto({ productosCarrito, funcionAgregar }) {
    const {id} = useParams()
    const producto = productos.find((item) => item.id === parseInt(id));
    const productoEnCarrito = productosCarrito.find(p => p.id === producto.id)

    if (!producto) {
        return (
            <Container>
                <Row>
                    <Col>
                    No se logro encontrar el producto
                    </Col>
                    <Col>
                        <Link to={"/productos"}>
                            <Button variant="primary">Volver al Catálogo</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <Container>
        <Row>
            <Col>
                <Image src={producto.imagen} alt={producto.nombre} fluid />
            </Col>
            <Col>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>{producto.historia}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Categorías: {producto.categoria.join(', ')}</p>
                <p>
                    <Link to={"/productos"}>
                        <Button variant="primary">Volver al Catálogo</Button>
                    </Link>
                    <Button 
                        className={`${producto.stock ? '' : 'opacity-50'}`} 
                        onClick={() => {
                            if (producto.stock && !productoEnCarrito)  {
                                funcionAgregar(producto);
                            }
                            else if (productoEnCarrito){
                                alert("El producto ya se encuentra en el carrito")
                            }
                            else{
                                alert("El producto se encuentra sin stock")
                            }
                        }} variant={producto.stock ? (!productoEnCarrito ? "success" : "danger") : "secondary"}>
                            {producto.stock ? (!productoEnCarrito ? "Agregar al Carrito" : "En Carrito") : "Sin Stock"}
                    </Button>
                </p>
            </Col>
        </Row>
        </Container>
    )
}

export default DetalleProducto