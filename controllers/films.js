var express = require("express");
var filmRouter = new express.Router();

var Films = require("../client/src/models/films.js");
var Film = require("../client/src/models/film.js");

var films = new Films();

filmRouter.get("/", function(req, res){
  res.json(films);
})

filmRouter.get("/:id", function(req, res){
  var index = req.params.id;
  res.json({data: films[index]});
})

filmRouter.post("/", function(req, res){
  var options = {title: req.body.title, actors: req.body.actors, genre: req.body.genre};
  var film = new Film(options);
  films.push(film);
  res.json({data: films});
})

filmRouter.put("/:id", function(req, res){
  var options = {title: req.body.title, actors: req.body.actors, genre: req.body.genre};
  films[req.params.id] = new Film(options);
  res.json(films);
})

filmRouter.delete("/:id", function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmRouter;