const express =require("express");
const router = express.Router();
const Todo = require("../models/Todo")

//GET BACK ALL THE TODOS
router.get("/", async (req, res) => {
	try {
		const mysort = { id: 1 }
		const todos = await Todo.find().sort(mysort);
		res.json(todos);
	} catch (err) {
		res.json({message: err})
	}
});

//GET SPECIFIC TODO
router.get("/:id", async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		res.json(todo);
	} catch(err) {
		res.json({message:err});
	}
});

//SUBMITS A TODO
router.post('/', async (req, res) => {
	const todo = new Todo({
		id: req.body.id,
		title: req.body.title,
		time: req.body.time,
		link: req.body.link
	});

	try {
		const savedTodo = await todo.save();
		res.json(savedTodo);
	} catch(err) {
		res.json({message: err});
	}
});

//DELETE A TODO
router.delete('/:id', async (req, res) => {
	try {
		const removedTodo = await Todo.remove({_id: req.params.id});
		res.json(removedTodo);

	} catch(err) {
		res.json({message: err});
	};
});

//UPDATE A TODO
router.patch('/:id', async (req, res) => {
	try {
		const updatedTodo = await Todo.updateOne({_id: req.params.id},
												 { $set: {
												 	id: req.body.id,
													title: req.body.title,
													time: req.body.time,
													link: req.body.link,
													completed: req.body.completed
												 }});
		res.json(updatedTodo);
	} catch (err) {
		res.json({message: err});
	}
});

module.exports = router;