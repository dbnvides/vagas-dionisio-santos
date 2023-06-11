const { nomePesquisado } = require("./teste1");

require("./teste1");

module.exports = function (req, res) {
  const { name } = req.query;
  const result = nomePesquisado[name];

  res.json({ message: `Usuário ${name} foi lido ${result} vezes.` });
};
