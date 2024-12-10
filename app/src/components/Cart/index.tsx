import { FC } from 'react';
import { ICartProps } from './typing';
import './Cart.css';
import { Link } from "react-router-dom";
import cartImage from "/images/basket.png";
import { useAppSelector } from '../../core/store/hooks';


export const Cart: FC<ICartProps> = (cartData: ICartProps) => {
  const {itemsInCart, formulationId } = useAppSelector((state) => state.app);
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
      {isInactive ? (
        // Если корзина пуста, ссылка недоступна
        <div className="cart-link text-decoration-none">
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
        </div>
      ) : (
        // Если корзина не пуста, активная ссылка
        <Link
          to={"/formulations/" + formulationId}
          className="cart-link text-decoration-none"
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
      )}
    </div>
  );
};
