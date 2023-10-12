import React from 'react'

type SelectInputProps = {
    id: string;
    label: string
    options: string[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    value: string;
    placeholder: string;
    isError?: boolean;
    errorMessage?: string;
}

const SelectInput = ({ id, label, options, value, onChange, placeholder, isError, errorMessage }: SelectInputProps) => {
  return (
    <div>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <select 
            id={id} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
            onChange={onChange}
        >
        <option selected>{placeholder}</option>
        {
            options.map((option) => (
                <option value={option}>{option}</option>
            ))
        }
        </select>
        {isError ? (
         <div className='text-red-500'>{errorMessage}</div>
       ) : null}
    </div>
  )
}

export default SelectInput