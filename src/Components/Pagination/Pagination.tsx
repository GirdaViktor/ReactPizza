import React from 'react';
import ReactPaginate from "react-paginate";

import { useDispatch, useSelector } from "react-redux";
import { paginationSelector, setCurrentPage } from "../../Redux/paginationSlice";

import './pagination.scss';

const Pagination:React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(paginationSelector);

  const onChangePage = (evt:any) => dispatch(setCurrentPage(evt.selected + 1))

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="->"
      previousLabel="<-"
      onPageChange={onChangePage}
      pageRangeDisplayed={12}
      pageCount={3}
      forcePage={currentPage}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
