import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/movies-routes.js";

dotenv.config();

const app = express();

// Setting middleware
app.use(cors());
app.use("/api/v1/movies", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
