"use client";
import { useProductContext } from '@/providers/ProductProvider';
import React from 'react'

export default function OrderInfo() {

    const { totalPrice } = useProductContext();

  return (
    <section>
      <span>{totalPrice}€</span>
    </section>
  )
}
