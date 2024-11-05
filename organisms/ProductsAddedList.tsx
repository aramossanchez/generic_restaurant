"use client";
import DeleteButton from '@/atoms/DeleteButton';
import ProductAdded from '@/molecules/ProductAdded';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react';

export default function ProductsAddedList() {

  const { addedProducts, deleteAllProduct } = useProductContext();

  return (
    <section className='main-component'>
      <h2>Productos añadidos</h2>
      {addedProducts && addedProducts.length > 0 ?
        <>
          <DeleteButton text='Quitar todos los productos añadidos' onClick={() => deleteAllProduct()} />
          <div className='flex flex-col'>
            {addedProducts.map((product: Product, index: number) => {
              return (
                <ProductAdded key={`${product.id}-${index}`} product={product} />
              )
            })}
          </div>
        </>
        :
        <p>Aún no se ha guardado ningún producto.</p>
      }
    </section>
  )
}
