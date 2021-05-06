const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/api/books", bookRoutes);

// If no API routes are hit, send the React app
const root = require("path").join(__dirname, "client", "build");
router.use(express.static(root));
router.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

module.exports = router;
