const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedSteams` array in User.js
const streamSchema = new Schema({
  image: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  // saved book id from Imdb 
    streamId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = bookSchema;