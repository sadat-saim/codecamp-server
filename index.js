const express = require("express");
const json = require("./data.json");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(json);
});

app.get("/:id", (req, res) => {
  const course = json.find((c) => c._id === req.params.id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`'App listening on port ${port}!'`);
});
