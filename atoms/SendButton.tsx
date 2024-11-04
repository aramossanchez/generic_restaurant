"use client";
import ListIcon from '@/utils/icons/DeliveryIcon';
import React, { MouseEventHandler, useState } from 'react'

interface SendButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function SendButton({ text = "", onClick }: SendButtonProps) {

    const [pressing, setPressing] = useState<boolean>(false);
  
    const styleButton = pressing ? 'scale-[0.96]' : "";
  
    return (
      <button
      onClick={onClick}
      className={`${styleButton} flex items-center gap-x-1 w-full justify-center`}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      >
      <ListIcon />
      <span>{text}</span>
    </button>
  )
}
