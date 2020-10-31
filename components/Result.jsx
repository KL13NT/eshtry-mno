import React from 'react'

export default function Result({ name, ...props }) {
	return (
		<div
			className='bg-blue-600 rounded-lg mx-auto p-4 px-6 mt-8 flex items-center justify-between flex-wrap text-center hover:shadow-lg transition-all duration-200 '
			{...props}
		>
			<p className='text-2xl m-0'>{name}</p>
			<a
				className='text-lg bg-white p-4 border-none text-blue-600 placeholder-blue-600 rounded-lg placeholder-opacity-75 focus:placeholder-opacity-100 font-bold focus:bg-blue-400 focus:text-blue-600 transition-colors duration-200 focus:outline-none block cursor-pointer mx-0 mt-4 md:mt-0 text-center'
				href={`https://www.google.com/maps/search/${name}`}
				target='_blank'
				rel='noreferrer'
				referrerPolicy='no-referrer'
			>
				شوفه على خرايط جووجل
			</a>
		</div>
	)
}
