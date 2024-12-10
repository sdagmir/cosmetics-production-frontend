import { FC } from 'react';
import { Navbar as NavbarComp, Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from "/logo.png";

export const Navbar: FC = () => {
  return (
    <NavbarComp expand="lg" className="navbar-bg border-bottom border-secondary border-2" sticky="top">
      <Container fluid>
        {/* Логотип */}
        <NavbarComp.Brand className="d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logoImage}
              alt="Logo"
              className="navbar-logo me-2"
            />
            <div className="brand-info">
              <h1 className="brand-name">CHEMOPURE</h1>
              <p className="brand-description">Компоненты для натуральной косметики</p>
            </div>
          </Link>
        </NavbarComp.Brand>

        {/* Триггер для бургера */}
        <NavbarComp.Toggle aria-controls="navbar-content" />

        {/* Навигационные элементы */}
        <NavbarComp.Collapse id="navbar-content">
          <Nav className="ms-auto nav-link-container">
            <Link to="/chemical-elements" className="nav-link-services">
              Каталог химических элементов
            </Link>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
