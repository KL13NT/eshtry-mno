import React from 'react'

import Layout from '../src/components/Layout.jsx'

import '../src/styles/index.css'

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
