import React, { useState } from 'react'

import Loader from '../components/Loader.jsx'
import SEO from '../components/SEO.jsx'
import Button from '../components/Button.jsx'
import Result from '../components/Result.jsx'

import { useToasts, Toast } from '../components/Toast.jsx'

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
}

const error =
	'⛔ معرفتش اجيب مكانك, حاول مره تانية. لو لسه المشكلة موجودة اتأكد انك على اخر تحديث للمتصفح اللي شغال بيه.'

// const dummy = [
// 	{
// 		name: 'العطيفي ماركت, حسن محمد فيصل — الجيزة'
// 	},
// 	{
// 		name: 'العطيفي ماركت, حسن محمد فيصل — الجيزة'
// 	},
// 	{
// 		name: 'العطيفي ماركت, حسن محمد فيصل — الجيزة'
// 	}
// ]

const Loading = () => (
	<ul>
		{new Array(10).fill(0).map((e, i) => (
			<li key={i} className='mt-8'>
				<img
					src='/result.svg'
					alt='loading placeholder'
					className='max-w-full'
				/>
			</li>
		))}
	</ul>
)

const IndexPage = () => {
	const [toast, setToast] = useToasts()
	const [loading, setLoading] = useState(false)
	const [results, setResults] = useState([])

	const onSuccess = ({ coords }) => {
		const { latitude, longitude } = coords

		fetch(`/api/v1/search?latitude=${latitude}&longitude=${longitude}`)
			.then(res => res.json())
			.then(results => {
				setResults(results)
				setToast(null)
			})
			.catch(() => {
				setToast('⛔ في مشكلة حصلت. جرب تاني, لو الموضوع اتكرر ابعتلنا!')
			})
			.finally(() => {
				// setResults(dummy) // TODO: remove
				setLoading(false)
			})
	}

	const onError = () => {
		setToast(error)
		setLoading(false)
	}

	const onSearch = e => {
		e.preventDefault()

		if (!navigator.geolocation) {
			setToast(error)
		} else {
			setToast('بدور اهو')
			setLoading(true)
			navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
		}
	}

	return (
		<>
			<SEO />
			<div className='mx-auto max-w-screen-md'>
				{results.length === 0 ? (
					<div className='bg-blue-600 rounded-lg mx-auto p-4 px-6 mt-12 text-center md:text-right md:flex items-center justify-between'>
						<h1 className='text-2xl m-0 block'>
							عايزين تعرفوا المحلات القريبة منكم اللي شالوا المنتجات الفرنسية؟
						</h1>
						<Button
							className='block transition-all mx-auto md:mx-0 mt-4 md:mt-0'
							onClick={onSearch}
							disabled={loading}
						>
							{loading ? <Loader /> : 'دوس هنا!'}
						</Button>
					</div>
				) : (
					<div className='bg-white shadow hover:shadow-lg transition-all duration-200 rounded-lg mx-auto p-4 px-6 mt-12 flex items-center justify-center flex-wrap'>
						<h1 className='text-2xl m-0 block text-blue-600 font-bold'>
							دي المحلات اللي لقيتها قريبة منكم (مسافة 10 كيلو)
						</h1>
					</div>
				)}

				<div>
					{toast ? (
						<Toast className='text-blue-600 font-bold'>{toast}</Toast>
					) : null}
					<ul>
						{results.map(res => (
							<Result {...res} key={res.name} />
						))}
					</ul>
				</div>

				{results.length === 0 && loading ? <Loading /> : null}

				{results.length === 0 ? (
					<p className='text-blue-600 font-bold text-center'>
						المفروض يظهر هنا النتايج (الصفحة دي بتتحدث كل 60 ثانية)
					</p>
				) : null}
			</div>
		</>
	)
}
export default IndexPage
