var express = require('express');
var router = express.Router();

var url = require( "url" );
var queryString = require( "querystring" );
var request = require( "request" );

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* POST JSON. */
router.post('/ReceiveJSON', function(req, res){


         console.log(req.body);
        //console.log(req);
        res.render('index', { title: 'Express' });
});




module.exports = router;
