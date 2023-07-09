import React from "react";
import ReactPaginate from "react-paginate";

const PaginateBottom = ({ total, handlePageChange }) => {
  const totalPage = isNaN(total) ? 0 : total;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={totalPage}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
      pageClassName="flex justify-center items-center border border-orange-600 rounded w-8 py-1"
      className="flex justify-center items-center space-x-2 font-poppins text-[15px]"
      activeClassName="bg-orange-600 text-white"
      previousClassName="px-3 py-[5px] bg-orange-600 text-white rounded"
      nextClassName="px-3 py-[5px] bg-orange-600 text-white rounded"
    />
  );
};

export default PaginateBottom;
