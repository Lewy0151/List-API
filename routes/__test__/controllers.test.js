//Notes are for first time understanding supertest
// This test file is for testing the movieController functions

const movieController = require("../../controllers/movieController"); // Import the controller
const request = require("supertest"); // Import supertest for testing
const express = require("express"); // Import express for creating the app
const Movie = require("../../schemas/movie"); // Import the Movie model

// Create an instance of express app
const app = express();
app.use(express.json());
app.get("/api/movies", movieController.getAllMovies);
app.post("/api/movies", movieController.createMovie);

// Mock the Movie model
jest.mock("../../schemas/movie");

// this describes the GET request to the /api/movies endpoint to get all movies
// it should return all movies that are created
// it should check the status code and the response body
// it should check if the response body is equal to the testMovies array
describe("GET /api/movies", () => {
  it("should return all movies that are created", async () => {
    const testMovies = [
      {
        title: "Transformers",
        director: "Michael Bay",
        watched: false,
      },
      {
        title: "Nightmare before Christmas",
        director: "Tim Burton",
        watched: true,
      },
    ];
    Movie.find.mockResolvedValue(testMovies);

    const response = await request(app).get("/api/movies");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(testMovies);
  });
});

// this describes the POST request to the /api/movies endpoint to create a new movie
// it should create a new movie
// it should check the status code and the response body
// it should check if the response body is equal to the newMovie object
// it should check if the response body is equal to the newMovie object
// the mockImplementation of the Movie should simulate the behavior of the Movie model
describe("POST /api/movies", () => {
  it("Should create a new movie", async () => {
    const newMovie = {
      title: "Alice in Wonderland",
      director: "Clyde Geronimi",
      watched: false,
    };
    Movie.mockImplementation(function (data) {
      return {
        ...data,
        save: jest.fn().mockResolvedValue(data),
      };
    });

    const response = await request(app).post("/api/movies").send(newMovie);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(newMovie);
  });
});
