const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const {GITHUB_TOKEN} = require('../config')

router.get('/', function(req, res) {
	res.render('pages/about');
});

router.get('/tut', function(req, res) {
    var tuts = [
		{ title: 'Intro to Three.js (coming soon)',
		  description: 'OpenGL for the Web! How to use WebGL via Three.js', tag:'Javascript'},
    ];
	res.render('pages/tut',{
        tuts:tuts
	});
});


router.get('/download',function(req,res){
	res.download('/Users/jordeguevara/Desktop/projects/portfolio/jorde_6.pdf');
})

module.exports = router;
