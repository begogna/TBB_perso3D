var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('catalogue', { title: 'Catalogue TBB' });
});

module.exports = router;
