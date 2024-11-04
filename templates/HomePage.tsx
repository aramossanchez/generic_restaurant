import ProductsAddedList from '@/organisms/ProductsAddedList';
import ProductsList from '@/organisms/ProductsList';
import { ProductProvider } from '@/providers/ProductProvider';
import React from 'react'

export default function HomePage() {
  return (
    <ProductProvider>
      <main>
        <h1>HomePage</h1>
        <ProductsList />
        <ProductsAddedList />
      </main>
    </ProductProvider>
  )
}
