import { FC } from 'react';
import { ICartProps } from './typing';
import { Container } from 'react-bootstrap';
import './Cart.css';



export const Cart: FC<ICartProps> = ({ itemsInCart }) => {
  return (
    <Container
      className="cart-container position-relative m-0 border border-2 shadow-sm rounded p-2 align-self-end"
      style={{ width: '150px', height: '95px', transition: 'transform 550ms', backgroundColor: '#ffffff' }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <a href="#" className="d-flex flex-column align-items-center text-dark text-decoration-none fw-medium">
        <img
          src="/basket.png" 
          alt="Basket Icon"
          className="cart-icon"
        />
        {itemsInCart > 0 && (
          <div className="cart-counter bg-success text-white rounded-circle d-flex justify-content-center align-items-center">
            {itemsInCart}
          </div>
        )}
      </a>
    </Container>
  );
};
