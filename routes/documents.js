let express = require('express');
let router = express.Router();

let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};

let getResult = require('../components/documents/getResult');

router.get('/getResult', (req, res) => {
    console.log("Finding Result");
    getResult.getResult(collectionNames, req, res);
})

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;