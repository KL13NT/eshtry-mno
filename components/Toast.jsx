import React, { useEffect, useRef, useState } from 'react'

function useToasts() {
	const [toast, set] = useState(null)
	const timeout = useRef(null)

	useEffect(() => {
		if (timeout.current) clearTimeout(timeout.current)

		timeout.current = setTimeout(() => {
			set(null)
		}, 5000)
	}, [toast])

	return [toast, set]
}

function Toast({ children, className, ...props }) {
	return (
		<p role='alert' className={`text-center text-xl ${className}`} {...props}>
			{children}
		</p>
	)
}

export { Toast, useToasts }
