const express = require('express')
const morgan = require('morgan')
require('dotenv').config({
  path: './config/config.env',
})

// Local imports
const connectDB = require('./config/database')
const errorHandler = require('./middlewares/error')

// Route imports
const authRoute = require('./routes/auth')
const todoRoute = require('./routes/todo')

const app = express()

// Connect do database
connectDB()

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())

// Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/todos', todoRoute)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Running on port ${PORT} on ${process.env.NODE_ENV} mode`)
)
