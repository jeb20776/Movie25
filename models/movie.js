// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Do we need user based fields here?
// Getting only the results for that user
// Archive Field needed and route to mark as Archive

// create a schema
var movieSchema = new Schema({
  name: {
      type: String,
      required: true
      //limit to 25 characters
  },
  movieid: {
      type: String,
      required: false
      //limit to 100 characters
  },
  moviename: {
      type: String,
      required: false
      //limit to 1000 characters
  },
  ///this part helps to define to the coach what the note/document is about - all documents must fulfill a similar path
  //need core tag?
  comment: {
      type: String,
      required: false
      //multi tags needed?
  }


//dates will be there by default
}, {
  timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Movie = mongoose.model('Movie', movieSchema);

// make this available to our Node applications
module.exports = Movie;
