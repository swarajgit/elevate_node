const dotenv = require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  })

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
          console.log(error.stack)
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers
  }