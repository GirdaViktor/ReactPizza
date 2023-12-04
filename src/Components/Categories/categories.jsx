import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../Redux/filterSlice";

import './categories.scss';

const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filterReducer.categoryId);
  const categoriesList = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item, i) =>
          <li
            key={i}
            className={categoryId === i ? 'active' : ''}
            onClick={() => {
              dispatch(setCategoryId(i));
            }}
          >{item}</li>)}
      </ul>
    </div>
  );
};

export default Categories;
