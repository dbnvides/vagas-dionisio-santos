const data = require("./fakeData");
let counter = 1;

module.exports = function (req, res) {
  const { name, job } = req.body;

  const newUser = {
    id: idSort(),
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};

const idSort = () => {
  let idExist = data.filter((item) => (item.id = counter));
  idExist && counter++;

  return counter;
};
