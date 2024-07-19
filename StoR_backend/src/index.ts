import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const { Client } = pg;
const database = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
});

const connectDatabase = async () => {
  await database.connect();
  console.log("connected?");
};

connectDatabase();

app.get("/", async (req, res) => {
  console.log("Hit home route");
});

app.get("/equipment", async (req, res) => {
  try {
    const equiment = await database.query("SELECT * FROM equipment;");
    console.log(equiment.rows);
    res.status(200).json({ equpment: equiment.rows });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to retrieve equipment - try harder" });
  }
});
