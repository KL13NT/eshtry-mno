/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
const { db_path } = process.env

const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

let cachedClient = null

export const connectToDatabase = async () => {
	if (cachedClient) {
		console.log('👌 Using existing connection')
		return Promise.resolve(cachedClient)
	}

	try {
		console.log('🔥 New DB Connection')

		const client = await mongoose.connect(db_path, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		cachedClient = client
		return cachedClient
	} catch (err) {
		console.log(err)
		return cachedClient
	}
}
