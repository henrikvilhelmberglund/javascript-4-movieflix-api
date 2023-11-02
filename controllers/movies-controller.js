import httpClient from "../utils/httpClient.js";

// stubs
export const listMovies = async (req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const response = await httpClient("discover/movie", page);
  res.status(response.statusCode).json(response);
};
export const searchMovies = async (req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const query = req.params.query;
  const response = await httpClient("search/movie", page, query);
  res.status(response.statusCode).json(response);
};
export const getMovie = async (req, res) => {
  if (req.params.id === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Bad request, id is missing" });
    return;
  }
  const id = req.params.id;
  const query = null;
  const page = 1;
  const response = await httpClient(`movie/${id}`);
  res.status(response.statusCode).json(response);
};
