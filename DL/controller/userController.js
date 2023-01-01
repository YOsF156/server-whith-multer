const UserModel = require("../model/UserModel");

const create = async (userDetails) => {
  return await UserModel.create(userDetails);
};
const read = async (filter) => {
  return await UserModel.read(filter);
};
const readOne = async (filter) => {
  return await UserModel.findOne(filter);
};
module.exports = { create, read, readOne };
