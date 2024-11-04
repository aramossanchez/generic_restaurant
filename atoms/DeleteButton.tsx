"use client";
import DeleteIcon from '@/utils/icons/DeleteIcon';
import React, { MouseEventHandler, useState } from 'react'

interface DeleteButtonProps {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function DeleteButton({text = "", onClick}: DeleteButtonProps) {

  const [pressing, setPressing] = useState<boolean>(false);

  const styleButton = pressing ? 'scale-[0.96]' : "";

  return (
    <button
    onClick={onClick}
    className={`${styleButton} flex items-center gap-x-1 w-full justify-center`}
    onMouseDown={() => setPressing(true)}
    onMouseUp={() => setPressing(false)}
    >
      <DeleteIcon />
      <span>{text}</span>
    </button>
  )
}
