const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");

const names = require("./routes/names");
const messages = require("./routes/messages");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", messages);
app.use("/", names);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
