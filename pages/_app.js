import React from 'react'

import Layout from '../components/Layout.jsx'

import '../styles/index.css'

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
