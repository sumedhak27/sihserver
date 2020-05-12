let express = require('express');
let router = express.Router();

let fs = require('fs');
let path = require('path')

let storeForm = require('../components/form/storeForm.js');
let fetchForm = require('../components/form/fetchForm.js');
let setPassword = require('../components/form/setPassword');
let updateForm = require('../components/form/updateForm');

let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};
/* GET users listing. */
router.get('/form', function(req, res, next) {
	res.send('form api');
});

router.post('/storeForm',function (req,res) {
	console.log('Storing form to mongo db');
	console.log(req.body);
	storeForm.storeForm(collectionNames,req,res);
});

router.post('/fetchForm',function(req,res) {
	console.log("fetching form router");
	fetchForm.fetchForm(collectionNames,req,res);
});

router.post('/setPassword',(req, res) => {
	console.log("Setting password for the new Applicant.");
	setPassword.setPassword(collectionNames, req, res);
})

router.post('/updateForm', (req, res) => {
	console.log("Updating the form entry.");
	updateForm.updateForm(collectionNames, req, res);
})

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;
