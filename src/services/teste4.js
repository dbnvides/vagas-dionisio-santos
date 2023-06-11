var data = require("../../fakeData");

module.exports = function (req, res) {
  const { id } = req.query;
  const { name, job } = req.body;

  const indexPerson = data.findIndex((person) => person.id == id);

  const newPerson = {
    id: parseInt(data[indexPerson].id),
    name: name ? name : data[indexPerson].name,
    job: job ? job : data[indexPerson].job,
  };

  data[indexPerson] = newPerson;

  res.send(newPerson);
};
