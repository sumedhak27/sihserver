let express = require('express');
let router = express.Router();

let fs = require('fs');
let path = require('path')

let storeForm = require('../components/form/storeForm.js');
let getApplicationID = require('../components/form/getNewApplID.js')
let fetchForm = require('../components/form/fetchForm.js');
let genAdmitCard = require('../components/form/genAdmitCard.js');
let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};
/* GET users listing. */
router.get('/form', function(req, res, next) {
	res.send('form api');
});

router.get('/getNewID',function (req, res, next) {
	getApplicationID.getNewID(collectionNames,req,res);
});

router.post('/storeForm',function (req,res) {
	console.log('Storing form to mongo db');
	console.log(req.body);
	storeForm.storeForm(collectionNames,req,res);
  // res.send("1")
});

router.post('/fetchForm',function(req,res) {
	console.log("fetching form router");
	fetchForm.fetchForm(collectionNames,req,res);
});

router.post('/gencard',function(req,res) {
	console.log("gen card router");
	let aid = req.body.applicationID;
	genAdmitCard.genAdmitCard(collectionNames,fs,aid,res);
});

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;
