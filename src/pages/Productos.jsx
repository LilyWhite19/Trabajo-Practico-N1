import { Container, Row, Col } from 'react-bootstrap';
import productos from '../data/productos.js';
import ProductoCard from '../components/ProductoCard';

function Productos( { productosCarrito, funcionAgregar, textoBuscar } ) {
    const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(textoBuscar.toLowerCase())
        );
    return (
        <div className='bg-secondary'>
            <Container>
                <Row>
                    {productosFiltrados.map((producto) => (
                        <Col key={producto.id} sm={12} md={6} lg={4}>
                            <ProductoCard producto={producto} listaProductos={productosCarrito} alHacerClick={funcionAgregar} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Productos;