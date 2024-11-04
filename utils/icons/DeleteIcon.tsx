import React from 'react'

interface DeleteIconProps {
  size?: number;
  fill?: string;
}

export default function DeleteIcon({
  size = 20,
  fill = "currentColor"
}: DeleteIconProps) {
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
        <path d="M9 12h6" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
    </div>
  )
}
