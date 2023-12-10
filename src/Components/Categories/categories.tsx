import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, setCategoryId } from "../../Redux/filterSlice";

import './categories.scss';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(filterSelector).categoryId;
  const categoriesList: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

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
