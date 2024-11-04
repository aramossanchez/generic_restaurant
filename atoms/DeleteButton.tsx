"use client";
import React, { MouseEventHandler } from 'react'

interface DeleteButtonProps {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function DeleteButton({text = "", onClick}: DeleteButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
