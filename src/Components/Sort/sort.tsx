import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { filterSelector, setSort } from "../../Redux/filterSlice";

import { sortList, SortListItemType } from "./sortList.enum";
import './sort.scss';

type PopupClickType = MouseEvent & {
  path: Node[];
  composedPath: [];
};

const Sort: React.FC = () => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const activeSort = useSelector(filterSelector).sort;

  const onClickItemSort = (item: SortListItemType) => {
    dispatch(setSort(item));
    setOpen(false);
  };

  const onClickOpenSort = () => {
    open ? setOpen(false) : setOpen(true)
  };

  useEffect(() => {
    const handleClosePopup = (evt: MouseEvent) => {
      const _event = evt as PopupClickType;

      const path = _event.path || (_event.composedPath)

      if (sortRef.current && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClosePopup);

    return () => {
      document.body.removeEventListener('click', handleClosePopup);
    }
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label"
        onClick={onClickOpenSort}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{activeSort.name}</span>
      </div>
      {open &&
        <div className="sort__popup">
          <ul>
            {sortList.map(item => <li
              className={activeSort.sort === item.sort ? 'active' : ''}
              onClick={() => onClickItemSort(item)}
              key={item.sort}
            >{item.name}</li>)}
          </ul>
        </div>
      }
    </div>
  );
};

export default Sort;
