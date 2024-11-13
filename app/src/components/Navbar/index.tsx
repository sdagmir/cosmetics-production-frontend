import { FC } from 'react';
import { Navbar as NavbarComp, Container, Row, Col } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <NavbarComp className="navbar-bg border-bottom border-secondary border-2" sticky="top">
      <Container fluid>
        <Row className="align-items-center justify-content-start">
          <Col xs="auto">
            <Link to="/">
              <img
                src="/logo.png"
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
            <Link to="/chemical-elements" className="nav-link-services">
              Каталог химических элементов
            </Link>
          </Col>
        </Row>
      </Container>
    </NavbarComp>
  );
};


export default Navbar;
