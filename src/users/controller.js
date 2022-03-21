const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addUsers = (req, res) => {
  const { name, email, phone, alamat } = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (result.rows.length) {
      res.send("Email already exists");
    }

    // add student to db
    pool.query(
      queries.addUser,
      [name, email, phone, alamat],
      (error, result) => {
        if (error) throw error;
        res.status(201).send(`Users added`);
      }
    );
  });
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.removeUser, [id], (error, result) => {
    const noStudentFound = result.rowCount === 0;
    res.send(noStudentFound ? "No user found" : "User removed");
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, phone, alamat } = req.body;

  pool.query(
    queries.updateUser,
    [name, email, phone, alamat, id],
    (error, result) => {
      if (error) throw error;
      res.send(`User updated`);
    }
  );
};

module.exports = {
  getUsers,
  getUsersById,
  addUsers,
  removeUser,
  updateUser,
};
