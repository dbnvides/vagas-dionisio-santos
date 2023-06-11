const data = require("../../fakeData");

const isValidMiddleware = (req, res, next) => {
  const { id } = req.params;

  const findUser = data.find((user) => user.id == id);

  if (!findUser) {
    return res.json({ message: "User not found" }).status(403);
  }

  if (findUser.admin) {
    return next();
  }

  return res.json({ message: "Not have authorization" }).status(403);
};

module.exports = isValidMiddleware;
