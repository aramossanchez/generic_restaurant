"use client";
import SelectGeneric from '@/atoms/SelectGeneric'
import { useProductContext } from '@/providers/ProductProvider';
import React from 'react'

export default function Filters() {
  
  const { FILTER_OPTIONS, setfilterSelected } = useProductContext();

  return (
    <section className='main-component'>
      <h2>Filtros</h2>
      <SelectGeneric options={FILTER_OPTIONS} onChange={setfilterSelected} placeholder='Elige un tipo de producto' />
    </section>
  )
}
