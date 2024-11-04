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
      <span>{product.id}</span>
      <span>{product.name}</span>
      <Image
        width={100}
        height={100}
        src={product.image}
        alt="Imagen del producto"
      />
      <span>{product.price}€</span>
      <DeleteButton text='Quitar producto' onClick={() => deleteProduct(product)}/>
    </div>
  )
}
