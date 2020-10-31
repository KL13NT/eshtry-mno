const express = require('express')
const rateLimit = require('express-rate-limit')
// const cors = require('cors')

const generalLimit = rateLimit({
	windowMs: /* 15 minutes */ 15 * 60 * 1000,
	max: 100
})

const createLimit = rateLimit({
	windowMs: /* 15 minutes */ 15 * 60 * 1000,
	max: 2
})

module.exports = app => {
	// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
	// see https://expressjs.com/en/guide/behind-proxies.html
	app.set('trust proxy', 1)

	app.use(express.json())

	// Rate limiting
	app.use(generalLimit)
	app.use('/api/v1/create', createLimit)
}
