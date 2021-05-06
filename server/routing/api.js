const path = require("path");
const router = require("express").Router();
const db = require("../../models");

router.get("/books", (request, response) => {
  try {
    db.Book.find({}).then((books) => {
      response.json(books);
    });
  } catch (error) {
    response.sendStatus(400);
    throw new Error(error);
  }
});

router.post("/books", (request, response) => {
  const book = request.body;

  try {
    db.Book.create(book).then((res) => {
      response.send(res).status(200);
    });
  } catch (error) {
    response.sendStatus(400);
    throw new Error(error);
  }
});

module.exports = router;
