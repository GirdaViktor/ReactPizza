import React, {useCallback, useContext, useRef, useState} from 'react';
import debounce from 'lodash.debounce';

import {SearchContext} from "../../App";

import './Search.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const {setSearchValue} = useContext(SearchContext);

  const onChangeInputDebounce =  useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 1000), []
  );

  const onChangeInput = (evt) => {
    setValue(evt.target.value);
    onChangeInputDebounce(evt.target.value)
  }

  const onClearSearch = () => {
    setValue('');
    setSearchValue('');
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
