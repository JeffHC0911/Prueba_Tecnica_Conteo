import React from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

const ProductForm = ({ onAddProduct }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newProduct = {
      code: parseInt(data.code),
      name: data.name,
      description: data.description,
      quantity: parseInt(data.quantity),
      creationDate: format(new Date(data.creationDate), 'yyyy-MM-dd'),

    };
    onAddProduct(newProduct);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="number"
        placeholder="Código"
        {...register('code', { required: true })}
        className="p-2 border rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Nombre"
        {...register('name', { required: true })}
        className="p-2 border rounded-md w-full bg-blue"
      />
      <input
        type="text"
        placeholder="Descripción"
        {...register('description', { required: true })}
        className="p-2 border rounded-md w-full"
      />
      <input
        type="number"
        placeholder="Cantidad"
        {...register('quantity', { required: true })}
        className="p-2 border rounded-md w-full"
      />
      <input
        type="date"
        {...register('creationDate', { required: true })}
        className="p-2 border rounded-md w-full cursor-pointer"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;