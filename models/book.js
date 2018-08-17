var mongoose= require("mongoose")
var bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "name is required"
	},
	description: {
		type: String,
		required: "description is required"
	},
	price: {
		type: Number,
		required: "price is required"
	}
})
// make this class public
module.exports = mongoose.model( 'Book', bookSchema )

