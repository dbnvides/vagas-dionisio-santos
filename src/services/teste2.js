const data = require("../../fakeData");
let counter = 1;

module.exports = function (req, res) {
  const { name, job } = req.body;
  let admin = req.body.admin;

  if (!admin) {
    admin = false;
  }

  idSort();

  let nextId = counter;

  const newUser = {
    id: nextId,
    name: name,
    job: job,
    admin: admin,
  };

  data.push(newUser);

  res.send(newUser);
};

const idSort = () => {
  let idExist = data.find((item) => item.id === counter);

  if (idExist) {
    return counter++;
  }
};
