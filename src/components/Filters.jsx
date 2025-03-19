import React from "react";

const Filters = ({ onFilterChange, currentFilter }) => {
  return (
    <div className="flex gap-3 p-3 flex-wrap pr-4">
      <p>Filtros</p>
      <button
        onClick={() => onFilterChange("code")}
        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-2 cursor-pointer ${
          currentFilter === "code" ? "bg-blue-500 text-white" : "bg-[#f0f2f4] text-[#111418]"
        }`}
      >
        <p className="text-sm font-medium leading-normal">Código</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </button>
      <button
        onClick={() => onFilterChange("name")}
        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-2 cursor-pointer ${
          currentFilter === "name" ? "bg-blue-500 text-white" : "bg-[#f0f2f4] text-[#111418]"
        }`}
      >
        <p className="text-sm font-medium leading-normal">Nombre</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </button>
      <button
        onClick={() => onFilterChange("quantity")}
        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-2 cursor-pointer ${
          currentFilter === "quantity" ? "bg-blue-500 text-white" : "bg-[#f0f2f4] text-[#111418]"
        }`}
      >
        <p className="text-sm font-medium leading-normal">Cantidad</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </button>
      <button
        onClick={() => onFilterChange("creationDate")}
        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-2 cursor-pointer ${
          currentFilter === "creationDate" ? "bg-blue-500 text-white" : "bg-[#f0f2f4] text-[#111418]"
        }`}
      >
        <p className="text-sm font-medium leading-normal">Fecha Creación</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Filters;