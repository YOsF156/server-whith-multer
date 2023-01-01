const userController = require("../DL/controller/userController");
const bcrypt = require("bcrypt");
let saltRounds = 10;
const register = async (userDetails) => {
  let userPass = userDetails.password;
  let hashedPass = await bcrypt.hash(userPass, saltRounds);
  console.log("hashed", hashedPass);
  userDetails.password = hashedPass;
  let newUser = await userController.create(userDetails);
  return newUser;
};
const login = async (loginDetails) => {
  let { email, password } = loginDetails;
  let userExist = await userController.readOne({ email });
  if (!userExist) return { message: "User not exist" };
  let passValid = await bcrypt.compare(password, userExist.password);
  if (!passValid) return { message: "Password is incorrect" };
  return userExist;
};
module.exports = { register, login };
