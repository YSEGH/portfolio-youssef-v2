import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/MailRoutes.js";
import compression from "compression";

dotenv.config();

const app = express();

app.use(compression(9));
app.use(express.json());
app.use(cors());

app.use("/api/mail", mailRouter);

const __dirname = path.resolve();

app.use("/static-files", express.static(path.join(__dirname, "/static-files")));

app.use(
  "/js",
  (req, res, next) => {
    req.url = req.url + ".gz";
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Disposition", "gzip");
    next();
  },
  express.static(path.join(__dirname, "/frontend/dist/js"))
);
app.use(
  "/css",
  (req, res, next) => {
    req.url = req.url + ".gz";
    res.setHeader("Content-Type", "text/css");
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Disposition", "gzip");
    next();
  },
  express.static(path.join(__dirname, "/frontend/dist/css"))
);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.listen(process.env.PORT || 3001, () => console.log("Server is ready !"));
