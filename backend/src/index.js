import express from "express";
import cors from "cors";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
const app = express();

//body parser used to accept the request body
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/api", apiRouter);
app.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
