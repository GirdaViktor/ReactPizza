import React from 'react';
import ReactPaginate from "react-paginate";

import { useDispatch, useSelector } from "react-redux";
import { paginationSelector, setCurrentPage } from "../../Redux/paginationSlice";

import './pagination.scss';

type clickEventType = {
  selected?: number;
};

const Pagination:React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(paginationSelector);

  const onChangePage = (evt: clickEventType) => {
    if (evt.selected) {
      dispatch(setCurrentPage(evt.selected + 1))
    }
  }

  return (
    <ReactPaginate
      className={'pagination'}
      breakLabel="..."
      nextLabel="->"
      previousLabel="<-"
      onPageChange={onChangePage}
      pageRangeDisplayed={12}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
