import React from 'react'

export default function Input({
	id = 'input',
	label = 'input',
	className,
	...props
}) {
	return (
		<>
			<input
				id={id}
				aria-label={label}
				{...props}
				className={
					'text-right text-lg bg-white p-4 border-none text-blue-600 placeholder-blue-600 rounded-lg placeholder-opacity-75 focus:placeholder-opacity-100 font-bold w-auto' +
					` ${className}`
				}
			/>
		</>
	)
}
