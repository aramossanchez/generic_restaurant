import Filters from '@/organisms/Filters';
import OrderInfo from '@/organisms/OrderInfo';
import ProductsAddedList from '@/organisms/ProductsAddedList';
import ProductsList from '@/organisms/ProductsList';
import Requests from '@/organisms/Requests';
import SendInfo from '@/organisms/SendInfo';
import { ProductProvider } from '@/providers/ProductProvider';
import React from 'react'

export default function HomePage() {
  return (
    <ProductProvider>
      <main className='main-container'>
        <h1 className='main-component'>HomePage</h1>
        <Filters />
        <ProductsList />
        <ProductsAddedList />
        <Requests />
        <OrderInfo />
        <SendInfo />
      </main>
    </ProductProvider>
  )
}
