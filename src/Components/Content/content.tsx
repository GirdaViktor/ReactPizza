import React from 'react';
import { useSelector } from "react-redux";

import { filterSelector } from "../../Redux/filterSlice";
import { dataSelector, IItem } from "../../Redux/dataSlice";

import Categories from "../Categories/categories";
import Sort from "../Sort/sort";
import CardItem from "../CardItem/cardItem";
import SkeletonPizza from "../Skeleton/SkeletonPizza";
import Pagination from "../Pagination/Pagination";

import './content.scss';

const Content:React.FC = () => {
  const { status, items } = useSelector(dataSelector);
  const { searchValue } = useSelector(filterSelector);

  const data = items
    .filter((obj:IItem) => obj.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false);

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
              : data.map((item:IItem) => <CardItem {...item} key={item.id}/>)}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Content;
