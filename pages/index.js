import React, { useRef, useState } from 'react'

import Loader from '../components/Loader.jsx'
import SEO from '../components/SEO.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

import { useToasts, Toast } from '../components/Toast.jsx'

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
}

const error =
	'معرفتش اجيب مكانك, حاول مره تانية. لو لسه المشكلة موجودة اتأكد انك على اخر تحديث للمتصفح اللي شغال بيه.'

const IndexPage = () => {
	const [toast, setToast] = useToasts()
	const [loading, setLoading] = useState(false)

	const formRef = useRef()

	const onSuccess = ({ coords }) => {
		const form = new FormData(formRef.current)
		const name = form.get('name')

		const body = {
			name,
			location: {
				coordinates: {
					longitude: coords.longitude,
					latitude: coords.latitude
				}
			}
		}

		fetch('/api/v1/create', {
			method: 'POST',
			body: JSON.stringify(body),
			mode: 'cors',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (res.ok)
					setToast(
						'تم تسجيل المحل ده, ممكن دلوقتي تدوروا على المحلات القريبة منكم في صفحة البحث'
					)
			})
			.catch(() => {
				setToast(error)
			})
			.finally(() => {
				setToast(
					'تم تسجيل المحل ده, ممكن دلوقتي تدوروا على المحلات القريبة منكم في صفحة البحث'
				)
				setLoading(false)
			})
	}

	const onError = () => {
		setToast(error)
		setLoading(false)
	}

	const onSubmit = e => {
		e.preventDefault()

		if (!navigator.geolocation) {
			setToast(error)
		} else {
			setToast('بسجل اهو')
			setLoading(true)
			navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
		}
	}

	return (
		<>
			<SEO />
			<div className='mx-auto'>
				<div className='bg-blue-600 rounded-lg mx-auto p-12 px-6 mt-12'>
					<h1 className='text-2xl m-0 mt-4'>
						تعرف محل قريب منك شال البضاعة الفرنسية من عنده؟ قول لنا عليه!
					</h1>
					<form className='mt-4' onSubmit={onSubmit} ref={formRef}>
						<Input
							id='name'
							name='name'
							label='Store name'
							placeholder='اسم المحل وعنوانه ...'
							className='w-full'
							required
						/>
						<p>
							⚠️ قبل ما تسجلوا محل جديد اتأكدوا انه مش موجود حواليكوا في صفحة
							البحث
						</p>
						<p>✔️ تقدروا تسجلوا محلين فقط كل 15 دقيقة</p>
						<Button
							type='submit'
							className='mt-8 mx-auto block transition-all'
							disabled={loading}
						>
							{loading ? <Loader /> : 'تسجيل محل جديد'}
						</Button>

						{toast ? <Toast className='mt-8'>{toast}</Toast> : null}
					</form>
				</div>
			</div>
		</>
	)
}
export default IndexPage
