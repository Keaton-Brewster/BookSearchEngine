const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const bookRoutes = require("./books");

// API Routes
router.use("/api", apiRoutes);
// Book routes
router.use("/books", bookRoutes);

// If no API routes are hit, send the React app
router.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

module.exports = router;
