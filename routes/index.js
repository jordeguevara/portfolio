const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const {GITHUB_TOKEN} = require('../config')

router.get('/', function(req, res) {
	res.render('pages/about');
});

router.get('/download',function(req,res){
	res.download('/Users/jordeguevara/Desktop/projects/portfolio/jorde_6.pdf');
})

module.exports = router;
