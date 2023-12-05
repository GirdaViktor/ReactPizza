import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataItems } from "../../Redux/dataSlice";

import Content from "../../Components/Content/content";

const HomePage = () => {
  const dispatch = useDispatch();
  const {categoryId, sort} = useSelector(state => state.filterReducer);
  const {currentPage} = useSelector(state => state.paginationReducer);

  const getData = () => dispatch(fetchDataItems({currentPage, categoryId, sort}));

  useEffect(() => {
    getData();
  }, [currentPage, categoryId, sort]);

  return (
    <Content />
  );
};

export default HomePage;
