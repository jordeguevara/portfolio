const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const {GITHUB_TOKEN} = require('../config')

router.get('/', function(req, res) {
	res.render('pages/about');
});

module.exports = router;
