import React from 'react'
import Link from 'next/link'

export default function Route({ href, children }) {
	const base =
		'p-4 rounded block focus:bg-blue-600 focus:text-white transition-colors duration-200 focus:no-underline outline-none'

	return (
		<Link href={href}>
			<a className={base}>{children}</a>
		</Link>
	)
}
