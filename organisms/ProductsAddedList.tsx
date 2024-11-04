"use client";
import ProductAdded from '@/molecules/ProductAdded';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react';

export default function ProductsAddedList() {

  const { addedProducts } = useProductContext();

  return (
    <section>
      <h2>Productos añadidos</h2>
      {addedProducts.map((product: Product, index: number) => {
        return (
          <ProductAdded key={`${product.id}-${index}`} product={product} />
        )
      })}
    </section>
  )
}
