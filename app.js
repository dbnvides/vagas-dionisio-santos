var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var teste1 = require("./src/services/teste1");
var teste2 = require("./src/services/teste2");
var teste3 = require("./src/services/teste3");
var teste4 = require("./src/services/teste4");
var teste5 = require("./src/services/teste5");
const isValidMiddleware = require("./src/middleware/isValidMiddleware.middleware");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2);
app.delete("/users/:id", isValidMiddleware, teste3);
app.put("/users/:id", isValidMiddleware, teste4);
app.get("/users/access", teste5);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
