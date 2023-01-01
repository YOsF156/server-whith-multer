const jwt = require("jsonwebtoken");
let jwtSecret = process.env.JWT_SECRET;

let refreshTokens = {};

const createToken = (user) => {
  let token = jwt.sign({ user }, jwtSecret, { expiresIn: "10s" });
  let refToken = jwt.sign({ user }, jwtSecret, { expiresIn: "30s" });
  refreshTokens[refToken] = user.userId;
  console.log("token", token);
  return { token, refToken };
};

const refreshToken = (user,refToken) => {
  try {
    let exist = refreshTokens[refToken];
    console.log('exist',exist);
    if (!exist) {
      return false;
    }
    //remove ref token
    let verify = verifyToken(refToken);
    //get new 2 tokens
    refreshTokens[refToken] = undefined;
    let { token, refreshToken } = createToken(user);
    refreshTokens[refreshToken] = user.userId;
    console.log("tok", token, "ref", refreshToken);
    return{ token,refreshToken}
  } catch (e) {
    console.log("e", e);
  }
};

let verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (e) {
    return false;
  }
};
const auth = (req, res, next) => {

  try {
    let token = req.headers.authorization.substring(
        7,
        req.headers.authorization.length
      );
    let valid = verifyToken(token);
    req.token = token
    next();
    // return valid;
  } catch (error) {
    console.log("e", error);
    res.send(error);
  }
};

module.exports = { createToken, auth, refreshToken };
