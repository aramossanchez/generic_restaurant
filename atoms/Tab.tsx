import React, { MouseEventHandler } from 'react';

interface TabProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Tab({
  text,
  onClick,
  className
}: TabProps) {
  return (
    <span
      className={`${className} border-2 px-2 py-1 cursor-pointer text-nowrap`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}
