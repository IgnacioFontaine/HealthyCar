const { User } = require("../db");

const getUsers = async () => {
  try {
    let users = await User.findAll({});
    return users;
  } catch (error) {
    throw new Error(error);
  }
}

const getUserByName = async (name) => {
  try {
    let user = await User.findAll({
      where: {
        name: name,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const createUserDB = async (
  name,
  password
) => {
  try {
    let newUser = User.create({
      name,
      password
    });
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (id) => {

    const findUser = await User.findOne({ where: { id } });
    
    if (!findUser) throw error("Providen id not found");

    await findUser.destroy();
    return {message: "Delete success"}
};

module.exports = {
  getUsers,
  getUserByName,
  createUserDB,
  deleteAuthor
};