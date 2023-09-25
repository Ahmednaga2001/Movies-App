import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ getPage }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <section className="py-3 pagination d-flex justify-content-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={12}
        previousLabel="<السابق"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </section>
  );
}
