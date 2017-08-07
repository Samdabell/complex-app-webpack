var Film = require("./film.js");
var Review = require("./review.js");

var Films = function(){
  this.films = [];
  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });

  var review3 = new Review({
    author: "Kieran",
    rating: 1337,
    comment: "Uhhh... Produced by aliens"
  })

  var film1 = new Film({
    title: "Now You See Me",
    genre: "Heist Thriller",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    genre: "Space Opera",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  var film3 = new Film({
    title: "The Room",
    genre: "Romantic Drama",
    actors: ["Tommy Wiseau", "Greg Sestero"]
  })

  film1.addReview(review1);
  film2.addReview(review2);
  film3.addReview(review3);
  addFilm(this.films, film1);
  addFilm(this.films, film2);
  addFilm(this.films, film3);

  return this.films;
}

var addFilm = function(array, film){
  array.push(film);
}

module.exports = Films;