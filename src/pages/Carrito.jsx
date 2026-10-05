import React from 'react'
import CarritoItem from '../components/CarritoItem.jsx'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function Carrito({ productosCarrito, funcionSacar }) {
    const total = productosCarrito.reduce((acc, producto) => acc + producto.precio, 0);
    const cantidadProductos = productosCarrito.length
    const [modalShow, setModalShow] = React.useState(false); 
    return (
        <div>
            <h1>Carrito</h1>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Cantidad de Juegos: {cantidadProductos}</p>
            <Button variant="primary" 
                onClick={() => 
                {if (cantidadProductos !== 0){
                    setModalShow(true)
                }
                else{
                    alert("El carrito está vacío. Agrega productos para finalizar la compra.")
                }}
                }>
                Finalizar Compra
            </Button>
            <FinalizarCompra show={modalShow} onHide={() => setModalShow(false)} />
            {productosCarrito.length === 0 ? (
                <p>
                    El carrito está vacío. Agrega productos para verlos aquí.
                </p>
            ) : (
                <Container>
                    <Row>
                        {productosCarrito.map((producto) => (
                            <Col key={producto.id} sm={6} md={2} lg={2}>
                                <CarritoItem producto={producto} sacarProducto={funcionSacar} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    )
}

function FinalizarCompra(props){
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Gracias por tu compra!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Te esperamos cuando necesites otro punto de partida</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Carrito
