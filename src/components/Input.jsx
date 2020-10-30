import React from 'react'

export default function Input({ id = 'input', label = 'input', ...props }) {
	return (
		<>
			<input
				id={id}
				{...props}
				className='text-right text-lg bg-white p-4 border-none text-blue-600 placeholder-blue-600 rounded-2xl placeholder-opacity-75 focus:placeholder-opacity-100 font-bold'
			/>
			<label htmlFor={id} className='invisible'>
				{label}
			</label>
		</>
	)
}
