const Todo = require('../models/Todo')
const AsyncHandler = require('../middlewares/asyncHandler')
const ErrorResponse = require('../utils/errorResponse')

exports.findAll = AsyncHandler(async (req, res, next) => {
  const todos = await Todo.find({
    user: req.user._id,
  })

  res.status(200).json({
    success: true,
    todos,
  })
})

exports.createTodo = AsyncHandler(async (req, res, next) => {
  const todo = await Todo.create({
    description: req.body.description,
    user: req.user._id,
  })

  res.status(200).json({
    success: true,
    todo,
  })
})

exports.complete = AsyncHandler(async (req, res, next) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id })

  if (!todo) {
    return next(new ErrorResponse('Todo not found', 400))
  }

  await todo.remove()

  res.status(200).json({
    success: true,
  })
})

// teste
