import React, { useCallback, useRef, useState } from 'react';

import { useDispatch } from "react-redux";
import { setSearchValue } from "../../Redux/filterSlice";

// @ts-ignore
import debounce from 'lodash.debounce';

import './Search.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeInputDebounce =  useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 1000), []
  );

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    onChangeInputDebounce(evt.target.value);
  };

  const onClearSearch = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus()
  };

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
