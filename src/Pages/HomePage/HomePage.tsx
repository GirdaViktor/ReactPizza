import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchDataItems } from "../../Redux/dataSlice";

import { filterSelector } from "../../Redux/filterSlice";
import { paginationSelector } from "../../Redux/paginationSlice";
import { useAppDispatch } from "../../Redux/Store";

import Content from "../../Components/Content/content";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sort, searchValue } = useSelector(filterSelector);
  const { currentPage } = useSelector(paginationSelector);

  const getData = () => dispatch(fetchDataItems( {currentPage, categoryId, sort, searchValue}));

  useEffect(() => {
    getData();
  }, [currentPage, categoryId, sort]);

  return (
    <Content />
  );
};

export default HomePage;
