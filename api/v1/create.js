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
		name: joi.string().trim().min(6).max(160),
		location: joi.object({
			coordinates: joi.object({
				longitude: joi.number().min(-180).max(180),
				latitude: joi.number().min(-90).max(90)
			})
		})
	})
	.options({ presence: 'required' })

const app = express()

middleware(app)

module.exports = app.post('/api/v1/create', async (req, res) => {
	try {
		const validationError = schema.validate(req.body).error

		if (validationError) {
			res
				.status(StatusCodes.BAD_REQUEST)
				.json({ error: validationError.details[0].message })

			return
		}

		await connectToDatabase()

		const { location, name } = req.body
		const created = await Store.create({
			name,
			location: {
				coordinates: [
					location.coordinates.longitude,
					location.coordinates.latitude
				]
			}
		})

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
