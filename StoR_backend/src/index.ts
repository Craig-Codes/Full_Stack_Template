import express from "express";
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const database = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
});

const connectDatabase = async () => {
  try {
    const client = await database.connect();
    console.log("Database connected successfully");
    client.release();
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

connectDatabase();

app.get("/", (req, res) => {
  console.log("Hit home route");
  res.send("Welcome to the home route!");
});

app.get("/equipment", async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM equipment;");
    console.log(result.rows);
    res.status(200).json({ equipment: result.rows });
  } catch (error) {
    console.error("Error retrieving equipment:", error);
    res
      .status(500)
      .json({ message: "Unable to retrieve equipment - try harder" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
