var data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  const result = name ? data.filter((person) => person.name == name) : data[0];

  res.send(result);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
