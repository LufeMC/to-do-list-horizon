const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const PORT = process.env.PORT || 8080;

//Import Routes
const todosRoute = require('./routes/todos');

//Middlewares
app.use(express.static(__dirname + '/dist/new-todo-list'));
app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todosRoute);

app.get("/*", (req, res) => {
	res.sendFile(__dirname + '/dist/new-todo-list/index.html');
})

//Connect to DB
mongoose
	.connect(process.env.DB_CONNECTION,
	 { useUnifiedTopology: true, useNewUrlParser: true, },
	 () => {
	console.log("connected to DB")
})

//Start listening to the server
app.listen(PORT, () => {
	console.log(`Server initiateed on ${PORT}`);
});