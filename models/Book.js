const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  id: String,
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  imageLinks: Object,
  categories: Array,
  link: String,
  date: { type: Date, default: Date.now },
});

const Book = model("Book", bookSchema);

module.exports = Book;
