import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/empanada-legadera.jpg';
import { logout } from '../../sevices/utils';
import { useNavigate, Link } from "react-router-dom";

export default function NavigatorBar() {
  let navigate = useNavigate();
  const closeSession = () => {
    logout();
    navigate("/");
    sessionStorage.clear();
  }

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
            <Nav className="col justify-content-end align-items-end">
              <Link to={"/historial"} className='nav-link'>Historial</Link>
              <Link to={"/nuevo-pedido"} className='nav-link'>Nuevo Pedido</Link>
              <Nav.Link onClick={closeSession}>Cerrar Sessión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
