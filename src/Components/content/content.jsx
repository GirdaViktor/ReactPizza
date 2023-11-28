import React from 'react';
import Categories from "../categories/categories";
import Sort from "../sort/sort";
import CartItem from "../cartItem/cartItem";
import './content.scss';

const Content = ({items}) => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((item) => <CartItem item={item} key={item.id}/>)}
        </div>
      </div>
    </div>
  );
};

export default Content;
