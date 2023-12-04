import React, {useEffect, useState, useContext} from "react";

import {SearchContext} from "../../App";
import {useSelector} from "react-redux";
import axios from "axios";

import Content from "../../Components/Content/content";

const HomePage = () => {
  const {categoryId, sort} = useSelector(state => state.filterReducer);
  const {currentPage} = useSelector(state => state.paginationReducer);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {searchValue} = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://63ff64b6571200b7b7dcf348.mockapi.io/items?&page=${currentPage}&limit=${12}&${
      categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sort}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false)
      })
  }, [categoryId, sort.sort, searchValue, currentPage])

  const data = items
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false)

  return (
    <Content
      items={data}
      isLoading={isLoading}
    />
  );
};

export default HomePage;
