const Gamer = require('../models/userAcct')

module.exports = {
    gamerIndex,
    show,
    gamerNew,
    gamerCreate
}


let gamerIndex = (req,res) =>{
    Gamer.find({}, (err,games) =>{
        res.render('/views/index.ejs', {title: 'Gamer Back Log', games})

    });
}

let show = (req,res) =>{
    Gamer.findById(req.params.id, (err, games) => {
        res.render('views/show', { title: 'Game Detail', games });
      });

}

let gamerNew = (req,res) =>{
    res.render('views/new', { title: 'Add games' });
}

let gamerCreate = (req,res) =>{

}