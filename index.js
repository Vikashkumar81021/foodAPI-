import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is listent at ${PORT}`);
});
