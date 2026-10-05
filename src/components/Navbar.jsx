import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function NavBar({ buscar }) {
    const [busquedaTemporal, setBusquedaTemporal] = useState('');
    const manejarEnvio = (e) => {
        e.preventDefault();
        buscar(busquedaTemporal);
        setBusquedaTemporal('');
    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          StarPoint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">
              Carrito
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
            <Form inline onSubmit={manejarEnvio}>
                <Row>
                    <Col xs="auto">
                    <Form.Control
                        type="text"
                        placeholder="Nombre del juego"
                        className=" mr-sm-2"
                        value={busquedaTemporal}
                        onChange={(e) => setBusquedaTemporal(e.target.value)}/>
                    </Col>
                    <Col xs="auto">
                        <Button type='submit' variant='primary'>Buscar</Button>
                    </Col>
                </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;