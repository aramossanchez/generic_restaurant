"use client";
import AddButton from '@/atoms/AddButton';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import Image from 'next/image';
import React from 'react'

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  const { addProduct } = useProductContext();

  return (
    <div className='border-2 border-borderColor w-full p-10 flex flex-col'>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <Image
        width={100}
        height={100}
        src={product.image}
        alt="Imagen del producto"
      />
      <AddButton text='Añadir' onClick={() => addProduct(product)} />
    </div>
  )
}
