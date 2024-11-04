"use client";
import SendButton from '@/atoms/SendButton';
import { useProductContext } from '@/providers/ProductProvider';
import React from 'react'

export default function SendInfo() {

  const { sendInfo } = useProductContext();

  return (
    <section className='main-component'>
      <SendButton text="Enviar" onClick={() => sendInfo()} />
    </section>
  )
}
