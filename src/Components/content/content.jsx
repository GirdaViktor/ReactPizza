import React from 'react';
import Categories from "../categories/categories";
import Sort from "../sort/sort";
import CartItem from "../cartItem/cartItem";
import './content.scss';
import SkeletonPizza from "../skeleton/SkeletonPizza";

const Content = ({items, isLoading}) => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ?
                [...new Array(8).map(i => <SkeletonPizza key={i} />)]
              : items.map((item) => <CartItem item={item} key={item.id}/>)}
        </div>
      </div>
    </div>
  );
};

export default Content;
