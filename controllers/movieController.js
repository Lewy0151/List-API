const Movie = require("../schemas/movie");

exports.getAllMovies = async (request, response) => {
  try {
    const movies = await Movie.find();
    response.send(movies);
  } catch (error) {
    response.status(500).send({ message: "Failed to retrieve movies" });
  }
};

exports.createMovie = async (request, response) => {
  try {
    const movie = new Movie(request.body);
    await movie.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send({ message: "Error creating movie" });
  }
};

exports.getMovie = async (request, response) => {
  try {
    const movie = await Movie.findById(request.params.id);
    if (!movie) {
      return response.status(404).send({ message: "Movie not found" });
    }
    response.send(movie);
  } catch (error) {
    response.status(500).send({ message: "Error fetching movie" });
  }
};

exports.updateMovie = async (request, response) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    res.send(movie);
  } catch (error) {
    response.status(500).send({ message: "Error updating movie" });
  }
};

exports.deleteMovie = async (request, response) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return response.status(404).send({ message: "Movie not found" });
    }
    response.send({ message: "Movie Deleted" });
  } catch (error) {
    response.status(500).send({ message: "Error deleting movie" });
  }
};

exports.deleteAllMovie = async (request, response) => {
  try {
    const result = await Movie.deleteMany({});
    response.send({ message: `${result.deletedCount} movie(s) deleted.` });
  } catch (error) {
    response.status(500).send({ message: "Error deleting movies" });
  }
};

// Finding movie by title
exports.getMovieByTitle = async (request, response) => {
  try {
    const movie = await Movie.findOne({ title: req.params.title });
    if (!movie) {
      return response.status(404).send({ message: "Movie not found" });
    }
  } catch (error) {
    response.status(500).send({ message: "Error retrieving movie" });
  }
};

// Finding all movies by director
exports.getMovieByDirector = async (request, response) => {
  try {
    const movies = await Movie.find({
      director: req.params.director,
    });
    response.send(movies);
  } catch (error) {
    response.status(500).send({ message: "Error retrieving movie" });
  }
};
