const express = require('express')

const router = express.Router()

let commentsCtrl = require('../controllers/commentsController')

router.post('/games/:id/reviews', commentsCtrl.create)

router.delete('/games/:gameId/reviews/:reviewId', commentsCtrl.deleteReview)

router.put('/games/:gameId/reviews/:reviewId', commentsCtrl.update)



module.exports = router