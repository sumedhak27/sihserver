let express = require('express');
let router = express.Router();

let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};

router.post('/', (req, res) => {
    console.log("verifying user");
    console.log(req.body);
    collectionNames.LoginCred.find(req.body)
    .toArray()
    .then(result => {
        if(result.length == 0) {
            res.send({status : 0, msg : "Username password wrong. Register first."})
        }
        else {
            res.send({status : 1, msg : "User verified ✔"});
        }
    })
    .catch(err => {
        console.log(err);
        res.send({status : -1, msg : err});
    });
})

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;