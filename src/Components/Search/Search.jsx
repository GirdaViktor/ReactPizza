import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { setSearchValue } from "../../Redux/filterSlice";
import { useDispatch } from "react-redux";

import './Search.scss';

const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onChangeInputDebounce =  useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
    }, 1000), []
  );

  const onChangeInput = (evt) => {
    setValue(evt.target.value);
    onChangeInputDebounce(evt.target.value);
  }

  const onClearSearch = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current.focus()
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
