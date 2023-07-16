const { HttpError } = require("../helpers");

const isBodyEmpty = () => {
  const func = (req, res, next) => {
    const emptyBody = !Object.keys(req.body).length;
    if (emptyBody) {
      next(HttpError(400, "Missing fields"));
    }
    next();
  };
  return func;
};

module.exports = isBodyEmpty;
