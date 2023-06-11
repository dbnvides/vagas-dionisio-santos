var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  data.filter((person) => person.name !== name);

  res.send("success");
};
