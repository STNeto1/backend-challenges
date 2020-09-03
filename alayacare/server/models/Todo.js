const { Schema, model } = require('mongoose')

const TodoSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, 'Please add a description'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Todo', TodoSchema)
