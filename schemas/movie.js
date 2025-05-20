const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  watched: {
    type: boolean,
    required: false,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
