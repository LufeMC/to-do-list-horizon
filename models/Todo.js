const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	id: Number,
	title: String,
	time: {
		type: String,
		default: ""
	},
	completed: {
		type: Boolean,
		default: false
	},
	link: {
		type: String,
		default: ""
	}
});

module.exports = mongoose.model("Todos", TodoSchema);