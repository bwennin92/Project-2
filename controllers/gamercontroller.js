const Gamer = require("../models/userAcct");

module.exports = {
  gamerIndex,
  show,
  gamerNew,
  gamerCreate,
  deleteGame,
};

let gamerIndex = (req, res) => {
  Gamer.find({}, (err, games) => {
    res.render("/views/index.ejs", { title: "Gamer Back Log", games });
  });
};

let show = (req, res) => {
  Gamer.findById(req.params.id, (err, games) => {
    res.render("views/show", { title: "Game Detail", games });
  });
};

let gamerNew = (req, res) => {
  res.render("views/new", { title: "Add games" });
};

let gamerCreate = (req, res) => {
  Gamer.findById(req.params.id, (err, games) => {
    games.reviews.push(req.body);
    games.save((err) => {
      res.redirect(`/gamersbackalley/${games._id}`);
    });
  });
};
let deleteGame = (req, res) => {
  Gamer.findById(req.params.gamerId, (err, gamer) => {
    gamer.reviews.id(req.params.reviewId).remove();
    gamer.reviews.id(req.params.reviewId).content = req.body.content;
    gamer.reviews.id(req.params.reviewId).rating = req.body.rating;
    gamer.save(function (err) {
      if (err) console.log(err);
    });
  });
  res.redirect(`/Gamers/${req.params.gamerId}`);
};
