import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataItems } from "../../Redux/dataSlice";

import { filterSelector } from "../../Redux/filterSlice";
import { paginationSelector } from "../../Redux/paginationSlice";

import Content from "../../Components/Content/content";

const HomePage = () => {
  const dispatch = useDispatch();
  const {categoryId, sort, searchValue} = useSelector(filterSelector);
  const {currentPage} = useSelector(paginationSelector);

  const getData = () => dispatch(fetchDataItems({currentPage, categoryId, sort, searchValue}));

  useEffect(() => {
    getData();
  }, [currentPage, categoryId, sort]);

  return (
    <Content />
  );
};

export default HomePage;
