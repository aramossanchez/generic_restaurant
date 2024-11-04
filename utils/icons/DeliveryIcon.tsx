import React from 'react'

interface DeliveryIconProps {
  size?: number;
  fill?: string;
}

export default function DeliveryIcon({
  size = 20,
  fill = "currentColor"
}: DeliveryIconProps) {
  return (
    <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
        <path d="M9 7l6 0" />
        <path d="M9 11l6 0" />
        <path d="M9 15l4 0" />
        </svg>
    </div>
  )
}
