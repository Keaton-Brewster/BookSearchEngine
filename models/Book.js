const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: String,
  categories: Array,
  date: { type: Date, default: Date.now },
});

const Book = model("Book", bookSchema);

module.exports = Book;
