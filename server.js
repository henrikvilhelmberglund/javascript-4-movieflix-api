import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api/v1/movies/list", (req, res) => {
  res.status(200).json({ success: true, message: "movies list is working!" });
});

app.get("/api/v1/movies/search/:query", (req, res) => {
  res.status(200).json({
    success: true,
    message: `movies search is working! ${req.params.query}`,
  });
});

app.get("/api/v1/movie/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `movie is working! ${req.params.id}` });
});

const PORT = 3001 | process.env.PORT;

app.listen(PORT, () => console.log("Server is running"));
