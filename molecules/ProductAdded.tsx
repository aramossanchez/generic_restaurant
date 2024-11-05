import DeleteButton from '@/atoms/DeleteButton';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import Image from 'next/image';
import React from 'react'

interface ProductAddedProps {
  product: Product;
}

export default function ProductAdded({ product }: ProductAddedProps) {

  const { deleteProduct } = useProductContext();

  return (
    <div className='border-2 border-borderColor flex flex-col'>
      <DeleteButton text='Quitar producto' onClick={() => deleteProduct(product)} />
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center'>
          <Image
            width={50}
            height={50}
            src={product.image}
            alt="Imagen del producto"
          />
          <span>{product.name}</span>
        </div>
        <span>{product.price}€</span>
      </div>
    </div>
  )
}
