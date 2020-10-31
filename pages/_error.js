import React from 'react'

import Button from '../components/Button.jsx'

import SEO from '../components/SEO.jsx'

const reload = () => window.location.reload()
const defaults = {
	code: 'BEEP_BOOP_ERROR',
	error: 'في حاجة غلط حصلت.. جرب اقفل الموقع و شغله تاني :"D'
}

function Error({ code, error } = defaults) {
	return (
		<>
			<SEO title={code} description={error} />
			<img src='/assets/doge_sad.jpg' className='h-64 m-auto mt-12' />
			<h1 className='sm:text-2xl text-4xl md:text-4xl font-bold text-center mt-4 leading-none'>{`<${code}>`}</h1>
			<p className='text-lg mt-2'>{error}</p>
			<Button className='mt-8' onClick={reload}>
				ريفرش
			</Button>
		</>
	)
}

export default Error
