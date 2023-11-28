import React, {useState} from 'react';
import './categories.scss';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categoriesList = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item, i) =>
          <li
            className={activeCategory == i ? 'active' : ''}
            onClick={() => {
              setActiveCategory(i);
            }}
          >{item}</li>)}
      </ul>
    </div>
  );
};

export default Categories;
