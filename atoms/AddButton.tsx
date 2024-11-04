"use client";
import AddIcon from '@/utils/icons/AddIcon';
import React, { MouseEventHandler, useState } from 'react'

interface AddButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function AddButton({ text = "", onClick }: AddButtonProps) {

  const [pressing, setPressing] = useState<boolean>(false);

  const styleButton = pressing ? 'scale-[0.96]' : "";

  return (
    <button
    onClick={onClick}
    className={`${styleButton} flex items-center gap-x-1 w-full justify-center`}
    onMouseDown={() => setPressing(true)}
    onMouseUp={() => setPressing(false)}
    >
      <AddIcon />
      <span>{text}</span>
    </button>
  )
}
