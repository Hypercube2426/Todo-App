// creating mongoose schema for db
/*
Todo {
    title: string;
    description: string;
    completed:boolean

}
*/
const mongoose = require("mongoose");
// require('dotenv').config();

// Use the connection string from your .env file
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(mongodb+cdsvdfbvdfvdfvdfvdfdfvfvfv)
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo: todo,
};
