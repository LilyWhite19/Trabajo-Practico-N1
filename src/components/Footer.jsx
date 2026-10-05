import React from 'react'
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto text-center border-top border-secondary">
      <Container>
        <p className="mb-1">© {new Date().getFullYear()} StarPoint. Todos los derechos reservados.</p>
        <small>Trabajo Práctico - Desarrollado en React & Bootstrap</small>
      </Container>
    </footer>
  )
}

export default Footer