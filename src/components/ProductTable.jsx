import React from "react";

const ProductTable = ({ products, onDeleteProduct }) => {
  return (
    <div className="px-4 py-3">
      <div className="overflow-hidden rounded-xl border border-[#dce0e5] bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-3 text-left text-[#111418] text-sm font-medium leading-normal">Código</th>
              <th className="px-4 py-3 text-left text-[#111418] text-sm font-medium leading-normal">Nombre</th>
              <th className="px-4 py-3 text-left text-[#111418] text-sm font-medium leading-normal">Descripción</th>
              <th className="px-4 py-3 text-left text-[#111418] text-sm font-medium leading-normal">Cantidad</th>
              <th className="px-4 py-3 text-left text-[#111418] text-sm font-medium leading-normal">Fecha Creación</th>
              <th className="px-4 py-3 text-left text-[#637588] text-sm font-medium leading-normal">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.code} className="border-t border-t-[#dce0e5]">
                <td className="px-4 py-2 text-[#111418] text-sm font-normal leading-normal">{product.code}</td>
                <td className="px-4 py-2 text-[#637588] text-sm font-normal leading-normal">{product.name}</td>
                <td className="px-4 py-2 text-[#637588] text-sm font-normal leading-normal">{product.description}</td>
                <td className="px-4 py-2 text-[#637588] text-sm font-normal leading-normal">{product.quantity}</td>
                <td className="px-4 py-2 text-[#637588] text-sm font-normal leading-normal">{product.creationDate}</td>
                <td className="px-4 py-2 text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">
                  <button onClick={() => onDeleteProduct(product.code)} className="text-red-500 cursor-pointer">
                    Eiminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;