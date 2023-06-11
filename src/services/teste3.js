var data = require("../../fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const newData = data.filter((person) => person.name !== name);
  data = newData;

  res.send({ message: "success" });
};
