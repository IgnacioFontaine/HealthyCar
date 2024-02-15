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

const updatePassword = async (
  id,
  newPassword) => {
  try {
    let user_modif = await User.findOne({ where: { id } })

    if (!user_modif) {
    throw new Error('The id was not found or it is incorrect');
    }

    if (user_modif) {
      user_modif = await User.update(
            { password:  newPassword },
            { where: { id } }
        );
    }

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
  updatePassword,
  deleteUser
};