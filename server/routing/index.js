const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/api/books", bookRoutes);

// If no API routes are hit, send the React app
router.get("*", (request, response) => {
  response.sendFile(
    path.resolve(__dirname, "../../client/build", "index.html")
  );
});

module.exports = router;
