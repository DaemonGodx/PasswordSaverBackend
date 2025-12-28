import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import config from "./utils/config.js";
import connect from "./connections/index.js";
import route from "./routes/index.js";

const app = express();



app.use(cors({
  origin: [
    config.cors_origin,
    config.cors_origin_prod
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



connect(config.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", route);

app.listen(config.port, () =>
  console.log("Server is running on port " + config.port)
);
