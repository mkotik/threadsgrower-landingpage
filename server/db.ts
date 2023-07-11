const { Pool } = require("pg");
require("dotenv").config();
const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PASS,
  POSTGRES_PORT,
} = process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASS,
  port: POSTGRES_PORT,
});

module.exports = pool;
