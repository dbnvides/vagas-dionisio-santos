var data = require("../../fakeData");
let nomePesquisado = {};

const getUser = (req, res, next) => {
  const { name } = req.query;

  const findPerson = data.find((person) => person.name === name);
  getCountUser(name);

  if (findPerson) {
    return res.send(findPerson);
  }

  return res.send(data[0]);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

const getCountUser = (name) => {
  if (nomePesquisado[name]) {
    nomePesquisado[name]++;
  } else {
    nomePesquisado[name] = 1;
  }
};

module.exports = {
  getUser,
  getUsers,
  getCountUser,
  nomePesquisado,
};
