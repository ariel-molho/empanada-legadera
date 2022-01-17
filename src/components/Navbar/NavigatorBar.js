import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/empanada-legadera.jpg';

export default function NavigatorBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo} alt='Logo'
              width="50"
              height="50"
              style={{ borderRadius: "5rem" }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col justify-content-around me-auto">
              <Nav.Link href="#home">Historial</Nav.Link>
              <Nav.Link href="#link">Nuevo Pedido</Nav.Link>
              <Nav.Link href="#link">Cerrar Sessión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
