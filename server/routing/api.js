const path = require("path");
const router = require("express").Router();

router.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

router.get("/api", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
