/************
 * DATABASE *
 ************/

var db = require("../models");


// GET /api/albums
function index(req, res) {
  db.Album.find({}, function getAll(err, albums){
    if(err){return console.log(err)}
    res.json({albums: albums});
  })
}

//POST /api/albums
function create(req, res) {
console.log(req.body);
db.Album.create(req.body, function(err, album) {
  if (err) {console.log('error this is going wrong', err);}
  //console.log(album);
  //res.json(ablum);
})

}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
