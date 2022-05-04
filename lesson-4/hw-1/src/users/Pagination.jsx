import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 1;

  const isNextPageAvailable = Math.ceil(totalItems / itemsPerPage) === currentPage;
  return (
    <div className="pagination">
      <button disabled={isPrevPageAvailable} onClick={goPrev} className="btn">
        {isPrevPageAvailable ? null : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={isNextPageAvailable} onClick={goNext} className="btn">
        {isNextPageAvailable ? null : '→'}
      </button>
    </div>
  );
};

export default Pagination;
