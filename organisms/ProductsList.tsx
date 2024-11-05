"use client";
import { PRODUCT_TYPES } from '@/data/ProductTypes';
import ProductCard from '@/molecules/ProductCard'
import TabsSection from '@/molecules/TabsSection';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react'

export default function ProductsList() {

  const { availableProducts, tabSelected } = useProductContext();

  return (
    <section className='main-component space-y-4'>
      <h2>Productos disponibles</h2>
      <TabsSection />
      <div className='space-y-4'>
        {PRODUCT_TYPES.map((type) => {
          return (
            (type === tabSelected || !tabSelected) &&
            <article key={`${type}-tipo-producto`} className='space-y-2'>
              <h3>{type}</h3>
              <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {availableProducts.map((product: Product) => {
                  return (
                    product.type === type && <ProductCard key={product.id} product={product} />
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
