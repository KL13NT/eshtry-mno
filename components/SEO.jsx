import React from 'react'
import Head from 'next/head'

const defaults = {
	sitename: 'اشتري منه',
	title: 'اشتري منه',
	description: 'اعرف المحلات اللي مش بتبيع بضاعه فرنسية قريبة منك',
	url: 'https://eshtry-mno.vercel.app'
}

const Images = ({ image }) => (
	<Head>
		<meta content={image} property='og:image' />
		<meta content={image} property='og:image:url' />
		<meta content={image} property='og:image:secure_url' />
		<meta content={image} property='twitter:image' />
	</Head>
)

function SEO({ title, url, description = defaults.description }) {
	const finalTitle = title ? `${title} - اشتري منه` : defaults.title

	return (
		<>
			<Head>
				<title>{finalTitle}</title>
				<meta content={finalTitle} property='og:title' />
				<meta content={finalTitle} property='twitter:title' />
				<meta content={description} name='description' />
				<meta content={description} property='og:description' />
				<meta content={description} property='twitter:description' />
				<meta content={'image/jpeg'} property='og:image:type' />
				<meta content='summary_large_image' name='twitter:card' />
				<meta content='website' property='og:type' />
				<meta content={defaults.sitename} property='og:site_name' />
				<meta
					content={`${defaults.url}${url}` || defaults.url}
					property='og:url'
				/>

				<link rel='manifest' href='/manifest.webmanifest' />

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/icons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/icons/favicon-16x16.png'
				/>
				<link
					rel='mask-icon'
					href='/icons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<link rel='shortcut icon' href='/icons/favicon.ico' />
				<meta name='msapplication-TileColor' content='#2b5797' />
				<meta name='msapplication-config' content='/icons/browserconfig.xml' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<Images image='https://eshtry-mno.vercel.app/assets/cover.png' />
		</>
	)
}

export default SEO
