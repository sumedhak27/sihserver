let express = require('express');
let router = express.Router();

let registrationlink = 1;
let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};

let generateResults = require('../components/admin/generateResults');

router.get('/toffreg', (req, res) => {
    console.log("turning off the registration link.");
    this.registrationlink = 0;
    console.log(this.registrationlink)
})
router.get('/tonreg', (req, res) => {
    console.log("turning off the registration link.");
    this.registrationlink = 1;
    console.log(this.registrationlink)
})

router.get('/getActivityNum', (req, res) => {
    if(this.registrationlink == 0) {
        res.send({activityNum : 2})
    }
    else res.send({activityNum : 1})
})

router.get('/generateResults', (req, res) => {
    console.log("Generating results.📑");
    generateResults.generateResult(collectionNames, req, res);
})

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;