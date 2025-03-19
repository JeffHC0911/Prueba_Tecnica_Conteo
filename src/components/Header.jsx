import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Productos</p>
        <p className="text-[#637588] text-sm font-normal leading-normal">Gestiona tus productos</p>
      </div>
    </div>
  );
};

export default Header;