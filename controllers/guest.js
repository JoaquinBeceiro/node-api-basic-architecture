// SERVICES
const guest_services = require("../services/guest");
const { generic } = require("../helpers/errorHandler");

/*
    /login
*/
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const auth = await guest_services.login(username, password);
    return auth && auth.error
      ? res.status(200).jsonp({ error: auth.error })
      : res.status(200).jsonp(auth);
  } catch (err) {
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};

/*
    /register
*/
exports.register = async (req, res) => {
  const { username, password, name, token } = req.body;

  try {
    const user = await guest_services.register(username, password, name, token);

    return user && user.error
      ? res.status(200).jsonp({ error: user.error })
      : res.status(200).jsonp(user);
  } catch (err) {
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};
