"use client";
import ProductCard from '@/molecules/ProductCard'
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react'

export default function ProductsList() {

  const { availableProducts } = useProductContext();

  return (
    <section className='main-component'>
      <h2>Productos disponibles</h2>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
      {availableProducts.map((product: Product) => {
        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
      </div>
    </section>
  )
}
