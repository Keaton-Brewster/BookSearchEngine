const express = require("express");
const api = require("./api");
const app = express();

const PORT = process.env.PORT || 3001;

api(app);

app.listen(PORT, () => {
  console.info("server listening");
});
