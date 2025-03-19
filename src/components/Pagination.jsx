import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calcular el número de páginas
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
        className="flex size-10 items-center justify-center cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
        </svg>
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full cursor-pointer ${
            currentPage === number ? "bg-[#f0f2f4]" : "bg-white"
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() =>
          paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)
        }
        className="flex size-10 items-center justify-center cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;