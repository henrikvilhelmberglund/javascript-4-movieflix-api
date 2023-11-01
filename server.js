import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Setting middleware
app.use(cors());

app.get("/api/v1/movies/list", async (req, res) => {
  const page = req.query.page;
  const url = `${process.env.BASE_URL}discover/movie?page=1&language=sv-SE&sort_by=popularity.desc&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };
  const response = await fetch(url, options);
  if (response.status === 200) {
    const result = await response.json();
    res.status(200).json({
      success: true,
      message: "movies list is working!",
      result: result,
    });
  } else if (response.status === 404) {
    res
      .status(404)
      .json({ success: false, message: "Could not find any movies" });
  }
});

app.get("/api/v1/movies/search/:query", async (req, res) => {
  const page = req.query.page;
  const url = `${process.env.BASE_URL}search/movie?query=${req.params.query}&language=sv-SE&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };
  const response = await fetch(url, options);
  if (response.status === 200) {
    const result = await response.json();
    res.status(200).json({
      success: true,
      message: "movies search is working!",
      result: result,
    });
  } else if (response.status === 404) {
    res
      .status(404)
      .json({ success: false, message: "Could not find any movies" });
  }
});

app.get("/api/v1/movie/:id", async (req, res) => {
  const url = `${process.env.BASE_URL}movie/${req.params.id}&language=sv-SE&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };
  const response = await fetch(url, options);
  if (response.status === 200) {
    const result = await response.json();
    res.status(200).json({
      success: true,
      message: "movie id is working!",
      result: result,
    });
  } else if (response.status === 404) {
    res
      .status(404)
      .json({ success: false, message: "Could not find the specified movie" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
