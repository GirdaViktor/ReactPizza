import React from 'react';
import './cart-page.scss';
import Cart from "../../Components/cart/cart";

const CartPage = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
