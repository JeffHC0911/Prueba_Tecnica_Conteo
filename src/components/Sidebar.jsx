import React, { useState } from "react";

const Sidebar = ({ onAddProduct }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      code: parseInt(code),
      name,
      description,
      quantity: parseInt(quantity),
      creationDate: new Date(creationDate).toISOString().split("T")[0],
    };
    onAddProduct(newProduct);
    setCode("");
    setName("");
    setDescription("");
    setQuantity("");
    setCreationDate("");
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen); // Alternar entre abierto y cerrado
  };

  return (
    <div className="flex flex-col w-80 bg-white p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#111418] text-base font-medium leading-normal">Prueba Conteo</h1>
        <div className="flex flex-col gap-2">
          <div
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0f2f4] cursor-pointer"
            onClick={toggleProductsMenu} // Alternar menú al hacer clic
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88h0l45.63-68.44A8,8,0,0,0,246.66,123.56Z"></path>
            </svg>
            <p className="text-[#111418] text-sm font-medium leading-normal">Agregar Productos</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 256 256"
              className={`transform transition-transform ${isProductsMenuOpen ? "rotate-180" : ""}`} // Rotar ícono cuando el menú está abierto
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
          {isProductsMenuOpen && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pl-8">
              <input
                type="number"
                placeholder="Código"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="p-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="p-2 border rounded-md"
                required
              />
              <input
                type="date"
                value={creationDate}
                onChange={(e) => setCreationDate(e.target.value)}
                className="p-2 border rounded-md cursor-pointer"
                required
              />
              <button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Agregar</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;