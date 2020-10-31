const express = require('express')
const joi = require('joi')
const { ReasonPhrases, StatusCodes } = require('http-status-codes')

// Models
const Store = require('../../models/Store')

// Utils
const middleware = require('../../utils/middleware')
const { connectToDatabase } = require('../../lib/db')

const schema = joi
	.object({
		longitude: joi.number().min(-180).max(180),
		latitude: joi.number().min(-90).max(90)
	})
	.options({ presence: 'required' })

const app = express()

middleware(app)

app.use((req, res, next) => {
	res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
	next()
})

module.exports = app.get('/api/v1/search', async (req, res) => {
	try {
		const validationError = schema.validate(req.query).error

		if (validationError) {
			res
				.status(StatusCodes.BAD_REQUEST)
				.json({ error: validationError.details[0].message })

			return
		}

		await connectToDatabase()

		const { longitude, latitude } = req.query
		const created = await Store.find()
			.where('location')
			.near({
				center: {
					type: 'Point',
					coordinates: [longitude, latitude]
				},
				maxDistance: 10 * 1000 /* 10 KM */
			})
			.limit(20)
			.lean()
			.exec()

		res.status(201).json(created)
	} catch (err) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR })
	}
})

app.all('*', (req, res) => {
	res
		.status(StatusCodes.METHOD_NOT_ALLOWED)
		.json({ error: ReasonPhrases.METHOD_NOT_ALLOWED })
})
