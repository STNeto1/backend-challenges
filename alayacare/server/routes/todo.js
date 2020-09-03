const router = require('express').Router()

// Controller
const { findAll, createTodo, complete } = require('../controllers/todo')

// Auth middleware
const { protect } = require('../middlewares/auth')

router.route('/').get(protect, findAll).post(protect, createTodo)
router.delete('/:id', protect, complete)

module.exports = router
