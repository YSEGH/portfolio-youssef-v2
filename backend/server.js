import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/MailRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/mail", mailRouter);

const __dirname = path.resolve();

app.use("/static-files", express.static(path.join(__dirname, "/static-files")));

app.listen(process.env.PORT || 3001, () => console.log("Server is ready !"));
