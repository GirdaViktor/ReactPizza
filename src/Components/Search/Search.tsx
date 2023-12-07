import React, { useCallback, useRef, useState } from 'react';

import { setSearchValue } from "../../Redux/filterSlice";
import { useDispatch } from "react-redux";

import './Search.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeInputDebounce =  useCallback(
    (value:any) => {dispatch(setSearchValue(value));
    }, []
  );

  const onChangeInput = (evt:any) => {
    setValue(evt.target.value);
    onChangeInputDebounce(evt.target.value);
  }

  const onClearSearch = () => {
    setValue('');
    dispatch(setSearchValue(''));
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className={'search'}>
      <input
        value={value}
        className={'search__input'}
        placeholder={'Поиск...'}
        onChange={onChangeInput}
        ref={inputRef}
      />
      {value &&
        <span
          onClick={onClearSearch}
          className={'search__clear'}
        >x</span>
      }
    </div>
  );
};

export default Search;
