const { HttpError } = require("../helpers");

const isBodyEmpty = () => {
  const func = (req, res, next) => {
    const emptyBody = !Object.keys(req.body).length;
    if (emptyBody) {
      if (req.method === "PUT") {
        next(HttpError(400, "Missing fields"));
      } else if (req.method === "PATCH") {
        next(HttpError(400, "Missing field favorite"));
      }
    }
    next();
  };
  return func;
};

module.exports = isBodyEmpty;
