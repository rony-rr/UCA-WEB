import { pool } from "../data/db/connection.js";

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email, password } = request.body

  pool.query('INSERT INTO users (name, email, passwd) VALUES ($1, $2, $3) RETURNING *', [name, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

export default {
  getUsers,
  createUser
};
