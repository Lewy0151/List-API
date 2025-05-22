const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
  getMovieByTitle,
  getMovieByDirector,
} = require("../controllers/movieController");

// get all of the movies
router.get("/", getAllMovies);

// get all movies by title
router.get("/title/:title", getMovieByTitle);

// get all movies by director
router.get("/director/:director", getMovieByDirector);

// get a specific movie
router.get("/:id", getMovie);

// creating a new movie
router.post("/", createMovie);

// update a movie
router.put("/:id", updateMovie);

// delete a movie
router.delete("/:id", deleteMovie);


module.exports = router;