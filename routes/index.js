var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('pages/index');
// });

/* GET home page. */
router.get('/', function(req, res) {
	res.render('pages/about');
});

router.get('/about', function(req, res) {
  res.render('pages/index');
});

router.get('/blog', function(req, res) {
  res.render('pages/blog');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.get('/post', function(req, res) {
  res.render('pages/post');
});

module.exports = router;
