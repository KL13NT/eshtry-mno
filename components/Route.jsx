import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Route({ href, children }) {
	const router = useRouter()

	const active = router.pathname === href
	const base = `p-4 rounded-2xl block ${active ? ' route-active' : ''}`

	return (
		<Link href={href}>
			<a className={base}>{children}</a>
		</Link>
	)
}
