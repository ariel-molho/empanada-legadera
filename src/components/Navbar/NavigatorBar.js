import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/empanada-legadera.jpg';
import { logout } from '../../sevices/utils';
import { useNavigate, Link } from "react-router-dom";

export default function NavigatorBar() {
  const [adminUser, setAdminUser] = useState(false);
  let navigate = useNavigate();
  const closeSession = () => {
    logout();
    navigate("/");
    sessionStorage.clear();
  }

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("user")) === process.env.REACT_APP_ADMIN_USER){
      setAdminUser(true)
    }
  }, []);

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
              {adminUser && <Link to={"/administrador"} className='nav-link'>Administrador</Link>}
              <Nav.Link onClick={closeSession}>Cerrar Sessión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
