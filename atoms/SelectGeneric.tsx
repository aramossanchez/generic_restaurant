"use client";
import React, { useState } from 'react';

interface SelectGenericProps {
  placeholder: string;
  options: string[];
  onChange: (option: string) => void;
}

export default function SelectGeneric({ placeholder, options, onChange }: SelectGenericProps) {

  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className='relative min-w-full min-[600px]:min-w-[300px] max-w-[300px] '>
      <button
        className='text-left px-2 py-1 border-[1px] border-borderColor w-full'
        onClick={() => setOpened(!opened)}
      >
        {placeholder}
      </button>
      {opened &&
        <ul className='options-select border-[1px] border-borderColor absolute w-full top-[120%] max-h-[200px] bg-white overflow-y-auto space-y-1'>
          {options.map((option, index: number) => {
            return (
              <li
                key={`${option}-${index}`} className='cursor-pointer py-1 px-2 hover:bg-primaryColor'
                onClick={() => onChange(option)}
              >
                {option}
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
