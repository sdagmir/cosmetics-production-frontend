import { FC } from 'react';
import { Navbar as NavbarComp, Container, Row, Col, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from "/logo.png"

export const Navbar: FC = () => {
  return (
    <NavbarComp expand="lg" className="navbar-bg border-bottom border-secondary border-2" sticky="top">
      <Container fluid>
        <NavbarComp.Toggle aria-controls="navbar-content" />
        <NavbarComp.Collapse id="navbar-content">
          <Row className="align-items-center justify-content-start w-100">
            <Col xs="auto">
              <Link to="/">
                <img
                  src={ logoImage }
                  alt="Logo"
                  className="img-fluid navbar-logo"
                />
              </Link>
            </Col>
            <Col xs="auto">
              <div className="brand-info">
                <h1 className="brand-name">CHEMOPURE</h1>
                <p className="brand-description">Компоненты для натуральной косметики.</p>
              </div>
            </Col>
            <Col className="ms-auto text-end ps-5 pe-5">
              <Nav className="nav-link-container">
                <Link to="/chemical-elements" className="nav-link-services">
                  Каталог химических элементов
                </Link>
              </Nav>
            </Col>
          </Row>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
