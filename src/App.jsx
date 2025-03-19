import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductTable from "./components/ProductTable";
import Pagination from "./components/Pagination";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [productsPerPage] = useState(5); // Productos por página

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (code) => {
    setProducts(products.filter((product) => product.code !== code));
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar el filtro
  };

  // Ordenar productos según el filtro
  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "code") return a.code - b.code;
    if (filter === "name") return a.name.localeCompare(b.name);
    if (filter === "quantity") return a.quantity - b.quantity;
    if (filter === "creationDate") return new Date(a.creationDate) - new Date(b.creationDate);
    return 0;
  });

  // Lógica de paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar onAddProduct={handleAddProduct} />
      <div className="flex-1">
        <Header />
        <Filters onFilterChange={handleFilterChange} currentFilter={filter} />
        <ProductTable products={currentProducts} onDeleteProduct={handleDeleteProduct} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={sortedProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default App;