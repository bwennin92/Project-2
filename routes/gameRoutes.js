const express = require('express');
const router = express.Router();
const gamerCtrl = require('../controllers/gamercontroller');

router.get('/', gamerCtrl.gamerIndex);
router.get('/new', gamerCtrl.gamerNew);
router.get('/:id', gamerCtrl.show);
router.post('/', gamerCtrl.gamerCreate);

module.exports = router;