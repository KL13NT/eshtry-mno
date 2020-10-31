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
			coords,
			name
		}

		fetch('/api/v1/register', {
			method: 'POST',
			body: JSON.stringify(body)
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
			<div className='mx-auto max-w-screen-md'>
				<div className='bg-blue-600 rounded-lg mx-auto p-4 px-6 mt-12'>
					<h1 className='text-2xl m-0'>
						تعرف محل قريب منك شال البضاعة الفرنسية من عنده؟ قول لنا عليه!
					</h1>
					<form className='mt-4' onSubmit={onSubmit} ref={formRef}>
						<Input
							id='name'
							label='name'
							placeholder='اسم المحل وعنوانه ...'
							className='w-full'
							required
						/>
						<p>
							⚠️ قبل ما تسجلوا محل جديد اتأكدوا انه مش موجود حواليكوا في صفحة
							البحث
						</p>
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
				<p className='mt-8 text-black'>
					<strong>اشتري منه</strong> ﻫﻲ ﺧﺪﻣﺔ ﻣﺠﺎﻧﻴﺔ ﻣﺒﻨﻴﺔ ﻋﺸﺎن ﺗﺴﻬﻞ اﻟﻮﺻﻮل
					ﻟﻠﻤﺤﻠﺎت اﻟﻠﻲ ﺷﺎﻟﺖ اﻟﺒﻀﺎﻋﺔ اﻟﻔﺮﻧﺴﻴﺔ ﻣﻦ ﻋﻨﺪﻫﺎ. ﺗﻘﺪروا ﺗﻌﻤﻠﻮا ﺑﺤﺚ ﻓﻲ ﺻﻔﺤﺔ
					اﻟﺒﺤﺚ ﻋﻠﻰ ﻣﻜﺎﻧﻜﻮا وﺗﺸﻮﻓﻮا اﻟﻤﺤﻠﺎت اﻟﻘﺮﻳﺒﻪ ﻣﻨﻜﻢ, او ﺗﻌﻤﻠﻮا ﻣﻨﺸﻮر ﺟﺪﻳﺪ
					ﺗﻘﻮﻟﻮﻟﻨﺎ ﻓﻴﻪ ﻋﻦ ﻣﺤﻞ ﺗﻌﺮﻓﻮه.
				</p>
			</div>
		</>
	)
}
export default IndexPage
