// MANAGERS
const external_auth = require("../managers/external_auth");
const { customError } = require("../helpers/errorHandler");

//LOGIN
exports.login = async (username, password) => {
  // Check login
  const login = await external_auth.login(username, passowrd);
  if (login === null) throw new customError("wrong user or password");

  const user = {
    id: login._id,
    name: login.name,
    username: login.username,
    jwtToken: jwtToken
  };

  return user;
};

//REGISTER
exports.register = async (username, password, name, token) => {
  return true;
};
