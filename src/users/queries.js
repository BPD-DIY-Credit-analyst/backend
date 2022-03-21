const getUsers = "SELECT * FROM users";

const getUsersById = "SELECT * FROM users WHERE id = $1";

const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";

const addUser =
  "INSERT INTO users (name, email, phone, alamat) VALUES ($1, $2, $3, $4)";

const removeUser = "DELETE FROM users WHERE id = $1";

const updateUser =
  "UPDATE users SET name = $1, email = $2, phone = $3, alamat = $4 WHERE id = $5";

module.exports = {
  getUsers,
  getUsersById,
  checkEmailExists,
  addUser,
  removeUser,
  updateUser,
};
