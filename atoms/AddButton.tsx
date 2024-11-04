"use client";
import React, { MouseEventHandler } from 'react'

interface AddButtonProps {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function AddButton({text = "", onClick}: AddButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
