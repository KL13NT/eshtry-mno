import React from 'react'

export default function Button({ children, className, ...props }) {
	return (
		<>
			<button
				className={
					'text-right text-lg bg-white p-4 border-none text-blue-600 placeholder-blue-600 rounded-lg placeholder-opacity-75 focus:placeholder-opacity-100 font-bold focus:bg-blue-400 focus:text-blue-600 transition-colors duration-200 focus:outline-none block max-w-max-content' +
					` ${className}`
				}
				{...props}
			>
				{children}
			</button>
		</>
	)
}
