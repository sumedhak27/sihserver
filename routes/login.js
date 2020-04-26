let express = require('express');
let router = express.Router();
let newUser = require('../components/authentication/newUser');
let verify = require('../components/authentication/verify');
let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};
/* GET users listing. */
router.get('/login', function(req, res, next) {
	res.render('login');
});

router.post('/newUser',function (req,res) {
	console.log('In Login saving details to mongo db');
	console.log(req.body);
  	newUser.newUser(collectionNames,req,res);
  // res.send("1")
});

router.post('/verify',function (req,res) {
	console.log("In verify user");
	verify.verify(collectionNames,req,res);
});

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;
