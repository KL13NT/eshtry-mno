import React from 'react'

import { Toast } from './Toast.jsx'

export default function Layout({ children }) {
	return (
		<div className='font-rtl rtl'>
			<noscript>
				<Toast>Creating polls and voting require JavaScript.</Toast>
			</noscript>

			<nav className='flex justify-around'>
				<a href='/search'>ابحث</a>
				<a href='/'>الرئيسية</a>
			</nav>

			<div className='bg-blue-300 w-full mt-12 mx-auto rounder-4xl rtl p-4 text-center'>
				{children}
			</div>
		</div>
	)
}
