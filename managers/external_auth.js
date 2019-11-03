const JWT = require("../helpers/jwt");

// Simulate login
exports.login = async (username, password) => {
  const fakeId = Math.random()
    .toString(36)
    .substr(2, 9);
  const jwtToken = JWT.sign({ username: username });
  const userPassword = "123456";
  const response = await new Promise((resolve, reject) => {
    return setTimeout(() => {
      return userPassword === password
        ? resolve({
            id: fakeId,
            name: "Peter",
            username,
            jwtToken
          })
        : resolve(null);
    }, 500);
  });

  return response;
};
