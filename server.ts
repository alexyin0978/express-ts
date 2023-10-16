import express from "express";
import dotEnv from "dotenv";
dotEnv.config();

const app = express();
const port = process.env.PORT || 5003;

console.log(process.env.PORT);

app.get("/", (rep, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app is listening to port: ${port}`);
});
