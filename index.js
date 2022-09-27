import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { dbConn } from "./config/db.config.js";

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5000'
}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  dbConn;
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));