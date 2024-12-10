import { FC } from "react";
import { Navbar as NavbarComp, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { logoutUser } from "../../core/store/slices/userSlice";
import { RootState } from '../../core/store/store';
import "./Navbar.css";
import logoImage from "/logo.png";

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, username } = useAppSelector((state) => state.user);
  const { formulationId } = useAppSelector((state) => state.app)

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <NavbarComp expand="false" className="navbar-bg border-bottom border-secondary border-2" sticky="top">
      <Container fluid>
        {/* Логотип */}
        <NavbarComp.Brand className="d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logoImage} alt="Logo" className="navbar-logo me-2" />
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
            {/* Общие элементы */}
            <Link to="/chemical-elements" className="nav-link-services">
              Каталог
            </Link>
            

            {/* Для авторизованных пользователей */}
            {isAuth && (
              <>
                <Link to="/formulations-list" className="nav-link-services">
                  Косметические средства
                </Link>
                <Link to="/user-account" className="nav-link-services">
                  {`Аккаунт (${username})`}
                </Link>
                <button
                  onClick={handleLogout}
                  className="nav-link-services logout-button"
                >
                  Выйти
                </button>
              </>
            )}

            {/* Для гостей */}
            {!isAuth && (
              <>
                <Link to="/login" className="nav-link-services">
                  Войти
                </Link>
              </>
            )}
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
