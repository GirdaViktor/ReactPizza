import React from 'react';

import Categories from "../Categories/categories";
import Sort from "../Sort/sort";
import CartItem from "../CartItem/cartItem";
import SkeletonPizza from "../Skeleton/SkeletonPizza";
import Pagination from "../Pagination/Pagination";

import './content.scss';

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
                [...new Array(8).map((_, i) => <SkeletonPizza key={i} />)]
              : items.map((item) => <CartItem item={item} key={item.id}/>)}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Content;
