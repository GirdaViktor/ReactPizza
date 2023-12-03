import React from 'react';
import './CartPage.scss';
import Cart from "../../Components/Cart/cart";

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
