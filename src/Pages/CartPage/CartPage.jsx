import React from 'react';

import Cart from "../../Components/Cart/cart";

import './CartPage.scss';

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
