import SelectGeneric from '@/atoms/SelectGeneric'
import React from 'react'

export default function Filters() {

const FILTER_OPTIONS = [
  "Tipo 1",
  "Tipo 2",
  "Tipo 3",
  "Tipo 4",
  "Tipo 5",
]

  return (
    <section className='main-component'>
      <h2>Filtros</h2>
      <SelectGeneric options={FILTER_OPTIONS} placeholder='Elige un tipo de producto' />
    </section>
  )
}
