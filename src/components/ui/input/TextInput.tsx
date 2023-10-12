import React from 'react'

type TextInput = {
    id: string;
    label: string
    name: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
    isError?: boolean;
    errorMessage?: string;
}

const TextInput = ({label, isError, errorMessage, ...fields}: TextInput) => {
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor="title">{label}</label>
        <input
          className='border border-gray-300 rounded-md p-2'
            {...fields}
        />
        {isError ? (
         <div className='text-red-500'>{errorMessage}</div>
       ) : null}
    </div>
  )
}

export default TextInput