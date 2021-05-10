// For routing
const router = require("./routing");

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
// If no API routes are hit, send the React app
const root = require("path").join(__dirname, "../client", "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile(require("path").join(root, "index.html"));
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/book_search_engine",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.info("MongoDB Atlas Connected");
  }
);

server.listen(PORT, () => {
  console.info("Socket Online");
});
