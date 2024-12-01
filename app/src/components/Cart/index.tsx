import { FC } from 'react';
import { ICartProps } from './typing';
import './Cart.css';
import { Link } from "react-router-dom";
import cartImage from "/images/basket.png";

export const Cart: FC<ICartProps> = ({ itemsInCart }) => {
  const isInactive = itemsInCart === 0;

  return (
    <div
      className={`cart-container position-relative ${isInactive ? 'inactive' : ''}`}
      style={{ transition: isInactive ? 'none' : 'transform 550ms' }}
      onMouseEnter={(e) => {
        if (!isInactive) e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        if (!isInactive) e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Link
        to=""
        className="cart-link text-decoration-none"
        onClick={(e) => e.preventDefault()} // Отключает действие ссылки
      >
        <img
          src={cartImage}
          alt="Basket Icon"
          className="cart-icon"
        />
        {itemsInCart > 0 && (
          <div className="cart-counter">
            {itemsInCart}
          </div>
        )}
      </Link>
    </div>
  );
};
