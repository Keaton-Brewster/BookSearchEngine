const path = require("path");

module.exports = (app) => {
//   app.get("*", (request, response) => {
//     response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
//   });

  app.get("/api/hello", (req, res) => {
    res.json("hello!");
  });
};
