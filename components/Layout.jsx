import React from 'react'

import { Toast } from './Toast.jsx'
import Route from './Route.jsx'

export default function Layout({ children }) {
	return (
		<div className='font-rtl rtl px-4'>
			<noscript>
				<Toast>Creating polls and voting require JavaScript.</Toast>
			</noscript>

			<nav className='flex justify-around mx-auto w-1/5'>
				<Route href='/'>
					<img src='/uranus.svg' alt='home icon' className='w-12' />
				</Route>
				<Route href='/search'>
					<img src='/search.svg' alt='search icon' className='w-12' />
				</Route>
			</nav>

			<div className='bg-blue-300 w-full mx-auto rounded-lg rtl p-4 min-h-full'>
				{children}
			</div>
		</div>
	)
}
