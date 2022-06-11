const Game = require('../models/userGames')


let create = (req,res) =>{
    Game.findById(req.params.id, (err,game) =>{
        game.reviews.push(req.body);
        game.save ((err) =>{
            res.redirect(`/games/${game._id}`)
        })
        
    })
}


let deleteReview = (req,res) =>{
    Game.findById(req.params.gameId, (err,game) =>{
        
        game.reviews.id(req.params.reviewId).remove()
        game.reviews.id(req.params.reviewId).content = req.body.content
        game.reviews.id(req.params.reviewId).rating = req.body.rating
        game.save(function(err){
            if (err) console.log(err)
                })
    })
            res.redirect(`/games/${req.params.gameId}`)
}

let update = (req,res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, (err,game) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.redirect(`/games/${game._id}`)
    })
}



module.exports ={
    create,
    deleteReview,
    update



}
