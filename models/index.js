var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.export.Album = require("./album.js");
