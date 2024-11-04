"use client";
import React, { useState } from 'react';

interface SelectGenericProps {
  placeholder: string;
  options: string[];
}

export default function SelectGeneric({ placeholder, options }: SelectGenericProps) {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className='relative min-w-full min-[600px]:min-w-[300px] max-w-[300px] '>
      <button
        className='text-left px-2 py-1 border-[1px] border-borderColor w-full'
        onClick={() => setOpened(!opened)}
        onBlur={() => setOpened(false)}
      >
        {placeholder}
      </button>
      {opened &&
        <ul className='border-[1px] border-borderColor absolute w-full top-[120%] max-h-[200px] bg-white overflow-y-scroll'>
          {options.map((option, index: number) => {
            return (
              <li key={`${option}-${index}`}>{option}</li>
            )
          })}
        </ul>
      }
    </div>
  )
}
