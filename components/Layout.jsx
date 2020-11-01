import React from 'react'

import { Toast } from './Toast.jsx'
import Route from './Route.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
	return (
		<div className='font-rtl rtl px-4 pb-24'>
			<noscript>
				<Toast>لازم تشغل جافاسكربت عندك عشان الموقع يشتغل كويس.</Toast>
			</noscript>

			<nav className='flex justify-evenly md:justify-around mx-auto md:w-2/5 bg-blue-600 p-2 rounded-lg text-black text-xl text-center bg-opacity-25 mt-2'>
				<Route href='/'>
					<img src='/uranus.svg' alt='home icon' className='w-12 inline' />
					<span className='block mt-2'>الرئيسية</span>
				</Route>
				<Route href='/search'>
					<img src='/search.svg' alt='search icon' className='w-12 inline' />
					<span className='block mt-2'>البحث</span>
				</Route>
			</nav>

			<div className='w-full mx-auto rounded-lg rtl p-4 max-w-screen-md'>
				<h1 className='font-bold text-center text-4xl text-blue-600'>
					🔥 إشْتِري مِنُّه 🔥
				</h1>

				{children}

				<Footer />
			</div>
		</div>
	)
}
