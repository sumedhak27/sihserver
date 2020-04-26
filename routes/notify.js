let express = require('express');
let router = express.Router();

let sendEmail = require('../components/notification/sendEmail.js');

let nodemailer  = require('nodemailer');

let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};


router.post('/sendEmail', function(req, res) {
    console.log(req.body);
    sendEmail.sendEmail(nodemailer,req,res);

});

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;