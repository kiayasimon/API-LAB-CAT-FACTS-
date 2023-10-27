var express = require('express');
var router = express.Router();
var catsCtrl = require('../controller/cats');

// GET cat/facts
router.get('/fact', catsCtrl.fact);

router.get('/facts', catsCtrl.facts);

module.exports = router; 

