import DeleteButton from '@/atoms/DeleteButton';
import { useProductContext } from '@/providers/ProductProvider';
import { Product } from '@/types/types';
import React from 'react'

interface ProductAddedProps {
  product: Product;
}

export default function ProductAdded({ product }: ProductAddedProps) {

  const { deleteProduct } = useProductContext();

  return (
    <div className='border-2 border-borderColor'>
      <span>{product.name}</span>
      <span>Añadido</span>
      <DeleteButton text='Quitar producto' onClick={() => deleteProduct(product)}/>
    </div>
  )
}
