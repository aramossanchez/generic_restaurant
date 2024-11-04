"use client";
import AddButton from '@/atoms/AddButton';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react'

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

    const { addProduct } = useProductContext();

  return (
    <div className='border-2 border-borderColor w-full p-10'>
        <p>{product.name}</p>
        <AddButton text='Añadir' onClick={() => addProduct(product)} />
    </div>
  )
}
