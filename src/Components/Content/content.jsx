import React, { useContext } from 'react';
import { useSelector } from "react-redux";

import Categories from "../Categories/categories";
import Sort from "../Sort/sort";
import CardItem from "../CardItem/cardItem";
import SkeletonPizza from "../Skeleton/SkeletonPizza";
import Pagination from "../Pagination/Pagination";

import { SearchContext } from "../../App";

import './content.scss';

const Content = () => {
  const { status } = useSelector(state => state.dataReducer);
  const {items} = useSelector(state => state.dataReducer);
  const {searchValue} = useContext(SearchContext);

  const data = items
    .filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false)

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
            status === 'loading' ?
                [...new Array(8).map((_, i) => <SkeletonPizza key={i} />)]
              : data.map((item) => <CardItem item={item} key={item.id}/>)}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Content;
