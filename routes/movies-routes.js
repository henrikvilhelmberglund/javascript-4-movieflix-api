import express from "express";
import {
  listMovies,
  searchMovies,
  getMovie,
} from "../controllers/movies-controller.js";

export const router = express.Router();

router.route("/list").get(listMovies);
router.route("/search/:query").get(searchMovies);
router.route("/:id").get(getMovie);
