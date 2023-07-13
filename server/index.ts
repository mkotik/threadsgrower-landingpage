import express, { Request, Response } from "express";
const pool = require("./db");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT;
server.use(express.json());
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.get("/", async (req: Request, res: Response) => {
  try {
    const allSignups = await pool.query("SELECT * FROM earlyAccessSignups");
    res.json(allSignups.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

server.post("/", async (req: Request, res: Response) => {
  try {
    const { handle } = req.body;
    const newSignup = await pool.query(
      "INSERT INTO earlyAccessSignups ( handle) VALUES ($1, $2) RETURNING *",
      [handle]
    );
    res.status(201).json(newSignup.rows[0]);
  } catch (error: any) {
    console.error(error);
    console.log(Object.keys(error));
    res.status(500).send("Error adding new record");
  }
});

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
