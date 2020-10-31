import React from 'react'

import { Toast } from './Toast.jsx'
import Route from './Route.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
	return (
		<div className='font-rtl rtl px-4 pb-24 mt-4'>
			<noscript>
				<Toast>لازم تشغل جافاسكربت عندك عشان الموقع يشتغل كويس.</Toast>
			</noscript>

			<nav className='flex justify-evenly md:justify-around mx-auto md:w-1/5'>
				<Route href='/'>
				<img src='/uranus.svg' alt='home icon' className='w-12' />
				</Route>
				<Route href='/search'>
					<img src='/search.svg' alt='search icon' className='w-12' />
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
