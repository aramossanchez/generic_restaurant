"use client";
import ProductCard from '@/molecules/ProductCard'
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react'

export default function ProductsList() {

  const { availableProducts } = useProductContext();

  return (
    <section>
      <h2>Productos disponibles</h2>
      {availableProducts.map((product: Product) => {
        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
    </section>
  )
}
