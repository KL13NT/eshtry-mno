const { Schema, model } = require('mongoose')

const PointSchema = new Schema({
	type: {
		type: String,
		enum: ['Point'],
		default: 'Point',
		required: true
	},
	coordinates: {
		type: [Number],
		required: true
	}
})

const Store = new Schema({
	name: {
		type: String,
		required: true
	},
	location: {
		type: PointSchema,
		required: true
	}
})

Store.index({ location: '2dsphere' })

module.exports = model('Store', Store)
